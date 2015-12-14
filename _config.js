var ids = {
  instagramKey: process.env.INSTAGRAM_KEY,
  mongoURI : {
    development: 'mongodb://localhost/brunchBlog',
    production: process.env.MONGOLAB_URI
  }
};




module.exports = ids;
