import { combineReducers } from "redux";
import * as actionTypes  from "../actions";
import merge from "loadash/merge";


import { user } from "./userReducer";
import { posts } from "./postReduser";

const entities = (state = {user: {}, posts: {}}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}
const reducers = combineReducers({
    user,
    posts,
})
export default reducers;