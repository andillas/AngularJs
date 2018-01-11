var selectsApp = angular.module('selectsApp', []);
selectsApp.controller('selectsCtrl', function($scope){
    $scope.h3title = 'Testing with selectors in AngularJs';
    $scope.pueblos = ['Parla', 'Soto del Real', 'Candeleda', 'Lanjarón', 'Lújar'];
    $scope.defaultSel = $scope.pueblos[2];
    $scope.sel = $scope.pueblos[3];
});