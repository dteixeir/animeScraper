(function() {
  
  var animesFactory = function($http) {
    var factory = {};
    var API = 'http://localhost:3000/animes/';

    factory.getAnimes = function() {
      return $http.get(API);
    };

    factory.getEpisodes = function(title) {
      return $http.get(API + title);
    };

    factory.getEpisode = function(title, id) {
      return $http.get(API + title + '/' + id);
    }

    return factory;
  };

  animesFactory.$inject = ['$http'];
  angular.module('clientApp.api.animes').factory('animesFactory', animesFactory);

  

}());