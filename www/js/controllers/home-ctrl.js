'use strict';
angular.module('main')
.controller('HomeCtrl', function ($log, $scope, Post, $ionicLoading, $state, $timeout) {

  $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);
  $scope.isLoaded = false;
  $scope.posts = Post.getAll();
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
  }, 1500);

  $scope.viewPost = function (value) {
    $state.go('main.post', { 'id': value.id });
  };
});
