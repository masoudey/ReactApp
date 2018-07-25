import { combineReducers } from "redux";
import { RESET_ERROR_MESSAGE }  from "../constants";
import merge from "loadash/merge";


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
    user,
    posts,
})
export default reducers;