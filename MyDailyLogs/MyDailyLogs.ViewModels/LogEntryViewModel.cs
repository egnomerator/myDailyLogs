using System;

namespace MyDailyLogs.ViewModels
{
    public class LogEntryViewModel
    {
        public string DateTime { get; set; }
        public ushort EntryNumber { get; set; }
        public string Text { get; set; }
        public long EpochMs { get; set; }
    }
}
