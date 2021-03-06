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
     console.log($scope.reviews);
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

  $scope.editSingleBlogPost = function(id) {
    httpService.editSingleBlogPost(id, $scope.editReview)
    .success(function(update) {
      for (var i = 0; i < $scope.reviews.length; i++) {
        var obj = $scope.reviews[i];
        if (obj._id === update._id) {
          $scope.reviews[i] = update;
        }
      }
    });
  };


};





$scope.getBlogPosts();


  }]);
