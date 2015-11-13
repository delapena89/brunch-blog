var mongoose = require('mongoose');
var User = require('./src/server/models/user.js');
var Review = require('./src/server/models/user.js');

var userSeed = [
  {
    username: 'Luis',
    password: '123'
  }
];

function databaseSeed() {
  User.find({}, function(err, documents){
    if(!err && documents.length===0) {
      for (var i = 0; i < userSeed.length; i++) {
        var newUser = new User(userSeed[i]);
        newUser.save(function(err, success){
          if(!err) {
            console.log('database object seeded.');
          }
        });
      }
    }
  });
}

var reviewSeed = [
  {
  restaurantName: "The Lobby",
  address: '111 Somewhere in Denver',
  location: 'LODO',
  website: 'thelobby.com',
  instagram: '@lobby',
  twitter: '@lobby',
  article: 'this is a super nice restaurant that has great food and towers of mimosas. Good prices and good food. Blah blah blah',
  images: {}
  }
];

function databaseSeedReview() {
  Review.find({}, function(err, documents){
    if(!err && documents.length===0) {
      for (var i = 0; i < reviewSeed.length; i++) {
        var newReview = new Review(reviewSeed[i]);
        newReview.save(function(err, success){
          if(!err) {
            console.log('Review object seeded.');
          }
        });
      }
    }
  });
}

module.exports = databaseSeed;
module.exports = databaseSeedReview;



