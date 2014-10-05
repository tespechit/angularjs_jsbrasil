var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', 'Math', function($scope, Math) {
    // Criando o namespace user details
    // Que nos ajudará no visual do DOM
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd Motto",
        "id": "89101112"
    };

    var a = 12;
    var b = 24;

    var result = Math.multiply(a, b);

    $scope.a = a;
    $scope.b = b;
    $scope.result = result;
}]);


myApp.controller('MainCtrl', ['$scope', 'Server', function($scope, Server) {
    var jsonGet = "http://myserver/getURL";
    var jsonPost = "http://myserver/postURL";
    Server.get(jsonGet);
    Server.post(jsonPost);
}]);


myApp.controller('FilterCtrl', ['$scope', function($scope) {
    $scope.greeting = "Todd Motto";

    $scope.myNumbers = [10, 25, 35, 45, 60, 80, 100];

    $scope.lowerBound = 42;

    // Fazendo os filters
    $scope.greaterThanNum = function(item) {
        return item > $scope.lowerBound;
    }
}]);


myApp.controller('TwoBindCtrl', ['$scope', function($scope) {
    // Captura o modelo de dado
    // e/ou inicializa-o com a string existente
    $scope.myModel = '';
}]);
