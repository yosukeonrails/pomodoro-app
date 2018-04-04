const React = require('react');
import { BrowserRouter , Route , Link , NavLink , HashRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux';

class Header extends React.Component{

    render(){
        return(
            <div> 
                    <h1> Header </h1>
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
