var modalsApp = angular.module('modalsApp', ['ngSanitize']);
modalsApp.controller('modalsCtrl', function($scope, $timeout){
    $scope.h3_title = 'Testing with Bootstrap modals.';
    $scope.modal_text = 'This is the text shown when modal pops-up.';
    $scope.resultConfirmModal = '';
    $scope.msg_alert_hide = true;
    $scope.msg_alert_txt = '';
    $scope.msg_alert_type = '';

    $scope.shModal_1 = function(id){
        $("#confirmModal").modal('show');

        $scope.modal_text = '¿Quieres eliminar el registro ' + id + '?';

        $scope.confirmResult = function(result){
            if(result === true){
                $scope.msg_alert_txt = 'Quiere <strong>eliminar</strong> el registro ' + id;
                $scope.msg_alert_type = 'alert-success';
            }else{
                $scope.msg_alert_txt = 'No quiere eliminar el registro ' + id;
                $scope.msg_alert_type = 'alert-danger';
            }
            $scope.msg_alert_hide = false;
            $("#msgAlert").fadeIn('slow');
            $timeout($scope.hideAlert, 3000);
        };
    };
    $scope.shModal_2 = function(id){
        $("#confirmModal").modal('show');

        $scope.modal_text = '¿Quieres actualizar el registro ' + id + '?';

        $scope.confirmResult = function(result){
            if(result === true){
                $scope.msg_alert_txt = 'Quiere actualizar el registro ' + id;
                $scope.msg_alert_type = 'alert-info';
            }

            if(result === false){
                $scope.msg_alert_txt = 'No quiere actualizar el registro ' + id;
                $scope.msg_alert_type = 'alert-warning';
            }

            $scope.msg_alert_hide = false;
            $("#msgAlert").fadeIn('slow');
            $timeout($scope.hideAlert, 3000);
        };
    };

    $scope.hideAlert = function(){
        $("#msgAlert").fadeOut('slow', function(){
            $scope.msg_alert_hide = true;//esto no es necesario ya que se hace el fade con jQuery y no con AngularJS
        });

    };

    $("#confirmModal").on('hidden.bs.modal', function () {
        $scope.msg_alert_hide = false;//esto no funciona
        console.log('confirmModal is hidden now.');
    })

});