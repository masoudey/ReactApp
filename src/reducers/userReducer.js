const initialState = {
    fetching: false,
    fetched: false,
    user: [],
    error: null,
}

export default reducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS_START": {
            state = {...state, fetching:true};
            break;
        }
        case "FETCH_USERS_ERROR": {
            state = {...state, fetching:false, error: action.payload};
            break;
        }
        case "RECIVE_USERS": {
            state = {
                ...state, 
                fetching:false, 
                fetched: true, 
                users: action.payload
            };
            break;
        }
    }
    return state;
};