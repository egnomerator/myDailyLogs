using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

            var prevEntryTimeStamp = ((long)logEntries[1][0]).FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();
            ushort entryNumber = 0;

            for (var i = 0; i < logEntries.Length; i++)
            {
                entryNumber++;
                var vm = new LogEntryViewModel();

                // If this log entry is the first of a new day in the sequence, we reset the entry number
                var entryDate = ((long)logEntries[0][i]).FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();
                if (entryDate.Day > prevEntryTimeStamp.Day) entryNumber = 1;

                // Log entry text is stored in Redis with the timestamp prepended to it; so here getting only the text after the timestamp
                // -it it stored in Redis this way to satisfy the Redis Type Sorted Set requirement that any item in the set be distinct
                var entryText = Encoding.UTF8.GetString(logEntries[i]).Substring(13);

                vm.EntryDateTime = $"{entryDate:G}";
                vm.EntryNumber = entryNumber;
                vm.EntryText = entryText;

                logEntryVms.Add(vm);
            }

            //return logEntries.Select(l =>
            //{
            //    entryNumber++;
            //    var vm = new LogEntryViewModel();

            //    // If this log entry is the first of a new day in the sequence, we reset the entry number
            //    var entryDate = l.Item1.FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();
            //    if (entryDate.Day > prevEntryTimeStamp.Day) entryNumber = 1;

            //    // Log entry text is stored in Redis with the timestamp prepended to it; so here getting only the text after the timestamp
            //    // -it it stored in Redis this way to satisfy the Redis Type Sorted Set requirement that any item in the set be distinct
            //    var entryText = l.Item2.Substring(13);

            //    vm.EntryDateTime = $"{entryDate:G}";
            //    vm.EntryNumber = entryNumber;
            //    vm.EntryText = entryText;

            //    return vm;

            //}).ToList();

            return logEntryVms;
        }
    }
}
