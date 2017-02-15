function urlBuilder() {
    return {
        bldUrl: function (controllerName, actionName, params) {
            var slash = "/";
            var routePartParams = "";
            var paramsExist = params !== undefined && params !== null && params !== "";
            if (paramsExist) {
                var questionMark = "?";
                var equals = "=";
                var anotherParamIndicator = "&";
                routePartParams += (questionMark);
                for (var key in params) {
                    if (params.hasOwnProperty(key)) {
                        var paramName = key.toString(),
                            paramValue = params[key].toString(),
                            routePartCurrentParam = paramName + equals + paramValue + anotherParamIndicator;
                        routePartParams += routePartCurrentParam;
                    }
                }
                routePartParams = routePartParams.slice(0, -1);
            }
            var routePartsArray = [slash, controllerName, actionName];
            var routePattern = _common.buildRoutePatternFromParts(routePartsArray);
            var url = _common.trimTrailingFwdSlashes(_common.stringFormat(routePattern, routePartsArray));
            if (routePartParams !== "") {
                url = _common.stringFormat("{0}{1}", [url, routePartParams]);
            }
            return url;
        }
    }
}