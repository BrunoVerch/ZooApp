(function() {
    'use strict';

    angular.module('zooapp')
           .controller('Orientation', orientationController);

    /*ngInject*/
    function orientationController($ionicScroll){
        var vm = this;

        vm.orientations = [
            {
                image: '',
                title: 'qualquer',
                description: 'dfjjsd'
            },
            {
                image: '',
                title: 'qualquer',
                description: 'dfjjsd'
            }
        ];
    }
})();