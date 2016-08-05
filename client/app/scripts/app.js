'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    //this needs to point to the server!
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/animes.html',
        controller: 'AnimesCtrl',
        controllerAs: 'vm'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'vm'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'vm'
      })
      .when('/animes/:title', {
        templateUrl: 'views/anime-view.html',
        controller: 'AnimeViewCtrl',
        controllerAs: 'vm'
      })
      .when('/episodes/:id', {
        templateUrl: 'views/animeEpisodes.html',
        controller: 'AnimeEpisodesCtrl',
        controllerAs: 'vm'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'vm'
      });
  })

  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })

  .factory('Anime', function(MovieRestangular) {
    return MovieRestangular.service('animes');
  })

  .factory('AnimeEpisode', function(MovieRestangular) {
    return MovieRestangular.service('episodes');
  })

  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })

  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
