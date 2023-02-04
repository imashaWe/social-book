import {combineReducers} from 'redux';
import formReducer from "./form-reducer";
import userReducer from "./user-reducer";
import appStateReducer from "./app-state-reducer";
// create root reducer
const rootReducer = combineReducers({
    user: userReducer,
    appState: appStateReducer,
    formState: formReducer
});
export default rootReducer;
