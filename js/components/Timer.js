const React = require('react');

let timer_style= require('../../css/timer.less'); // loading the timer css file
import {connect} from 'react-redux';
import TimeTracker from '../components/TimeTracker';

let x = 350;
let innerWidth = x - (x/5) + 'px';
let innerHalf =  (( x- (x/5)  ) / 2  )  + 'px'
let width = x+'px';
let half =  (x/2) + 'px';
let tracker_color= 'blue';
let contentPosition = (x/10) +'px';

let styles = {

    timerContainer:{
        height:width,
        width: width
    },

    "pie":{
        "transition":"all 1s",
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
        backgroundColor:tracker_color
    },
    pie_right_rotation:{
        transform: 'rotate(180deg)',
        backgroundColor:tracker_color
    },

    
}


class Timer extends React.Component{
    
    constructor(props){
        super(props);
    }


    componentDidMount() {

        if(this.props.timerStarted){
            console.log('Timer is on')
        }
    
    }

    render(){   

        
        return(
            <div> 

            <h1> Timer   </h1>

            <div className="timerContainer" style={styles.timerContainer}>

            <div className="timerBackground" style={ styles.timerBackground}></div>


                    <div style={ {...styles.hold , ...styles.pie_left}}><div  style={{...styles.pie,...styles.pie_left_rotation}}></div></div>
                    <div style={ {...styles.hold , ...styles.pie_right}}><div style={{...styles.pie,...styles.pie_right_rotation}}></div></div>
                
                    <div className="innerCircle" style={styles.innerCircle} >
                         <div className="content" style={styles.innerContent}>
                           <TimeTracker x={x} innerWidth={innerWidth} half={half}/>
                        </div>
                    </div>

            </div>
          </div>
        )
    }

}

var mapStateToProps = (state)=>{

    return{
        timer:state.timer.timerStarted    
    }
}

var TimerComponent = connect(mapStateToProps)(Timer)

module.exports = TimerComponent;
