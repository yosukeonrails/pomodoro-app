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
            mode:'work',
            pomodores:0,
            bigBreak:false,
            done:false
        }

    }   

    giveBreak(size){

        let min = (size==="small") ? 1 : 3 ;
        let done = (size === "small") ? false : true;

        this.setState({ pomodores:this.state.pomodores+1})

        this.setState({
            min:min,
            sec:0,
            mode:'short-break',
            done:done
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
                
                // if this.state.mode === 'done'
                if(this.state.done){

                    this.resetTimer();
                    return 
                }

                // if this is not a break
                if(this.state.mode === 'work'){
                
                    if(this.state.pomodores >= 3 ){

                        this.giveBreak("big");
                        return

                    } else {
                        this.giveBreak("small");
                    }
                    
                } else {

                     // if this is a break then go" back to work 

                    this.setState({
                        min:1,
                        sec:0,
                        mode:'work'
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

    resetTimer(sure){

        clearInterval(this.timer)

        this.setState({
            timerRunning:false,
            min:1,
            sec:0,
            pomodores:0,
            mode:'work'
        })

        return 

    }



    toggleTimer(start){
        

        let dis =this;

        if(start && !this.state.timerRunning ){

            this.timer= setInterval(function(){ dis.updateTime(dis.state.min, dis.state.sec) },
            100);
            
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
     //   <div className="tracker_viwer">  <h1>{tag}</h1>  <h1>{this.state.pomodores}</h1></div>
        console.log(this.props.x , this.props.innerWidth);
        let fifth = (this.props.x / 5) + "px"; 
        let tenth =  (this.props.x / 10) + "px"; 
        let buttonStyle= { height:tenth, width: fifth};
        let number_ems = (this.props.x * 0.014)+"em";
        let h1Style={ fontSize:number_ems }
        let tag = (this.state.mode === "short-break") ? "Break Time" : "Work Time"

        return(
          <div> 

              
       <div className="timeTracker" style= {{height:this.props.innerWidth, paddingTop:tenth }} >
         
                <div className="timeDisplay"  style= {{height:this.props.half, paddingTop:fifth}} >

                        <div className="timerNumbers" style={{height:fifth}} >
                            <div className="timerTime" id="minutes" > <h1 style={h1Style} > {this.state.min} </h1></div>
                            <div className="timerTime" id="colon" > <h1 style={h1Style}> : </h1></div>
                            <div className="timerTime" id="seconds" > <h1 style={h1Style}> {this.state.sec} </h1></div>
                        </div>

                </div>

                    <div>
                        <button style={buttonStyle} onClick={ ()=>{ this.toggleTimer(true) }} > Start </button>
                        <button   style={buttonStyle} onClick={ ()=>{ this.resetTimer(false) }}  > Reset </button>
                    </div>
               
            </div>       
          </div>
        )
    }

}

var mapStateToProps = (state)=>{

    return{
        timerStarted:state.timer.timerStarted,
        pomodores:state.timer.pomodores
    }
}

var TimeTrackerComponent = connect(mapStateToProps)(TimeTracker)

module.exports = TimeTrackerComponent;
