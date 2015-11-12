var express = require('express');
var router = express.Router();
var key = require('../../../_config.js');
var request = require('request');


router.post('/api/instagram', function(req, res) {
  request({
    method: 'GET',
    dataType: 'jsonp',
    url: "https://api.instagram.com/v1/tags/brunch/media/recent?client_id="+key.instagramKey
  }, function(err, response){
    var resp = JSON.parse(response["body"]);
    console.log('data', resp["data"][0]["images"]['standard_resolution']);
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(resp['data']);
    }
  });
});




module.exports = router;
