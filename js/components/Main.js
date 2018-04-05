const React = require('react');

import TimerComponent from './Timer'
import TodoAppComponent from './TodoApp'
import TomatoTrackerComponent from './TomatoTracker'

class Main extends React.Component{

    render(){

        return(

            <div className="main">     
                <div className="main-left" ><TimerComponent/></div>
                <div className="main-right" ><TodoAppComponent/></div>
            </div>

        )

    }
  
  }
  

  export default Main;