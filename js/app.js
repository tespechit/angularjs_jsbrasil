var myApp = angular.module('myApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html'
    })
    .when('/basico', {
        controller: 'BasicCtrl',
        templateUrl: 'views/basico.html'
    })
    .when('/diretiva', {
        templateUrl: 'views/diretiva.html'
    })
    .when('/services', {
        controller: 'ServiceCtrl',
        templateUrl: 'views/services.html'
    })
    .when('/filtros', {
        controller: 'FilterCtrl',
        templateUrl: 'views/filtros.html'
    })
    .when('/two_bind', {
        controller: 'TwoBindCtrl',
        templateUrl: 'views/two_bind.html'
    })
    .when('/http', {
        templateUrl: 'views/xhr_http.html'
    })
    .when('/dom', {
        templateUrl: 'views/dom.html'
    })
    .when('/expressions', {
        templateUrl: 'views/expressions.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
