
import { connect } from 'react-redux';
import ListScreenComponent from '../components/ListScreenComponent/index';

//Actions ?
import { addPostAction, fetchPostsAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        posts: state.postReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchPosts: () => {                        
            dispatch(fetchPostsAction());
        }, 
        onAddPost: (newPost) => {                        
            dispatch(addPostAction(newPost));
        }
    };
}
const ListScreen = connect(mapStateToProps, mapDispatchToProps)(ListScreenComponent);
export default ListScreen;