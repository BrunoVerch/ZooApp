(function() {
  'use strict';
  
  angular.module('zooapp')
    .run(runBlock);

  /*ngInject*/
  function runBlock($ionicPlatform){

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
        
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

  }

})();
