import {combineReducers} from 'redux';
import formReducer from "./form-reducer";
// create root reducer
const rootReducer = combineReducers({
    formStare: formReducer
});
export default rootReducer;
