(function() {
    'use strict';

    angular.module('zooapp')
           .factory('specieService',specieService);

    /*ngInject*/
    function specieService($http, apiConfig){
        
        return {
            getSpecie: function(id) {
                return $http.get(apiConfig.urlBase + '/specie/' + id);
            }
        }
    }
})();