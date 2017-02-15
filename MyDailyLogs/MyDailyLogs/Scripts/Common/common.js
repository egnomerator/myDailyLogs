function common() {
    var cValues = {
        // controller list
        controllerHome: 'Home',
        // actions list
        actionCheckBackgroundSvc: 'CheckBackgroundSvc',
        actionSaveAsPrepForQuit: 'SaveAsPrepForQuit',
        actionSaveRecentLogEntries: 'SaveRecentLogEntries',
        actionStartBackgroundSvc: 'StartBackgroundSvc',
        actionStopBackgroundSvc: 'StopBackgroundSvc'
    };
    return {
        constants: Object.freeze(cValues),
        stringFormat: function (pattern, argsArray) {
            var p = pattern;
            for (var i = 0; i < argsArray.length; i++) {
                p = p.replace(new RegExp('\\{' + i + '\\}', 'gm'), argsArray[i]);
            }
            return p;
        },
        trimTrailingFwdSlashes: function (str) {
            return str.replace(/\/+$/, "");
        },
        buildRoutePatternFromParts: function (partsArray) {
            var leftCurlyBrace = "{";
            var rightCurlyBrace = "}";
            var slashPlaceHolder = leftCurlyBrace + "0" + rightCurlyBrace;
            var routePattern = slashPlaceHolder;
            for (var i = 1; i < partsArray.length; i++) {
                routePattern += leftCurlyBrace + (i).toString() + rightCurlyBrace + slashPlaceHolder;
            }
            return routePattern;
        }
    }
}