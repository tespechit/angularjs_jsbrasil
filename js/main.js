myApp.controller('BasicCtrl', function($scope) {
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd Motto",
        "id": "89101112"
    };
});

myApp.controller('ServiceCtrl', ['$scope', 'Math', function($scope, Math) {
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

myApp.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
    // crie um Objeto user
    $scope.user = {};

    // Inicialize um modelo como uma string vazia
    $scope.user.name = '';

    // Nós precisamos fazer uma chamada e um get
    // o nome do usuário
    $http({
        method: 'GET',
        url: 'http://localhost:8000/api/users.json'
    })
    .success(function(data, status, headers, config) {
        // Veja aqui, nós estamos agora atribuindo este username
        // ao nosso Model existente!
        $scope.user.username = data.user.name;
    })
    .error(function(data, status, headers, config) {
        // algum erro aconteceu :(
    });
}]);


myApp.controller('EmailCtrl', ['$scope', '$http', function($scope, $http) {
    // crie um Objeto emails
    $scope.emails = {};
    $scope.emails.messages = [];

    $http({
        method: 'GET',
        url: 'http://localhost:8000/api/messages.json'
    })
    .success(function(data, status, headers, config) {
        $scope.emails.messages = data;
    })
    .error(function(data, status, headers, config) {
        alert("Deu erro: " + data);
    });
}])


myApp.controller ('EmailLocalCtrl', ['$scope', function ($scope) {

    // crie um Objeto emails
    $scope.emails = {};

    // simulando dados que nós iremos receber de volta do servidor
    // este é um ARRAY de OBJETOS
    $scope.emails.messages = [{
        "from": "Steve Jobs",
        "subject": "I think I'm holding my phone wrong :/",
        "sent": "2013-10-01T08:05:59Z"
    },{
        "from": "Ellie Goulding",
        "subject": "I've got Starry Eyes, lulz",
        "sent": "2013-09-21T19:45:00Z"
    },{
        "from": "Michael Stipe",
        "subject": "Everybody hurts, sometimes.",
        "sent": "2013-09-12T11:38:30Z"
    },{
        "from": "Jeremy Clarkson",
        "subject": "Think I've found the best car... In the world",
        "sent": "2013-09-03T13:15:11Z"
    }];

    $scope.deleteEmail = function(index) {
        $scope.emails.messages.splice(index, 1);
    };
}]);
