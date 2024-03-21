var app = angular.module("myapp", []);

app.controller("mycontroller", function ($scope, $http) {
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;

        var requestdata = {
            username: username,
            password: password
        };

        $http.post('https://localhost:7028/api/User/login', requestdata)
            .then(function (response) {
                alert("Login sucessfully", response)
            })
            .catch(function (error) {
                alert("Username or password missmatch...!", error);
            })
    }
    
});