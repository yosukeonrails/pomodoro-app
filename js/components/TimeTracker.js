const React = require('react');
let timer_style= require('../../css/timer.less'); // loading the timer css file
import {connect} from 'react-redux';
import {toggleTimer} from '../actions'

class TimeTracker extends React.Component{

    constructor(props){
        super(props)

        this.state= {
            min:1,
            sec:0,
            timerRunning:false
        }

    }   

    updateTime(minute, second){
        
        let min= minute;
        let sec = second -1;
        console.log(sec)

        if(sec < 0 ){
            min = min -1;       
            sec = 59;

            if(min < 0 ){

                // here go to a function that sees how many pomodores there are
                // if pomodore is not 0 , give short break, 

                this.toggleTimer(false);
                return
            }

        }

       

        this.setState({
            sec:sec,
            min:min
        })
        
    }

    componentDidUpdate(){

    }

    toggleTimer(start){

        let dis =this;

        if(start && !this.state.timerRunning ){

            this.timer= setInterval(function(){ dis.updateTime(dis.state.min, dis.state.sec) },
            1000);
            
            this.setState({
                timerRunning:true
            })

        } else{

            clearInterval(this.timer)

            this.setState({
                timerRunning:false
            })

        }

  
    }

    render(){

        console.log(this.state)
        return(
          <div> 
            <div className="timeTracker">

                <div className="timeDisplay">

                        <div className="timerNumbers">
                            <div className="timerTime" id="minutes" > <h1> {this.state.min} </h1></div>
                            <div className="timerTime" id="colon" > <h1> : </h1></div>
                            <div className="timerTime" id="seconds" > <h1> {this.state.sec} </h1></div>
                        </div>

                </div>

                    <div>
                        <button onClick={ ()=>{ this.toggleTimer(true) }} > Start </button>
                        <button onClick={ ()=>{ this.toggleTimer(false) }}  > Pause </button>
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
        todos:state.todo.todos,
        timerStarted:state.timer.timerStarted 
    }
}

var TimeTrackerComponent = connect(mapStateToProps)(TimeTracker)

module.exports = TimeTrackerComponent;
