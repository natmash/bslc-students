'use strict';
angular.module('main')
  .controller('PrayerCtrl', function ($log, $scope, Prayer, $ionicLoading, $timeout, $stateParams) {

    $log.log('Hello from your Controller: PrayerCtrl in module main:. This is your controller:', this);

    var postId = $stateParams.id;
    $scope.prayers = Prayer.getAll();
    $scope.isLoaded = false;
    $scope.prayer = Prayer.getById(postId);

    $ionicLoading.show({
      templateUrl: 'templates/loading.html',
      animation: 'fade-in',
      showBackdrop: false,
      maxWidth: 400,
      scope: $scope,
      showDelay: 2
    });

    $timeout(function () {
      $scope.isLoaded = true;
      $ionicLoading.hide();
    }, 1200);
  });
