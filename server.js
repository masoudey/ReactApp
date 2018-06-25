var express 			 = require('express'),
	webpack 			 = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfig		 = require('./webpack.config'),
	api					 = require('./api'),
	users 				 = require('./accounts'),
    app 				 = express();

	const compiler = webpack(webpackConfig)
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
	app.use(webpackHotMiddleware(compiler))
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
