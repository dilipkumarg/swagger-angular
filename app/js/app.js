/**
 * Created by dilip on 16/4/14.
 */
var apiDocsApp = angular.module('apiDocsApp', ['ngSanitize']);

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

apiDocsApp.directive("api", function () {
    return {
        restrict: 'E',
        templateUrl: "app/partials/main.html"
    }
});

apiDocsApp.directive("resource", function () {
    return {
        restrict: 'E',
        scope: {
            "model": "="
        },
        templateUrl: "app/partials/resource.html"
    }
});