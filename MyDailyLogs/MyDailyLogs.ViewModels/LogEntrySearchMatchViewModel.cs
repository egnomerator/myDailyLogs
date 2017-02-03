using System.Collections.Generic;

namespace MyDailyLogs.ViewModels
{
    public class LogEntrySearchMatchViewModel
    {
        public LogEntryViewModel LogEntry { get; set; }
        public List<string> SearchTerms { get; set; }
    }
}
