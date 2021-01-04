import * as api from '../api';

//action creaters=jst funcyions that return a function, action is jst a obj which has a type and payload
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = (posts) => async(dispatch) => {
    try {
        const { data } = await api.createPost(posts);
        dispatch({type: 'CREATE' , payload:data});
    } catch (error) {
        console.log(error);
    }
}

