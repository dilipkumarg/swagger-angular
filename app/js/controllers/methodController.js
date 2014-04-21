/**
 * Created by Dilip Kumar on 21/4/14.
 */
apiDocsApp.controller("methodController", function ($scope) {
    var method = $scope.model;
    $scope.method = method.method;
    $scope.parentId = method.parentId;
    $scope.nickname = method.nickname;
    $scope.path = method.path;
    $scope.summary = method.summary;
    $scope.notes = method.notes;
    $scope.parameters = method.parameters;
    $scope.responseMessages = method.responseMessages;
    $scope.type = method.type;
    $scope.parameters = method.parameters;

    $scope.isReadOnly = false; // set this to true, to prevent try out!
    $scope.isContentShow = false;
    $scope.toggleMethodContent = function () {
        $scope.isContentShow = !$scope.isContentShow;
    };

    $scope.signatureParams = {
        isParam: false,
        sampleJSON: method.responseSampleJSON,
        signature: method.responseClassSignature
    };
    $scope.contentTypeParams = {
        isParam: false,
        consumes: method.consumes,
        produces: method.produces
    };
    if (isFileTypeExists(method.parameters) && !$scope.contentTypeParams.consumes) {
        console.log("set content type");
        $scope.contentTypeParams.consumes = 'multipart/form-data';
    }


    function isFileTypeExists(parameters) {
        if (typeof parameters !== "undefined") {
            for (var i = 0; i < parameters.length; i += 1) {
                var param = parameters[i];
                var type = param.type || param.dataType;
                if (type.toLowerCase() === "file") {
                    return true;
                }
            }
        }
        return false
    }
});