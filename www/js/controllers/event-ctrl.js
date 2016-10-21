'use strict';
angular.module('main')
.controller('EventCtrl', function ($log, $scope, Event, $ionicLoading, $timeout, $stateParams) {

  $log.log('Hello from your Controller: PostCtrl in module main:. This is your controller:', this);

  var eventId = $stateParams.id;
  $scope.isLoaded = false;
  $scope.event = Event.getById(eventId);

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
