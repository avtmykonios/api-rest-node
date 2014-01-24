//Carrega modulos
var express 	= require('express'),
	app 		= express(),
	load 		= require('express-load'),
	mysql 		= require('mysql');

//Conecta ao banco de dados
global.connectionPool = mysql.createPool({
	host		: "localhost",
	user		: "root",
	password	: "",
	database	: "restnode"

});

app.use(express.bodyParser());

//Carrega modelos e rotas
load('models')
	.then('routes')
	.into(app);
	
app.listen(3000);
console.log('Rest Demo Listening on port 3000');

/*
Falta revisar tudo

Padrões a serem considerados segundo

autenticação: ok
retorno em json: ok
*/