var app = angular.module("myapp", []);

app.controller('myctrl', function ($scope, $http) {
    $scope.calculatenumber = function () {

       

        var Num1 = parseFloat($scope.num1);
        var Num2 = parseFloat($scope.num2);

        // Validation: Check if Num1 and Num2 are valid numbers
        if (isNaN(Num1) || isNaN(Num2)) {
            $scope.result = "Please enter valid numbers for Firstnumber and Secondnumber.";
            return;
        }

       
       

        var requestData = {
            num1: Num1,
            num2: Num2,
            mathOption: $scope.mathOption
        };

        $http.post('https://localhost:7028/api/Calculator/Addvalue', requestData)
            .then(function (response) {
             
               
                var statu = response.status;
                var data = response.data;
               
                console.log("statuscode:", statu);
                console.log("Data:", data);
               
                if ($scope.mathOption == "+") {
                    $scope.result = Num1 + Num2;
                }
                else if ($scope.mathOption == "-") {
                    $scope.result = Num1 - Num2;
                }
               else  if ($scope.mathOption == "*") {
                    $scope.result = Num1 * Num2;
                }
               else if ($scope.mathOption == "/") {
                    if (parseInt($scope.num2) !== 0) {
                        $scope.result = Num1 / Num2;
                    } else {
                        
                        $scope.result = "Cannot divide by zero";
                    }
                }
                else {
                    $scope.result = "Invalid math option";
                }
            })
            .catch(function (error) {
                if (error.response.status == 400) {
                    $scope.result = "Validation errors: " + JSON.stringify(error.data);

                }
                else {
                    console.error('Error fetching data:', error);
                    $scope.result = "An error occurred while fetching data from the API.";

                }
         })
            .finally(function () {
                // Reset input fields and mathoption after calculation
                $scope.num1 = "";
                $scope.num2 = "";
                $scope.mathOption = "";
            });
    };
});
