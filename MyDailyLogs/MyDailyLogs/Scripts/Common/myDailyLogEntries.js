function UpdateUIAndSaveNewLogEntry() {
    UpdateUIwithEntryInfo();
    SaveNewLogEntry();
}

function UpdateUIwithEntryInfo() {
    var nowUtcMs = Date.now();
    var nleInputTxtEl = $('#newLogEntryTextInputId01');
    var containingLeEl = GetContainingLogEntryElement(nleInputTxtEl);

    UpdateLogEntryTextElement(containingLeEl);

    var timeElToUpdate = GetTimeElementToUpdate(containingLeEl);
    UpdateLogEntryTime(timeElToUpdate, nowUtcMs);

    CreateNewLogEntryElement();
}

function SaveNewLogEntry() {
    var nowUtcMs = Date.now();
    var nleInputTxtEl = $('#newLogEntryTextInputId01');
    var containingLeEl = GetContainingLogEntryElement(nleInputTxtEl);

    UpdateLogEntryTextElement(containingLeEl);

    var timeElToUpdate = GetTimeElementToUpdate(containingLeEl);
    UpdateLogEntryTime(timeElToUpdate, nowUtcMs);


}