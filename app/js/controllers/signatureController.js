/**
 * Created by Dilip Kumar on 21/4/14.
 */
apiDocsApp.controller("signatureController", function ($scope) {
    var model = $scope.model;
    $scope.isSignatureModelShow = false;
    $scope.signature = model.signature;
//    $scope.sampleJSON = model.sampleJSON;
    if (model && model.signature !== "string" && model.sampleJSON) {
        $scope.isSignatureModelShow = true;
        $scope.isSchemaShow = false;
        if (model.sampleJSON !== null) {
            var highlightedContent = hljs.highlightAuto(model.sampleJSON);
            $scope.sampleJSON = highlightedContent.value;
            $scope.language = highlightedContent.language;
        }
    }
});
