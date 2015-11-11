var mongoose = require('mongoose');
var User = require('./src/server/models/user.js');

// var userSeed = [
//   {
//     username: 'Luis',
//     password: '123'
//   }
// ];

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

module.exports = databaseSeed;
