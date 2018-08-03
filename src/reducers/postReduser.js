import { postConstants } from "../constants";
const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null,
}

export const posts = (state=initialState, action) => {
    switch(action.type) {
        case postConstants.POST_REQUEST: 
            return {
                ...state, 
                fetching:true
            }
        case postConstants.POST_SUCCESS: 
            return {
                ...state, 
                fetching:false, 
                fetched: true, 
                data: action.response.result
            }
        case postConstants.POST_FAILURE: 
            return {
                ...state, 
                fetching:false, 
                error: action.response
            }
        case postConstants.ADD_POST: 
            return {
                ...state, 
                data: [...state.posts, action.payload]
            }
        case postConstants.UPDATE_POST: {
            const { id, title, desc, content, cotagory, img, date, userId} = action.payload
            const newPosts = [...state.data]
            const postToUpdate = newPosts.findIndex(post => post.id === id)
            newPosts[postToUpdate] = action.payload;
            return {
                ...state, 
                data: newPosts
            }
        }
        case postConstants.DELETE_POST: 
            return {
                ...state, 
                data: state.posts.filter(post => post.id !== action.payload)
        }
        default:
            return state
    }
};