import 'babel-polyfill';
import express from 'express'
import api from './api'
import users from './accounts'
import jwt from "jsonwebtoken";

import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter, matchPath } from "react-router-dom"
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats  from "../public/react-loadable.json";
import { configureStore } from "../src/store"
import { App } from "../src/app"
import { loginSuccess, logOut, loadPosts } from "../src/actions";
import routes from "../src/RoutesConfig";


const app = express();


app.use(express.static('public'))
	.use(users)
	.use('/api', api)
    .get('*', async function (req, res){
		
		let user = req.user ?  req.user : {}
		const store = configureStore()
		if (req.token) {
			const token = req.token;
			jwt.verify(token, 'my-secret', async function(err, decoded) {
                if (decoded) {
                    await store.dispatch(loginSuccess(user));
                    res.setHeader('x-auth-token', req.token);
                }else {
                    if (err.name === "TokenExpiredError") {
						store.dispatch(logOut());
						req.token = null;
                        console.log("TokenExpiredError");
                    }
                }
              });
			
		}
		let match = null;
		let {loadData, component } = await routes.regular.find(
			({path, exact= false}) => {
			match = matchPath(req.originalUrl, {
				path,
				exact,
				strict: false
			  })
			return match;
		}) || {};

		const params = match.params;
		if (component.preload) await component.preload();
		if (loadData)
			await store.dispatch(loadData({...params}))

		let context = req.user ? req.user : {};
		console.log("context", context);

		let modules = [];
		const html = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context} >
					<Loadable.Capture report= {moduleName => modules.push(moduleName)} >
			  			<App />
					</Loadable.Capture>
				</StaticRouter>
			</Provider>
		)
		
		const finalState = store.getState()
		console.log(modules);
		let bundles = getBundles(stats, modules);
		let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
		let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

    	const renderFullPage = (html, preloadedState) => {
			return `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<meta http-equiv="X-UA-Compatible" content="ie=edge">
					<title>Universal App</title>
					${styles.map(style => {
						return `<link href="/${style.file}" rel="stylesheet"/>`;
					  }).join('\n')}
				</head>
				<body>
					<div id="root">${html}</div>
					<script>
          				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
					   </script>
					   ${scripts.map(script => {
						return `<script src="/${script.file}"></script>`
					  }).join('\n')}
					  
				</body>
				</html>
			`
		}
		// <script src="/bundle.js" defer></script>
		res.send(renderFullPage(html,finalState));
    })
	Loadable.preloadAll().then(() => {
		app.listen(process.env.PORT || 4000);
	})
	
