const React = require('react');
let timer_style= require('../../css/timer.less'); // loading the timer css file
import {connect} from 'react-redux';
import {toggleTimer, updatePie, updatePomodoroInfo } from '../actions'

class TimeTracker extends React.Component{

    constructor(props){
        super(props)

        this.updateTime = this.updateTime.bind(this);
        this.giveBreak = this.giveBreak.bind(this);

        
        this.state= {
            breakLength:this.props.data.breakLength,
            workLength:this.props.data.workLength,
            longBreakLength:this.props.data.longBreakLength,
            currentLength:this.props.data.workLength,
            min:this.props.data.workLength,
            sec:0,
            timerRunning:false,
            mode:'work',
            pomodores:0,
            done:false
        }

    }   

    giveBreak(size){

        let min = (size==="small") ? this.state.breakLength : this.state.longBreakLength ;
        let done = (size === "small") ? false : true;   

        this.setState({ pomodores:this.state.pomodores+1});
 
        
        this.setState({
            min:min,
            sec:0,
            mode:'short-break',
            currentLength:min,
            done:done
        })  

         // reset the pie chart
         this.props.dispatch(updatePie( {leftPie:100 , rightPie:100 } ));
         this.props.dispatch( updatePomodoroInfo( { pomodores:this.state.pomodores, mode:this.state.mode } ));
    }

    updateTime(minute, second){
        
        let min= minute;
        let sec = second -1;

        let leftPie;
        let rightPie;

        let getCoordinates = (p)=>{ 
                let c= ( p - ( 1.66667*2 / this.state.currentLength )); 
                return c
             }   


        if(this.props.pieCoordinates.leftPie <= 0 ){
            
            leftPie = 0;
            rightPie = getCoordinates(this.props.pieCoordinates.rightPie)

        }

        else 

        {   
            rightPie= this.props.pieCoordinates.rightPie;
            leftPie = getCoordinates(this.props.pieCoordinates.leftPie)
        } 
                
        let pieCoordinates = {
             leftPie:leftPie, 
             rightPie:rightPie
        }

        this.props.dispatch(updatePie( pieCoordinates ));

        
        if(sec <= 0 ){

            min = min -1;       
            sec = 59;

            if( min < 0  ){
                
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
                        min:this.state.workLength,
                        sec:0,
                        mode:'work',
                        currentLength:this.state.workLength
                    })

                    // reset the pie chart
                    this.props.dispatch(updatePie( {leftPie:100 , rightPie:100 } ));
                    this.props.dispatch( updatePomodoroInfo( { pomodores:this.state.pomodores, mode:this.state.mode } ));

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

        // reset the pie chart
        this.props.dispatch(updatePie( {leftPie:100 , rightPie:100 } ));
        this.props.dispatch( updatePomodoroInfo( { pomodores:this.state.pomodores, mode:this.state.mode } ));

        return 

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
        
        // Making sure that the digits are always 2 
        
        let min_view= this.state.min.toString();
        min_view = min_view.length === 1 ? "0" + min_view  : min_view;

        let sec_view= this.state.sec.toString();
        sec_view = sec_view.length === 1 ? "0" + sec_view  : sec_view;


        let fifth = (this.props.x / 5) + "px"; 
        let tenth =  (this.props.x / 10) + "px"; 
        let buttonStyle= { height:tenth, width: fifth};
        let number_ems = (this.props.x * 0.014)+"em";
        let h1Style={ fontSize:number_ems }
        let tag = (this.state.mode === "short-break") ? "Break Time" : "Work Time"

        return(
          <div> 

              
       <div className="timeTracker" style= {{height:this.props.innerWidth, paddingTop:tenth }} >
         
                <div className="timeDisplay"  style= {{height:this.props.half, paddingTop:tenth}} >

                        <div className="timerNumbers" style={{height:fifth}} >
                            <div className="timerTime" id="minutes" > <h1 style={h1Style} > {min_view} </h1></div>
                            <div className="timerTime" id="colon" > <h1 style={h1Style}> : </h1></div>
                            <div className="timerTime" id="seconds" > <h1 style={h1Style}> {sec_view} </h1></div>
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
        pomodores:state.timer.pomodores,
        pieCoordinates: state.timer.pieCoordinates
    }
}

var TimeTrackerComponent = connect(mapStateToProps)(TimeTracker)

module.exports = TimeTrackerComponent;
