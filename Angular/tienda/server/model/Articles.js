var mongoose = require('mongoose');
	
var articlesSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	img: {type: String, required: true},
	precio: {type: String, required: true},
	stock: String,
});
var Articles = mongoose.model('Articles', articlesSchema);
module.exports = Articles;