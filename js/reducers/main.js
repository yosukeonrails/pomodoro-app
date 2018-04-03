const redux = require('redux');
import todoReducer from './todo';
import timerReducer from './timer';

var reducer = redux.combineReducers({
    todo:todoReducer,
    timer:timerReducer
})


export default reducer;