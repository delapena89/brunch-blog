app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addBlogPost: addBlogPost,
    getBlogPosts: getBlogPosts

  };

  return factory;

  function addBlogPost(payload){
    $http.post('/users/brunch-reviews', payload)
      .then(function(response) {
        console.log('hello');
        console.log('payload', response);
        return response.data;
    });
    }

  function getBlogPosts() {
    return $http.get('/users/brunch-reviews');
  }


  }
