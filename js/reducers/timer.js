
var action = require('../actions/index');
import {TOGGLE_TIMER} from '../actions/index';

let stateDefault = {
     timerStarted:false,
     pomodoros:0,
     break:0,
     breakTime:false
}

export default function timerReducer(state, action){

    state = state || stateDefault;

    switch (action.type) {
    
        case 'TOGGLE_TIMER':    
        console.log(action)
        return {...state , timerStarted:action.timerStarted }
        break;
        
    }

    return {...state}

}




