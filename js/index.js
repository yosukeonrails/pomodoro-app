
var message= require('../css/index.less'); // loading the main css file

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import HeaderComponent from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';

import { BrowserRouter , Route , Link , NavLink , HashRouter, Switch} from 'react-router-dom'

class App extends React.Component{

  render(){
      return(
          <div>
             <HeaderComponent/>
             <Main/>
          </div>
      )
  }

}


ReactDOM.render(
  <HashRouter>
    <Provider store={store} >
    <App />
    </Provider>
  </HashRouter>
,
document.getElementById('root')
)





