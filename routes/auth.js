var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET /auth/login/github
router.get('/login/github', passport.authenticate('github'));

// GET /auth/github/return
router.get('/github/return', 
	passport.authenticate('github', { failureRedirect: '/' }),
	function(req, res, next) {
		console.log(req);
		res.redirect('/profile');
	});


// GET /auth/logout
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});


// GET /auth/login/facebook
router.get('/login/facebook', passport.authenticate('facebook', { scope: ["email"]}));

// GET /auth/facebook/return
router.get('/facebook/return', 
	passport.authenticate('facebook', { failureRedirect: '/' }),
	function(req, res, next) {
		console.log(req);
		res.redirect('/profile');
	});


module.exports = router;