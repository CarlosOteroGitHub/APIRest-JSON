//Llamado de librerias y archivos externas.
var express = require('express');
var router = express.Router();
const usuarioController = require("../controllers/usuarioController");

//Ruta que direcciona al controlador de usuarios con la función "lista_usuarios"
router.route('/api/users')
    .get(usuarioController.lista_usuarios)

module.exports = router;
