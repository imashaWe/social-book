import {SET_FORM_FAILURE, SET_FORM_RESET, SET_FORM_SUBMITTING, SET_FORM_SUCCESS} from "./types";

export const setFormSubmitting = () => {
    return {
        type: SET_FORM_SUBMITTING
    }
}

export const setFormSuccess = (message) => {
    return {
        type: SET_FORM_SUCCESS,
        payload: {
            message: message
        }
    }
}

export const setFormFailure = (message) => {
    return {
        type: SET_FORM_FAILURE,
        payload: {
            message: message
        }
    }
}

export const setFormReset = () => {
    return {
        type: SET_FORM_RESET
    }
}
