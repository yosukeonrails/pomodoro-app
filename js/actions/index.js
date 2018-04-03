
export var ADD_TODO = 'GET_TODOS';

export function addTodo(data){
 return {
     type:GET_TODOS,
     data:data
 }
}
