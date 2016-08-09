'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp.component.show')
  .controller('AnimesCtrl', function (animesFactory) {
    var vm = this;
    vm.print = print;

    animesFactory.getAnimes().success(function(data) {
      vm.animes = data;
    });

    function print() {  
      
      console.log('hi');
    }

    

    function getAnimes() {
      return Animes.getAnimes().$promise;
    }

  });


