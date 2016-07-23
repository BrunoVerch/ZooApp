(function() {
    'use strict';

    angular.module('zooapp')
           .controller('Specie',specieController);

    /*ngInject*/
    function specieController($stateParams, specieService){
        var vm = this;
        vm.specie = {};
        var idSpecie = $stateParams.id;

        specieService
            .getSpecie(idSpecie)
            .then(function(data) {
                if(data){
                    vm.specie = data;
                }
            });
    }
})();