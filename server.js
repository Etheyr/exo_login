var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

var fake = {
	email : 'axel.bouillart@gmail.com',
	mdp : '12'
}

app.use(express.static(__dirname +'/public'));
app.use(bodyParser());

app.post('/login', function (req, res) {
	if(req.body.email === fake.email && req.body.mdp === fake.mdp){
		res.send('Vous ête connectez');
	}else{
		res.send({err:true});
	}
});

app.listen(3451, function () {
	console.log('server started on port 3451');
});