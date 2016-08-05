'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function (Movie, $routeParams, $location) {
    var vm = this;

    vm.editMovie = true;
    vm.movie = {};

    Movie.one($routeParams.id).get().then(function(movie) {
      vm.movie = movie;
      vm.saveMovie = function() {
        vm.movie.save().then(function() {
          $location.path('/movie/' + $routeParams.id);
        });
      };
    });
  });
