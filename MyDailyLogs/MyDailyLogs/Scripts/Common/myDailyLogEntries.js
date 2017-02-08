var _logEntryListContainerId = "";
var _maxNumbDivDigitWidth = "";
var _leDayDateClass = "";
var _logEntryClass = "";
var _lePartClass = "";
var _leNumbClass = "";
var _leDateClass = "";
var _leTextClass = "";
var _focusLineClass = "";
var _newLogEntryClass = "";
var _newLogEntryTsEllipsis = "";
var _newLogEntryTextInputPlaceholder = "";
var _newLogEntryTextInputId = "";
var _newLogEntryTextInputName = "";

function UpdateLogEntryElementAttributeVariables(
    logEntryListContainerId,
    maxNumbDivDigitWidth,
    leDayDateClass,
    logEntryClass,
    lePartClass,
    leNumbClass,
    leDateClass,
    leTextClass,
    focusLineClass,
    newLogEntryClass,
    newLogEntryTsEllipsis,
    newLogEntryTextInputPlaceholder,
    newLogEntryTextInputId,
    newLogEntryTextInputName
) {
    _logEntryListContainerId = logEntryListContainerId;
    _maxNumbDivDigitWidth = maxNumbDivDigitWidth;
    _leDayDateClass = leDayDateClass;
    _logEntryClass = logEntryClass;
    _lePartClass = lePartClass;
    _leNumbClass = leNumbClass;
    _leDateClass = leDateClass;
    _leTextClass = leTextClass;
    _focusLineClass = focusLineClass;
    _newLogEntryClass = newLogEntryClass;
    _newLogEntryTsEllipsis = newLogEntryTsEllipsis;
    _newLogEntryTextInputPlaceholder = newLogEntryTextInputPlaceholder;
    _newLogEntryTextInputId = newLogEntryTextInputId;
    _newLogEntryTextInputName = newLogEntryTextInputName;
}

function LogEntryTextIsValid(text) {
    // any Redis security vulnerabilities? Research.
    return text !== undefined && text !== null && text !== "";
}

function SaveNewLogEntryAndUpdateUI(leTextInputEl, logEntryTextVal, nowUtcMs) {
    SaveNewLogEntry(nowUtcMs, logEntryTextVal);
    UpdateUIwithEntryInfoAndCreateNewLogEntryItem(leTextInputEl, logEntryTextVal, nowUtcMs);
}

function SaveNewLogEntry(nowUtcMs, logEntryTextVal) {
    var postUrl = "/Home/SaveNewLogEntry";
    JqueryAjaxFireAndForget(postUrl, { timeStamp: nowUtcMs, logEntryText: logEntryTextVal });
}

function UpdateUIwithEntryInfoAndCreateNewLogEntryItem(leTextInputEl, logEntryTextVal, nowUtcMs) {
    var leClassLbl = "." + _logEntryClass;
    var containingLogEntryEl = leTextInputEl.closest(leClassLbl);
    var leDateClassLbl = "." + _leDateClass;
    var associatedTimeStampEl = $(containingLogEntryEl).find(leDateClassLbl);
    var leNumbClassLbl = "." + _leNumbClass;
    var associatedNumberEl = $(containingLogEntryEl).find(leNumbClassLbl);
    var associatedNumberElVal = associatedNumberEl[0].innerHTML;
    var currentNumb = parseInt(associatedNumberElVal);
    var nextNumb = currentNumb + 1;

    CreateNextDayDateSectionIfNecessary();
    ReplaceLogEntryNewWithLogEntrySubmitted(leTextInputEl, containingLogEntryEl, currentNumb, nowUtcMs, logEntryTextVal);
    //SetValueOfAssociatedTimeStampElement(associatedTimeStampEl, nowUtcMs);
    // using isNew variable simply for readability
    var isNewEmptyLogEntry = true;
    CreateLogEntryItem(isNewEmptyLogEntry, nextNumb);
}

