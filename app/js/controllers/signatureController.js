/**
 * Created by Dilip Kumar on 21/4/14.
 */
apiDocsApp.controller("signatureController", function ($scope) {
    var model = $scope.model;
    $scope.isSignatureModelShow = false;
    $scope.signature = model.signature;
    $scope.sampleJSON = model.sampleJSON;
    if (model && model.signature !== "string") {
        $scope.isSignatureModelShow = true;
        $scope.isSchemaShow = false;
    }
});
