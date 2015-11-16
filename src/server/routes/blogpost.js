var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Review = mongoose.model('reviews');
var passport = require('passport');
var local = require('passport-local');


router.post('/brunch-reviews', function(req, res, next) {
  console.log(req.body);
  newReview = new Review({
    restaurantName: req.body.restaurantName,
    address: req.body.address,
    location: req.body.location,
    website: req.body.website,
    instagram1: req.body.instagram1,
    twitter: req.body.twitter,
    article: req.body.article,
    rating: req.body.rating,
    published: req.body.published,
    images: req.body.photos
  }).saveQ()
    .then(function(results){
      console.log('success',results);
      res.json(results);
    }).catch(function(results){
      console.log('error', results);
      res.json({'message': results});
    }).done();
});

router.get('/brunch-reviews', function(req,res,next) {
  Review.findQ()
  .then(function(results) {
    res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});



module.exports = router;
