// Há várias maneiras de definir Diretivas no DOM
//
// 1: como uma declaração de atributo
// <a custom-button>Click me</a>
//
// 2: como um elemento personalizado
// <custom-button>Click me</custom-button>
//
// 3: como uma classe (usado para compatibilização nos IE antigos)
// <a class="custom-button">Click me</a>
//
// 4: como um comentário (não é boa para este exemplo, entretanto)
// <!-- directive: custom-button -->

myApp.directive('customButton', function(){
    return {
        restrict: 'A',      // A = atributo, E = elemento, C = classe, M = comentário <!-- -->
        replace: true,      // substitui a marcação DOM com o template definido
        transclude: true,   // permite que conteúdo existente no DOM seja copiado dentro da diretiva
        template: '<a href="#" class="myawesomebutton" ng-transclude>' + 'Custom Button' + '<i class="icon-ok-sign"></i>' + '</a>',
        link: function(scope, element, attrs) {
            // Manipulação e Eventos DOM aqui
        }
    };
});
