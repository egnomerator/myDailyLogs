var _leNotSavingAndIsKnown = "";
var _logEntryListContainerId = "";
var _maxNumbDivDigitWidth = "";
var _leDayDateClass = "";
var _logEntryClass = "";
var _lePartClass = "";
var _leNumbClass = "";
var _leDateClass = "";
var _leTextClass = "";
var _hiddenScoreClass = "";
var _dbStatusTextUpdating = "";
var _dbStatusTextRunning = "";
var _dbStatusTextStopped = "";
var _dbUpdateBtnId = "";
var _dbUpdateBtnClass = "";
var _dbUpdateBtnValue = "";
var _dbUpdateBtnTitle = "";
var _dbStartBtnId = "";
var _dbStartBtnClass = "";
var _dbStartBtnValue = "";
var _dbStartBtnTitle = "";
var _dbBarMsgSuccess = "";
var _dbBarMsgServiceStarted = "";
var _dbBarMsgFail = "";
var _dbBarMsgAutoSaveFailed = "";
var _dbBarDimClass = "";
var _hideClass = "";
var _noDisplayClass = "";
var _leUnsavedClass = "";
var _focusLineClass = "";
var _newLogEntryClass = "";
var _newLogEntryTsEllipsis = "";
var _newLogEntryTextInputPlaceholder = "";
var _newLogEntryTextInputId = "";
var _newLogEntryTextInputName = "";
var _startBtnFlashInterval = null;

function UpdateLogEntryElementAttributeVariables(
    leNotSavingAndIsKnown,
    logEntryListContainerId,
    maxNumbDivDigitWidth,
    leDayDateClass,
    logEntryClass,
    lePartClass,
    leNumbClass,
    leDateClass,
    leTextClass,
    hiddenScoreClass,
    dbStatusTextUpdating,
    dbStatusTextRunning,
    dbStatusTextStopped,
    dbUpdateBtnId,
    dbUpdateBtnClass,
    dbUpdateBtnValue,
    dbUpdateBtnTitle,
    dbStartBtnId,
    dbStartBtnClass,
    dbStartBtnValue,
    dbStartBtnTitle,
    dbBarDimClass,
    hideClass,
    noDisplayClass,
    leUnsavedClass,
    dbBarMsgSuccess,
    dbBarMsgServiceStarted,
    dbBarMsgFail,
    dbBarMsgAutoSaveFailed,
    focusLineClass,
    newLogEntryClass,
    newLogEntryTsEllipsis,
    newLogEntryTextInputPlaceholder,
    newLogEntryTextInputId,
    newLogEntryTextInputName
) {
    _leNotSavingAndIsKnown = leNotSavingAndIsKnown;
    _logEntryListContainerId = logEntryListContainerId;
    _maxNumbDivDigitWidth = maxNumbDivDigitWidth;
    _leDayDateClass = leDayDateClass;
    _logEntryClass = logEntryClass;
    _lePartClass = lePartClass;
    _leNumbClass = leNumbClass;
    _leDateClass = leDateClass;
    _leTextClass = leTextClass;
    _hiddenScoreClass = hiddenScoreClass;
    _dbStatusTextUpdating = dbStatusTextUpdating;
    _dbStatusTextRunning = dbStatusTextRunning;
    _dbStatusTextStopped = dbStatusTextStopped;
    _dbUpdateBtnId = dbUpdateBtnId;
    _dbUpdateBtnClass = dbUpdateBtnClass;
    _dbUpdateBtnValue = dbUpdateBtnValue;
    _dbUpdateBtnTitle = dbUpdateBtnTitle;
    _dbStartBtnId = dbStartBtnId;
    _dbStartBtnClass = dbStartBtnClass;
    _dbStartBtnValue = dbStartBtnValue;
    _dbStartBtnTitle = dbStartBtnTitle;
    _dbBarDimClass = dbBarDimClass;
    _hideClass = hideClass;
    _noDisplayClass = noDisplayClass;
    _leUnsavedClass = leUnsavedClass;
    _dbBarMsgSuccess = dbBarMsgSuccess;
    _dbBarMsgServiceStarted = dbBarMsgServiceStarted;
    _dbBarMsgFail = dbBarMsgFail;
    _dbBarMsgAutoSaveFailed = dbBarMsgAutoSaveFailed;
    _focusLineClass = focusLineClass;
    _newLogEntryClass = newLogEntryClass;
    _newLogEntryTsEllipsis = newLogEntryTsEllipsis;
    _newLogEntryTextInputPlaceholder = newLogEntryTextInputPlaceholder;
    _newLogEntryTextInputId = newLogEntryTextInputId;
    _newLogEntryTextInputName = newLogEntryTextInputName;
}


