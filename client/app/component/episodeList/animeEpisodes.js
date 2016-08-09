'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp.component.episodeList')
  .controller('AnimeEpisodesCtrl', function ($routeParams, animesFactory) {
    var vm = this;
    vm.title = $routeParams.title;


    animesFactory.getEpisodes(vm.title).success(function(data) {
      vm.episodes = data;
    });
  });
