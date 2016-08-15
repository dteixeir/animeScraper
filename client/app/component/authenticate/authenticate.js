'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp.component.authenticate')
  .controller('AuthenticateCtrl', function ($routeParams) {
    var vm = this;
    vm.submit = submit;


    function submit() {
      console.log('hah');
    }
  });
