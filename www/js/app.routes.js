(function(){
    'use strict';

    routesBlock.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular.module('zooapp')
        .config(routesBlock);

    /*ngInject*/
    function routesBlock($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/app/home');

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'js/menu/menu.html',
                controller: 'Menu'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'js/home/index.html'
                    }
                }
            })
            .state('app.specie', {
                url: '/specie/{id:int}',
                views: {
                    'menuContent': {
                        templateUrl: 'js/specie/index.html',
                        controller: 'Specie'
                    }
                }
            });
    };

})()