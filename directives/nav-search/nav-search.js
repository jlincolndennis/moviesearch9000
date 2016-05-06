angular.module('movieSearch')
.directive('navSearch', ['movieService', '$log', function(movieService, $log) {
  return {
    restrict: 'E',
    templateUrl: "/directives/nav-search/nav-search.html",
    link: function(scope, element, attrs, fn) {
      scope.searchForMovies = function () {
        var newQuery = angular.copy(scope.query.title);
        scope.query = {};
        scope.myForm.$setUntouched();
        movieService.searchMovies(newQuery);
      }
    }
  }
}]);
