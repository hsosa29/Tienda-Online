var Articles = require('../model/Articles.js');

module.exports.insertArticles = function (data, callback) {
	let newArticles = new Articles(data);
	
	newArticles.save((error) => {
		if(error) callback(error);
		callback(null,"Artículo nuevo guardado");
	});
};

module.exports.getArticles = function (callback) {
	Articles.find((err, Articles) => {
		if(err)
			callback(err);
		else {
      		callback(null,Articles);
      	}
	});
};

module.exports.updateArticles = function (data, callback) {
	let err = "";
	for (var i = 0; i < data.length; i++) {
		Articles.update({_id: data[i]._id}, {stock: data[i].stock}, (error, result) => {
			if(error) err = " "+data[i].nombre+",";
		});
	}
	if (err != "") callback("Problemas al actualizar:"+err);
	else callback(null,"Artículo actualizado correctamente");
};

module.exports.deleteArticles = function (id, callback) {
	Articles.remove({_id: id}, (error) => {
		if(error) callback(error);
		callback(null,"Registro del artículo eliminado");
	});
};

module.exports.deleteAllArticless = function (callback) {
	Articles.remove({}, (error) => {
		if(error) callback(error);
		callback(null,"Todos los Articulos eliminados");
	});
};