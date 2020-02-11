var mongoose = require('mongoose');  

var usersSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true}
});
var Users = mongoose.model('Users', usersSchema);
module.exports = Users;