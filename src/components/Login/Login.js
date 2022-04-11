import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
     
    let from = location.state?.from?.pathname || '/'
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(user){
        navigate(from , {replace: true})
    }
    const handleUserSignIn= event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email ,password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2>Login pleace</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-grp">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-grp">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>loading...</p>
                    }
                    <input className='lgn-btn' type="submit" value="Login now" required/>
                </form>
                <p className='redirect-signin'>
                    New To Ama john? <Link to='/signup' >Create an account</Link>
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

export default Login;