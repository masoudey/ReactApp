import 'babel-polyfill';
import React, { Component } from "react";
import ReactDom from "react-dom";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "./store";
import { Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



import { App } from "./app";
import registerServiceWorker from './registerServiceWorker';

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

const history = createBrowserHistory();
const root = document.getElementById('root');
Loadable.preloadReady().then(() => {
    ReactDom.hydrate(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>   
        </Provider>
        ,root);
});


registerServiceWorker();