angular.module('movieSearch')
.directive('searchDirective', ['$log','$location','movieService', function($log, $location, movieService) {

  return {
    restrict: 'E',
    templateUrl: "/directives/search/search.html",
    scope: {
      searchResult: "="
    },
    link: function (scope, element, attr, fn) {
      scope.searchForMovies = function(query) {
          $location.path('/')
          var newQuery = angular.copy(query.title);
          scope.query = {};
          movieService.searchMovies(newQuery).then(function(data) {
            $log.info('in search-dir', data)
            scope.searchResult = data
          })
        }
      }
    }
}]);