function CreateNextDayDateSectionIfNecessary() {
    var logEntryUIList = $(document.getElementById(_logEntryListContainerId)).children();
    var beforeNode = null;
    for (var i = logEntryUIList.length - 1; i > -1; i--) {
        var currentEl = logEntryUIList[i];
        if (beforeNode === null) beforeNode = currentEl;
        if (!($(currentEl).hasClass(_leDayDateClass))) continue;
        var lastDayDateStr = currentEl.innerHTML;
        var dateParts = lastDayDateStr.split("/");
        var lastDayDate = parseInt(dateParts[1]);
        var now = new Date();
        if (lastDayDate < now.getDate()) InsertNewLeDayDateElement(beforeNode);
        return;
    }
}

function InsertNewLeDayDateElement(beforeNode) {
    // -create the div
    //      -apply class
    // -set innerHTML to the new date val
    var newDayDateEl = document.createElement("div");
    $(newDayDateEl).addClass(_leDayDateClass);
    var initialDate = new Date();
    var fmtDate = formatDate(initialDate);
    newDayDateEl.innerHTML = fmtDate.substr(0, 10);
    // -make new date el child of container
    var parent = document.getElementById(_logEntryListContainerId);
    parent.insertBefore(newDayDateEl, beforeNode);
}

function ReplaceLogEntryNewWithLogEntrySubmitted(leTextInputEl, containingLogEntryEl, logEntryNumb, nowUtcMs, logEntryTextVal) {
    // -delete log entry text input element
    leTextInputEl.parentNode.removeChild(leTextInputEl);
    // Delete containing log entry element
    containingLogEntryEl.parentNode.removeChild(containingLogEntryEl);
    // Create replacement log entry element with submitted info
    // using isNew variable simply for readability
    var isNewEmptyLogEntry = true;
    var replacementLogEntryItem = CreateLogEntryItem(!isNewEmptyLogEntry, parseInt(logEntryNumb), nowUtcMs, logEntryTextVal);

    // -create the log entry text div
    //      -apply class(es) to normalize div style
    // -set innerHTML to the textVal
    //var replacementLogEntryTextDiv = document.createElement("div");
    //$(replacementLogEntryTextDiv).addClass(_lePartClass);
    //$(replacementLogEntryTextDiv).addClass(_leTextClass);
    //replacementLogEntryTextDiv.innerHTML = logEntryTextVal;
    // -make new log entry text div a child of containingLogEntryEl
    //$(containingLogEntryEl).removeClass(_newLogEntryClass);
    //containingLogEntryEl.appendChild(replacementLogEntryItem);
}

function CreateLogEntryItem(isNewEmptyLogEntry, logEntryNumb, nowUtcMs, logEntryTextVal) {
    //-create new entry div
    //      -apply classes
    var newLogEntryEl = document.createElement("div");
    $(newLogEntryEl).addClass(_logEntryClass);
    if (isNewEmptyLogEntry) {$(newLogEntryEl).addClass(_newLogEntryClass);}
    //-create new ts div
    //      -apply classes
    //-set innerHTML to ellipsis val
    var newLeDateEl = document.createElement("div");
    $(newLeDateEl).addClass(_lePartClass);
    $(newLeDateEl).addClass(_leDateClass);
    newLeDateEl.innerHTML = isNewEmptyLogEntry ? _newLogEntryTsEllipsis : SetValueOfAssociatedTimeStampElement(nowUtcMs);
    //-create new number div
    //      -apply classes
    //-set innerHTML to number val
    var newLeNumbEl = document.createElement("div");
    $(newLeNumbEl).addClass(_lePartClass);
    $(newLeNumbEl).addClass(_leNumbClass);
    newLeNumbEl.innerHTML = FormatLogEntryNumber(logEntryNumb);
    //-create new input text el
    //      -apply input id
    //      -apply classes
    //      -apply other attributes
    var elType = isNewEmptyLogEntry ? "input" : "div";
    var newLeTextPart = document.createElement(elType);
    if (isNewEmptyLogEntry) {
        newLeTextPart.id = _newLogEntryTextInputId;
        newLeTextPart.type = "text";
        newLeTextPart.name = _newLogEntryTextInputName;
        newLeTextPart.placeholder = _newLogEntryTextInputPlaceholder;
    }
    $(newLeTextPart).addClass(_lePartClass);
    $(newLeTextPart).addClass(_leTextClass);
    if (!isNewEmptyLogEntry) newLeTextPart.innerHTML = logEntryTextVal;
    //-add new ts,number, and text input elements as children to new entry div
    //-add new entry div as child to entry list
    newLogEntryEl.appendChild(newLeDateEl);
    newLogEntryEl.appendChild(newLeNumbEl);
    newLogEntryEl.appendChild(newLeTextPart);
    var parent = document.getElementById(_logEntryListContainerId);
    parent.appendChild(newLogEntryEl);
    // LAST give input el focus
    if(isNewEmptyLogEntry) newLeTextPart.focus();
}

