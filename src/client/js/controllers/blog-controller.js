app.controller('blogCtrl', ['$scope', '$rootScope','httpService','$location', function($scope, $rootScope, httpService, $location){


  $scope.addBlogPost = function(){
    $scope.reviews = httpService.addBlogPost($scope.review);
    };

  $scope.getBlogPosts = function(){
    $scope.reviews = httpService.getBlogPosts($scope.reviews);
  };




  }]);
