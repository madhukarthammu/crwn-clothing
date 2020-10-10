import React from 'react'

import './signin.styles.scss'

import FormInput from '../FormInput/form-input.component'
import CustomButton from '../Custom-Button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

class SignIn extends React.Component {
    constructor(props){
        super(props); 

        this.state = {
            email: '',
            password: '',
        };
    }


    
    handleSubmit = (event) => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

    }

    
    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const {googleSignInStart} = this.props;
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
                <CustomButton type="button" onClick={googleSignInStart} isGoggleSignIn>SignInwithGoogle</CustomButton>
                </div>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);