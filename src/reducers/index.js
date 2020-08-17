import { combineReducers } from 'redux';
import postReducers from './postReducers';

const allReducers = combineReducers({
    postReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;