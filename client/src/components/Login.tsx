import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { logginginUser } from '../redux/userloginSlice';
import { useNavigate } from 'react-router-dom';

interface ILoginProps{
  email: string;
  password: string;
}

const Login : React.FC = () => {

  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.login.isLoggedin);
  const router = useNavigate();

  const {register, handleSubmit, formState:{errors}} = useForm<ILoginProps>();

  const onsubmit = (data: ILoginProps) => {
    const loginData = {
      email: data.email,
      password: data.password
    }
    dispatch(logginginUser(loginData));
  }

  useEffect(()=>{
    if(isAuth){
      router('/home')
    }else{
      console.log('please enter valid credentials')
    }
  },[isAuth])



  return (
    <div>
      <form 
      onSubmit={handleSubmit(onsubmit)}
      className='flex flex-col w-screen gap-4 h-screen justify-center items-center m-auto bg-zinc-900'>
       {!isAuth && <p className='text-red-500 text-xs'>please enter valid credentials</p>}
        <input 
        {...register('email', {required: true})}
        type="email" placeholder="email" 
        className='mb-3 p-2 rounded-md'
        />
        {errors && errors.email && <p className='text-red-500'>please enter valid email</p>}
        <input 
        {...register('password', {required: true})}
        type="password" placeholder="Password" 
        className='p-2 rounded-md'
        />
        {errors && errors.password && <p className='text-red-500'>please enter valid password</p>}
        <button 
        onClick={() => handleSubmit(onsubmit)}
        className='text-slate-50 bg-black font-medium px-5 py-2 rounded-xl'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login