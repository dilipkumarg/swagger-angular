/**
 * Created by Dilip Kumar on 17/4/14.
 */

apiDocsApp.controller("mainController", function ($scope) {
    $scope.isShow = false;
    function buildURL(base, url) {
        console.log("base is " + base);

        if (url.length > 0) {
            return Util.baseUrl(url.charAt(0) !== "/") + url;
        }
        return Util.baseUrl(true);
    }

    var url = variables.url,
        options = {
            url: (url.indexOf("http") !== 0) ? buildURL(window.location.href.toString(), url) : url,
            supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
            success: function () {
                $scope.isShow = true;
                console.log("Success, about to render", $scope.api);
            },
            progress: function (d) {
                console.log("Progress:", d);
            },
            failure: function (d) {
                console.log("Failed:", d);
            },
            useJQuery: true
        };

    $scope.api = new SwaggerApi(options);
});