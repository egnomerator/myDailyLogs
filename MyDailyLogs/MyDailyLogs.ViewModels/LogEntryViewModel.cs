using System;

namespace MyDailyLogs.ViewModels
{
    public class LogEntryViewModel
    {
        public string EntryDateTime { get; set; }
        public ushort EntryNumber { get; set; }
        public string EntryText { get; set; }
        public long EntryScore { get; set; }
    }
}
