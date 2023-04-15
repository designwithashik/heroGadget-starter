import React from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
    const auth = getAuth(app)

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
            console.log(error)
        })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user)
            })
        .catch(error=>console.log(error))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='flex flex-col justify-center items-center' >
            <h2>Login</h2>
            <form className='max-w-screen-md min-w-[260px] lg:min-w-[600px]' onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Your Email' />
                 <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                <button
        type='submit'
        className='btn-primary  block'
      >Submit</button>
                <button
                    onClick={handleGoogleLogin}
        type='submit'
        className='btn-primary  block'
      >Google Login</button>
                <button
                    onClick={handleFacebookLogin}
        type='submit'
        className='btn-primary  block'
      >Facebook Login</button>
            </form>
        </div>
    );
};

export default Login;