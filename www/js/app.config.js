(function(){
    'use strict';

    angular.module('zooapp')
        .config(configBlock);

    /*ngInject*/
    function configBlock($ionicConfigProvider){

        $ionicConfigProvider.tabs.position('top');

    };

})()