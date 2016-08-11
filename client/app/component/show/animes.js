'use strict';

angular.module('clientApp.component.show')
  .controller('AnimesCtrl', function (animesFactory) {
    
    // variables
    var vm = this;

    // function routing
    vm.toggleFollow = toggleFollow;
    vm.getUnseenEpisodeCount = getUnseenEpisodeCount;

    getAnimes();

    function toggleFollow(title) {
      animesFactory.updateFollowing(title).then(function success() {
        getAnimes();
      });
    }

    function getAnimes() {
      animesFactory.getAnimes().success(function(data) {
        vm.animes = data;
        getUnseenEpisodeCount(vm.animes);
      });
    }

    function getUnseenEpisodeCount() {
      for(var i in vm.animes) {
        let k = i;
        animesFactory.getUnseenEpisodeCount(vm.animes[k].Title)
          .then( function successCallback(data) {
            vm.animes[k]["UnseenCount"] = data.data.data;
          }, function errorCallback(data) {
            vm.animes[k]["UnseenCount"] = 0;
          });
      }
    }

  });


