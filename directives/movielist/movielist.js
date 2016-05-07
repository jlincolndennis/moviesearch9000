angular.module('movieSearch')
.directive('movielist', ['movieService', function(movieService) {
  return {
    restrict: 'E',
    templateUrl: "/directives/movielist/movielist.html",
    scope: {
      list: "="
    },
    link: function(scope, element, attrs, fn) {
      
    }
  }

}])
