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
            timerRunning:false,
            breakMode:false,
            pomodores:0
        }

    }   

    giveBreak(){


        console.log('break time ');

        this.setState({
            min:0,
            sec:0,
            breakMode:true
        })

    }

    updateTime(minute, second){
        
        let min= minute;
        let sec = second -1;
    
        console.log(sec)

        if(sec <= 0 ){

            min = min -1;       
            sec = 59;

            if(min < 0  ){
                
                // if this is not a break
                if(!this.state.breakMode){

                    this.setState({ pomodores:this.state.pomodores+1})

                    if(this.props.pomodores >= 4 ){

                        // give big break

                    } else {
                        this.giveBreak();
                    }
                    
                } else {

                     // if this is a break

                    this.setState({
                        min:1,
                        sec:0,
                        breakMode:false
                    })

                }
                      
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
                min:1,
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

        let tag = (this.state.breakMode) ? "Break Time" : "Work Time"

        return(
          <div> 

              
            <div className="timeTracker">
          <div className="tracker_viwer">  <h1>{tag}</h1>  <h1>{this.state.pomodores}</h1></div>
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
        timerStarted:state.timer.timerStarted,
        pomodores:state.timer.pomodores
    }
}

var TimeTrackerComponent = connect(mapStateToProps)(TimeTracker)

module.exports = TimeTrackerComponent;
