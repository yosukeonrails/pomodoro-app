const React = require('react');

class Todo extends React.Component{

    constructor(props){

        super(props)

        this.removeTodo = this.removeTodo.bind(this);

        this.state = {
             description: this.props.data.description
        }

    }

    handleEdit(e){

        this.setState({
             description: e.target.value
        })
        // edit by key 

    }

    removeTodo(){

        this.props.removeTodo(this.props.index);

    }


    render(){
        console.log('todo props ')
            console.log(this.props)
         return (
            <div className="todoComponent">

                <div className="todo-description"> <input onChange={(event)=>{this.handleEdit(event)}} value={this.state.description} ></input> </div>

                <div className="todo-buttons"> 
                <button onClick={this.removeTodo}> <i className="material-icons">delete</i>  </button>
              
                </div>

            </div>
         )
       
    }
}

export default Todo;
