'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AnimeViewCtrl', function (Anime, $routeParams) {
    var vm = this;

    vm.print = print;

    vm.episodeList = Anime.one($routeParams.title).get().$object;

    function print(){
      console.log(vm.episodeList.count);
      vm.episodeList;
      console.log('hi!');
    }
  });
