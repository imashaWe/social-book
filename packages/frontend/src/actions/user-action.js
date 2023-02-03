import {SET_USER_LOGIN, SET_USER_LOGOUT} from "./types";

export const setUserLogin = (user) => {
    return {
        type: SET_USER_LOGIN,
        payload: user
    };
}

export const setUserLogout = () => {
    return {
        type: SET_USER_LOGOUT
    };
}
