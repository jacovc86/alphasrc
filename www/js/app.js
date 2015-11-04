// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.deals', {
    url: '/deals',
    views: {
      'menuContent': {
        templateUrl: 'templates/deals.html'
      }
    }
  })

  .state('app.pizzas', {
      url: '/pizzas',
      views: {
        'menuContent': {
          templateUrl: 'templates/pizzas.html'
        }
      }
    })
    .state('app.salad', {
      url: '/salad',
      views: {
        'menuContent': {
          templateUrl: 'templates/salad.html',
        }
      }
    })
    .state('app.pasta', {
      url: '/pasta',
      views: {
        'menuContent': {
          templateUrl: 'templates/pasta.html',
        }
      }
    })
    .state('app.yemen', {
      url: '/yemen',
      views: {
        'menuContent': {
          templateUrl: 'templates/yemen.html',
        }
      }
    })
    .state('app.baked', {
      url: '/baked',
      views: {
        'menuContent': {
          templateUrl: 'templates/baked.html',
        }
      }
    })
    .state('app.treats', {
      url: '/treats',
      views: {
        'menuContent': {
          templateUrl: 'templates/treats.html',
        }
      }
    })
    .state('app.deserts', {
      url: '/deserts',
      views: {
        'menuContent': {
          templateUrl: 'templates/deserts.html',
        }
      }
    })
    .state('app.drinks', {
      url: '/drinks',
      views: {
        'menuContent': {
          templateUrl: 'templates/drinks.html',
        }
      }
    })
    .state('app.branches', {
      url: '/branches',
      views: {
        'menuContent': {
          templateUrl: 'templates/branches.html',
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
        }
      }
    })

  .state('app.yourorder', {
    url: '/yourorder',
    views: {
      'menuContent': {
        templateUrl: 'templates/yourorder.html',
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/deals');
});
