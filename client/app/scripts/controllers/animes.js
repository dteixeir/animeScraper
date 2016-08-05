'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AnimesCtrl', function (Anime) {
    var vm = this;

    vm.animes = Anime.getList().$object;

  });
