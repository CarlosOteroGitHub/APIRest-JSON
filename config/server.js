//Llamado de librerias externas.
var express = require("express");
var app = express();
var path = require('path');
const userRouter = require('../routes/usuarioRouter');

class Application {

    constructor(){
        this.app = express();

        this.app.use( express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.static(path.join(__dirname, '../public')));

        this.app.use(userRouter);

        this.app.get("/", function(req, res){
            res.render("index");
        });
    }

    async start(port){
		//Especificación del puerto para correr el servidor.
		await this.app.listen(port);
		console.log("Servidor Corriendo en el puerto " + port);
	}
}

module.exports = Application;