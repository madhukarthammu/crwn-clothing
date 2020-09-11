import React from 'react';
import './App.css';

import Homepage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom'

function Hatspage() {
  return (
    <div>hatspage</div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
