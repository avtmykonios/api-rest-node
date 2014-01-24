module.exports = function(app){
	var exemplo 		= app.models.exemplo;
	var autenticar 		= require('../middleware/autenticador');

	app.post('/exemplos', autenticar, exemplo.getAll);
}