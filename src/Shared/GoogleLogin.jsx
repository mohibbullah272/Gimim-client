import React, { useContext } from 'react';
import googleIcon from '../assets/google-Icon.svg'
import { AuthContext } from '@/AuthProvider/AuthProvider';
const GoogleLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(res=>{
            console.log(res.user)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='flex w-full my-2 items-center gap-3 btn btn-outline'><img className='w-7 h-7' src={googleIcon} alt="google-icon" /> Login With Google</button>
        </div>
    );
};

export default GoogleLogin;