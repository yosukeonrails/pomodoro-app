
var action = require('../actions/index');
import {TOGGLE_TIMER, UPDATE_PIE} from '../actions/index';

let stateDefault = {
     timerStarted:false,
     pomodoros:0,
     break:0,
     breakTime:false,
     pie:100
}

export default function timerReducer(state, action){

    state = state || stateDefault;

    switch (action.type) {
    
        case 'TOGGLE_TIMER':    
        return {...state , timerStarted:action.timerStarted }
        break;

           
        case 'UPDATE_PIE':    
        return {...state , pie:action.pie }
        break;

        
    }

    return {...state}

}




