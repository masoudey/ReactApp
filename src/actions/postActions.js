import { postConstants } from "./constances";
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