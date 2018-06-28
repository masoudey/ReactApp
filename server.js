import express from 'express'
import webpack from'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'
import api from './api'
import users from './accounts'

import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { store } from "./src/store"
import { App } from "./src/app"


app = new express();

	const compiler = webpack(webpackConfig);
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
