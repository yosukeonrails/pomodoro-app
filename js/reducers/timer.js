
var action = require('../actions/index');
import {ADD_TODO} from '../actions/index';

let stateDefault = {
     timerStarted:false
}

export default function timerReducer(state, action){
    state = state || stateDefault;

    switch (action.type) {
    
        case 'ADD_TODO':    

        return action.data;
        break;
        
    }

    return {...state}

}




