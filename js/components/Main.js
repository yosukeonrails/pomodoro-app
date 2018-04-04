const React = require('react');
import {Switch} from 'react-router-dom'
import TimerComponent from './Timer'
import TodoAppComponent from './TodoApp'

class Main extends React.Component{

    render(){
        return(
            <div>
                <h1> Main Content </h1>
                
                <div className="main-left" ><TimerComponent/></div>
                <div className="main-right" > <TodoAppComponent/></div>

            </div>
        )
    }
  
  }
  

  export default Main;