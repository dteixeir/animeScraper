'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AnimeEpisodesCtrl', function (AnimeEpisode, $routeParams) {
    var vm = this;

    vm.print = print;
    vm.stuff = $routeParams;

    vm.episode = AnimeEpisode.one($routeParams.id).get().$object;
  });
