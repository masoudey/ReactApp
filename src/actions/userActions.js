import { userConstants } from "./constances";
import { authHeader } from "./authHeader";
import { createBrowserHistory } from "history";
import axios from "axios";


const loginRequest = (user) => {
    return {
        type: userConstants.LOGIN_REQUEST,
        payload: user,
    }
}

const loginSuccess = (user) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: user,
    }
}
const loginFailure = (err) => {
    return {
        type: userConstants.LOGIN_FAILURE,
        payload: err,
    }
}

const registerRequest = (user) => {
    return {
        type : userConstants.REGISTER_REQUEST,
        payload: user,
    }
}
const registerFailure = (err) => {
    return {
        type : userConstants.REGISTER_FAILURE,
        payload: err,
    }
}
const registerSuccess = (user) => {
    return {
        type : userConstants.REGISTER_SUCCESS,
        payload: user,
    }
}

const setUserOptions = (options) => {
    return {
        type: userConstants.SET_USER_OPTIONS,
        payload: options,
    }    
}



export const login = (username, password) => (dispatch) => {
    const reqOptions = {
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: username,
            password: password,
        }
    }
    
    dispatch(loginRequest({username}))
    axios.post("/login",{username, password})
        .then((response) => {
            console.log(response);
            localStorage.setItem('headers', JSON.stringify(response.headers))
            localStorage.setItem('user', JSON.stringify(response.data))
            dispatch(loginSuccess(response.data))
            createBrowserHistory('/')
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