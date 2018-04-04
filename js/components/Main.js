const React = require('react');
import {Switch} from 'react-router-dom'

import TimerComponent from './Timer'
import TodoAppComponent from './TodoApp'
import TomatoTrackerComponent from './TomatoTracker'

class Main extends React.Component{

    render(){
        return(
            <div>     
                <div className="main-left" ><TimerComponent/></div>
                <div className="main-right" > <TodoAppComponent/></div>
            </div>
        )
    }
  
  }
  

  export default Main;