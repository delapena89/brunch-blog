var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, unique: true},
  password: String
});

var Review = new Schema({
  restaurantName: String,
  address: String,
  location: String,
  website: String,
  instagram1: String,
  twitter: String,
  article: String,
  rating: Number,
  published: String,
  images: {}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
module.exports = mongoose.model('reviews', Review);

