import {SET_USER_LOGIN, SET_USER_LOGOUT} from "../actions/types";

const initialState = null;

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOGIN:
            return action.payload;
        case SET_USER_LOGOUT:
            return null;
        default:
            return state;
    }
}
