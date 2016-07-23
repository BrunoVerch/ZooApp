(function() {
    'use strict';

    menuController.$inject = ['scanService'];
    angular.module('zooapp')
           .controller('Menu',menuController);

    /*ngInject*/
    function menuController(scanService, $state){
        var vm = this;

        vm.openScan = function() {
            scanService.scan(sucess,error);

            function sucess(result){
                $state.go('app.specie', { id: result.text });
            }

            function error(){

            }
        }
    }
})();