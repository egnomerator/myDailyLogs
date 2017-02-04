using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
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

        public void SaveLogEntry(long timeStamp, string logEntryText)
        {
            var utcNow = timeStamp.FromMillisecondsSinceEpochToCurrentDateTimeUtc();
            var localNow = utcNow.ToLocalTime();
            _logEntryPersistence.SaveLogEntry(timeStamp,$"{timeStamp}{logEntryText}");
        }

        public List<LogEntryViewModel> GetLogEntries(Tuple<long,long> dateRange)
        {
            var result = _logEntryPersistence.GetLogEntries(dateRange);
            return ConverLogEntryQueryByteArrayResultToLogEntryVms(result);
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

        private static List<LogEntryViewModel> ConverLogEntryQueryByteArrayResultToLogEntryVms(byte[][] logEntries)
        {
            var logEntryVms = new List<LogEntryViewModel>();
            if (!logEntries.Any()) return logEntryVms;
            if(logEntries.Length < 2) throw new Exception("Exactly 1 result; should be 2 or more (or zero, if empty db).");

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
                if (currentEntryTimeStamp.Day > prevEntryTimeStamp.Day) entryNumber = 1;

                // Log entry text is stored in Redis with the timestamp prepended to it; so here getting only the text after the timestamp
                // -it it stored in Redis this way to satisfy the Redis Type Sorted Set requirement that any item in the set be distinct
                var entryText = Encoding.UTF8.GetString(logEntries[i]).Substring(13);

                vm.EntryDateTime = currentEntryTimeStamp.FormatForDisplay();
                vm.EntryNumber = entryNumber;
                vm.EntryText = entryText;

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
