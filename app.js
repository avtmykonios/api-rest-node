//Carrega modulos
var express 	= require('express'),
	load 		= require('express-load'),
	mysql 		= require('mysql'),
	app 		= express();

//Conecta ao banco de dados
global.connectionPool = mysql.createPool({
	host		: "localhost",
	user		: "root",
	password	: "",
	database	: "restnode"
});

//Carrega modelos e rotas
load('models')
	.then('routes')
	.into(app);
	
app.listen(3000);
console.log('API REST Base rodando!');