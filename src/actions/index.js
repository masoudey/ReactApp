import { Schemas } from "../middleware/api";
import { userConstants, postConstants, CALL_API } from "../constants";

const fetchUser = (username, password) => ({
    username,
    [CALL_API]: {
        types: [userConstants.LOGIN_REQUEST, userConstants.LOGIN_SUCCESS, userConstants.LOGIN_FAILURE],
        endpoint: '/login',
        schema: Schemas.USER,
        method: 'POST',
        bodyReq: {username,password}
    }
})

export const loginUser = (username, password) => (dispatch, getState) => {
    const user = getState().entities.user[username]
    if (user) {
        return null
    }
    return dispatch(fetchUser(username, password))
}

const fetchPosts = () => ({
    [CALL_API]: {
        types: [postConstants.POSTS_REQUEST,postConstants.POSTS_SUCCESS,postConstants.POSTS_FAILURE],
        endpoint: '/api/post',
        schema: Schemas.POST_ARRAY,
        method: 'get',
        bodyReq: {},
    }
})

export const loadPosts = () => (dispatch, getState) => {
    return dispatch(fetchPosts())
}