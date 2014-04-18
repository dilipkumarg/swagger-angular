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

    $scope.idPrefix = $scope.endPoint.name + "_" + $scope.method.nickname + "_" + $scope.method.method + "_" + $scope.index;
    $scope.methodUrl = "#!/" + $scope.endPoint.name + "/" + $scope.method.nickname + "_" + $scope.method.method + "_" + $scope.index;
});

apiDocsApp.controller("signatureController", function ($scope) {
    $scope.isModelSchemaShow = false;
    $scope.modelSignature = $scope.signature;
    $scope.modelSchema = $scope.json;
    if (typeof $scope.modelSchema !== "undefined" && $scope.modelSchema !== null) {
        $scope.modelSchema = hljs.highlightAuto($scope.modelSchema).value;
    }
});
apiDocsApp.controller("sandBoxFormController", function ($scope) {
    $scope.isParamsShow = ($scope.method.parameters.length > 0) ? true : false;

});

apiDocsApp.controller("parameterController", function ($scope) {
    
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

apiDocsApp.directive("signatureDirective", function () {
    return {
        restrict: 'E',
        scope: {
            "signature": "=",
            "json": "="
        },
        templateUrl: "app/partials/signature.html"
    }
});

apiDocsApp.directive("responseTypeDirective", function () {
    return {
        restrict: 'E',
        scope: {
            "produces": "="
        },
        templateUrl: "app/partials/responseType.html"
    }
});

apiDocsApp.directive("sandBoxForm", function () {
    return  {
        restrict: 'E',
        scope: {
            "method": "="
        },
        templateUrl: "app/partials/sandBoxForm.html"
    }
});

apiDocsApp.directive("parameterDirective", function () {
    return {
        restrict: 'A',
        scope: {
            "parameter": "="
        },
        templateUrl: "app/partials/parameter.html"
    }
});