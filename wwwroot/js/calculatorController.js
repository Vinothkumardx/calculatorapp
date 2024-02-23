var app = angular.module("myapp", []);

app.controller('myctrl', function ($scope, $http) {
    $scope.addnumber = function () {
        var Num1 = parseFloat($scope.num1);
        var Num2 = parseFloat($scope.num2);

        // Validation: Check if Num1 and Num2 are valid numbers
        if (isNaN(Num1) || isNaN(Num2)) {
            $scope.result = "Please enter valid numbers for Num1 and Num2.";
            return;
        }

        // Debugging: Print input values
        console.log("Num1:", Num1);
        console.log("Num2:", Num2);
        console.log("Math Option:", $scope.mathOption);

        var requestData = {
            num1: Num1,
            num2: Num2,
            mathOption: $scope.mathOption
        };

        $http.post('https://localhost:7028/api/Calculator/Addvalue', requestData)
            .then(function (response) {
                var responseData = response.data;

                if (responseData && responseData.mathOption) {
                    switch (responseData.mathOption) {
                        case "+":
                            $scope.result = responseData.num1 + responseData.num2;
                            break;
                        case "-":
                            $scope.result = responseData.num1 - responseData.num2;
                            break;
                        case "*":
                            $scope.result = responseData.num1 * responseData.num2;
                            break;
                        case "/":
                            $scope.result = responseData.num1 / responseData.num2;
                            break;
                        default:
                            $scope.result = "Invalid mathoption";
                    }
                } else {
                    $scope.result = "MathOption is missing or undefined in the response.";
                }
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
                $scope.result = "An error occurred while fetching data from the API.";
            });


        // Reset input fields and mathoption after calculation
        $scope.num1 = "";
        $scope.num2 = "";
        $scope.mathOption = "";
    };
});
