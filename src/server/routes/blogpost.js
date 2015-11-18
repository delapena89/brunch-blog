var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Review = mongoose.model('reviews');
var passport = require('passport');
var local = require('passport-local');

// post single review
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

// get ALL reviews
router.get('/brunch-reviews', function(req,res,next) {
  Review.findQ()
  .then(function(results) {
res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});


// delete single review
router.delete('/brunch-reviews/:id', function(req, res, next) {
  console.log(req.params.id, 'hello');
  Review.findByIdAndRemoveQ(req.params.id)
  .then(function(response) {
    console.log(response, 'delete');
    res.json(response);
  }).catch(function(response) {
    console.log(response,'failure');
    res.json({'message': response});
  }).done();
});

// get single review
router.get('/brunch-reviews/:id', function(req, res, next) {
  console.log(req.params.id, 'single review get');
  Review.findByIdQ(req.params.id)
  .then(function(response) {
    console.log(response,'got it');
    res.json(response);
  }).catch(function(response){
    console.log(response, 'failure');
    res.json({'message': response});
  }).done();
});

// put single review
router.put('/brunch-reviews/:id/:update', function(req, res, next) {
  console.log(req.params.id, 'single review put');
  var update = {
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
  };
  Review.findByIdAndUpdateQ(req.params.id, update)
  .then(function(response) {
    console.log(response, 'put got it');
    res.json(response);
  }).catch(function(response) {
    console.log(response, 'put failure');
    res.json({'message': response});
  }).done();
});





module.exports = router;
