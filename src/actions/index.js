import { Schemas } from "../middleware/api";
import { userConstants, CALL_API } from "../constants";

const fetchUser = (username, password) => ({
    [CALL_API]: {
        types: [userConstants.LOGIN_REQUEST, userConstants.LOGIN_SUCCESS, userConstants.LOGIN_FAILURE],
        endpoint: '/login',
        schema: Schemas.USER,
        method: 'POST',
        bodyReq: {username,password}
    }
})

export const loginUser = (username, password) => (dispatch, getState) => {
    const user = getState().entities.user[username]
    if (user) {
        return null
    }
    return dispatch(fetchUser(username, password))
}