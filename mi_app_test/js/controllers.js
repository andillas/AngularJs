/**
 * Created by eugenio on 05/02/2017.
 */
angular.module('librosApp', []).controller('TodosLosLibrosCtrl', function ($scope) {
    $scope.libros = [
        {'titulo': 'The design of every day things', 'autor': 'Don Norman', 'ano': 1998},
        {'titulo': 'El nombre del viento', 'autor': 'Patrik Rufus'},
        {'titulo': 'Game of Thrones', 'autor': 'R.R. Martin', 'ano': 2004}
    ];
});
