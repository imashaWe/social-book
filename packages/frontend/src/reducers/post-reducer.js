import {SET_POSTS, UPDATE_POSTS} from "../actions/types";

export default function postReducer(state = [], action) {
    switch (action.type) {
        case SET_POSTS:
            return action.payload;
        case UPDATE_POSTS:

        default:
            return state;
    }
}

