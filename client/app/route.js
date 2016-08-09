(function() {
  'use strict';

  angular.module('clientApp')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/animes', {
        templateUrl: '/component/show/animes.html',
        controller: 'AnimesCtrl',
        controllerAs: 'vm'
      })
      .when('/animes/:title', {
        templateUrl: '/component/episodeList/animeEpisodes.html',
        controller: 'AnimeEpisodesCtrl',
        controllerAs: 'vm'
      })
      .when('/animes/:title/:id', {
        templateUrl: '/component/episode/anime-view.html',
        controller: 'AnimeViewCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/animes'
      });
  })

}());