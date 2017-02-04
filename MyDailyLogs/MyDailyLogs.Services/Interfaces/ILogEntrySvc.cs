using System;
using System.Collections.Generic;
using MyDailyLogs.ViewModels;

namespace MyDailyLogs.Services.Interfaces
{
    public interface ILogEntrySvc
    {
        void SaveLogEntry(long timeStamp, string logEntryText);


        List<LogEntryViewModel> GetLogEntries(Tuple<long,long> dateRange);
        List<LogEntryViewModel> GetPrevLogEntriesFiftyMax(DateTime firstSeenEntry);
        List<LogEntryViewModel> GetNextLogEntriesFiftyMax(DateTime lastSeenEntry);
        List<LogEntrySearchMatchViewModel> GetLogEntrySearchMatches(List<string> searchTerms, bool matchMeansContainsAllTerms);
    }
}
