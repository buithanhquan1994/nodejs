var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
const upload = multer();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


// middleware  function to check for logged-in users


/* Login form */
router.get('/login',(req, res)=>{
	res.render('authenticate/login',{title:'Login Page'});
})

router.post('/login',(req, res)=>{
  const info_user = {
    user_name : 'admin',
    password  : 'admin'
  };
	if(req.body.username === info_user.user_name && req.body.password === info_user.password)
	{
		req.session.user_info = JSON.stringify(info_user);
    console.log('authenticate');
		res.redirect('/');
	}else{
		res.redirect('/users/login',{title:'Login Page',msg_error:'LOGIN FAIL!'});
	}
});

/* Logout */

router.get('/logout',(res, req, next)=>{

	if(req.session.user_info)
	{
		req.session.destroy(function(err){
      console.log(err);
    });
		res.redirect('/users/login');
	}else{
		res.redirect('/users/login');
	}
});


module.exports = router;
