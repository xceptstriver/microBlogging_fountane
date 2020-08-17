import { call, all } from 'redux-saga/effects';
import {fork} from 'redux-saga/effects'
import { watchFetchPosts, watchAddNewPost } from './postSagas';
// import { watchAddNewPost } from './postSagas';

export default function* rootSaga() {
    /* yield [
        fork(watchFetchPosts),
        fork(watchAddNewPost),
    ]; */
     yield call(watchFetchPosts);
     yield call(watchAddNewPost);
   /* yield all ([
       fork(watchFetchPosts),
       fork(watchAddNewPost)
   ];    */          
}