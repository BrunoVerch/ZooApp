'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});

'use strict';
angular.module('main')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});

'use strict';
angular.module('main')
.controller('UserCtrl', function ($log, $rootScope,Ionic) {

  this.user = {};
  this.updateResult = function (type, result) {
    $log.log(result);
    this.user.resultType = type;
    this.user.result = result;
    $rootScope.$apply(); // $apply needed here for UI update
  };

  var responseCB = function (response) {
    this.updateResult('Response', response);
  }.bind(this);

  var rejectionCB = function (rejection) {
    this.updateResult('Rejection', rejection);

  }.bind(this);

  // tries to sign the user up and displays the result in the UI
  this.signup = function () {
    Ionic.Auth.signup(this.user)
    .then(responseCB)
    .catch(rejectionCB);
  };
  // tries to sign in the user and displays the result in the UI
  this.signin = function () {
    Ionic.Auth.login('basic', {'remember': true}, this.user)
    .then(responseCB)
    .catch(rejectionCB);
  };

});

'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log) {

  $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

});

'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, $http, $timeout, Main, Config, $cordovaDevice) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
  this.grade();

  // Proxy
  this.proxyState = 'ready';
  this.proxyRequestUrl = Config.ENV.SOME_OTHER_URL + '/get';

  this.proxyTest = function () {
    this.proxyState = '...';

    $http.get(this.proxyRequestUrl)
    .then(function (response) {
      $log.log(response);
      this.proxyState = 'success (result printed to browser console)';
    }.bind(this))
    .then($timeout(function () {
      this.proxyState = 'ready';
    }.bind(this), 6000));
  };

});

'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api',
    'SOME_OTHER_URL': '/proxy'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

'use strict';
angular.module('ZooApp', [
  // load your modules here
  'main', // starting with the main module
]);