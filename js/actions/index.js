
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


export var EDIT_TODO = 'EDIT_TODO';

export function editTodo(index,description){

    return {
      type:EDIT_TODO,
        index:index,
        description:description
    }

   }

   export var ADD_TO_DONE = 'ADD_TO_DONE';

   export function addToDone(data){
   
       return {
         type:ADD_TO_DONE,
         data:data
       }
   
      }
   
   


    export var UPDATE_TODO = 'UPDATE_TODO';

    export function updateTodo(list){

        return {

            type:UPDATE_TODO,
                list:list
            }

        }
        

        export var UPDATE_PIE = 'UPDATE_PIE';

        export function updatePie(pie){
        
            return {
              type:UPDATE_PIE,
              pie:pie
            }
        
           }
        


