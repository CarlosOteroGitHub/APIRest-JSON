//Llamado de librerias y archivos externas.
const jsonUser = require('./datos.json'); 

//Función que retorna los datos del archivo JSON de usuarios.
function lista_usuarios(req, res){
	return res.json(jsonUser);
}

module.exports = { lista_usuarios }