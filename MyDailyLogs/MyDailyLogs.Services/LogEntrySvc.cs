using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.ServiceProcess;
using MyDailyLogs.Core.Configuration;
using MyDailyLogs.Core.Interfaces;
using MyDailyLogs.Core.Utilities;
using MyDailyLogs.DataAccess;
using MyDailyLogs.Services.Interfaces;
using MyDailyLogs.ViewModels;

namespace MyDailyLogs.Services
{
    public class LogEntrySvc : ILogEntrySvc
    {
        private readonly ILogEntryPersistence _logEntryPersistence;

        public LogEntrySvc()
        {
            _logEntryPersistence = new StorageDude();
        }

        public void StartPersistenceBackgroundSvcIfNotRunning()
        {
            var svcPersistence = new ServiceController(Constants.PersistenceServiceName);
            var isRunning = CheckIfPersistenceBackgroundSvcIsRunning(svcPersistence);
            if(!isRunning) svcPersistence.Start();
        }

        public bool CheckIfPersistenceBackgroundSvcIsRunning(ServiceController svc = null)
        {
            svc = svc ?? new ServiceController(Constants.PersistenceServiceName);
            return svc.Status == ServiceControllerStatus.Running;
        }

        /// <paramref name="timeStamp"/> UI will send this value as milliseconds since epoch
        public void SaveLogEntry(string timeStamp, string logEntryText)
        {
            // Front-end validation ensures the timeStamp string is ready to parse
            var ts = long.Parse(timeStamp);
            _logEntryPersistence.SaveLogEntry(ts,$"{timeStamp}{logEntryText}");
        }

        public List<LogEntryViewModel> GetLogEntries(Tuple<DateTime,DateTime> dateRange)
        {
            var dateRangeLongs = new Tuple<long, long>
                (dateRange.Item1.ToUniversalTime().ToMillisecondsSinceEpoch(),
                 dateRange.Item2.ToUniversalTime().ToMillisecondsSinceEpoch());
            var results = _logEntryPersistence.GetLogEntries(dateRangeLongs);

            if (results.Length > Constants.MaxLogEntriesServed) results = TrimResultsToMax(results);

            return ConvertLogEntryQueryByteArrayResultToLogEntryVms(results);
        }

        public List<LogEntryViewModel> GetPrevLogEntriesFiftyMax(DateTime firstSeenEntry)
        {
            throw new NotImplementedException();
        }

        public List<LogEntryViewModel> GetNextLogEntriesFiftyMax(DateTime lastSeenEntry)
        {
            throw new NotImplementedException();
        }

        public List<LogEntrySearchMatchViewModel> GetLogEntrySearchMatches(List<string> searchTerms, bool matchMeansContainsAllTerms)
        {
            throw new NotImplementedException();
        }

        private static byte[][] TrimResultsToMax(byte[][] logEntries)
        {
            var max = Constants.MaxLogEntriesServed%2 == 0 ? Constants.MaxLogEntriesServed : Constants.MaxLogEntriesServed + 1;
            // 2 array members per logEntry: 1) timestamp 2) text; So if we have a max of n logEntries, we need n*2 array members
            max = max*2;

            if (logEntries.Length <= max) return logEntries;

            var overage = logEntries.Length - max;
            var trimmedResults = new byte[max][];
            Array.Copy(logEntries, overage, trimmedResults, 0, max);

            return trimmedResults;
        }

        private static List<LogEntryViewModel> ConvertLogEntryQueryByteArrayResultToLogEntryVms(byte[][] logEntries)
        {
            if (!logEntries.Any()) return new List<LogEntryViewModel>();
            if(logEntries.Length < 2) throw new Exception("Exactly 1 result; should be 2 or some larger multiple of 2 (or zero).");

            var logEntryVms = new List<LogEntryViewModel>();

            var ts = GetTimeStampFromByteArray(logEntries[1]);
            var prevEntryTimeStamp = ts.FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();
            ushort entryNumber = 0;

            for (var i = 0; i < logEntries.Length; i+= 2)
            {
                entryNumber++;
                var vm = new LogEntryViewModel();

                var currentTs = GetTimeStampFromByteArray(logEntries[i + 1]);
                var currentEntryTimeStamp = currentTs.FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();

                // If this log entry is the first of a new day in the sequence, we reset the entry number
                if (currentEntryTimeStamp.Day > prevEntryTimeStamp.Day) {
                    entryNumber = 1;
                    prevEntryTimeStamp = currentEntryTimeStamp;
                }

                // Log entry text is stored in Redis with the timestamp prepended to it; so here getting only the text after the timestamp
                // -it it stored in Redis this way to satisfy the Redis Type Sorted Set requirement that any item in the set be distinct
                var entryText = Encoding.UTF8.GetString(logEntries[i]).Substring(13);

                vm.EntryDateTime = currentEntryTimeStamp.FormatForDisplay();
                vm.EntryNumber = entryNumber;
                vm.EntryText = entryText;
                vm.EntryScore = currentTs;

                logEntryVms.Add(vm);
            }

            return logEntryVms;
        }

        private static long GetTimeStampFromByteArray(byte[] bArr)
        {
            long ts;
            var canParseTs = long.TryParse(Encoding.UTF8.GetString(bArr), NumberStyles.Any, CultureInfo.InvariantCulture, out ts);
            // I want this error to happen if this is an issue.
            if (!canParseTs) ts = long.Parse(Encoding.UTF8.GetString(bArr));

            return ts;
        }
    }
}
