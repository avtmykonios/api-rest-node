module.exports = function(req, res, next){
	
	global.connectionPool.getConnection(function(err, connection) {
		if (err) {
			return res.send('error');
		} else {
			if(!req.body){
				return res.send('Falta dados de acesso.');
			}

			if(!req.body.system_username || !req.body.system_password){
				return res.send('Falta dados de acesso.');
			}

			connection.query("SELECT username FROM usuarios WHERE username = '"+req.body.system_username+"' AND password = '"+req.body.system_password+"' AND status = 1", function(err, rows, fields) {
				if (err) {
					return res.send('error');
				}
				connection.release();

				if(rows.length > 0){
					return next();
				}else{
					return res.send('usuario invalido');
				}				
			});			
		}
	});
}