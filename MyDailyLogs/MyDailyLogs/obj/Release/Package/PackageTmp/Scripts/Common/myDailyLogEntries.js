var _common = common();
var _urlBuilder = urlBuilder();

var _controllerHome = _common.constants.controllerHome;
var _actionCheckBackgroundSvc = _common.constants.actionCheckBackgroundSvc;
var _actionSaveAsPrepForQuit = _common.constants.actionSaveAsPrepForQuit;
var _actionSaveRecentLogEntries = _common.constants.actionSaveRecentLogEntries;
var _actionStartBackgroundSvc = _common.constants.actionStartBackgroundSvc;
var _actionStopBackgroundSvc = _common.constants.actionStopBackgroundSvc;

var _urlHomeCkBgSvc = _urlBuilder.bldUrl(_controllerHome, _actionCheckBackgroundSvc);
var _urlHomeSaveQuit = _urlBuilder.bldUrl(_controllerHome, _actionSaveAsPrepForQuit);
var _urlHomeSaveRecentLogEntries = _urlBuilder.bldUrl(_controllerHome, _actionSaveRecentLogEntries);
var _urlHomeStartBgSvc = _urlBuilder.bldUrl(_controllerHome, _actionStartBackgroundSvc);
var _urlHomeStopBgSvc = _urlBuilder.bldUrl(_controllerHome, _actionStopBackgroundSvc);

var _logEntryStrArraySeparator = "";
var _dbInfoBarId = "";
var _dbInfoBarClass = "";
var _dbInfoBarLblId = "";
var _dbInfoBarLblClass = "";
var _dbInfoBarSpecialMsgAreaId = "";
var _dbInfoBarSpecialMsgAreaClass = "";
var _dbStatusAreaId = "";
var _dbStatusAreaClass = "";
var _dbStatusAreaLblId = "";
var _dbStatusAreaLblClass = "";
var _dbStatusValueId = "";
var _dbStatusValueClass = "";
var _dbStatusValueInrHtml = "";
var _dbLastCheckValueId = "";
var _dbLastCheckValueClass = "";
var _dbBarBtnClass = "";
var _dbUpdateBtnId = "";
var _dbUpdateBtnClass = "";
var _dbUpdateBtnValue = "";
var _dbStartBtnId = "";
var _dbStartBtnClass = "";
var _dbStartBtnValue = "";
var _dbSyncBtnId = "";
var _dbSyncBtnClass = "";
var _dbSyncBtnValue = "";
var _dbSaveBtnClass = "";
var _dbSaveBtnValue = "";
var _dbSaveAndQuitAreaId = "";
var _dbSaveAndQuitAreaClass = "";
var _dbSaveAndQuitLblId = "";
var _dbSaveAndQuitLblClass = "";
var _dbSaveBtnId = "";
var _dbBarDimClass = "";
var _dbBarMsgId = "";
var _dbBarMsgClass = "";
var _dbBarMsgTextId = "";
var _dbBarMsgTextClass = "";
var _dbBarMsgSaveQuitSuccess = "";
var _dbBarMsgSyncSuccess = "";
var _dbBarMsgSaveQuitFail = "";
var _dbBarMsgSyncFail = "";
var _dbBarMsgAutoSaveFailed = "";
var _dbBarMsgServiceStarted = "";
var _dbBarMsgServiceStartFailed = "";
var _dbBarMsgXId = "";
var _dbBarMsgXclass = "";
var _hideClass = "";
var _noDisplayClass = "";
var _leUnsavedClass = "";
var _dbStatusTextUpdating = "";
var _dbStatusTextRunning = "";
var _dbStatusTextStopped = "";
var _dbStatusUpdateInterval = "";
var _dbInfoBarTitle = "";
var _dbStatusAreaTitle = "";
var _dbUpdateBtnTitle = "";
var _dbStartBtnTitle = "";
var _dbSyncBtnTitle = "";
var _dbSaveBtnTitle = "";
var _logEntryListContainerId = "";
var _maxNumbDivDigitWidth = "";
var _leDayDateClass = "";
var _logEntryClass = "";
var _lePartClass = "";
var _leNumbClass = "";
var _leDateClass = "";
var _leTextClass = "";
var _hiddenScoreClass = "";
var _focusLineClass = "";
var _newLogEntryId = "";
var _newLogEntryClass = "";
var _newLogEntryTsEllipsis = "";
var _newLogEntryTextInputId = "";
var _newLogEntryTextInputName = "";
var _newLogEntryTextInputPlaceholder = "";
var _startBtnFlashInterval = "";
var _leNotSavingAndIsKnown = false;

