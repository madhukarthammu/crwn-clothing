import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import Header from './components/Header/header.component'

import ShopPage from './pages/Shoppage/shoppage.component'

import SigninSignup from './pages/SigninSignuppage/signinsignup.component'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: ''
    }
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signinsignup" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
