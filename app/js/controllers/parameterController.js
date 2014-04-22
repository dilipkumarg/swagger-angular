/**
 * Created by Dilip Kumar on 21/4/14.
 */

apiDocsApp.controller("parameterController", function ($scope) {
    var parameter = $scope.parameter;
    $scope.name = parameter.name;
    $scope.defaultValue = parameter.defaultValue;
    $scope.description = parameter.description;
    $scope.paramType = parameter.paramType;
    $scope.allowableValues = parameter.allowableValues;
    $scope.required = parameter.required;
    $scope.readOnly = $scope.$parent.readOnly;
    // TODO Remove line
    $scope.parameter = parameter;

    $scope.signatureParams = {
        sampleJSON: parameter.sampleJSON,
        isParam: true,
        signature: parameter.signature
    };

    var type = parameter.type || parameter.dataType;
    $scope.isBody = ($scope.paramType === "body");
    $scope.isFile = (type.toLowerCase() === "file");
    $scope.isArray = (type.toLowerCase === "array") || parameter.allowMultiple;
    $scope.isList = parameter.isList;

    $scope.contentTypeParams = {
        isParam: $scope.isBody,
        consumes: $scope.$parent.consumes
    }
});