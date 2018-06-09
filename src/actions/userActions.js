import axios from "axios";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const ADD_USER = "ADD_USER";
export const SET_USER_OPTIONS = "SET_USER_OPTIONS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const fetchUser = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user,
    }
}

export const addUser = (user) => {
    return {
        type : ADD_USER,
        payload: user,
    }
}

export const setUserOptions = (options) => {
    return {
        type: SET_USER_OPTIONS,
        payload: options,
    }    
}

export const fetchUserError = (err) => {
    return {
        type: FETCH_USER_ERROR,
        payload: err,
    }
}

export const postLoginUser = (user) => (dispatch) => {
    axios.post("/login",user)
        .then((Response) => {
            dispatch(fetchUser(Response.data))
        })
        .catch((err) => {
            dispatch(fetchUserError(err))
        })
}