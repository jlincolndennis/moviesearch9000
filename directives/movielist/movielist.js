angular.module('movieSearch')
.directive('movielist', function() {
  return {
    restrict: 'E',
    templateUrl: "/directives/movielist/movielist.html",
    scope: {
      list: '='
    },
    link: function(scope, element, attrs, fn) {

    }
  }

})
