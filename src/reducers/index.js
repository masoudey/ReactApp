import { combineReducers } from "redux";
import { RESET_ERROR_MESSAGE, userConstants, postConstants }  from "../constants";
import merge from "lodash/merge";


import { user } from "./userReducer";
import { posts } from "./postReduser";

const entities = (state = {users: {}, posts: {}, comments: {}}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}

const messages = (state = null, action) => {
    const { type, error } = action;
    if (type === RESET_ERROR_MESSAGE){
        return null
    }else if (error) {
        return error
    }
    return state
}

const reducers = combineReducers({
    logedinUser: user,
    postById: posts,
})

const rootReducer = combineReducers({
    entities,
    reducers,
    messages,
})
export default rootReducer;