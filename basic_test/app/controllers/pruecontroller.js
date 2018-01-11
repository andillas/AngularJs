var app = angular.module('basicApp', []);
app.controller('basicAppCtrl', function($scope, $http){

   $scope.getInfo = function(id){
       //cl($scope.rrr);
       //cl("el id es: " + id);
           $http({
               method: 'POST',
               data: {
                   /*'id' : '5'*/
               },
               url: 'api/controller/read.php'
           }).then(function successCallback(resp){
               if(resp.data.prod.length){
                   $scope.products = resp.data.prod;
               }else{
                   $scope.products = resp.data;
               }
           })
       };
    $scope.changeValue = function(){
        //$scope.holas = $("#inp-hola").val();

    };
    $scope.getValue = function(){
        if($scope.rrr)alert($scope.rrr);
        else alert("not defined yet");
    }
});

