module.exports = function(app){
	var exemplo 		= app.models.exemplo;
	
	//middleware que verifica se dados de acesso estão corretos
	var autenticar 		= require('../middleware/autenticador');

	app.get('/exemplos/:id', autenticar, exemplo.getOne);
}