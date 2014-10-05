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
