angular.module('movieSearch')
.controller('MainController', ['$scope', '$log', 'movieService', function($scope, $log, movieService){
  $scope.query = {}

  $scope.searchForMovies = function() {
    console.log('yo');
    var newQuery = angular.copy($scope.query.title)
    movieService.searchMovies(newQuery).then(function(data) {
      $scope.searchResult = data;
    })
  }
}])
