import React, {useEffect} from 'react';
import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/header.component'
import ShopPage from './pages/Shoppage/shoppage.component'
import SigninSignup from './pages/SigninSignuppage/signinsignup.component'
import { connect } from 'react-redux'
import CheckoutPage from './pages/Checkoutpage/checkout.component'
import {SelectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import {checkUserSession} from './redux/user/user.actions'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
  checkUserSession();
  },[checkUserSession])

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/signinsignup" render={ () =>  currentUser ? (<Redirect to="/" />) : (<SigninSignup />)  } />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: SelectCurrentUser,
})

 const mapDispatchToProps = dispatch => ({
  checkUserSession : () =>  dispatch(checkUserSession()) 

 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
