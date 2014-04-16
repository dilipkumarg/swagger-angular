/**
 * Created by dilip on 16/4/14.
 */
var apiDocsApp = angular.module('apiDocsApp', []);

apiDocsApp.controller("mainController", function ($scope) {
    var url = variables.url;
    var options = {
        url: (url.indexOf("http") !== 0) ? buildURL(window.location.href.toString(), url) : url,
        supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
        onComplete: function (swaggerApi, swaggerUi) {
            log("API loading completed")
        },
        success: function () {
            console.log("Success, about to render", $scope.api);
        },
        progress: function (d) {
            console.log("Progress:", d);
        },
        failure: function (d) {
            console.log("Failed:", d);
        },
        onFailure: function (data) {
            console.log("Unable to Load SwaggerUI");
        },
        docExpansion: "none",
        useJQuery: true
    };

    $scope.api = new SwaggerApi(options);

    function buildURL(base, url) {
        console.log("base is " + base);

        if (url.length > 0) {
            return Util.baseUrl(url.charAt(0) !== "/") + url;
        }
        return Util.baseUrl(true);
    }

});

apiDocsApp.controller("apiController", function ($scope) {

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
            "endPoint": "="
        },
        templateUrl: "app/partials/method.html"
    }
});