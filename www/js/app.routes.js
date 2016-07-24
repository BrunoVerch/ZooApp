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
            })
            .state('app.contacts', {
                url: '/contacts',
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: 'js/contact/index.html'
                    }
                }
            })
            .state('app.contacts.contact', {
                url: '/contact',
                views: {
                    'tab-contact': {
                        templateUrl: 'js/contact/contact.html'
                    }
                }
            })
            .state('app.contacts.visit', {
                url: '/visit',
                views: {
                    'tab-visitation': {
                        templateUrl: 'js/contact/visit.html'
                    }
                }
            });
    };

})()