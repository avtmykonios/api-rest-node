module.exports = function(app){
	var Exemplo = {
		getAll: function(req, res){
			global.connectionPool.getConnection(function(err, connection) {
				if (err) {
					console.error('CONNECTION error: ',err);
					res.statusCode = 503;
					res.send({
						result: 'error',
						err: err.code
					});
				} else {
					connection.query('SELECT * FROM exemplo WHERE id = '+req.body.ide+' ORDER BY id DESC LIMIT 20', req.params.id, function(err, rows, fields) {
						if (err) {
							console.error(err);
							res.statusCode = 500;
							res.send({
								result: 'error',
								err: err.code
							});
						}
						//retorna resultados
						res.send({
							result: 'success',
							err: '',
							json: rows,
							lengthRows: rows.length
						});
						connection.release();
					});
				}
			});
		}
	}

	return Exemplo;
}