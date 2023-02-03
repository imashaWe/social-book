import {combineReducers} from 'redux';
import formReducer from "./form-reducer";
import userReducer from "./user-reducer";
// create root reducer
const rootReducer = combineReducers({
    user: userReducer,
    formState: formReducer
});
export default rootReducer;
