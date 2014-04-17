/**
 * Created by dilip on 16/4/14.
 */
var apiDocsApp = angular.module('apiDocsApp', ['ngSanitize']);


apiDocsApp.controller("apiController", function ($scope) {

});

apiDocsApp.controller("endPointController", function ($scope) {
    $scope.isShow = false;
});

apiDocsApp.controller("methodController", function ($scope) {
    $scope.isShow = false;
    $scope.toggleContent = function () {
        $scope.isShow = !$scope.isShow;
    };

    $scope.isModelSchemaShow = false;
    $scope.modelSchema = $scope.method.responseSampleJSON;
    // hljs.highlightAuto($scope.method.responseSampleJSON).value;

    $scope.idPrefix = $scope.endPoint.name + "_" + $scope.method.nickname + "_" + $scope.method.method + "_" + $scope.index;
    $scope.methodUrl = "#!/" + $scope.endPoint.name + "/" + $scope.method.nickname + "_" + $scope.method.method + "_" + $scope.index;
});

apiDocsApp.directive("apiDirective", function () {
    return {
        restrict: 'E',
        templateUrl: "app/partials/api.html"
    }
});

apiDocsApp.directive("endPointDirective", function () {
    return {
        restrict: 'E',
        scope: {
            "endPoint": "="
        },
        templateUrl: "app/partials/endPoint.html"
    }
});

apiDocsApp.directive("methodDirective", function () {
    return {
        restrict: 'E',
        scope: {
            "method": "=",
            "endPoint": "=",
            "index": "@"
        },
        templateUrl: "app/partials/method.html"
    }
});