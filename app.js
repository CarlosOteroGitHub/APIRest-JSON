//Llamado de librerias y archivos externas.
require('dotenv').config();
var Application = require("./config/server");

//Especificación de la Configuración del Servidor.
const puerto = process.env.PORT || 8080;
const server = new Application();
server.start(puerto);

//Programa de ExpressJS del lado del servidor con javascript que ejemplifica la usabilidad de los datos almacenados en archivos JSON en vistas EJS.