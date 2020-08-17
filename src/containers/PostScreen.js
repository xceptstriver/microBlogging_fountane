
import { connect } from 'react-redux';
import PostScreenComponent from '../components/PostScreenComponent/index';

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
const PostScreen = connect(mapStateToProps, mapDispatchToProps)(PostScreenComponent);
export default PostScreen;