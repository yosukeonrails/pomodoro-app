const React = require('react');
let timer_style= require('../../css/timer.less'); // loading the timer css file
import {connect} from 'react-redux';


class TimeTracker extends React.Component{

    render(){
        return(
            <div> 
                <h1>Time Tracker!</h1>
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
