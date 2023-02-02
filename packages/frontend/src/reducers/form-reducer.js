import {SET_FORM_FAILURE, SET_FORM_SUBMITTING, SET_FORM_SUCCESS} from "../actions/types";

const initialState = {
    isSubmitting: false,
    isSuccess: false,
    isFailure: false,
}
export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_SUBMITTING:
            return {
                ...state,
                isSubmitting: true,
                isSuccess: false,
                isFailure: false,
                message: null
            }
        case SET_FORM_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                isSuccess: true,
                isFailure: false,
                message: action.payload.message
            }
        case SET_FORM_FAILURE:
            return {
                ...state,
                isSubmitting: false,
                isSuccess: false,
                isFailure: true,
                message: action.payload.message
            }
        default:
            return state;
    }
}
