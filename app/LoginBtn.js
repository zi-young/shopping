'use client'
import {signIn} from 'next-auth/react'

const LoginBtn = () => {
    return (
        <span className='loginSpan' onClick={()=>{signIn()}}>Login</span>
    );
};

export default LoginBtn;