app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addBlogPost: addBlogPost,
    getBlogPosts: getBlogPosts

  };

  return factory;

  function addBlogPost(payload){
    $http.post('/brunch-reviews', payload)
      .then(function(response) {
        console.log('hello');
        console.log('payload', payload);
        return response.data;
    });
    }

  function getBlogPosts() {
    $http.get('/brunch-reviews')
    .then(function(response){
      return response.data;
    });
  }
}
