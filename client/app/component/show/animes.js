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
    
    // variables
    var vm = this;

    // function routing
    vm.toggleFollow = toggleFollow;

    getAnimes();

    function toggleFollow(title) {
      animesFactory.updateFollowing(title).then(function success() {
        getAnimes();
      });
    }

    function getAnimes() {
      animesFactory.getAnimes().success(function(data) {
        vm.animes = data;
      });
    }

  });


