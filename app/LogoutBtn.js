'use client'
import {signOut} from 'next-auth/react'

const LogoutBtn = () => {
    return (
        <span className='loginSpan' onClick={()=>{signOut()}}>
            Logout
        </span>
    );
};

export default LogoutBtn;