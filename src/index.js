import React, { Component } from "react";
import ReactDom from "react-dom";
import App from "./app";

import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDom.render(<App />,root);

registerServiceWorker();