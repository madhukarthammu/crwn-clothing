import React from 'react'

import './signin.styles.scss'

import FormInput from '../FormInput/form-input.component'
import CustomButton from '../Custom-Button/custom-button.component'
import {auth, SignInwithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props); 

        this.state = {
            email: '',
            password: ''
        };
    }


    
    handleSubmit =async (event) => {
        event.preventDefault();
        
        const { email, password } = this.state;

        await auth.signInWithEmailAndPassword(email, password);

        this.setState({ email:'', password:'' })
    }

    
    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
                 name='email'
                 type='email' 
                 handleChange={this.handleChange} 
                 label='email' 
                 value={this.state.email} 
                 required 
                 />

                <FormInput
                 name='password'
                 type='password'
                 value={this.state.password}
                 handleChange={this.handleChange}
                 label='password'
                 required
                />
                <div className="signinbuttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={SignInwithGoogle} isGoggleSignIn>SignInwithGoogle</CustomButton>
                </div>
                </form>
            </div>
        )
    }

} 
export default SignIn;