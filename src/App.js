import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import Header from './components/Header/header.component'
import ShopPage from './pages/Shoppage/shoppage.component'
import SigninSignup from './pages/SigninSignuppage/signinsignup.component'
import { createuserprofile } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import setCurrentUser from './redux/user/user.actions'


class App extends React.Component {

  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
       const userref = await createuserprofile(userAuth);
       
       userref.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
   
      }
      else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/signinsignup" render={ () =>  this.props.currentUser ? (<Redirect to="/" />) : (<SigninSignup />)  } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>  dispatch(setCurrentUser(user)) 

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
