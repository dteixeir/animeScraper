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

    factory.updateFollowing = function(title) {
      return $http.put(API + 'following/' + title);
    }

    factory.toggleWatchedEpisode = function(id) {
      return $http.put('http://localhost:3000/episode/watched/' + id);
    }

    factory.setWatchedEpisode = function(id, boolVal) {
      return $http.put('http://localhost:3000/episode/watched/' + id + '/' + boolVal);
    }

    factory.getUnseenEpisodeCount = function(title) {
      return $http.get('http://localhost:3000/episode/unseen/' + title);
    }

    return factory;
  };

  animesFactory.$inject = ['$http'];
  angular.module('clientApp.api.animes').factory('animesFactory', animesFactory);

}());