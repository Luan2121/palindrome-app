import { combineReducers } from 'redux';
// Reducers
import palindrome from './palindrome';

const rootReducer = combineReducers({
    palindrome
});  

export default rootReducer;