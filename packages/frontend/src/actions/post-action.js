import axios from "axios";
import {SET_POSTS, UPDATE_POST} from "./types";
import {setAppStateFailure, setAppStateSuccess} from "./app-state-action";

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

export const addPost = (description, image) => {
};

export const likePost = () => {
};

export const unlikePost = () => {
};

const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}
