var app = angular.module('vacApp', []);
app.controller('writeCtrl', function ($scope, $http, $window) {
    $scope.reason = "activiti异常报警";
    $scope.auditor = "li";

    $scope.applyProcess = function () {
        $http.post(
            "/alarm/applyProcess",
            {
                "reason" : $scope.reason,
                "auditor" : $scope.auditor
            }
        ).then(function (response) {
            if (response.data == true) {
                alert("操作成功！");
                $window.location.reload();
            }
        })
    }
});
app.controller('myProcess', function ($scope, $http) {

    $scope.vacList = [];

    $scope.myProcess = function () {
        $http.get(
            "/alarm/myProcess"
        ).then(function (response) {
            $scope.vacList = response.data;
        })
    }
});

/*

app.controller('myApprove', function ($scope, $http) {

    $scope.vacList = [];

    $scope.myApprove = function () {
        $http.get(
            "/alarm/myApprove"
        ).then(function (response) {
            $scope.vacRecordList = response.data;
        })
    }
});
*/


app.controller("myApprove", function ($scope, $http, $window) {
    $scope.vacTaskList = [];

    $scope.myApprove = function () {
        $http.get(
            "/alarm/myApprove"
        ).then(function (response) {
            $scope.vacTaskList = response.data;
        })
    };

    $scope.passApprove = function (taskId, result, reason) {
        $http.post(
            "/alarm/passApprove",
            {
                "id" : taskId,
                "alarm" : {
                    "auditor" : "cc",
                    "result" : result,
                    "reason" : reason
//                    "result" : result >= 1 ? "审核通过" : "审核拒绝"
                }
            }
        ).then(function (response) {
            if (response.data == true) {
                alert("操作成功！");
                $window.location.reload();
            } else {
                alert("操作失败！");
            }
        })
    }
});


app.controller("myHandle", function ($scope, $http, $window) {
    $scope.vacTaskList = [];

    $scope.myHandle = function () {
        $http.get(
            "/alarm/myHandle"
        ).then(function (response) {
            $scope.vacTaskList = response.data;
        })
    };

    $scope.handleAlarm = function (taskId, result) {
        $http.post(
            "/alarm/handleAlarm",
            {
                "id" : taskId,
                "alarm" : {
                    "auditor" : "cc",
                    "result" : result
//                    "result" : result >= 1 ? "审核通过" : "审核拒绝"
                }
            }
        ).then(function (response) {
            if (response.data == true) {
                alert("操作成功！");
                $window.location.reload();
            } else {
                alert("操作失败！");
            }
        })
    }
});


/*app.controller('myAuditRecord', function ($scope, $http) {

    $scope.auditVacRecordList = [];

    $scope.myAuditRecord = function () {
        $http.get(
            "/myAuditRecord"
        ).then(function (response) {
            $scope.auditVacRecordList = response.data;
        })
    }
});

app.controller('finishedRecord', function ($scope, $http) {

    $scope.vacRecordList = [];

    $scope.finishedRecord = function () {
        $http.get(
            "/finishedRecord"
        ).then(function (response) {
            $scope.vacRecordList = response.data;
        })
    }
});*/

app.controller('allApprove', function ($scope, $http) {

    $scope.allRecordList = [];

    $scope.allApprove = function () {
        $http.get(
            "/alarm/allApprove"
        ).then(function (response) {
            $scope.allRecordList = response.data;
        })
    }
});


