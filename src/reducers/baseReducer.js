
const baseReducer = ({types, mapActionToKey }) => {
    const [requestType, successType, failureType ] = types;
    const initialState = {
        fetching: false,
        fetched: false,
        data: [],
    }
    const update = (state = initialState, action) => {
        switch (action.type) {
            case requestType:
                return {
                    ...state,
                    fetching: true
                }
            case successType:
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    data: action.response.result
                }
            case failureType:
                return {
                    ...state,
                    fetching:false
                }
            default:
                return state
        }
    }
    return (state = {}, action) => {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey(action)
                return {
                    ...state,
                    [key]: update(state[key], action)
                }
            default:
                return state
        }
    }
}

export default baseReducer;