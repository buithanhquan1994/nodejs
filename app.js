var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var multer = require('multer');
const upload = multer();

// --------------- REQUIRE ROUTES ---------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eyescanRouter = require('./routes/eyescan');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// using body-parser to get data submitted
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// ---------------------- COOKIE,SESSION AND MIDDLEWARE --------------------------------
app.use(cookieParser());
// initialize express-session to allow us track the Logged-in user across session
app.use(session({

	secret:'randomstring',
	resave: true,
	saveUninitialized : true,   // true: can put cookie in res.cookies
	// cookie: {
	// 	secure: false, 	// ensures the browser only sends the cookie over HTTPS
	// 	//httpOnly: true, // Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
	// 	maxAge: 600000
	// }
}));

// middleware to check if user's cookie is still saved in browser and user is not set, automatically log the user out
function checkSignIn(req,res,next)
{
	if(req.session.user_info)
	{
		next();
	}else{
	 res.redirect('/users/login');
	}
	
}

//middleware check login

// --------------- DEFINE ROUTES ----------
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/eyescan',eyescanRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
