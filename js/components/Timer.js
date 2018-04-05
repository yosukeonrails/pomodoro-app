const React = require('react');
let timer_style= require('../../css/index.less'); // loading the timer css file
// let timer_style= require('../../css/timer.less'); // loading the timer css file

import {connect} from 'react-redux';
import TimeTracker from './TimeTracker';
import TomatoTrackerComponent from './TomatoTracker'

// Style for Timer Component  // 

let x = 350;
let innerWidth = x - (x/5) + 'px';
let innerHalf =  (( x- (x/5)  ) / 2  )  + 'px'
let width = x+'px';
let half =  (x/2) + 'px';
let tracker_color= 'rgb(25, 173, 220)';
let contentPosition = (x/10) +'px';

let styles = {

    timerContainer:{
        height:width,
        width: width,
    },

    "pie":{
        "position":"absolute",
        "width":width,
        "height":width,
        "borderRadius":half,
        "clip":"rect(0px, "+half+", "+width+", 0px)"
    },
    innerCircle:{
        width:innerWidth,
        height:innerWidth,
        borderRadius:innerHalf,
        top:contentPosition,
        left:contentPosition
    },
    innerContent:{
        top:0,
        width:(x-(x/5)) + 'px'
    
    },
    timerBackground:{
        width: width,
        height: width ,
        borderRadius: half
    },
    hold: {
        position:"absolute",
        width:width,
        height:width,
        borderRadius:half,
        clip:"rect(0px, "+width+", "+width+", "+half+")"
    },
    pie_left :{
        transform: 'rotate(0deg)'
    },
    pie_right : {
        transform: 'rotate(180deg)'
    },
    pie_left_rotation:{
        transform: 'rotate(150deg)',
        backgroundColor:tracker_color,
        transition: "1s",
    },
    pie_right_rotation:{
        transform: 'rotate(180deg)',
        backgroundColor:tracker_color,
        transition: "1s",
    },

    
}


class Timer extends React.Component{
    
    constructor(props){
        super(props);
    
        this.updateMessage = this.updateMessage.bind(this);

        // setting up initial state
        this.state={
            breakLength:5,
            workLength:25,
            longBreakLength:15,
            message_animation:'',
            message:'',
            messageColor:'#ff5170b8'
        }

    }

    updateMessage(mode){

        // Updates message and shows it on screen depending on current "mode" 
        // Decides which color and message

        let dis = this;
        let message= mode === 'short-break' ?  "It's break time!" : "It's crunch time!"; 
        let messageColor= mode === 'short-break' ? "#22bb8a94" : "#ff5170b8";

    
        this.setState({
            message_animation:'fade-in',
            messageColor:messageColor,
            message:message
        })

        // make the message disapear after one second 

        setTimeout(function(){ 
            dis.setState({ message_animation:'fade-out' }) }, 1000);

    }

    render(){   
        
        
        // On render, show the current progress tag 
        let progress_number = this.props.pomodoroInfo.pomodores+1; 
        let progress_tag = this.props.pomodoroInfo.mode === 'work' ? "Pomodoro Round "+ (progress_number) : "Break Session "+(progress_number -1 ); 

        // On render , find the right degree on the left side of the pie and right side
        // this calculates the current progress and outputs a left and right degree
        let getDegree = p =>(p/100)*180

        let left_degree =  getDegree(this.props.pieCoordinates.leftPie);
        let right_degree =  getDegree(this.props.pieCoordinates.rightPie);
    
        styles.pie_left_rotation.transform = 'rotate('+left_degree+'deg)';
        styles.pie_right_rotation.transform = 'rotate('+right_degree+'deg)'
     

        return(

            <div> 

                <div className={"timer-message "+this.state.message_animation} style={{backgroundColor:this.state.messageColor}} > <h1> {this.state.message} </h1> </div>             

                <div className="main-top" > <TomatoTrackerComponent/> </div>

                <div className="progress-label" style={{borderColor:this.state.messageColor}}  > <h1>{progress_tag}</h1>  </div>

                
                    <div className="timerContainer" style={styles.timerContainer}>
                        <div className="timerBackground" style={ styles.timerBackground}></div>

                        <div style={ {...styles.hold , ...styles.pie_left}}><div  style={{...styles.pie,...styles.pie_left_rotation}}></div></div>
                        <div style={ {...styles.hold , ...styles.pie_right}}><div style={{...styles.pie,...styles.pie_right_rotation}}></div></div>

                        <div className="innerCircle" style={styles.innerCircle} >
                                <div className="content" style={styles.innerContent}>
                                <TimeTracker data={this.state} updateMessage={this.updateMessage} x={x} innerWidth={innerWidth} half={half}/>
                                </div>
                        </div>
                    </div>


            </div>
        )
    }

}

    var mapStateToProps = (state)=>{

        return{
            timer:state.timer.timerStarted,
            pieCoordinates:state.timer.pieCoordinates,
            pomodoroInfo:state.timer.pomodoroInfo
        }   
    }

var TimerComponent = connect(mapStateToProps)(Timer)

module.exports = TimerComponent;
