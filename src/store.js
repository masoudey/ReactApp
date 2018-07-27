import { applyMiddleware, createStore, compose } from "redux";

import logger, { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
import DevTools from "./containers/DevTools";

const middleware = applyMiddleware(thunk, createLogger());

const configureStore = preloadedState => {
    const store = createStore(reducers,preloadedState,compose(middleware,DevTools.instrument()));
    return store;
};

export {configureStore}; 
