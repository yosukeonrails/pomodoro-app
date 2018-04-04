const React = require('react');
let todoColor;

class Todo extends React.Component{

    constructor(props){

        super(props)

        this.removeTodo = this.removeTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        this.hoverTodo = this.hoverTodo.bind(this);

        this.state = {

             description: this.props.data.description,
             todo_hover_style:"",

        }

    }
 

    hoverTodo(e , on){

        e.preventDefault();

        let todo_color;
      

            if(on){
            todo_color = this.props.data.done ?  'unchecked-todo' : 'checked-todo';
            } else{
                todo_color = "";
            }
                 
     
        this.setState({
            todo_hover_style:todo_color
        });

    }

    handleEdit(e){

        this.props.editTodo(this.props.index, e.target.value);
        // edit by key 
    }


    checkTodo(e){
        
        console.log(e.target.id);
        if(e.target.id === "delete-button"){ return };

            let checked = this.props.data.done ? false : true;

            this.props.addTodo(this.props.data.description , checked, this.props.index); 
            this.props.removeTodo(this.props.index);


    }

    removeTodo(index){

        this.props.removeTodo(index);

    }

    render(){

        todoColor= this.props.data.done ? "#828282": "#f1f1f1";
        let todoDescription= this.props.data.done ?  <h1> <strike> {this.props.data.description } </strike> </h1> :   <h1>{this.props.data.description } </h1>
        
        
        return (
            <div>
            <div    id="todo-description"   style={{backgroundColor:todoColor}} onClick={(event)=>{this.checkTodo(event)} } className="todoComponent">
        
                
                <div className="todo-description"> 

                {/* <input onChange={(event)=>{this.handleEdit(event)}}  value={this.props.data.description } ></input>  */}
                {todoDescription}

                </div>


                <div className="todo-buttons"> 
                <button  id="delete-button" onClick={()=>{ this.removeTodo(this.props.index) }}> <i id="delete-button" className="material-icons">delete</i>  </button>
              
                </div>
            </div>
         
            </div>
         )
       
    }
}

export default Todo;
