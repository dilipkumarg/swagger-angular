/**
 * Created by dilip on 16/4/14.
 */
var apiDocsApp = angular.module('apiDocsApp', ['ngSanitize']);

apiDocsApp.controller("responseContentTypeController", function ($scope) {
    $scope.produces = $scope.model.produces;
    if (!$scope.produces || $scope.produces.length < 1) {
        $scope.produces = ["application/json"]
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

apiDocsApp.directive("responseType", function () {
    return {
        restrict: 'E',
        scope: {
            model: "="
        },
        templateUrl: "app/partials/responseContentType.html"
    }
});

apiDocsApp.directive("parametersDirective", function () {
    return {
        restrict: 'E',
        scope: {
            parameters: "=",
            readOnly: "="
        },
        templateUrl: "app/partials/parameters.html"
    }
});