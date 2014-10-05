// Filters são usados em conjunto com arrays de dados e também saídas de loops.
// Se você estiver em um loop de dados e quiser filtrar coisas específicas,
// você está no lugar certo, você pode também usar os Filters para filtrar
// o que um usuário escreveu dentro de um input por exemplo.

myApp.filter('reverse', function() {
    var reverseFunction = function(input, uppercase) {
        var out = '';
        for (var i = 0; i < input.length; i+= 1) {
            out = input.charAt(i) + out;
        }

        if (uppercase)
            out = out.toUpperCase();

        return out;
    };

    return reverseFunction
});
