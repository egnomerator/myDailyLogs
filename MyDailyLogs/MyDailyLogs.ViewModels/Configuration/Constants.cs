namespace MyDailyLogs.ViewModels.Configuration
{
    public class Constants
    {
        public const string WebAppDisplayName = "My Daily Logs";

        // Attempted to select a char set that a user would be extremely unlikely to includ in 
        // any log entry data either on purpose or accidental.
        //      -Chosen based on:
        //          -a combination of the characters' keyboard location and sequence
        //          -some less commonly used characters
        //
        //
        // **THIS MUST MATCH the corresponding string in the Core project's constants class**
        public const string LogEntryStrArraySeparator = @"~)z@[\b`\/_6`";

        public const string DbInfoBarId = "dbInfoBarId01";
        public const string DbInfoBarClass = "dbInfoBarClass";
        public const string DbInfoBarLblId = "dbInfoBarLblId01";
        public const string DbInfoBarLblClass = "dbInfoBarLblClass";
        public const string DbInfoBarSpecialMsgAreaId = "dbInfoBarSpecialMsgAreaId01";
        public const string DbInfoBarSpecialMsgAreaClass = "dbInfoBarSpecialMsgAreaClass";
        public const string DbStatusAreaId = "dbStatusAreaId01";
        public const string DbStatusAreaClass = "dbStatusAreaClass";
        public const string DbStatusAreaLblId = "dbStatusAreaLblId01";
        public const string DbStatusAreaLblClass = "dbStatusAreaLblClass";
        public const string DbStatusValueId = "dbStatusValueId01";
        public const string DbStatusValueClass = "dbStatusValueClass";
        public const string DbStatusValueInrHtml = "Status:";
        public const string DbLastCheckValueId = "dbLastCheckValueId01";
        public const string DbLastCheckValueClass = "dbLastCheckValueClass";

        public const string DbBarBtnClass = "dbBarBtnClass";
        public const string DbUpdateBtnId = "dbUpdateBtnId01";
        public const string DbUpdateBtnClass = "dbUpdateBtnClass";
        public const string DbUpdateBtnValue = "Check";

        public const string DbStartBtnId = "dbStartBtnId01";
        public const string DbStartBtnClass = "dbStartBtnClass";
        public const string DbStartBtnValue = "Start";

        public const string DbSyncBtnId = "dbSyncBtnId01";
        public const string DbSyncBtnClass = "dbSyncBtnClass";
        public const string DbSyncBtnValue = "Sync";

        public const string DbSaveBtnClass = "dbSaveBtnClass";
        public const string DbSaveBtnValue = "Save";
        public const string DbSaveAndQuitAreaId = "dbSaveAndQuitAreaId01";
        public const string DbSaveAndQuitAreaClass = "dbSaveAndQuitAreaClass";
        public const string DbSaveAndQuitLblId = "dbSaveAndQuitLblId01";
        public const string DbSaveAndQuitLblClass = "dbSaveAndQuitLblClass";
        public const string DbSaveBtnId = "dbSaveBtnId01";
        public const string DbBarDimClass = "dbBarDimClass";

        public const string DbBarMsgId = "DbBarMsgId01";
        public const string DbBarMsgClass = "dbBarMsgClass";
        public const string DbBarMsgTextId = "dbBarMsgTextId01";
        public const string DbBarMsgTextClass = "dbBarMsgTextClass";
        public const string DbBarMsgSaveQuitSuccess = "Save Complete! Close browser to quit.";
        public const string DbBarMsgServiceStarted = "Service started. Click Sync to save red log entries.";
        public const string DbBarMsgSyncSuccess = "Sync Complete!";
        public const string DbBarMsgSaveQuitFail = "Save Failed. Check if the service is running.";
        public const string DbBarMsgSyncFail = "Sync Failed. Check if the service is running.";
        public const string DbBarMsgAutoSaveFailed = "Log entry auto-save is failing. Check if the service is running.";
        public const string DbBarMsgServiceStartFailed = "ruh roh";
        public const string DbBarMsgXId = "dbBarMsgXId01";
        public const string DbBarMsgXclass = "dbBarMsgXclass";
        public const string HideClass = "hideClass";
        public const string NoDisplayClass = "noDisplayClass";
        public const string LeUnsavedClass = "leUnsavedClass";

        public const string DbStatusTextUpdating = "updating . . .";
        public const string DbStatusTextRunning = "Running";
        public const string DbStatusTextStopped = "Stopped";
        public const int DbStatusUpdateInterval = 1800000;  // (30 min)

        public const string DbInfoBarTitle = "A background service saves log entries automatically.";
        public const string DbStatusAreaTitle = "The current status of the background service (auto-updates every 30 min)";
        public const string DbUpdateBtnTitle = "Get a status update now.";
        public const string DbStartBtnTitle = "Start background service now.";
        public const string DbSyncBtnTitle = "Save all red log entries now.";
        public const string DbSaveBtnTitle = "Save any recent changes, and stop the background service. (recommended prior to closing this web page)";


        public const string LogEntryListContainerId = "LogEntryListContainerId01";
        public const string LogEntryListContainerClass = "logEntryListContainerClass";
        // arbitrary choice based on my expectation of never entring logs in the tripple+ digits in a single day
        //  -if i were to design this for other users i'd probably implement this differently
        public const int MaxNumbDivDigitWidth = 2;
        public const string LeDayDateClass = "leDayDateClass";
        public const string LogEntryClass = "logEntryClass";
        public const string LePartClass = "lePartClass";
        public const string LeNumbClass = "leNumbClass";
        public const string LeDateClass = "leDateClass";
        public const string LeTextClass = "leTextClass";
        public const string HiddenScoreClass = "hiddenScoreClass";

        public const string FocusLineClass = "focusLineClass";

        public const string NewLogEntryClass = "newLogEntryClass";
        public const string NewLogEntryId = "newLogEntryId01";
        public const string NewLogEntryTsEllipsis = "__:__:__ __";
        public const string NewLogEntryTextInputId = "newLogEntryTextInputId01";
        public const string NewLogEntryTextInputName = "newLogEntryTextInputName";
        public const string NewLogEntryTextInputPlaceholder = "Type a new log entry and hit enter to save it.";
    }
}
