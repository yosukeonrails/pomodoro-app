
export var TOGGLE_TIMER = 'TOGGLE_TIMER';

export function toggleTimer(start){
 return {
     type:TOGGLE_TIMER,
     timerStarted:start
 }
}


export var ADD_TODO = 'ADD_TODO';

export function addTodo(data){

    return {
      type:ADD_TODO,
      data:data
    }

   }



export var REMOVE_TODO = 'REMOVE_TODO';

export function removeTodo(index){

    return {
      type:REMOVE_TODO,
      index:index
    }

   }