const React = require('react');
import {connect} from 'react-redux';
//let tomato  = require('../../assets/tomato_png.png');
//import tomato_image from './tomato_png.png';
let timer_style= require('../../css/tomato_tracker.less');

class TomatoTracker extends React.Component{

    constructor(props){
        super(props)
        
    }

    render(){   
        
        // let bar_width

        let tomato_array =[];
        
        for( let i =0 ; i < this.props.pomodoroInfo.pomodores ; i ++){
            tomato_array.push( <Tomato color="red"/>);
        }


        return(
         <div className="tomato-tracker-container">

             <div style={{position:'absolute'}} className="tomato-container"> 
        
            {tomato_array}

            </div>

            <div className="tomato-container"> 

                <Tomato color="gray"/>
                <Tomato color="gray"/>
                <Tomato color="gray"/>
                <Tomato color="gray"/>

            </div>

         </div>
        )

    }

}

class Tomato extends React.Component{
   
    constructor(props){
        super(props)
    }

    render(){
        


        return(
            <div className="tomato-icon-container">
               <div className="tomato-icon"  id={ this.props.color+"-tomato-icon"}></div>
            </div>
        )
    }

}

var mapStateToProps = (state)=>{

    return{
        pomodoroInfo: state.timer.pomodoroInfo
    }
}

var TomatoTrackerComponent = connect(mapStateToProps)(TomatoTracker)

module.exports = TomatoTrackerComponent;
