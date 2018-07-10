import { postConstants } from "../constants";
const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null,
}

export const posts = (state=initialState, action) => {
    switch(action.type) {
        case postConstants.POSTS_REQUEST: {
            state = {...state, fetching:true};
            break;
        }
        case postConstants.POSTS_FAILURE: {
            state = {...state, fetching:false, error: action.payload};
            break;
        }
        case postConstants.POSTS_SUCCESS: {
            state = {
                ...state, 
                fetching:false, 
                fetched: true, 
                posts: action.payload
            };
            break;
        }
        case postConstants.ADD_POST: {
            state = {...state, posts: [...state.posts, action.payload]};
            break;
        }
        case postConstants.UPDATE_POST: {
            const { id, title, desc, content, cotagory, img, date, userId} = action.payload
            const newPosts = [...state.posts]
            const postToUpdate = newPosts.findIndex(post => post.id === id)
            newPosts[postToUpdate] = action.payload;
            state = {...state, posts: newPosts};
            break;
        }
        case postConstants.DELETE_POST: {
            state = {...state, posts: state.posts.filter(post => post.id !== action.payload)};
            break;
        }
    }
    return state;
};