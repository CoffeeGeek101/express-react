import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loggingOutUser } from "../../redux/userlogoutSlice";
import { useNavigate } from "react-router-dom";

const Home : React.FC = () => {

    const isLoggedOut = useAppSelector((state)=>state.logout.isLoggedOut);

    const dispatch = useAppDispatch();
    const router = useNavigate();

    const handleLogout = () => {
        dispatch(loggingOutUser());
    }

    useEffect(()=>{
        if(isLoggedOut){
            router('/');
        }else{
        console.log("not yet logged out");
        }
    },[isLoggedOut])

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-zinc-900 h-screen w-screen">
        <h1 className='text-slate-50 text-3xl font-bold'>Woho!..You are in.</h1>
        <button 
        onClick={()=>handleLogout()}
        className='text-slate-50 bg-black font-medium p-2 rounded-xl'>Logout</button>
    </div>
  )
}

export default Home