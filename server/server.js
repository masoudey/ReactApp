import express from 'express'
import webpack from'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
// import api from './api'
import users from './accounts'
import jwt from "jsonwebtoken";

import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import { configureStore } from "../src/store"
import { App } from "../src/app"
import { loginSuccess, logout } from "../src/actions/userActions";


app = new express();

	const compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
	app.use(webpackHotMiddleware(compiler))
app.use(express.static('../public'))
	.use(users)
	// .use('/api', api)
    .get('*', function (req, res){
		
		let user = req.user ?  req.user : {}
		const store = configureStore()
		if (req.token) {
			const token = req.token;
			jwt.verify(token, 'my-secret', function(err, decoded) {
                if (decoded) {
                    store.dispatch(loginSuccess(user));
                    res.setHeader('x-auth-token', req.token);
                }else {
                    if (err.name === "TokenExpiredError") {
						store.dispatch(logout());
						req.token = null;
                        console.log("TokenExpiredError");
                    }
                }
              });
			
		}
		
		const context = req.user ? req.user : {};
		const html = renderToString(
			<Provider store={store}>
			  <StaticRouter location={req.url} context={context} >
			  	<App />
			  </StaticRouter>
			</Provider>
		)
		const finalState = store.getState()

		res.send(renderFullPage(html,finalState));

    	const renderFullPage = (html, preloadedState) => {
			return `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<meta http-equiv="X-UA-Compatible" content="ie=edge">
					<title>Universal App</title>
				</head>
				<body>
					<div id="root">${html}</div>
					<script>
          				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
       				</script>
					<script src="/bundle.js"></script>
				</body>
				</html>
			`
		}
    })
    .listen(3000);
