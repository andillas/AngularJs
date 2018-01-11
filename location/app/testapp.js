var module = angular.module('locApp', []);
module.controller('locAppCtrl', function ($scope, $location) {

    $scope.libros = [
        {'titulo': 'The design of every day things', 'autor': 'Don Norman', 'ano': 1998},
        {'titulo': 'El nombre del viento', 'autor': 'Patrik Rufus'},
        {'titulo': 'Game of Thrones', 'autor': 'R.R. Martin', 'ano': 2004}
    ];

    $scope.getUrlParamsJSON = function(isJson){
      var location = window.location.search;
      if(location.indexOf('?') > -1){
        location = location.split('?')[1];
      }
      var pairs = location.split('&');
      var result;
        if(isJson){
            result = {};
        }else{
            result = [];
        }

      pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      console.log(result);
      return result;
    };

    $scope.mylocation1 = $location.absUrl();
    $scope.mylocation2 = "jai";
    $scope.mylocation3 = $scope.getUrlParamsJSON()['idparam'];
});