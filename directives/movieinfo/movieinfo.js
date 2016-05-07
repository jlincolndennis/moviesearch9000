angular.module('movieSearch')
.directive('movieinfo', ['$log','$routeParams','movieService', function($log, $routeParams, movieService) {

  return {
    restrict: 'E',
    templateUrl: "/directives/movieinfo/movieinfo.html",
    scope: {},
    link: function (scope, element, attr, fn) {

      movieService.findMovie($routeParams.id).then(function(data){
        $log.info('in directive', data)
        scope.movie = data;
      })
    }
  }
}])
