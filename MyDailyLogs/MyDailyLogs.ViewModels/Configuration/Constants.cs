namespace MyDailyLogs.ViewModels.Configuration
{
    public class Constants
    {
        public const string WebAppDisplayName = "My Daily Logs";

        public const string DbInfoAreaTitle = "In-memory database running as a background service. Saves a snapshot to disk every 15 min.";
        public const string DbUpdateBtnTitle = "Get the current status of the background service (the status auto-updates every 30 min).";
        public const string DbSaveBtnTitle = "Save any in-memory data not yet written to disk, and stop the background service. (recommended prior to closing this web page)";

        public const string LogEntryListContainerId = "LogEntryListContainerId";
        public const int MaxNumbDivDigitWidth = 2;
        public const string LeDayDateClass = "leDayDateClass";
        public const string LogEntryClass = "logEntryClass";
        public const string LePartClass = "lePartClass";
        public const string LeNumbClass = "leNumbClass";
        public const string LeDateClass = "leDateClass";
        public const string LeTextClass = "leTextClass";

        public const string FocusLineClass = "focusLineClass";

        public const string NewLogEntryClass = "newLogEntryClass";
        public const string NewLogEntryTsEllipsis = "__:__:__ __";
        public const string NewLogEntryTextInputId = "newLogEntryTextInputId";
        public const string NewLogEntryTextInputName = "newLogEntryTextInputName";
        public const string NewLogEntryTextInputPlaceholder = "Type a new log entry and hit enter to save it.";
    }
}
