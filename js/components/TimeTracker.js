const React = require('react');
let timer_style= require('../../css/timer.less'); // loading the timer css file
import {connect} from 'react-redux';


class TimeTracker extends React.Component{

    render(){
        return(
          <div> 
            <div className="timeTracker">

                <div className="timeDisplay">

                        <div className="timerNumbers">
                            <div className="timerTime" id="minutes" > <h1> 00 </h1></div>
                            <div className="timerTime" id="colon" > <h1> : </h1></div>
                            <div className="timerTime" id="seconds" > <h1> 00 </h1></div>
                        </div>
                        
                </div>

                    <div>
                        <button> Start </button>
                        <button> Pause </button>
                        <button> Reset </button>
                    </div>
               
            </div>       
          </div>
        )
    }

}

var mapStateToProps = (state)=>{
    console.log('here is state')
    console.log(state);
    return{
        todos:state.todo.todos    
    }
}

var TimeTrackerComponent = connect(mapStateToProps)(TimeTracker)

module.exports = TimeTrackerComponent;
