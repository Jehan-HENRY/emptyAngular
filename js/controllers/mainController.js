// MAIN CONTROLLER
function mainController($scope) {
    $scope.newPerson = {
        name: "",
        lastname: "",
        email: ""
    };
    $scope.persons = [];
    $scope.addPerson = function() {
        $scope.persons.push($scope.newPerson);
        $scope.newPerson = {};
    };
}
