import { userConstants } from "../constants";

const initialState = {
    fetching: false,
    fetched: false,
    data: null,
    error: null
}

export const user = (state=initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST: 
            return {
                ...state, 
                fetching:true
            }
        case userConstants.LOGIN_SUCCESS: 
            return {
                ...state, 
                fetching:false, 
                fetched: true, 
                data: action.response.result
            }
        case userConstants.LOGIN_FAILURE: 
            return {
                ...state,
                fetching:false,
                error: action.response
            }
        case userConstants.LOGOUT: 
            return initialState
    
        case "ADD_USER": 
            return {
                ...state, 
                data:  action.payload
            }
        case "SET_USER_OPTIONS": 
            return {
                ...state.data, 
                options: action.payload
            }
        default: 
            return state
    }

};