var app = angular.module('myapp', [])
app.controller('CalculatorController', function ($scope, $http) {
    $http.get('https://localhost:7028/api/Calculator/Getcalculatorlist')
        .then(function (response) {
            $scope.searchQuery = '';/* searchquery used in intial search value*/
            $scope.calculations = response.data;
            
           
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        })
    $scope.updateData = function (calculate) {
        $http.put('https://localhost:7028/api/Calculator/Updatevalue', calculate)
            .then(function (response) {
                console.log('Data updated successfully:', response);
            })
            .catch(function (error) {
                console.error('Error updating data:', error);
            });
    };
    $scope.delete = function (calculate) {
        $http.delete('https://localhost:7028/api/Calculator/Deletevalue', { data: calculate })
            .then(function (response) {
                console.log('data delete sussesfully', response);
                var index = $scope.calculations.indexOf(calculate);/*indexof is used in delete particular data*/
                if (index !== -1) {
                    $scope.calculations.splice(index, 1);
                }
            })
            .catch(function (error) {
                console.log('Error deleting data:', error);
            });
    };
})