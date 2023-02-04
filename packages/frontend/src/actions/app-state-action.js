import {SET_APP_STATE_DEFAULT, SET_APP_STATE_FAILURE, SET_APP_STATE_FETCHING, SET_APP_STATE_SUCCESS} from "./types";

export const setAppStateFetching = () => {
    return {
        type: SET_APP_STATE_FETCHING
    }
}
export const setAppStateSuccess = (message = null) => {
    return {
        type: SET_APP_STATE_SUCCESS,
        payload: {
            message: message
        }
    }
}
export const setAppStateFailure = (message) => {
    return {
        type: SET_APP_STATE_FAILURE,
        payload: {
            message: message
        }
    }
}

export const setAppStateDefault = () => {
    return {
        type: SET_APP_STATE_DEFAULT
    }
}
