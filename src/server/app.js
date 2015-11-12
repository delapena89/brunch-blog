require('./models/user.js');

// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var swig = require('swig');
var config = require('../../_config');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var User = mongoose.model('users');
var Review = mongoose.model('reviews');

// seed database
var databaseSeed = require('../../seed');
databaseSeed();
var databaseSeedReview = require('../../seed');
databaseSeedReview();




// passport config
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());


// *** routes *** //
var routes = require('./routes/index.js');
var userRoutes = require('./routes/user.js');


// *** express instance *** //
var app = express();


// *** mongoose *** ///
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

// // *** view engine *** //
// var swig = new swig.Swig();
// app.engine('html', swig.renderFile);
// app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// *** main routes *** //
app.use('/', routes);
app.use('/users/', userRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .send('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