// SECTION START: log entry handling

function LogEntryTextIsValid(text) {
    // any Redis security vulnerabilities? Research.
    return text !== undefined && text !== null && text !== "";
}

function SaveNewLogEntryAndUpdateUI(leTextInputEl, logEntryTextVal, nowUtcMs, msgEl, msgTextEl) {
    var newLogEntry = UpdateUIwithEntryInfoAndCreateNewLogEntryItem(leTextInputEl, logEntryTextVal, nowUtcMs);
    SaveNewLogEntry(nowUtcMs, logEntryTextVal, msgEl, msgTextEl, _dbBarMsgAutoSaveFailed, newLogEntry);
}

function SaveNewLogEntry(nowUtcMs, logEntryTextVal, msgEl, msgTextEl, msgText, newLogEntry) {
    var url = "/Home/SaveNewLogEntry";
    JqueryAjaxRegular(
            "POST",
            url,
            { timeStamp: nowUtcMs, logEntryText: logEntryTextVal },
            null,
            function (returnData) { handleAustoSaveFailureSituation(returnData, msgEl, msgTextEl, msgText, newLogEntry); }
        );
}

function handleStartBtnClick(msgEl, msgTextEl) {
    toggleAutoSavingKnownStatus();
    // still need to actually start the service
    var url = "/Home/StartBackgroundSvc";
    JqueryAjaxRegular(
            "POST",
            url,
            null,
            function (returnData) { handleServiceStartedFollowup(returnData, msgEl, msgTextEl); },
            null
        );
    // and then handle prompt to save

}

function handleServiceStartedFollowup(success, msgEl, msgTextEl) {
    var msgText = success ? _dbBarMsgServiceStarted : "Something went wrong :( idk";
    showResultMsg(msgEl, msgTextEl, msgText);
    var chckBtn = document.getElementById(_dbUpdateBtnId);
    var startBtn = document.getElementById(_dbStartBtnId);
    replaceBtnWithBtn(startBtn, chckBtn);
    var specialMsg = $(document.getElementById(msgEl));
    toggleItemFlashing(specialMsg, true);
}

function saveAllUnsavedLogEntries(msgEl, msgTextEl) {
    var specialMsg = $(document.getElementById(msgEl));
    toggleItemFlashing(specialMsg, false);
    // still need to actually start the service
    var logEntriesToSave = getAllUnsavedLogEntries();
    var data = { logEntries: logEntriesToSave.toString() };
    var url = "/Home/SaveRecentLogEntries";
    JqueryAjaxRegular(
            "POST",
            url,
            data,
            function (returnData) { handleSaveAllUnsavedFollowup(returnData, msgEl, msgTextEl); },
            null
        );
    // and then handle prompt to save

}

function handleSaveAllUnsavedFollowup(returnData, msgEl, msgTextEl) {
    
}

function getAllUnsavedLogEntries() {
    var list = $(document.getElementById(_logEntryListContainerId));
    var unSavedLeClassLbl = "." + _leUnsavedClass;
    var unSavedLes = list.find(unSavedLeClassLbl);
    var logEntriesToSave = [];
    for (var i = 0; i < unSavedLes.length; i++) {
        var le = unSavedLes[i];
        var leTextClassLbl = "." + _leTextClass;
        var hiddenScoreClassLbl = "." + _hiddenScoreClass;
        var text = $(le).find(leTextClassLbl)[0].innerHTML;
        var score = $(le).find(hiddenScoreClassLbl)[0].innerHTML;
        logEntriesToSave.push(score);
        logEntriesToSave.push(text);
    }
    return logEntriesToSave;
}

