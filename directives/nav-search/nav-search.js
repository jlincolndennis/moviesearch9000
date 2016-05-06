angular.module('movieSearch')
.directive('navSearch', ['movieService', '$log', function(movieService, $log) {
  return {
    restrict: 'E',
    templateUrl: "/partials/nav-search.html"
    // scope {
    //
    // }
    // link: function(scope, element, attrs, fn) {
    //
    //   scope.searchForMovies  = function() {
    //     movieService.searchMovies(scope.query.title).then(function(data) {
    //       scope.view.results = data;
    //     })
    //   }

      // scope.searchForMovies = function () {
      //   var newQuery = angular.copy(scope.query.title);
      //   scope.query = {};
      //   scope.myForm.$setUntouched();
      //   movieService.searchMovies(newQuery);
      // }
    // }
  }
}]);
