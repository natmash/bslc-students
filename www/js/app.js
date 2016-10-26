// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngAnimate',
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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

      $ionicPlatform.ready(function () {
        var push = new Ionic.Push({
          "debug":true
        })
      });

      push.register(function (token) {
        console.log("My device token:", token.token);
        push.saveToken(token);
      })
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/authLogin');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('walk', {
        url: '/walk',
        templateUrl: 'templates/walk.html',
        controller: 'WalkCtrl',
      })
      .state('authLogin', {
        url: '/authLogin',
        templateUrl: 'templates/auth-login.html',
        controller: 'AuthCtrl',
      })
      .state('authReg', {
        url: '/authReg',
        templateUrl: 'templates/auth-reg.html',
        controller: 'AuthCtrl',
      })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.home', {
        url: '/home',
        views: {
          'pageContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('main.verses', {
        url: '/verses',
        views: {
          'pageContent': {
            templateUrl: 'templates/verses.html',
            controller: 'VerseCtrl'
          }
        }
      })
      .state('main.events', {
        url: '/events',
        views: {
          'pageContent': {
            templateUrl: 'templates/events.html',
            controller: 'EventsCtrl'
          }
        }
      })
      .state('main.event', {
        url: '/event/:id',
        views: {
          'pageContent': {
            templateUrl: 'templates/event.html',
            controller: 'EventsCtrl'
          }
        }
      })
      .state('main.post', {
        url: '/post/:id',
        views: {
          'pageContent': {
            templateUrl: 'templates/post.html',
            controller: 'PostCtrl'
          }
        }
      })
      .state('main.about', {
        url: '/about',
        views: {
          'pageContent': {
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl'
          }
        }
      })
      .state('main.messagelist', {
        url: '/messages',
        views: {
          'pageContent': {
            templateUrl: 'templates/messagelist.html',
            controller: 'MessageListCtrl'
          }
        }
      })
      .state('main.prayers', {
        url: '/prayers',
        views: {
          'pageContent': {
            templateUrl: 'templates/prayers.html',
            controller: 'PrayerCtrl'
          }
        }
      })
      .state('main.bookmark', {
        url: '/bookmark',
        views: {
          'pageContent': {
            templateUrl: 'templates/bookmark.html',
            controller: 'BookmarkCtrl'
          }
        }
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'pageContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
      .state('main.message', {
        url: '/message',
        views: {
          'pageContent': {
            templateUrl: 'templates/message.html',
            controller: 'MessageCtrl'
          }
        }
      })
      .state('main.category', {
        url: '/category',
        views: {
          'pageContent': {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'templates/list-detail.html',
            //controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });

  });
