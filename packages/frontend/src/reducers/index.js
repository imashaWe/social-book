import {combineReducers} from 'redux';
import formReducer from "./form-reducer";
// create root reducer
const rootReducer = combineReducers({
    formState: formReducer
});
export default rootReducer;