function handleAustoSaveFailureSituation(returnData, msgEl, msgTextEl, msgText, newLogEntry) {
    if (!$(newLogEntry).hasClass(_leUnsavedClass)) $(newLogEntry).addClass(_leUnsavedClass);
    if (_leNotSavingAndIsKnown) return;
    toggleAutoSavingKnownStatus();
    displayAutoSaveFailedMsg(returnData, msgEl, msgTextEl, msgText);
    var chckBtn = document.getElementById(_dbUpdateBtnId);
    var startBtn = document.getElementById(_dbStartBtnId);
    replaceBtnWithBtn(chckBtn, startBtn);
}

function toggleAutoSavingKnownStatus() {
    _leNotSavingAndIsKnown = !_leNotSavingAndIsKnown;
    var startBtn = $(document.getElementById(_dbStartBtnId));
    toggleItemFlashing(startBtn, _leNotSavingAndIsKnown);
}

function toggleItemFlashing(item, condition) {
    slowFlash(item);
    var t = 4000;
    if (condition) _startBtnFlashInterval = setInterval(function () { slowFlash(item); }, t);
    if (!condition) {
        clearInterval(_startBtnFlashInterval);
        _startBtnFlashInterval = null;
        item.stop(true,true);
        stopFlash(item);
    }
}

function stopFlash(el) {
    el.fadeIn(1);
}

function slowFlash(el) {
    var fadeSpeed = 1400;
    if(_leNotSavingAndIsKnown) el.fadeOut(fadeSpeed);
    el.fadeIn(fadeSpeed);
}

function replaceBtnWithBtn(removeBtn, showBtn) {
    if (!$(removeBtn).hasClass(_noDisplayClass)) $(removeBtn).addClass(_noDisplayClass);
    if ($(showBtn).hasClass(_noDisplayClass)) $(showBtn).removeClass(_noDisplayClass);
}

function displayAutoSaveFailedMsg(returnData, msgEl, msgTextEl, msgText) {
    showResultMsg(msgEl, msgTextEl, msgText);
}

