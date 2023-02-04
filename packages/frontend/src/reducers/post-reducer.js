import {SET_POSTS, UPDATE_POST} from "../actions/types";

export default function postReducer(state = [], action) {
    switch (action.type) {
        case SET_POSTS:
            return action.payload;
        case UPDATE_POST:
            const index = state.findIndex(post => post._id === action.payload._id);
            if (index !== -1) {
                state[index] = action.payload;
            }
            return [...state];
        default:
            return state;
    }
}