function UpdateLogEntryElementAttributeVariables(
    logEntryStrArraySeparator,
    dbInfoBarId,
    dbInfoBarClass,
    dbInfoBarLblId,
    dbInfoBarLblClass,
    dbInfoBarSpecialMsgAreaId,
    dbInfoBarSpecialMsgAreaClass,
    dbStatusAreaId,
    dbStatusAreaClass,
    dbStatusAreaLblId,
    dbStatusAreaLblClass,
    dbStatusValueId,
    dbStatusValueClass,
    dbStatusValueInrHtml,
    dbLastCheckValueId,
    dbLastCheckValueClass,
    dbBarBtnClass,
    dbUpdateBtnId,
    dbUpdateBtnClass,
    dbUpdateBtnValue,
    dbStartBtnId,
    dbStartBtnClass,
    dbStartBtnValue,
    dbSyncBtnId,
    dbSyncBtnClass,
    dbSyncBtnValue,
    dbSaveBtnClass,
    dbSaveBtnValue,
    dbSaveAndQuitAreaId,
    dbSaveAndQuitAreaClass,
    dbSaveAndQuitLblId,
    dbSaveAndQuitLblClass,
    dbSaveBtnId,
    dbBarDimClass,
    dbBarMsgId,
    dbBarMsgClass,
    dbBarMsgTextId,
    dbBarMsgTextClass,
    dbBarMsgSaveQuitSuccess,
    dbBarMsgSyncSuccess,
    dbBarMsgSaveQuitFail,
    dbBarMsgSyncFail,
    dbBarMsgAutoSaveFailed,
    dbBarMsgServiceStarted,
    dbBarMsgServiceStartFailed,
    dbBarMsgXId,
    dbBarMsgXclass,
    hideClass,
    noDisplayClass,
    leUnsavedClass,
    dbStatusTextUpdating,
    dbStatusTextRunning,
    dbStatusTextStopped,
    dbStatusUpdateInterval,
    dbInfoBarTitle,
    dbStatusAreaTitle,
    dbUpdateBtnTitle,
    dbStartBtnTitle,
    dbSyncBtnTitle,
    dbSaveBtnTitle,
    logEntryListContainerId,
    maxNumbDivDigitWidth,
    leDayDateClass,
    logEntryClass,
    lePartClass,
    leNumbClass,
    leDateClass,
    leTextClass,
    hiddenScoreClass,
    focusLineClass,
    newLogEntryId,
    newLogEntryClass,
    newLogEntryTsEllipsis,
    newLogEntryTextInputId,
    newLogEntryTextInputName,
    newLogEntryTextInputPlaceholder
) {
    _logEntryStrArraySeparator = logEntryStrArraySeparator;
    _dbInfoBarId = dbInfoBarId;
    _dbInfoBarClass = dbInfoBarClass;
    _dbInfoBarLblId = dbInfoBarLblId;
    _dbInfoBarLblClass = dbInfoBarLblClass;
    _dbInfoBarSpecialMsgAreaId = dbInfoBarSpecialMsgAreaId;
    _dbInfoBarSpecialMsgAreaClass = dbInfoBarSpecialMsgAreaClass;
    _dbStatusAreaId = dbStatusAreaId;
    _dbStatusAreaClass = dbStatusAreaClass;
    _dbStatusAreaLblId = dbStatusAreaLblId;
    _dbStatusAreaLblClass = dbStatusAreaLblClass;
    _dbStatusValueId = dbStatusValueId;
    _dbStatusValueClass = dbStatusValueClass;
    _dbStatusValueInrHtml = dbStatusValueInrHtml;
    _dbLastCheckValueId = dbLastCheckValueId;
    _dbLastCheckValueClass = dbLastCheckValueClass;
    _dbBarBtnClass = dbBarBtnClass;
    _dbUpdateBtnId = dbUpdateBtnId;
    _dbUpdateBtnClass = dbUpdateBtnClass;
    _dbUpdateBtnValue = dbUpdateBtnValue;
    _dbStartBtnId = dbStartBtnId;
    _dbStartBtnClass = dbStartBtnClass;
    _dbStartBtnValue = dbStartBtnValue;
    _dbSyncBtnId = dbSyncBtnId;
    _dbSyncBtnClass = dbSyncBtnClass;
    _dbSyncBtnValue = dbSyncBtnValue;
    _dbSaveBtnClass = dbSaveBtnClass;
    _dbSaveBtnValue = dbSaveBtnValue;
    _dbSaveAndQuitAreaId = dbSaveAndQuitAreaId;
    _dbSaveAndQuitAreaClass = dbSaveAndQuitAreaClass;
    _dbSaveAndQuitLblId = dbSaveAndQuitLblId;
    _dbSaveAndQuitLblClass = dbSaveAndQuitLblClass;
    _dbSaveBtnId = dbSaveBtnId;
    _dbBarDimClass = dbBarDimClass;
    _dbBarMsgId = dbBarMsgId;
    _dbBarMsgClass = dbBarMsgClass;
    _dbBarMsgTextId = dbBarMsgTextId;
    _dbBarMsgTextClass = dbBarMsgTextClass;
    _dbBarMsgSaveQuitSuccess = dbBarMsgSaveQuitSuccess;
    _dbBarMsgSyncSuccess = dbBarMsgSyncSuccess;
    _dbBarMsgSaveQuitFail = dbBarMsgSaveQuitFail;
    _dbBarMsgSyncFail = dbBarMsgSyncFail;
    _dbBarMsgAutoSaveFailed = dbBarMsgAutoSaveFailed;
    _dbBarMsgServiceStarted = dbBarMsgServiceStarted;
    _dbBarMsgServiceStartFailed = dbBarMsgServiceStartFailed;
    _dbBarMsgXId = dbBarMsgXId;
    _dbBarMsgXclass = dbBarMsgXclass;
    _hideClass = hideClass;
    _noDisplayClass = noDisplayClass;
    _leUnsavedClass = leUnsavedClass;
    _dbStatusTextUpdating = dbStatusTextUpdating;
    _dbStatusTextRunning = dbStatusTextRunning;
    _dbStatusTextStopped = dbStatusTextStopped;
    _dbStatusUpdateInterval = dbStatusUpdateInterval;
    _dbInfoBarTitle = dbInfoBarTitle;
    _dbStatusAreaTitle = dbStatusAreaTitle;
    _dbUpdateBtnTitle = dbUpdateBtnTitle;
    _dbStartBtnTitle = dbStartBtnTitle;
    _dbSyncBtnTitle = dbSyncBtnTitle;
    _dbSaveBtnTitle = dbSaveBtnTitle;
    _logEntryListContainerId = logEntryListContainerId;
    _maxNumbDivDigitWidth = maxNumbDivDigitWidth;
    _leDayDateClass = leDayDateClass;
    _logEntryClass = logEntryClass;
    _lePartClass = lePartClass;
    _leNumbClass = leNumbClass;
    _leDateClass = leDateClass;
    _leTextClass = leTextClass;
    _hiddenScoreClass = hiddenScoreClass;
    _focusLineClass = focusLineClass;
    _newLogEntryId = newLogEntryId;
    _newLogEntryClass = newLogEntryClass;
    _newLogEntryTsEllipsis = newLogEntryTsEllipsis;
    _newLogEntryTextInputId = newLogEntryTextInputId;
    _newLogEntryTextInputName = newLogEntryTextInputName;
    _newLogEntryTextInputPlaceholder = newLogEntryTextInputPlaceholder;
}

