import { ADD_POST, FETCH_POSTS, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
const postReducers = (posts = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedPosts;
        case FETCH_FAILED:
            return [];
          case ADD_POST:
            return [
                ...posts,
                action.newPost
            ];  
        default:
            return posts; //state does not change
    }
}

export default postReducers;