var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Review = mongoose.model('reviews');
var passport = require('passport');
var local = require('passport-local');


router.post('/brunch-reviews', function(req, res, next) {
  newReview = new Review({
    restaurantName: review.restaurantName,
    address: review.address,
    location: review.location,
    website: review.website,
    instagram1: review.instagram1,
    twitter: review.twitter,
    article: review.article,
    images: {}

  });
});



module.exports = router;
