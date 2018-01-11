var directivasApp = angular.module('directivasApp', []);
//DIRECTIVA
directivasApp.directive('dirListado', function () {
    return{
        // template : 'Localidad: {{localidad.locald}}. Provincia: {{localidad.prov}}'
        templateUrl : 'directivas/localds.html'
    };
});//EODIR
//CONTROLADOR
directivasApp.controller('directivasCtrl', function($scope){
    $scope.test_title = "Test de directivas y ng-repeat variado.";
    $scope.disbl = true;
    $scope.localidades = [
        {locald : 'Soto del Real', prov : 'Madrid', coord : '40.754142, -3.786245', url : 'https://goo.gl/maps/6fGqKpWP3t42'},
        {locald : 'Candeleda - El Raso', prov : 'Ávila', coord : '40.172265, -5.328204', url : 'https://goo.gl/maps/8rLtVMFMxJB2'},
        {locald : 'Lanjarón', prov : 'Granada', coord : '36.920957, -3.483180', url : 'https://goo.gl/maps/N9kcEbE39kS2'},
        {locald : 'Parla', prov : 'Madrid', coord : '40.234800, -3.753368', url : 'https://goo.gl/maps/jpAFBvcqkn42'},
        {locald : 'Lújar', prov : 'Granada', coord : '36.822559, -3.370246', url : 'https://goo.gl/maps/V1KTy2WYVrR2'}
    ];
    $scope.localidad = {locald : 'Lanjarón', prov : 'Granada'};

    $scope.style_margin_top = {
        "margin" : "40px 0px 20px 10px"
    }

    $scope.testDisabled = function(loc){
        return loc === 'Parla';
    }
    $scope.btnText = function(loc){
        return loc === 'Parla' ? 'No volver' : 'Volver';
    }
    $scope.popUpAlert = function(txt){
        alert(txt);
    }
});//EOCTRL