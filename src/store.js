import { applyMiddleware, createStore, compose } from "redux";

import logger, { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import api from "./middleware/api";
import rootReducer from "./reducers";
import DevTools from "./containers/DevTools";

const middleware = applyMiddleware(thunk, api,createLogger());

const configureStore = preloadedState => {
    const store = createStore(rootReducer,preloadedState,compose(middleware,DevTools.instrument()));
    return store;
};

export {configureStore}; 
