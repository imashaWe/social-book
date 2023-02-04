import axios from "axios";
import {SET_POSTS, UPDATE_POST} from "./types";
import {setAppStateFailure, setAppStateSuccess} from "./app-state-action";
import {setFormFailure, setFormSubmitting, setFormSuccess} from "./form-actions";

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('post')
            .then((response) => {
                if (response.data.status) {
                    dispatch({
                        type: SET_POSTS,
                        payload: response.data.data
                    });
                    dispatch(setAppStateSuccess());
                } else {
                    dispatch(setAppStateFailure(response.message));
                }
            })
            .catch((error) => {
                dispatch(setAppStateFailure(error.message));
            });
    }
};

export const addPost = (image, description) => {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);
    return (dispatch) => {
        dispatch(setFormSubmitting());
        axios.post('post', formData)
            .then((response) => {
                if (response.data.status) {
                    dispatch(setFormSuccess());
                }
            }).catch((error) => {
            dispatch(setFormFailure(error.message));
        });
    }
};

export const likePost = (postID) => {
    return (dispatch) => {
        axios.post(`post/${postID}/like`)
            .then((response) => {
                if (response.data.status) {
                    dispatch(updatePost(response.data.data));
                }
            }).catch((error) => {
            console.log(error);
        });
    }
};

export const unlikePost = (postID) => {
    return (dispatch) => {
        axios.post(`post/${postID}/unlike`)
            .then((response) => {
                if (response.data.status) {
                    dispatch(updatePost(response.data.data));
                }
            }).catch((error) => {
            console.log(error);
        });
    }
};

const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}
