import { combineReducers } from "redux";

import user from "./userReducer";
import posts from "./postReduser";
const reducers = combineReducers({
    user,
    posts,
})
export default reducers;