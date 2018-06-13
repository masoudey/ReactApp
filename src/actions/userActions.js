import { userConstants } from "./constances";
import { authHeader } from "./authHeader";
import axios from "axios";


export const loginRequest = (user) => {
    return {
        type: userConstants.LOGIN_REQUEST,
        payload: user,
    }
}

export const loginSuccess = (user) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: user,
    }
}
export const loginFailure = (err) => {
    return {
        type: userConstants.LOGIN_FAILURE,
        payload: err,
    }
}

export const registerRequest = (user) => {
    return {
        type : userConstants.REGISTER_REQUEST,
        payload: user,
    }
}
export const registerFailure = (err) => {
    return {
        type : userConstants.REGISTER_FAILURE,
        payload: err,
    }
}
export const registerSuccess = (user) => {
    return {
        type : userConstants.REGISTER_SUCCESS,
        payload: user,
    }
}

export const setUserOptions = (options) => {
    return {
        type: userConstants.SET_USER_OPTIONS,
        payload: options,
    }    
}



export const login = (username, password) => (dispatch) => {
    const reqOptions = {
        headers: authHeader,
        auth: {
            username,
            password,
        }
    }
    dispatch(loginRequest(user))
    axios.post("/login",user)
        .then((Response) => {
            dispatch(loginSuccess(Response.data))
        })
        .catch((err) => {
            dispatch(loginFailure(err))
        })
}