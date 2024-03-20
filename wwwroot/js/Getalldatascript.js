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
                alert('Data updated successfully:', response);
            })
            .catch(function (error) {
                console.error('Error updating data:', error);
            });
    };
    $scope.delete = function (calculate) {
        // Ask for confirmation before deleting
        var confirmation = confirm("Are you sure you want to delete this data?");
        if (confirmation) {
            var itemid = calculate.id;
            $http.delete('https://localhost:7028/api/Calculator/Deletevalue?Id=' + itemid, { data: calculate })/* delete web api used add id value*/
                .then(function (response) {
                   
                    var index = $scope.calculations.indexOf(calculate);
                    if (index !== -1) {
                        $scope.calculations.splice(index, 1);
                    }
                    alert('Data deleted successfully');
                })
                .catch(function (error) {
                    console.log('Error deleting data:', error);
                });
        }
    };

})