import axios from "axios";
import {SET_POSTS} from "./types";
import {setAppStateFailure} from "./app-state-action";

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('post')
            .then((response) => {
                if (response.status) {
                    dispatch({
                        type: SET_POSTS,
                        payload: response.data
                    });
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
