\#api-rest-node


Base de uma API REST escrita com Node.js e MySQL

para essa base utilizei a seguinte estrutura de dados no banco:

`
CREATE TABLE IF NOT EXISTS exemplo ( 
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  status int(11) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;
`

`
INSERT INTO exemplo (id, nome, status) VALUES
(1, 'Victor', 1),
(2, 'Lala', 2);
`

`
CREATE TABLE IF NOT EXISTS usuarios (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  token varchar(32) NOT NULL,
  status int(11) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

`
`
INSERT INTO usuarios (id, username, token, status) VALUES
(1, '58800f77afdb5e8d70f1e1e344d22899', '092bef459d7bb3a8cad2c7bcf31c0431', 1);
`
Para fazer um teste de PHP execute o seguinte código:
`
<?php
//classe que faz comunicação com REST 
class Rest{

	function getOne($id){
		//url de acesso
		$url = "http://localhost:3000/exemplos/".$id."?username=".md5("specian")."&token=".md5("specian#123mudar");

		//inicializando o curl
		$curl = curl_init();
		
		//setando a url
		curl_setopt($curl, CURLOPT_URL, $url);

		//setando método HTTP para GET
		curl_setopt($curl, CURLOPT_HTTPGET, 1);

		//armazenando a saída
		$output = curl_exec($curl);

		//Fechando conexão com curl
		curl_close($curl);

		//retornando a saida de Web Service
		return $output;
	}
}

$Rest = new Rest();

//exibindo dados retornados
echo $Rest->getOne(1);`
