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
export const loginSuccess = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    response: {entities:{users:user}, result: user.id},
})
export const logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('headers')
    return {type: userConstants.LOGOUT}
}
export const loginUser = (username, password) => (dispatch, getState) => {
    const user = getState().entities.users[username]
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
    const posts = getState().entities.posts
    if (Object.keys(posts).length > 1) {
        return null
    }
    return dispatch(fetchPosts())
}

const fetchPostById = (id) => ({
    id,
    [CALL_API]: {
        types: [postConstants.POST_REQUEST, postConstants.POST_SUCCESS, postConstants.POST_FAILURE],
        endpoint: `/api/post/${id}`,
        schema: Schemas.POST,
        method: 'get',
        bodyReq: {},
    }
})

export const loadPostById = (id) => (dispatch, getState) => {
   
    const post = getState().entities.posts[id]


    if (post) {
        return null
    }
    return dispatch(fetchPostById(id));
}