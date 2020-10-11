import React, {useState} from 'react';
import './signup.styles.scss';
import FormInput from '../FormInput/form-input.component'
import CustomButton from '../Custom-Button/custom-button.component'
import {signUpStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

const SignUp = ({signUpStart}) => {
 
const[userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
})

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }

        signUpStart({email, password, displayName})
        setUserCredentials({email: '', password: '', displayName: '', confirmPassword: ''})
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name] : value });
    }

        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={handleSubmit}>
                <FormInput
                name='displayName'
                type='text'
                handleChange={handleChange}
                label='displayName'
                value={displayName}
                />

                <FormInput 
                name='email'
                type='email'
                handleChange = {handleChange}
                label='email'
                value={email}
                />

                <FormInput
                name='password'
                type='password'
                handleChange={handleChange}
                label='password'
                value={password}
                />

                <FormInput
                name='confirmPassword'
                type='Password'
                handleChange={handleChange}
                label='confirmPassword'
                value={confirmPassword}
                />

                <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);