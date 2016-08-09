'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp.component.episode')
  .controller('AnimeViewCtrl', function ($routeParams, animesFactory) {
    var vm = this;

    animesFactory.getEpisode($routeParams.title, $routeParams.id).success(function(data) {
      vm.episode = data;
    });
  });
