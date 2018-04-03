const React = require('react');
import {Switch} from 'react-router-dom'
import TimerComponent from './Timer'

class Main extends React.Component{

    render(){
        return(
            <div>
                <h1> Main Content </h1>
                <TimerComponent/>
            </div>
        )
    }
  
  }
  

  export default Main;