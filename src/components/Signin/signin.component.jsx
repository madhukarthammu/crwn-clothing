import React, {useState} from 'react'

import './signin.styles.scss'

import FormInput from '../FormInput/form-input.component'
import CustomButton from '../Custom-Button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const[userCredentials, setUserCredentials] = useState({email: '', password: ''})
    
    const { email, password } = userCredentials

    const handleSubmit = (event) => {
        event.preventDefault();
    
        emailSignInStart(email, password);

    }

    
    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    }

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                <FormInput
                 name='email'
                 type='email' 
                 handleChange={handleChange} 
                 label='email' 
                 value={email} 
                 required 
                 />

                <FormInput
                 name='password'
                 type='password'
                 value={password}
                 handleChange={handleChange}
                 label='password'
                 required
                />
                <div className="signinbuttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoggleSignIn>SignInwithGoogle</CustomButton>
                </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);