angular.module('movieSearch', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<movielist list="searchResult"></movielist>'
      })
      .when('/:id/show', {
        template: '<movieinfo></movieinfo>'
      })
      .when('/404', {
        template: '<h1>The Page You Are Looking For Does Not Exist</h1>'
      })
      .otherwise({
        redirectTo: '/404'
      })
      $locationProvider.html5Mode(true);
});