// SECTION START: log entry handling

function LogEntryTextIsValid(text) {
    // any Redis security vulnerabilities? Research.
    return text !== undefined && text !== null && text !== "" && text.trim() !== "";
}

function SaveNewLogEntryAndUpdateUI(logEntryTextVal, nowUtcMs) {
    var newLogEntry = UpdateUIwithEntryInfoAndCreateNewLogEntryItem(logEntryTextVal, nowUtcMs);
    SaveNewLogEntry(logEntryTextVal, nowUtcMs, newLogEntry);
}

function SaveNewLogEntry(logEntryTextVal, nowUtcMs, newLogEntry) {
    var url = _urlHomeSaveRecentLogEntries;
    var logEntriesToSave = [];
    logEntriesToSave.push(encodeURIComponent(nowUtcMs));
    logEntriesToSave.push(encodeURIComponent(logEntryTextVal));
    var leJoinedByUniqueSeparator = logEntriesToSave.join(_logEntryStrArraySeparator);
    var data = { logEntries: leJoinedByUniqueSeparator };
    JqueryAjaxRegular(
            "POST",
            url,
            data,
            function (returnData) { handleAutoSaveFailureSituation(returnData, _dbBarMsgAutoSaveFailed, newLogEntry); },
            null
        );
}

function handleStartBtnClick() {
    var listContainer = $(document.getElementById(_logEntryListContainerId));
    var redClassLbl = "." + _leUnsavedClass;
    var redEntries = listContainer.find(redClassLbl);
    var numbRedLe = redEntries.length;
    if(numbRedLe > 0) toggleAutoSavingKnownStatus();
    var url = _urlHomeStartBgSvc;
    JqueryAjaxRegular(
            "POST",
            url,
            null,
            function (returnData) { handleServiceStartedFollowup(returnData, numbRedLe); },
            null
        );
}

