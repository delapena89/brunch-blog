app.controller('brunchCtrl', ['$scope', '$rootScope','$http','$location',  function($scope, $rootScope, $http, $location){

  $scope.loggedIn = function(){
    if ($rootScope.user) {
      return true;
    } else {
      return false;
    }
  };

  $scope.logOut = function() {
    $http.get('/users/logout')
    .then(function(data) {
      console.log(data);
      $rootScope.user = '';
    });
  };

  $scope.login = function () {
    console.log('click');
    $http.post('/users/login', {username: $scope.username, password: $scope.password})
    .then(function(data){
      console.log(data.data.user);
      $rootScope.user = data.data.user;
      $location.path('/add');
    });
  };


  $scope.register = function () {
    console.log($scope.regusername, $scope.regpassword);
    $http.post('/users/register', {username: $scope.regusername, password: $scope.regpassword})
    .then(function(data){
      console.log(data);
    });
  };

  $scope.instagram = function () {
    $http.post('/api/instagram')
    .then(function(response) {
      console.log(response['data'][0].images.standard_resolution.url);
        $scope.photos = response.data;
        console.log($scope.photos);
    });
  };

  $scope.instagram();







}]);
