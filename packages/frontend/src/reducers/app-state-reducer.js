import {
    SET_APP_STATE_DEFAULT,
    SET_APP_STATE_FAILURE,
    SET_APP_STATE_FETCHING,
    SET_APP_STATE_SUCCESS
} from "../actions/types";

const initialState = {
    isFetching: false,
    isFailure: false,
    isSuccess: false,
}
export default function appStateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_APP_STATE_FETCHING:
            return {
                ...state,
                isFetching: true,
                isSuccess: false,
                isFailure: false,
                message: null
            }
        case SET_APP_STATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccess: true,
                isFailure: false,
                message: action.payload.message
            }
        case SET_APP_STATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                isFailure: true,
                message: action.payload.message
            }
        case SET_APP_STATE_DEFAULT:
            return initialState;
        default:
            return state;
    }
}
