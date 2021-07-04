app.controller("solutionCtrl", function ($scope, $http, $location, $routeParams) {

    var challengeId = $routeParams.challengeId;
    $http.get("/solution/" + challengeId, window.getAjaxOpts())
        .then(function (response) {
            if (response != null && response.data != null) {
                if (!response.data[0].show_solution ) {
                    $location.url("/");
                }
            }
        });
    $scope.solutionLink = "challenges/solutions/" + challengeId;
});