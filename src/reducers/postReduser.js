const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null,
}

export const posts = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_POSTS_START": {
            state = {...state, fetching:true};
            break;
        }
        case "FETCH_POSTS_ERROR": {
            state = {...state, fetching:false, error: action.payload};
            break;
        }
        case "RECIVED_POSTS": {
            state = {
                ...state, 
                fetching:false, 
                fetched: true, 
                users: action.payload
            };
            break;
        }
        case "ADD_POST": {
            state = {...state, posts: [...state.posts, action.payload]};
            break;
        }
        case "UPDATE_POST": {
            const { id, title, desc, content, cotagory, img, date, userId} = action.payload
            const newPosts = [...state.posts]
            const postToUpdate = newPosts.findIndex(post => post.id === id)
            newPosts[postToUpdate] = action.payload;
            state = {...state, posts: newPosts};
            break;
        }
        case "DELETE_POST": {
            state = {...state, posts: state.posts.filter(post => post.id !== action.payload)};
            break;
        }
    }
    return state;
};