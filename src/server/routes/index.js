var express = require('express');
var router = express.Router();
var key = require('../../../_config.js');
var request = require('request');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, '../../client', 'index.html'));
// });


// https://api.instagram.com/v1/users/self/feed?access_token=61f8b631abd34732a3bcd8c73d0d73a9

router.post('/api/instagram', function(req, res) {
  request({
    method: 'GET',
    url: "https://api.instagram.com/v1/tags/brunch/media/recent?client_id="+key.instagramKey
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});




module.exports = router;
