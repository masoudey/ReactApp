import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './index.css';

import { App } from "./app";
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,root);

registerServiceWorker();