const redux = require('redux');
import todoReducer from './todo';

var reducer = redux.combineReducers({
    todo:todoReducer
})


export default reducer;