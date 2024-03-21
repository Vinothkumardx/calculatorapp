var app = angular.module("myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "Login.cshtml",
            controller: "mycontroller"
        })
        .when("/register", {
            templateUrl: "Register.cshtml",
            controller: "myctrl"
        })
        .otherwise({ redirectTo: "/login" });
});

app.controller("mycontroller", function ($scope, $location,$http) {
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
                alert(error);
            })
    };

    $scope.register = function () {
        $location.path("/register");
    };
});

var app = angular.module("myapp", []);

app.controller("myctrl", function ($scope,$http) {
    $scope.Registeradd = function () {

        var username = $scope.username;
        var password = $scope.password;
        var email = $scope.email;
        var firstname = $scope.firstname;
        var lastname = $scope.lastname;

        var requestdata = {
            username: username,
            password: password,
            Email: email,
            FirstName: firstname,
            LastName: lastname

        };
        console.log(username);
        $http.post('https://localhost:7028/api/User/register', requestdata)
            .then(function (response) {

                alert('Data Register successfully:', response);
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });

    }
});
