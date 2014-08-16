

// __________________________________________________________ REQUIRES
var express = require('express');
var bodyParser = require('body-parser');



// __________________________________________________________ PASSPORT

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
		passport.serializeUser(function(user, done) {
		  done(null, user.id);
		});

		passport.deserializeUser(function(id, done) {
		  User.findById(id, function(err, user) {
		    done(err, user);
		  });
		});


var passport = require('passport')
	, GoogleStrategy = require('passport-google').Strategy;




// __________________________________________________________ EXPRESS: USE

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/controllers'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// __________________________________________________________ PAGE REQUESTS
app.get('/', function(req, res) {
	res.render('no5-login');
});

app.post('/login', function(req, res) {
  res.redirect('/workspace');
});

app.get('/workspace', function(req, res) {
	res.render('no5-workspace');
});





// __________________________________________________________ PASSPORT GOOGLE

// // Redirect the user to Google for authentication.  When complete, Google
// // will redirect the user back to the application at
// //     /auth/google/return
// app.get('/auth/google', passport.authenticate('google'));

// // Google will redirect the user to this URL after authentication.  Finish
// // the process by verifying the assertion.  If valid, the user will be
// // logged in.  Otherwise, authentication has failed.
// app.get('/auth/google/return', 
//   passport.authenticate('google', { successRedirect: '/',
//                                     failureRedirect: '/login' }));

// passport.use(new GoogleStrategy({
// 	returnURL: 'http://www.example.com/auth/google/return',
// 	realm: 'http://www.example.com/'
// 	},
// 	function(identifier, profile done) {
// 		User.findOrCreate({ openId: identifier }, function(err, user) {
// 			done(err, user);
// 		});
// 	}
// ));


// __________________________________________________________ START SERVER
var server = app.listen(3705, function() {
  console.log('Express server listening on port ' + server.address().port);
});




















