var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function($scope) {
    // Criando o namespace user details
    // Que nos ajudará no visual do DOM
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd Motto",
        "id": "89101112"
    };
}]);
