import React from 'react';
import './signup.styles.scss';
import FormInput from '../FormInput/form-input.component'
import CustomButton from '../Custom-Button/custom-button.component'
import {signUpStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {signUpStart} = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }

        signUpStart({email, password, displayName})
        this.setState({email: '', password: '', displayName: '', confirmPassword: ''})

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name] : value });
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
                name='displayName'
                type='text'
                handleChange={this.handleChange}
                label='displayName'
                value={displayName}
                />

                <FormInput 
                name='email'
                type='email'
                handleChange = {this.handleChange}
                label='email'
                value={email}
                />

                <FormInput
                name='password'
                type='password'
                handleChange={this.handleChange}
                label='password'
                value={password}
                />

                <FormInput
                name='confirmPassword'
                type='Password'
                handleChange={this.handleChange}
                label='confirmPassword'
                value={confirmPassword}
                />

                <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);