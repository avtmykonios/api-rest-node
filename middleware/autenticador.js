module.exports = function(req, res, next){
	//pega a conexão com o banco de dados
	global.connectionPool.getConnection(function(err, connection) {
		//se houver erro ele retorna uma mensagem de erro
		if (err) {
			return res.send('error ao acessar o banco de dados.');
		} else {
			
			//busca as query string da url 
			var url = require('url');
			var url_parts = url.parse(req.url, true);
			var query = url_parts.query;

			//valida a existência dos dados de acesso
			if(query.username == 'undefined' || query.token == 'undefined'){
				return res.send('Falta dados de acesso.');
			}

			//verifica se usuário existe no banco de dados
			connection.query("SELECT username FROM usuarios WHERE username = '"+query.username+"' AND token = '"+query.token+"' AND status = 1", function(err, rows, fields) {
				//se houver erro na query
				if (err) {
					return res.send('error');
				}

				//fecha conexão
				connection.release();

				//se ele encontrou no banco de dados, ele deixará prosseguir
				if(rows.length > 0){
					return next();
				}else{
					//se não encontrar ele irá retornar uma mensagem de erro
					return res.send('usuario invalido');
				}				
			});			
		}
	});
}