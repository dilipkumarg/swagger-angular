/**
 * Created by dilip on 16/4/14.
 */
var apiDocsApp = angular.module('apiDocsApp', ['ngSanitize']);

apiDocsApp.controller("contentTypeController", function ($scope) {
    var model = $scope.model;
    $scope.contentTypes = (model.isParam) ? model.consumes : model.produces;
    $scope.paramType = (model.isParam) ? "parameter" : "response";
    $scope.paramTypeShow = (model.isParam) ? "Parameter" : "Response";
    $scope.model = model;
    if (!$scope.contentTypes || $scope.contentTypes.length < 1) {
        $scope.contentTypes = ["application/json"]
    }
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

apiDocsApp.directive("method", function () {
    return {
        restrict: 'E',
        scope: {
            "model": "="
        },
        templateUrl: "app/partials/method.html"
    }
});

apiDocsApp.directive("signature", function () {
    return {
        restrict: 'E',
        scope: {
            model: "="
        },
        templateUrl: "app/partials/signature.html"
    }
});

apiDocsApp.directive("contentType", function () {
    return {
        restrict: 'E',
        scope: {
            model: "="
        },
        templateUrl: "app/partials/contentType.html"
    }
});

apiDocsApp.directive("parametersDirective", function () {
    return {
        restrict: 'E',
        scope: {
            parameters: "=",
            readOnly: "=",
            consumes: "="
        },
        templateUrl: "app/partials/parameters.html"
    }
});

apiDocsApp.directive("textArea", function () {
    return {
        restrict: 'E',
        template: "<textarea  class='body-textarea' ng-required='{{required}}'" +
            "ng-readonly='{{readOnly}}'" +
            " ng-attr-placeholder='{{required && \"(required)\" || \"(optional)\"}}'" +
            " name='{{name}}'>{{defaultValue}}</textarea>"
    }
});