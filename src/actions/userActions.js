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
        headers: { 'Content-Type': 'application/json' },
        data: {
            username,
            password,
        }
    }
    dispatch(loginRequest({username}))
    axios.post("/login",reqOptions)
        .then((response) => {
            localStorage.setItem('headers', response.headers)
            localStorage.setItem('user', response.data)
            dispatch(loginSuccess(response.data))
        })
        .catch((err) => {
            dispatch(loginFailure(err))
        })
}

export const logout = () =>  {
    localStorage.removeItem('user')
    localStorage.removeItem('headers')
    return {type: userConstants.LOGOUT}
}