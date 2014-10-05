// Services é criado para organizar e compartilhar seu código por toda sua aplicação,
// tornando assim reutilizável.

myApp.service('Math', function() {
    this.multiply = function(x, y) {
        return x * y;
    };
});
