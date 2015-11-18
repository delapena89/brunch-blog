app.factory('httpService', httpService);
httpService.$inject = ['$http'];

function httpService($http) {
  var factory = {
    addBlogPost: addBlogPost,
    getBlogPosts: getBlogPosts,
    deleteBlogPost: deleteBlogPost,
    getSingleBlogPost: getSingleBlogPost,
    editSingleBlogPost: editSingleBlogPost
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

  function deleteBlogPost(id) {
    console.log('click');
    console.log(id);
    return $http.delete('/users/brunch-reviews/' + id);
  }

  function getSingleBlogPost(id) {
    console.log('click');
    console.log(id);
    return $http.get('/users/brunch-reviews/' + id);
  }

  function editSingleBlogPost(id, update) {
    return $http.put('/users/brunch-reviews/' + id, update);
  }







  }
