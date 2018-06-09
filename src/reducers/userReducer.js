const initialState = {
    fetching: false,
    fetched: false,
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
        case "FETCH_USER_START": {
            state = {...state, fetching:true};
            break;
        }
        case "FETCH_USER_ERROR": {
            state = {...state, fetching:false, error: action.payload};
            break;
        }
        case "FETCH_USER_SUCCESS": {
            state = {
                ...state, 
                fetching:false, 
                fetched: true, 
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