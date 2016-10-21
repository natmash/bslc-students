'use strict';
angular.module('main')
  .controller('VerseCtrl', function ($log, $scope, Verse, $ionicLoading, $timeout, $stateParams) {

    $log.log('Hello from your Controller: VerseCtrl in module main:. This is your controller:', this);

    var postId = $stateParams.id;
    $scope.verses = Verse.getAll();
    $scope.isLoaded = false;
    $scope.verse = Verse.getById(postId);

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
