
var action = require('../actions/index');
import {ADD_TODO, REMOVE_TODO, EDIT_TODO, ADD_TO_DONE, UPDATE_TODO} from '../actions/index';

let stateDefault = {
     todos:[{description:"Make some coffee", done:false} , {description:"Add a Todo to the List", done:false} , {description:"Visit TomatoTracker", done:true}   ],
     done_todos:[],
     other:[]
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

        
        case 'UPDATE_TODO':  

        return {
            ...state,
            todos:action.list
        }
        break;


        case 'REMOVE_TODO':  
        
        return {
            ...state,
          todos: state.todos.filter( (element, index ) => index !== action.index)
        }

        break;


        case 'EDIT_TODO':  

        return {
        ...state,
          todos: state.todos.filter( (element, index ) =>{ 
              
            let todo = element;
                
                if(index === action.index){
                    todo.description = action.description
                }

             return todo

          })
        }

        break;


    }

    return {...state}

}




