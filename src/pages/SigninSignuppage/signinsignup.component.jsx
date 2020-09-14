import React from 'react'

import './signinsignup.styles.scss'

import SignIn from '../../components/Signin/signin.component'
import SignUp from '../../components/Signup/signup.component'

const SigninSignup = () => (
    <div className="signinsignup">
        <SignIn />
        <SignUp />
    </div>
)

export default SigninSignup; 