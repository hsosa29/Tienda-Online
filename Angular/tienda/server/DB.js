var mongoose = require('mongoose');

var DB = mongoose.connect('mongodb://localhost/Tienda');
module.exports = DB;