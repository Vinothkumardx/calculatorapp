var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope, $http) {
    $scope.Registeradd = function () {

        var username = $scope.username;
        var password = $scope.password;
        var email = $scope.email;
        var firstname = $scope.firstname;
        var lastname = $scope.lastname;

        var requestdata = {
            username :username,
            password : password,
            Email : email,
            FirstName: firstname,
            LastName: lastname

        };
        
        $http.post('https://localhost:7028/api/User/register', requestdata)
            .then(function (response) {
               
                alert('Data Register successfully:', response);
            })
            .catch(function (error) {
               
                alert("Fill the all field...!");
            });

    }
})