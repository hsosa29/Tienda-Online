var express = require('express');
var DB = require('../DB.js'),
	Articles = require('../model/Articles.js');
var Router = express.Router();

Router.post('/new', (req, res) => {
	data = {nombre: req.body.nombre, precio: req.body.precio, stock: req.body.stock};
	Articles.insertArticle(data, (error, result) => {
		if(error) res.send(error);
		res.send(result);
	});
});

Router.get('/all', (req, res) => {
	Articles.getArticles((error, result) => {
		if(error) res.json(error);
		else res.status(200).jsonp(result);
	});
});

Router.post('/update', (req, res) => {
	Articles.updateArticles(req.body, (error, result) => {
		if(error) res.status(200).jsonp({updateMsg:error});
		else res.status(200).jsonp({updateMsg:"Ok"});
	});
});
module.exports = Router;