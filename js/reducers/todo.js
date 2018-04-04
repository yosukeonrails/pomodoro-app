
var action = require('../actions/index');
import {ADD_TODO} from '../actions/index';

let stateDefault = {
     todos:[]
}

export default function todoReducer(state, action){

    state = state || stateDefault;

    switch (action.type) {
    
        case 'ADD_TODO':  

        return {
            ...state,
            todos:[...state.todos, action.data]
        }

        case 'REMOVE_TODO':  
        console.log("REMOVING TODO")
        return {
            ...state,
            todos: state.todos.splice( action.index , 1 )
        }


        break;
    }

    return {...state}

}




