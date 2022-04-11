import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/')
    }

    const handleCreateUser=event =>{
        event.preventDefault();
        if( password !== confirmPassword){
            setError('your password not matched')
            return;
        }
        if(password.length < 6){
            setError('password should be more than 6 character')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2>SignUp pleace</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-grp">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-grp">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-grp">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p>{error}</p>
                    <input className='lgn-btn' type="submit" value="Signup now" />
                </form>
                <p className='redirect-signin'>
                    Already have an acount? <Link to='/login' >Login now</Link>
                </p>
                <div style={{ display: 'flex' }}>
                    <p className='lines'></p>
                    <p>or</p>
                    <p className='lines'></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;