
var action = require('../actions/index');
import {ADD_TODO, REMOVE_TODO} from '../actions/index';

let stateDefault = {
     todos:[]
}

export default function todoReducer(state, action){

    state = state || stateDefault;

    switch (action.type) {
    
        case 'ADD_TODO':  

        return {
            ...state,
            todos:[...state.todos,  action.data ]
        }
        break;

        case 'REMOVE_TODO':  
        
        console.log('removing', action.index);

        return {
          todos: state.todos.filter( (element, index ) => index !== action.index)
        }
        
        break;
    }

    return {...state}

}




