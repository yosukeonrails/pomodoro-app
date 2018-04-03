
var action = require('../actions/index');
import {ADD_TODO} from '../actions/index';

let stateDefault = {
     todos:0
}

export default function todoReducer(state, action){
    state = state || stateDefault;

    switch (action.type) {
    
        case 'ADD_TODO':    

        return action.data;
        break;
        
    }

    return {...state}

}




