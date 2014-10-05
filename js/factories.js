// Uma factory é um serviço que pode retornar qualquer tipo de dado.
// Não há uma maneira definida de como você pode criar estes dados,
// você somente precisa retornar algo.
//
// Aqui eu estou criando um wrapper(empacotador) para XMLHttpRequest(XHR) do Angular.
//

myApp.factory('Server', function() {
    return {
        get: function(url) {
            return $http.get(url);
        },
        post: function(url) {
            return $http.post(url);
        }
    };
});
