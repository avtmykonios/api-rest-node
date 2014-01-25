module.exports = function(app){
	var Exemplo = {
		getOne: function(req, res){

			//pega conexão com o banco de dados
			global.connectionPool.getConnection(function(err, connection) {
				//se houver erro retorna mensagem de erro
				if (err) {
					ees.statusCode = 503;
					res.send({
						result: 'error ao acessar o banco de dados.',
						err: err.code
					});
				} else {
					//se não houver erro ele irá executar a query
					connection.query("SELECT * FROM exemplo WHERE id = '"+req.params.id+"' LIMIT 1", function(err, rows, fields) {
						//se houver erro na execução da query
						if (err) {
							res.statusCode = 500;
							res.send({
								result: 'error na execução da query',
								err: err.code
							});
						}

						//se não houver erro ele retorna os resultados
						res.send({
							result: 'success',
							err: '',
							json: rows,
							lengthRows: rows.length
						});

						//encerra a conexão
						connection.release();
					});
				}
			});
		}
	}
	return Exemplo;
}