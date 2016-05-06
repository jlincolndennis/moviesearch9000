angular.module('movieSearch')
.factory('movieService', ['$http', '$log',function ($http, $log) {

  var movieService = {
    searchResult: [],
    searchMovies: function (search) {
      $http.get('http://www.omdbapi.com/?s='+ search)
      .then(function (res) {
        console.log(res.data);
        var result = res.data.Search;
        result.forEach(function (item){
          movieService.searchResult.push({
            id: item.imdbID,
            title: item.Title,
            imageUrl: item.Poster,
            type: item.Type,
            year: item.Year
          })
        })
        return movieService.searchResult
      })
    }
  }
  return movieService;
}])
