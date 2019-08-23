var app = angular.module('vacApp', []);
app.controller('loginCtrl', function ($scope, $http) {
    $scope.userName = "mo";
    $scope.password = "123456";

    $scope.login = function () {
        $http.post(
            "/login",
            {
                "userName": $scope.userName,
                "password": $scope.password
            }
        ).then(function (response) {
            if (response.data == true) {
                window.location = "./alarm.html";
            }
        })
        // $http({
        //     url: "/login",
        //     method: "post",
        //     params: {
        //         "userName": $scope.userName,
        //         "password": $scope.password
        //     }
        // }).then(function (response) {
        //
        // })
    }

});