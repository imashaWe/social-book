import {combineReducers} from 'redux';
import formReducer from "./form-reducer";
import userReducer from "./user-reducer";
import appStateReducer from "./app-state-reducer";
import postReducer from "./post-reducer";
// create root reducer
const rootReducer = combineReducers({
    user: userReducer,
    appState: appStateReducer,
    formState: formReducer,
    posts: postReducer
});
export default rootReducer;
