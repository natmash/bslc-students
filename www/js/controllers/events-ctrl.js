'use strict';
angular.module('main')
  .controller('EventsCtrl', function ($log, $scope, Events, $ionicLoading, $timeout, $stateParams) {

    $log.log('Hello from your Controller: EventsCtrl in module main:. This is your controller:', this);

    var eventId = $stateParams.id;
    $scope.events = Events.getAll();
    $scope.isLoaded = false;
    $scope.event = Events.getById(eventId);

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

    $scope.viewEvent = function (value) {
      $state.go('main.event', { 'id': value.id });
    };
  });