function SetValueOfAssociatedTimeStampElement(nowUtcMs) {
    // convert the nowUtcMs to the local DateTime value formatted correctly
    var initialDate = new Date(nowUtcMs);
    var fmtDate = formatDate(initialDate);
    // set associatedTimeStampEl innerHTML to the string time value
    return fmtDate.substr(11);
}

function CreateNewLogEntryItem(newEntryNumber) {
    //-create new entry div
    //      -apply classes
    var newLogEntryEl = document.createElement("div");
    $(newLogEntryEl).addClass(_logEntryClass);
    $(newLogEntryEl).addClass(_newLogEntryClass);
    //-create new ts div
    //      -apply classes
    //-set innerHTML to ellipsis val
    var newLeDateEl = document.createElement("div");
    $(newLeDateEl).addClass(_lePartClass);
    $(newLeDateEl).addClass(_leDateClass);
    newLeDateEl.innerHTML = _newLogEntryTsEllipsis;
    //-create new number div
    //      -apply classes
    //-set innerHTML to number val
    var newLeNumbEl = document.createElement("div");
    $(newLeNumbEl).addClass(_lePartClass);
    $(newLeNumbEl).addClass(_leNumbClass);
    newLeNumbEl.innerHTML = FormatLogEntryNumber(newEntryNumber);
    //-create new input text el
    //      -apply input id
    //      -apply classes
    //      -apply other attributes
    var newLeInputTextEl = document.createElement("input");
    newLeInputTextEl.id = _newLogEntryTextInputId;
    newLeInputTextEl.type = "text";
    newLeInputTextEl.name = _newLogEntryTextInputName;
    newLeInputTextEl.placeholder = _newLogEntryTextInputPlaceholder;
    $(newLeInputTextEl).addClass(_lePartClass);
    $(newLeInputTextEl).addClass(_leTextClass);
    //-add new ts,number, and text input elements as children to new entry div
    //-add new entry div as child to entry list
    newLogEntryEl.appendChild(newLeDateEl);
    newLogEntryEl.appendChild(newLeNumbEl);
    newLogEntryEl.appendChild(newLeInputTextEl);
    var parent = document.getElementById(_logEntryListContainerId);
    parent.appendChild(newLogEntryEl);
    // LAST give input el focus
    newLeInputTextEl.focus();
}

function FormatLogEntryNumber(n) {
    var numb = n;
    var numbStr = numb.toString();
    var numbStrLength = numbStr.length;
    var digitDiff = _maxNumbDivDigitWidth - numbStrLength + 1;
    var leNumbStr = "";
    for (var d = 0; d < digitDiff; d++) {
        leNumbStr += " ";
    }
    return leNumbStr + numbStr + " ";
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

function formatDate(date) {
    // TIME
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    // DATE
    var month = date.getMonth() + 1;
    var dateN = date.getDate();
    var year = date.getFullYear();
    month = month < 10 ? "0" + month : month;
    dateN = dateN < 10 ? "0" + dateN : dateN;
    return month + "/" + dateN + "/" + year + " " + strTime;
}
