const React = require('react');

class Todo extends React.Component{

    constructor(props){

        super(props)

        this.removeTodo = this.removeTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);

        this.state = {
             description: this.props.data.description
        }

    }


    handleEdit(e){

        this.props.editTodo(this.props.index, e.target.value);

        // edit by key 
    }

    checkTodo(e){
        
        e.preventDefault();

        if(e.target === e.currentTarget){
            
            let checked = this.props.data.done ? false : true;

            this.props.addTodo(this.props.data.description , checked, this.props.index); 
            this.props.removeTodo(this.props.index);

        }


    }

    removeTodo(index){

        this.props.removeTodo(index);

    }

    render(){

        let todoColor= this.props.data.done ? 'pink' : 'yellow'

         return (
            <div onClick={(event)=>{this.checkTodo(event)} } style={{backgroundColor:todoColor}} className="todoComponent">
                
                <div className="todo-description"> <input 
                onChange={(event)=>{this.handleEdit(event)}}  value={this.props.data.description } ></input> </div>

                <div className="todo-buttons"> 
                <button onClick={()=>{ this.removeTodo(this.props.index) }}> <i className="material-icons">delete</i>  </button>
              
                </div>

            </div>
         )
       
    }
}

export default Todo;
