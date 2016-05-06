angular.module('movieSearch')
.controller('MainController', ['$scope', '$log', 'movieService', function($scope, $log, movieService){
  $scope.query = {}
  $scope.searchResult = movieService.searchResult;
}])