function displayAutoServiceStartedMsg(returnData, msgEl, msgTextEl, msgText) {
    showResultMsg(msgEl, msgTextEl, msgText);
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
    var newLogEntry = ReplaceLogEntryNewWithLogEntrySubmitted(leTextInputEl, containingLogEntryEl, currentNumb, nowUtcMs, logEntryTextVal);
    //SetValueOfAssociatedTimeStampElement(associatedTimeStampEl, nowUtcMs);
    // using isNew variable simply for readability
    var isNewEmptyLogEntry = true;
    var newEmptyLe = CreateLogEntryItem(isNewEmptyLogEntry, nextNumb);
    return newLogEntry;
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
    return CreateLogEntryItem(!isNewEmptyLogEntry, parseInt(logEntryNumb), nowUtcMs, logEntryTextVal);
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
    //-add current milliseconds since epoch hidden div
    //-this is a safety measure; if db goes down, it can be restarted
    //  and then this hidden value will be used to save this recently created log entry
    var hiddenLeTsUtcNowDiv = null;
    if (!isNewEmptyLogEntry) {
        hiddenLeTsUtcNowDiv = document.createElement("div");
        $(hiddenLeTsUtcNowDiv).addClass(_hiddenScoreClass);
        hiddenLeTsUtcNowDiv.innerHTML = nowUtcMs;
    }
    //-add new ts,number, and text input elements as children to new entry div
    //-add new entry div as child to entry list
    newLogEntryEl.appendChild(newLeDateEl);
    newLogEntryEl.appendChild(newLeNumbEl);
    newLogEntryEl.appendChild(newLeTextPart);
    if (hiddenLeTsUtcNowDiv !== null) newLogEntryEl.appendChild(hiddenLeTsUtcNowDiv);
    var parent = document.getElementById(_logEntryListContainerId);
    parent.appendChild(newLogEntryEl);
    // LAST give input el focus
    if (isNewEmptyLogEntry) newLeTextPart.focus();
    return newLogEntryEl;
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

// SECTION END: log entry handling

// SECTION START: db bar handling


function getCurrentDbSvcStatus(dbStatusEl, ts) {
    dbStatusEl.innerHTML = _dbStatusTextUpdating;
    var url = "/Home/CheckBackgroundSvc";
    JqueryAjaxRegular(
        "GET",
        url,
        null,
        function (returnData) { updateDisplayedBgSvcStatusWithCheckResult(returnData.toLowerCase() === "true", dbStatusEl, ts); },
        null
    );
}

function updateDisplayedBgSvcStatusWithCheckResult(svcIsRunning, statusEl, ts) {
    var updateText = svcIsRunning ? _dbStatusTextRunning : _dbStatusTextStopped;
    var fmtTime = fmtDateJustTime(ts);
    statusEl.innerHTML = updateText + " (checked " + fmtTime + ")";
    ensureDbBarSectionHasCorrectDimOrHighlight(svcIsRunning, statusEl);
    flashThisThing($(statusEl));
}

function ensureDbBarSectionHasCorrectDimOrHighlight(svcIsRunning, statusEl) {
    var hasDimClass = $(statusEl).hasClass(_dbBarDimClass);
    if (svcIsRunning && !hasDimClass) $(statusEl).addClass(_dbBarDimClass);
    if (!svcIsRunning && hasDimClass) $(statusEl).removeClass(_dbBarDimClass);
}


function saveAsPrepForQuit(msgEl, msgTextEl, statusEl) {
    var url = "/Home/SaveAsPrepForQuit";
    JqueryAjaxRegular(
        "POST",
        url,
        null,
        function (returnData) { showResultMsgInitiateStopSvc(returnData.toLowerCase() === "true", msgEl, msgTextEl, statusEl); },
        null
    );
}

function showResultMsgInitiateStopSvc(success, msgEl, msgTextEl, statusEl) {
    var msgText = success ? _dbBarMsgSuccess : _dbBarMsgFail;
    showResultMsg(msgEl, msgTextEl, msgText);
    if (!success) return;
    stopBackgroundSvc(statusEl);
}

function showResultMsg(msgEl, msgTextEl, msgText) {
    var ts = new Date();
    var fmtTime = fmtDateJustTime(ts);
    msgText += " (" + fmtTime + ")";
    msgTextEl.innerHTML = msgText;
    if ($(msgEl).hasClass(_hideClass)) $(msgEl).removeClass(_hideClass);
    flashThisThing($(msgEl));
}

function stopBackgroundSvc(statusEl) {
    statusEl.innerHTML = _dbStatusTextUpdating;
    var url = "/Home/StopBackgroundSvc";
    JqueryAjaxRegular(
        "POST",
        url,
        null,
        function (returnData) { updateDisplayedBgSvcStatusWithCheckResult(returnData.toLowerCase() !== "true", statusEl, new Date()); },
        null
    );
}

function hideXclickedMsg(el) {
    if (!$(el).hasClass(_hideClass)) $(el).addClass(_hideClass);
}

// SECTION END: db bar handling

function flashThisThing(t) {
    var fadeSpeed = 500;
    t.fadeIn(fadeSpeed).fadeOut(fadeSpeed).fadeIn(fadeSpeed).fadeOut(fadeSpeed).fadeIn(fadeSpeed);
}

function JqueryAjaxFireAndForget(url, data) {
    JqueryAjaxRegular("POST", url, data, function (returnData) { return; },null);
}

function JqueryAjaxRegular(type, url, data, success, fail) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: success,
        error: fail
    });
}

function fmtDateJustTime(ts) {
    var fmtTs = formatDate(ts);
    var fmtTsHrMn = fmtTs.substr(11, 5);
    var fmtTsampm = fmtTs.substr(20);
    return fmtTsHrMn + " " + fmtTsampm;
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