function handleServiceStartedFollowup(success, numbRedLe) {
    getCurrentDbSvcStatus();
    if (numbRedLe < 1) {
        showCheckBtn();
        return;
    }
    var msgText = success ? _dbBarMsgServiceStarted : _dbBarMsgServiceStartFailed;
    showResultMsg(msgText);
    if (!success) return;
    showSyncBtn();
    // this variable for readability
    var turnOn = true;
    var syncBtn = document.getElementById(_dbSyncBtnId);
    toggleItemFlashing($(syncBtn), turnOn);
}

function saveAllUnsavedLogEntries() {
    var syncBtn = $(document.getElementById(_dbSyncBtnId));
    // this variable for readability
    var turnOn = false;
    toggleItemFlashing(syncBtn, turnOn);
    var logEntriesToSave = getAllUnsavedLogEntries();
    var leJoinedByUniqueSeparator = logEntriesToSave.join(_logEntryStrArraySeparator);
    var data = { logEntries: leJoinedByUniqueSeparator };
    var url = _urlHomeSaveRecentLogEntries;
    JqueryAjaxRegular(
            "POST",
            url,
            data,
            function (returnData) { handleSaveAllUnsavedFollowup(returnData); },
            null
        );
}

function handleSaveAllUnsavedFollowup(returnData) {
    var msgText = returnData.toLowerCase() === "true" ? _dbBarMsgSyncSuccess : _dbBarMsgSyncFail;
    showResultMsg(msgText);
    showCheckBtn();
    // take red class off the red entries
    var listContainer = $(document.getElementById(_logEntryListContainerId));
    var redClassLbl = "." + _leUnsavedClass;
    var redEntries = listContainer.find(redClassLbl);
    for (var i = 0; i < redEntries.length; i++) {
        var currentRedEntry = $(redEntries[i]);
        if (currentRedEntry.hasClass(_leUnsavedClass)) currentRedEntry.removeClass(_leUnsavedClass);
    }
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
        var text = $($(le).find(leTextClassLbl)[0]).text();
        var score = $($(le).find(hiddenScoreClassLbl)[0]).text();
        logEntriesToSave.push(encodeURIComponent(score));
        logEntriesToSave.push(encodeURIComponent(text));
    }
    return logEntriesToSave;
}

function handleAutoSaveFailureSituation(returnData, msgText, newLogEntry) {
    if (returnData.toLowerCase() === "true") return;
    if (!$(newLogEntry).hasClass(_leUnsavedClass)) $(newLogEntry).addClass(_leUnsavedClass);
    if (_leNotSavingAndIsKnown) return;
    toggleAutoSavingKnownStatus();
    displayAutoSaveFailedMsg(returnData, msgText);
    showStartBtn();
}

function toggleAutoSavingKnownStatus() {
    _leNotSavingAndIsKnown = !_leNotSavingAndIsKnown;
    var startBtn = $(document.getElementById(_dbStartBtnId));
    toggleItemFlashing(startBtn, _leNotSavingAndIsKnown);
}

function toggleItemFlashing(item, turnOn) {
    var t = 4000;
    if (turnOn) _startBtnFlashInterval = setInterval(function () { slowFlash(item, turnOn); }, t);
    if (!turnOn) {
        clearInterval(_startBtnFlashInterval);
        _startBtnFlashInterval = null;
        item.stop(true,true);
        stopFlash(item);
    }
}

function stopFlash(el) {
    el.fadeIn(1);
}

function slowFlash(el, turnOn) {
    var fadeSpeed = 1400;
    if (turnOn) el.fadeOut(fadeSpeed);
    el.fadeIn(fadeSpeed);
}

