const React = require('react');
import { BrowserRouter , Route , Link , NavLink , HashRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import Todo from './Todo'
import {addTodo, removeTodo} from '../actions'
let timer_style= require('../../css/todo.less');

class TodoApp extends React.Component{

    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);

        this.state = {
            input:''
        }
        
    }

    _handleKeyPress(e){
       
        if (e.key === 'Enter') {
            this.addTodo();
          }
    }
    
    handleInput(e){

        this.setState({
             input:e.target.value
        })        

    }

    removeTodo(index){

        this.props.dispatch(removeTodo(index)); 

    }

    addTodo(){

        let data ={
             description:this.state.input,
             done:false
        }

        this.props.dispatch(addTodo(data)); 
        
        this.setState({
            input:''
        })
    }

    checkTodo(index, done ){
        
        

    }

    render(){   
        
        let todoList = this.props.todos.map((todo, i )=>{
            
            return <Todo key={i} index={i} data={todo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
        })

        return(
            <div> 

                  <div className="todoContainer">

                        <div className="todoCreator">

                            <input  value={this.state.input} onKeyPress={this._handleKeyPress} onChange={(event)=>{ this.handleInput(event) }} ></input>
                            <button  onClick={this.addTodo}>Add</button>

                        </div>

                        <div className="todoList">
                            {todoList}
                        </div>


                        <div></div>
                  </div>
           </div>
        )

    }

}

var mapStateToProps = (state)=>{

    console.log('here is state')
    return{

        todos:state.todo.todos    
    }
}

var TodoAppComponent = connect(mapStateToProps)(TodoApp)

module.exports = TodoAppComponent;
