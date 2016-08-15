(function() {
  
  var animesFactory = function($http) {
    var factory = {};
    var port = 8080;
    var API = 'http://localhost:' + port + '/animes/';
    var API = 'http://localhost:' + port + '/animes/';
    

    factory.getAnimes = function() {
      return $http.get(API);
    };

    return factory;
  };

  animesFactory.$inject = ['$http'];
  angular.module('clientApp.api.animes').factory('animesFactory', animesFactory);

}());