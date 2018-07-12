import { postConstants } from "../constants";
import { authHeader } from "./authHeader";
import axios from "axios";

const postsRequest = () => {
    return {
        type: postConstants.POSTS_REQUEST,
    }
}
const postsSuccess = (posts) => {
    return {
        type: postConstants.POSTS_SUCCESS,
        payload: posts,
    }
}
const postsFailure = (err) => {
    return {
        type: postConstants.POSTS_FAILURE,
        payload: err,
    }
}

export const fetchAllPosts = (userId) => (dispatch) => {
    const reqOptions = {
        headers: { 'Content-Type': 'application/json' },
        user: {
            id: userId, 
        }
    }

    dispatch(postsRequest())
    axios.get("/api/post",reqOptions)
        .then((response) => {
            console.log(response);
            dispatch(postsSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postsFailure(err))
        })
}

export const fetchSinglePost = (postId) => (dispatch) => {

    dispatch(postsRequest())
    axios.get(`/api/post/:${postId}`,{params: {id: postId}})
        .then((response) => {
            console.log(response);
            dispatch(postsSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postsFailure(err))
        })
}