function showCheckBtn() {
    var chckBtn = document.getElementById(_dbUpdateBtnId);
    var startBtn = document.getElementById(_dbStartBtnId);
    var syncBtn = document.getElementById(_dbSyncBtnId);
    replaceBtnWithBtn(chckBtn, startBtn, syncBtn);
}
function showStartBtn() {
    var chckBtn = document.getElementById(_dbUpdateBtnId);
    var startBtn = document.getElementById(_dbStartBtnId);
    var syncBtn = document.getElementById(_dbSyncBtnId);
    replaceBtnWithBtn(startBtn, chckBtn, syncBtn);
}
function showSyncBtn() {
    var chckBtn = document.getElementById(_dbUpdateBtnId);
    var startBtn = document.getElementById(_dbStartBtnId);
    var syncBtn = document.getElementById(_dbSyncBtnId);
    replaceBtnWithBtn(syncBtn, startBtn, chckBtn);
}

function replaceBtnWithBtn(showBtn, removeBtn1, removeBtn2) {
    if (!$(removeBtn1).hasClass(_noDisplayClass)) $(removeBtn1).addClass(_noDisplayClass);
    if (!$(removeBtn2).hasClass(_noDisplayClass)) $(removeBtn2).addClass(_noDisplayClass);
    if ($(showBtn).hasClass(_noDisplayClass)) $(showBtn).removeClass(_noDisplayClass);
}

function displayAutoSaveFailedMsg(returnData, msgText) {
    showResultMsg(msgText);
}

function displayAutoServiceStartedMsg(returnData, msgText) {
    showResultMsg(msgText);
}

function UpdateUIwithEntryInfoAndCreateNewLogEntryItem(logEntryTextVal, nowUtcMs) {
    var leTextInputEl = document.getElementById(_newLogEntryTextInputId);
    var containingLogEntryEl = document.getElementById(_newLogEntryId);
    var leNumbClassLbl = "." + _leNumbClass;
    var associatedNumberEl = $(containingLogEntryEl).find(leNumbClassLbl);
    var associatedNumberElVal = associatedNumberEl[0].innerHTML;
    var currentNumb = parseInt(associatedNumberElVal);
    var nextNumb = currentNumb + 1;

    CreateNextDayDateSectionIfNecessary();
    var newLogEntry = ReplaceLogEntryNewWithLogEntrySubmitted(leTextInputEl, containingLogEntryEl, currentNumb, nowUtcMs, logEntryTextVal);
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
    // -create the date section div
    var newDayDateEl = document.createElement("div");
    $(newDayDateEl).addClass(_leDayDateClass);
    var initialDate = new Date();
    var fmtDate = formatDate(initialDate);
    newDayDateEl.innerHTML = fmtDate.substr(0, 10);
    // -make new date section div a child of container
    var parent = document.getElementById(_logEntryListContainerId);
    parent.insertBefore(newDayDateEl, beforeNode);
}

function ReplaceLogEntryNewWithLogEntrySubmitted(leTextInputEl, containingLogEntryEl, logEntryNumb, nowUtcMs, logEntryTextVal) {
    // -delete log entry text input element
    leTextInputEl.parentNode.removeChild(leTextInputEl);
    // Delete containing log entry element
    containingLogEntryEl.parentNode.removeChild(containingLogEntryEl);
    // Create replacement log entry element with submitted info
    // this variable for readability
    var isNewEmptyLogEntry = true;
    return CreateLogEntryItem(!isNewEmptyLogEntry, parseInt(logEntryNumb), nowUtcMs, logEntryTextVal);
}

