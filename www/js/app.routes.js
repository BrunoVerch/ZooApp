(function(){
    'use strict';

    angular.module('zooapp')
        .config(routesBlock);

    /*ngInject*/
    function routesBlock($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: ''
            });

    };

})()