(function() {
  'use strict';

  angular.module('clientApp')

  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('auth');
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
      .when('/authenticate/', {
        templateUrl: '/component/authenticate/authenticate.html',
        controller: 'AuthenticateCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/authenticate'
      });
  })

}());