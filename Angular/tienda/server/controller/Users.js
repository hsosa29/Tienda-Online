var express = require('express');
var DB = require('../DB.js'),
	Users = require('../model/Users.js');
var Router = express.Router();

Router.post('/', (req, res, next) => {
	Users.getUsers({email: req.body.email, password: req.body.password},(error, result) => {
		if(error) res.status(200).jsonp({loginMsg:error});
		else {
			req.session.login = true;
			req.session.userLogin = result;
			res.status(200).jsonp({loginMsg:"Ok"});
		}
	});
});

module.exports = Router;