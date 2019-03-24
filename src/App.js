import React, { Component } from 'react';
import './App.css';

import {Switch,Route} from "react-router-dom";
import MainContainer from './container/MainContainer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path="*" component={()=>(<h1>Not Found</h1>)}/>
      </Switch>
    );
  }
}


export default App;
