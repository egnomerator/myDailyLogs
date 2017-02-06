var leDayDateClass = "leDayDateClass";
var logEntryClass = "logEntryClass";
var lePartClass = "lePartClass";
var leNumbClass = "leNumbClass";
var leDateClass = "leDateClass";
var leTextClass = "leTextClass";

var newLogEntryClass = "newLogEntryClass";
var newLogEntryTextInputId = "newLogEntryTextInputId01";
var newLogEntryTextInputName = "newLogEntryTextInputName01";

function LogEntryTextIsValid(text) {
    return text !== undefined && text !== null && text !== "";
}

function SaveNewLogEntryAndUpdateUI(leTextInputEl, logEntryTextVal, nowUtcMs) {
    SaveNewLogEntry(nowUtcMs, logEntryTextVal);
    UpdateUIwithEntryInfo(leTextInputEl, logEntryTextVal, nowUtcMs);
    CreateNewLogEntryItem();
}

function UpdateUIwithEntryInfo(leTextInputEl, logEntryTextVal, nowUtcMs) {
    var containingLogEntryEl = '';
    var associatedTimeStampEl = '';
    var associatedNumberEl = '';
    var associatedNumberElVal = '';

    ReplaceLogEntryTextInputElWithLogEntryTextDiv(containingLogEntryEl, leTextInputEl, logEntryTextVal);
    SetValueOfAssociatedTimeStampElement(associatedTimeStampEl, nowUtcMs);
    SetValueOfAssociatedNumberElement(associatedNumberEl, associatedNumberElVal);
}

function CreateNewLogEntryItem() {
    
}

function ReplaceLogEntryTextInputElWithLogEntryTextDiv(containingLogEntryEl, leTextInputEl, logEntryTextVal) {
    // -delete log entry text input element
    // -create the log entry text div
    //      -apply class(es) to normalize div style
    // -set innerHTML to the textVal
    // -make new log entry text div a child of containingLogEntryEl
}

function SetValueOfAssociatedTimeStampElement(associatedTimeStampEl, nowUtcMs) {
    // convert the nowUtcMs to the local DateTime value formatted correctly
    // set associatedTimeStampEl innerHTML to the string time value
}

function SetValueOfAssociatedNumberElement(associatedNumberEl, associatedNumberElVal) {
    
}

function SaveNewLogEntry(nowUtcMs, logEntryTextVal) {
    var postUrl = "/SaveNewLogEntry";
    JqueryAjaxFireAndForget(postUrl, { timeStamp: nowUtcMs, logEntryText: logEntryTextVal });
}

function JqueryAjaxFireAndForget(url, data) {
    JqueryAjaxRegular("POST", url, data, function (returnData) { return; });
}

function JqueryAjaxRegular(type, url, data, success) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: success
    });
}
