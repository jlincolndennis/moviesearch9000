angular.module('movieSearch')
.directive('movieinfo', function() {
  return {
    restrict: 'E',
    templateUrl: "/directives/movieinfo/movieinfo.html",
    scope: {},
  }
})
