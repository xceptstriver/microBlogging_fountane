import { FETCH_POSTS, FETCH_SUCCEEDED, FETCH_FAILED, ADD_POST } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchPosts() {
    try {
        const receivedPosts = yield Api.getPostsFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedPosts: receivedPosts });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS, fetchPosts);
}

//Add new Post
 function* addNewPost(action) {            
    try {
        const result = yield Api.insertNewPostFromApi(action.newPost);
        if (result === true) {
            yield put({ type: FETCH_POSTS, sort: 'desc'});     
        }
    } catch (error) {        
        //do nothing
    }
}
export function* watchAddNewPost() {            
    yield takeLatest(ADD_POST, addNewPost);
} 