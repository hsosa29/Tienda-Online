var Users = require('../model/Users.js');

module.exports.insertUsers = function (callback) {
	let User1 = new Users({nombre: "Nombre de usuario 1", email: 'hsosa@nextu.com', password:'123456'});
	
	User1.save((error) => {
		if(error) callback(error);
		callback(null,"Usuario nuevo guardado");
	});
};

module.exports.deleteUsers = function (callback) {	
	Users.remove({email: 'hsosa@nextu.com'}, (error) => {
		if(error) callback(error);
		callback(null,"Registro del usuario eliminado");
	});
};

module.exports.getUsers = function (data, callback) {
	Users.findOne({email: data.email}, (err, user) => {
		if(user){
			if(user.password === data.password)
				callback(null,user);
      		else
      			callback('Contraseña incorrecta');
      	} else
			callback('Usuario no existe');
	});
};