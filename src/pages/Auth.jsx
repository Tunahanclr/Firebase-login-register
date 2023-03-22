import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Auth() {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({ email: '', password: '' });

    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    };

    const authFunc = async () => {
        if (signUp) {
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;
                if (user) {
                    window.location = '/home';
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;
                if (user) {
                    window.location = '/home';
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className='auth'>
            <div className='auth-container'>
                <h2>{signUp ? 'REGISTER' : 'LOGIN'}</h2>
                <input name='email' value={authData.email} onChange={onChangeFunc} type='email' />
                <input name='password' value={authData.password} onChange={onChangeFunc} type='password' />
                <div className='auth-container-google'>Google ile Giriş yap</div>
                <p onClick={() => setSignUp(!signUp)}>{signUp ? 'Daha önce kayıt oldunuz mu' : 'Kayıt olmak mı istiyorsun'}</p>
                <div onClick={authFunc} className='auth-container-button'>
                    {signUp ? 'Register' : 'Login'}
                </div>
            </div>
        </div>
    );
}
