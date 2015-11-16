app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
    })
    .when('/brunch-reviews', {
      templateUrl: 'views/brunch-reviews.html',
      controller: 'blogCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/reviewers', {
      templateUrl: 'views/reviewers.html'
    })
    .when('/login', {
      templateUrl: 'views/admin-login.html'
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'blogCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html'
    });
});
