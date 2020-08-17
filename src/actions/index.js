import { ADD_POST, FETCH_POSTS, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const fetchPostsAction = (sort) => {
    return {
        type: FETCH_POSTS,
        sort
    }
}

export const addPostAction = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedPosts) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedPosts
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}