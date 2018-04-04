const React = require('react');
import { BrowserRouter , Route , Link , NavLink , HashRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux';

class Header extends React.Component{

    render(){
        return(
            <div className="header-container"> 
                    <h1> TomatoTracker </h1> <div className="header-tomato-icon"></div>
          </div>
        )
    }

}

var mapStateToProps = (state)=>{
    return{
        todos:state.todo.todos    
    }
}

var HeaderComponent = connect(mapStateToProps)(Header)

module.exports = HeaderComponent;
