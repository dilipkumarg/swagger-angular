/**
 * Created by Dilip Kumar on 21/4/14.
 */

apiDocsApp.controller('resourceController', function ($scope) {
    var resource = $scope.model;
    $scope.id = resource.id;
    $scope.name = resource.name;
    $scope.description = resource.description;
    $scope.url = resource.url;

    $scope.isEndPointsShow = false;
    $scope.toggleEndPoints = function () {
        $scope.isEndPointsShow = !$scope.isEndPointsShow;
    };

    var operationsArray = resource.operationsArray,
        methods = {};

    for (var i = 0; i < operationsArray.length; i += 1) {
        var counter = 0,
            method = operationsArray[i],
            id = method.nickname;

        while (typeof methods[id] !== "undefined") {
            counter += 1;
            id = id + "_" + counter;
        }
        method.nickname = id;
        methods[id] = method;
    }

    $scope.methods = methods;
});