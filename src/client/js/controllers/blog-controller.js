app.controller('blogCtrl', ['$scope', '$rootScope','httpService','$location', function($scope, $rootScope, httpService, $location){

  $scope.edit = false;

  $scope.trueScope = function() {
    $scope.edit = true;
    console.log($scope.edit);
  };

  $scope.falseScope = function() {
    $scope.edit = false;
    console.log($scope.edit);
  };


  $scope.addBlogPost = function(){
    $scope.reviews = httpService.addBlogPost($scope.review);
     $location.path('/brunch-reviews');
    };

  $scope.getBlogPosts = function(){
    httpService.getBlogPosts()
    .success(function(response){
      $scope.reviews = response;
      console.log($scope.reviews);
    });

  $scope.deleteBlogPost = function(id) {
    httpService.deleteBlogPost(id)
    .success(function(response){
      $scope.reviews = $scope.reviews.filter(function (review) {
        return review._id !== response._id;
      });
    });
  };

  $scope.getSingleBlogPost  = function(id) {
    httpService.getSingleBlogPost(id)
    .success(function(response) {
      console.log(response);
      $scope.editReview = response;
    });
  };

  $scope.editSingleBlogPost = function(id, update) {
    var update = $scope.editReview;
    httpService.editSingleBlogPost(id, update)
    .success(function(update) {
      console.log(update);
    });
  };


};





$scope.getBlogPosts();


  }]);
