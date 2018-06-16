var express = require('express'),
	api		= require('./api'),
	users 	= require('./accounts'),
    app 	= express();


app.use(express.static('./public'))
	.use(users)
	.use('/api', api)
    .get('*', function (req, res){
    	if (!req.user) {
			
			console.log("user doesnt exist");
			
			res.sendfile('./public/index.html');
    	} else {
			console.log("user exist server");
			// res.send({sess: req.user});
			
			res.sendfile('./public/index.html');
    	}
    })
    .listen(3000);
