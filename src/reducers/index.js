import { combineReducers } from "redux";
import { RESET_ERROR_MESSAGE, userConstants, postConstants }  from "../constants";
import baseReducer from "./baseReducer";
import merge from "lodash/merge";


import { user } from "./userReducer";
import { posts } from "./postReduser";

const entities = (state = {user: {}, posts: {}}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}

const errorMessage = (state = null, action) => {
    const { type, error } = action;
    if (type === RESET_ERROR_MESSAGE){
        return null
    } else if (error) {
        return error
    }
    return state
}

const reducers = combineReducers({
    logedinUser: baseReducer({
        mapActionToKey: action => action.username,
        types: [
            userConstants.LOGIN_REQUEST,
            userConstants.LOGIN_SUCCESS,
            userConstants.LOGIN_FAILURE
        ]
    }),
    postById: baseReducer({
        mapActionToKey: action => action.id,
        types: [
            postConstants.POST_REQUEST,
            postConstants.POST_SUCCESS,
            postConstants.POST_FAILURE
        ]
    })
})

const rootReducer = combineReducers({
    user,
    posts,
})
export default rootReducer;