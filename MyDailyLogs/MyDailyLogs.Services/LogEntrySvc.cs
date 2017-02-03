using System;
using System.Collections.Generic;
using MyDailyLogs.Services.Interfaces;
using MyDailyLogs.ViewModels;

namespace MyDailyLogs.Services
{
    public class LogEntrySvc : ILogEntrySvc
    {
        public List<LogEntryViewModel> GetLogEntries(Tuple<DateTime> dateRange)
        {
            throw new NotImplementedException();
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
    }
}
