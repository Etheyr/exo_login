var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var fake = {
	email : 'axel.bouillart@gmail.com',
	mdp : '12345',
}

app.use(express.static(__dirname +'/public'));
app.use(bodyParser());

app.post('/login', function (req, res) {
	if(req.body.email === fake.email && req.body.mdp === fake.mdp){
		res.send('Vous ête connectez');
	}else{
		res.send("Vous n'ête pas connectez");
	}
});

app.listen(3451, function () {
	console.log('server started on port 3451');
});