angular.module('movieSearch')
.factory('movieService', ['$http', '$log','$q', function ($http, $log, $q) {
  var cachedMovies = {};
  var baseUrl = "http://www.omdbapi.com/?s="

  var movieService = {
    searchMovies: function (term) {
      var url = baseUrl + term

      return $q(function(resolve, reject){
        if (cachedMovies[term]) {
          resolve(cachedMovies[term]);
        } else {
          $http.get(url).success(function(res){
            var result = res.Search;
            var normalizedArr = []
            result.forEach(function (item){
              normalizedArr.push({
                id: item.imdbID,
                title: item.Title,
                imageUrl: item.Poster,
                type: item.Type,
                year: item.Year
              })
            })
            cachedMovies[term] = normalizedArr;
            resolve(cachedMovies[term])
          }).error(function(errah){
            reject(errah)
          })
        }
      })
    }
  }
  return movieService;
}])
