import {SET_USER_LOGIN, SET_USER_LOGOUT} from "./types";
import {setFormFailure, setFormSubmitting, setFormSuccess} from "./form-actions";
import axios from "axios";

export const setUserLogin = (user) => {
    return (dispatch) => {
        dispatch(setFormSubmitting());
        axios.post('auth/login', user)
            .then((response) => {
                if (response.data.status) {
                    dispatch(setFormSuccess(response.data.message));
                    dispatch({
                        type: SET_USER_LOGIN,
                        payload: response.data.user
                    });
                } else {
                    dispatch(setFormFailure(response.data.message));
                }
            })
            .catch((error) => {
                dispatch(setFormFailure(error.message));
            });
    }

}

export const setUserLogout = () => {
    return {
        type: SET_USER_LOGOUT
    };
}
