import { userConstants } from "../actions/constances"

const initialState = {
    loggingIn: false,
    loggedIn: false,
    user: {
        id: null,
        username: null,
        password: null,
        options: {},
    },
    error: null,
}

export default reducer = (state=initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST: {
            state = {...state, loggingIn:true};
            break;
        }
        case userConstants.LOGIN_FAILURE: {
            state = {...state, loggingIn:false, error: action.payload};
            break;
        }
        case userConstants.LOGIN_SUCCESS: {
            state = {
                ...state, 
                loggingIn:false, 
                loggedIn: true, 
                user: action.payload
            };
            break;
        }
        case "ADD_USER": {
            state = {...state, user:  action.payload};
            break;
        }
        case "SET_USER_OPTIONS": {
            state = {...state, options: action.payload};
            break;
        }
    }
    return state;
};