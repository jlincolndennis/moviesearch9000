angular.module('movieSearch')
.factory('movieService', ['$http', '$log','$q', function ($http, $log, $q) {
  var cachedSearches = {};
  var cachedMovie = {}
  var searchResult = []
  var baseUrl = "http://www.omdbapi.com/?"

  var movieService = {

    searchMovies: function (term) {
      searchResult = [];
      var APIsearchParam = "s="
      var url = baseUrl + APIsearchParam + term

      return $q(function(resolve, reject){
        if (cachedSearches[term]) {
          searchResult = cachedSearches[term];
          $log.log('if search in cache', searchResult);
          resolve(searchResult);
        } else {
          $http.get(url).success(function(res){
            if(res.Response === "False") {
              searchResult.push(res);
              $log.error('If no movies found', searchResult)
              resolve(searchResult);
            } else {
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
              cachedSearches[term] = normalizedArr;
              searchResult = cachedSearches[term];
              $log.log('successful search', searchResult)
              this.resultList = searchResult;
              $log.log("end of method", this.resultList)
              resolve(searchResult);
            }
          }).error(function(errah){
            reject(errah)
          })
        }
      })
    },


    findMovie: function(id) {
      $log.info('IN SERVICE, YO', id)
      var APIMovieParam = "i="
      var url = baseUrl + APIMovieParam + id

      return $q(function(resolve, reject){
        if (cachedMovie[id]) {
          resolve(cachedMovie[id]);
        } else {
          $http.get(url).success(function(res){
            if(res.Response === "False") {
              resolve (res.Error);
            } else {
              cachedMovie[id] = res;
              $log.info(cachedMovie[id])
              resolve(cachedMovie[id])
            }
          }).error(function(errah){
            reject(errah)
          })
        }
      })

    }
  }
  return movieService;
}])
