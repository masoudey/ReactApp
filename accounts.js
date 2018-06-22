var express		= require('express'),
	bodyParser	= require('body-parser'),
	session		= require('express-session'),
	cors 		= require('cors');
	expressJwt	= require('express-jwt');
	jwt			= require('jsonwebtoken');
	Bourne		= require('bourne'),
	crypto		= require('crypto');

var router	= express.Router(),
	db		= new Bourne('users.json');

function hash (password) {
	return crypto.createHash('sha256').update(password).digest('hex');
}
var corsOption = {
	origin: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	exposedHeaders: ['x-auth-token']
  };
  var createToken = function(auth) {
	  console.log(auth);
	return jwt.sign({
	  id: auth.id
	}, 'my-secret',
	{
	  expiresIn: 2 * 60
	});
  };
  
  var generateToken = function (req, res, next) {
	  console.log("generatetoken");
	req.token = createToken(req.auth);
	return next();
  };
  
  var sendToken = function (req, res, next) {
	console.log("sendtoken");
	res.setHeader('x-auth-token', req.token);
	return res.status(200).send(JSON.stringify(req.user));
  };
//token handling middleware
var authenticate = expressJwt({
	secret: 'my-secret',
	requestProperty: 'auth',
	getToken: function(req) {
	  if (req.headers['x-auth-token']) {
		return req.headers['x-auth-token'];
	  }
	  return null;
	}
	});
	
  var getOne = function (req, res) {
	var user = req.user.toObject();
  
	res.json(user);
  };

router
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	.use(cors(corsOption))
	.use(session({secret: 'asfdgdgy657gkutyutkyu6v6iesldkvfjso8ers'}))
	.post('/login', function(req, res, next) {
		console.log(req.body.password);
		var user = {
			username: req.body.username,
			password: hash(req.body.password)
		};
		
		db.findOne(user, function(err, data) {
			if(data){
				// req.session.userId = data.id;
				req.user = data;
				req.auth = {
					id: data.id
				  };
				return next();
			} else {
				res.redirect('/login');
			}
		});
		
		
	},generateToken, sendToken)
	.post('/register', function(req, res) {
		var user = {
			username: req.body.username,
			password: hash(req.body.password),
			options: {}
		};
		db.find({username: user.username}, function(err, data) {
			if(!data.length){
				db.insert(user, function(err, data) {
					req.session.userId = data.id;
					res.redirect('/');
				});
			} else {
				res.redirect('/login');
			}
		});
	})
	.get('/logout', function(req, res) {
		req.session.userId = null;
		req.user = null;
		res.redirect('/');
	})
	// .get('/login', function(req, res) {
	// 	if (!req.user) {
			
	// 		console.log("user doesnt exist(login)");
	// 		res.sendfile('./public/index.html');
			
  //   	} else {
	// 		console.log("user exist login");
	// 		// res.send({sess: req.user});
			
	// 		res.redirect('/');
  //   	}
	// })
	.get('/authen',authenticate , function(req, res, next) {
		db.findOne({id: req.auth.id}, function(err, data) {
			if(!err) {
				req.user = data;
				req.auth = {
					id: data.id
				};
				// res.send({sess: req.session});
				console.log("auth")
				next();
			} else {
				next(err);
			}
		});
	},getOne)
	.use(function(req, res, next){
		if (req.session.userId) {
			db.findOne({id: req.session.userId}, function(err, data) {
				req.user = data;
				req.auth = {
					id: data.id
				  };
				// res.send({sess: req.session});
				console.log("run")
				
			});
		}
		next();
	});

module.exports = router;