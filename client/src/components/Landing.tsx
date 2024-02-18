import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing : React.FC = () => {

    const router = useNavigate();
    const handleSignInClick = () => {
        router('/signin');
    }
    const handleLoginClick = () => {
        router('/login');
    }

  return (
    <div className='flex flex-col justify-center gap-3 items-center bg-zinc-900 h-screen w-screen m-auto'>
        <h1 className='text-white font-semibold text-2xl'>Login/Sign up to Continue</h1>
        <div className='flex flex-row gap-3'>
        <button className='text-slate-50 bg-black font-medium p-2 rounded-xl' onClick={handleSignInClick}>Sign in</button>
        <button className='text-slate-50 bg-black font-medium p-2 rounded-xl' onClick={handleLoginClick}>Log in</button>
        </div>
    </div>
  )
}

export default Landing