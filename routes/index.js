var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign in' });
});

function requireLogin(req, res, next) {
	if(!(req.session.user)){
	req.session.user=req.query.uname;
	req.session.pwd=req.query.pwd;	
	}else if(req.session.user !== 'mahesh'){
		req.session.user=null;
	}
	
  if (req.session && req.session.user === 'mahesh') {
	  console.log('asdfsadf');
    next(); // allow the next route to run
  } else {
	  console.log('else'+ req.query.uname);
    // require the user to log in
	//next();
    res.render('index', { title: 'Sign in' });// or render a form, etc.
  }
}
router.get('/logout', function(req, res) {
	req.session.user=null;
    res.render('index', { title: 'Sign in' });
});
router.all("/*", requireLogin, function(req, res, next) {
	  console.log('admin login');


  next(); // if the middleware allowed us to get here,
          // just move on to the next route handler
});

router.get("/admin/posts", function(req, res) {
  next();
});


module.exports = router;
