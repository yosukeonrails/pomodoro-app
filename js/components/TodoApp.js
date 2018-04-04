const React = require('react');
import { BrowserRouter , Route , Link , NavLink , HashRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import Todo from './Todo'
import {addTodo, removeTodo, editTodo, addToDone, updateTodo} from '../actions'
let timer_style= require('../../css/todo.less');

class TodoApp extends React.Component{

    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.removeTodo =  this.removeTodo.bind(this);
        this.editTodo =  this.editTodo.bind(this);
        this.sortTodos =  this.sortTodos.bind(this);

        this.state = {
            input:'',
            sorted:true
        }
        
    }

    _handleKeyPress(e){
       
        if (e.key === 'Enter') {
            this.addTodo(this.state.input , false);
          }
    }   

    editTodo(index, description){

        this.props.dispatch(editTodo(index, description));
    
    }
    
    handleInput(e){

        this.setState({
             input:e.target.value
        })        

    }

    removeTodo(index){
        
        this.props.dispatch(removeTodo(index)); 

    }

    sortTodos(){

        let done= [];
        let notDone= [];

        this.props.todos.map((todo)=>{
            if(!todo.done){ notDone.push(todo) } else { done.push(todo)}
        })
         
        let sorted = [...notDone , ...done];
        
        this.setState({
            sorted:true
        })
        
        this.props.dispatch(updateTodo(sorted))

    }

    addTodo(description, done , index){
        
        let data ={
            description:description,
            done:done
        }

        if(!done){

            this.setState({
                input:''
            })

            this.props.dispatch(addTodo(data)); 
                    
        } else {
             // if clicking on already created one  
            this.props.dispatch(addTodo(data)); 
        }
        
        this.setState({
            sorted:false
        })

    }

    checkTodo(index, done ){
        
    
    }

    render(){   
         
       if(!this.state.sorted){
           this.sortTodos();
       }

        let todoList = this.props.todos.map((todo, i )=>{
            
            return <Todo key={i} index={i} data={todo} editTodo={this.editTodo} addTodo={this.addTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
        })

        let doneList = this.props.done_todos.map((todo,i)=>{
            return <Todo key={i} index={i} data={todo} editTodo={this.editTodo} addTodo={this.addTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
        })

        return(
            <div> 

                  <div className="todoContainer">

                        <div className="todoCreator">
                        
                            <div>  <input  value={this.state.input} onKeyPress={this._handleKeyPress} onChange={(event)=>{ this.handleInput(event) }} ></input></div>

                            <div>  <button  onClick={()=>{this.addTodo(this.state.input , false)}}>Add</button>  </div> 

                        </div>

                        <div className="todoList">
                            {todoList}
                        </div>

                        <div className="todoList">
                            {doneList}
                        </div>


                        <div></div>
                  </div>
           </div>
        )

    }

}

var mapStateToProps = (state)=>{

    return{
        todos: state.todo.todos,
        done_todos: state.todo.done_todos,
        other:state.todo.other
    }
}

var TodoAppComponent = connect(mapStateToProps)(TodoApp)

module.exports = TodoAppComponent;
