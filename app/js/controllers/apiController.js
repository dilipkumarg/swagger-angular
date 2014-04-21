/**
 * Created by Dilip Kumar on 21/4/14.
 */

apiDocsApp.controller('apiController', function ($scope) {
    $scope.info = $scope.api.info;
    $scope.basePath = $scope.api.basePath;
    $scope.apiVersion = $scope.api.apiVersion;

    var apisArray = $scope.api.apisArray,
        apis = {};

    for (var i = 0; i < apisArray.length; i += 1) {
        var counter = 0,
            api = apisArray[i],
            id = api.name;
        while (typeof apis[id] !== "undefined") {
            counter += 1;
            id = id + "_" + counter;
        }
        api.id = id;
        apis[id] = api;
    }
    $scope.resources = apis;
});