function CreateLogEntryItem(isNewEmptyLogEntry, logEntryNumb, nowUtcMs, logEntryTextVal) {
    //-create new entry div
    var newLogEntryEl = document.createElement("div");
    $(newLogEntryEl).addClass(_logEntryClass);
    if (isNewEmptyLogEntry) {
        newLogEntryEl.id = _newLogEntryId;
        $(newLogEntryEl).addClass(_newLogEntryClass);
    }
    //-create new timestamp div
    var newLeDateEl = document.createElement("div");
    $(newLeDateEl).addClass(_lePartClass);
    $(newLeDateEl).addClass(_leDateClass);
    newLeDateEl.innerHTML = isNewEmptyLogEntry ? _newLogEntryTsEllipsis : SetValueOfAssociatedTimeStampElement(nowUtcMs);
    //-create new line number div
    var newLeNumbEl = document.createElement("div");
    $(newLeNumbEl).addClass(_lePartClass);
    $(newLeNumbEl).addClass(_leNumbClass);
    newLeNumbEl.innerHTML = FormatLogEntryNumber(logEntryNumb);
    //-create new input text el
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
    if (!isNewEmptyLogEntry) $(newLeTextPart).text(logEntryTextVal).html();
    //-add current milliseconds since epoch hidden div
    //-this is a safety measure; if db goes down, it can be restarted
    //  and then this hidden value will be used to save this recently created log entry
    var hiddenLeTsUtcNowDiv = null;
    if (!isNewEmptyLogEntry) {
        hiddenLeTsUtcNowDiv = document.createElement("div");
        $(hiddenLeTsUtcNowDiv).addClass(_hiddenScoreClass);
        hiddenLeTsUtcNowDiv.innerHTML = nowUtcMs;
    }
    //-add new timestamp,number, and text input (and hidden div if applies) elements as children to the new entry div
    newLogEntryEl.appendChild(newLeDateEl);
    newLogEntryEl.appendChild(newLeNumbEl);
    newLogEntryEl.appendChild(newLeTextPart);
    if (hiddenLeTsUtcNowDiv !== null) newLogEntryEl.appendChild(hiddenLeTsUtcNowDiv);
    //-add new entry div as child to entry list
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


function getCurrentDbSvcStatus() {
    var ts = new Date();
    var dbStatusEl = document.getElementById(_dbLastCheckValueId);
    dbStatusEl.innerHTML = _dbStatusTextUpdating;
    var url = _urlHomeCkBgSvc;
    JqueryAjaxRegular(
        "GET",
        url,
        null,
        function (returnData) { updateDisplayedBgSvcStatusWithCheckResult(returnData.toLowerCase() === "true", dbStatusEl, ts); },
        null
    );
}

function updateDisplayedBgSvcStatusWithCheckResult(svcIsRunning, statusEl, ts, doNotOfferStartSvc) {
    var updateText = svcIsRunning ? _dbStatusTextRunning : _dbStatusTextStopped;
    var fmtTime = fmtDateJustTime(ts);
    statusEl.innerHTML = updateText + " (checked " + fmtTime + ")";
    ensureDbBarSectionHasCorrectDimOrHighlight(svcIsRunning, statusEl);
    flashThisThing($(statusEl));
    if (!svcIsRunning) showStartBtn();
}

function ensureDbBarSectionHasCorrectDimOrHighlight(svcIsRunning, statusEl) {
    var hasDimClass = $(statusEl).hasClass(_dbBarDimClass);
    if (svcIsRunning && !hasDimClass) $(statusEl).addClass(_dbBarDimClass);
    if (!svcIsRunning && hasDimClass) $(statusEl).removeClass(_dbBarDimClass);
}


function saveAsPrepForQuit() {
    var url = _urlHomeSaveQuit;
    JqueryAjaxRegular(
        "POST",
        url,
        null,
        function (returnData) { showResultMsgInitiateStopSvc(returnData.toLowerCase() === "true"); },
        null
    );
}

function saveAsPrepForQuitFollowUp() {
    
}

function showResultMsgInitiateStopSvc(success) {
    var statusEl = document.getElementById(_dbLastCheckValueId);
    var msgText = success ? _dbBarMsgSaveQuitSuccess : _dbBarMsgSaveQuitFail;
    showResultMsg(msgText);
    if (!success) return;
    stopBackgroundSvc(statusEl);
}

function showResultMsg(msgText) {
    var msgEl = document.getElementById(_dbBarMsgId);
    var msgTextEl = document.getElementById(_dbBarMsgTextId);
    var ts = new Date();
    var fmtTime = fmtDateJustTime(ts);
    msgText += " (" + fmtTime + ")";
    msgTextEl.innerHTML = msgText;
    if ($(msgEl).hasClass(_hideClass)) $(msgEl).removeClass(_hideClass);
    flashThisThing($(msgEl));
}

function stopBackgroundSvc(statusEl) {
    statusEl.innerHTML = _dbStatusTextUpdating;
    var url = _urlHomeStopBgSvc;
    JqueryAjaxRegular(
        "POST",
        url,
        null,
        function (returnData) { updateDisplayedBgSvcStatusWithCheckResult(returnData.toLowerCase() !== "true", statusEl, new Date()); },
        null
    );
}

function hideXclickedMsg() {
    var el = document.getElementById(_dbBarMsgId);
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
