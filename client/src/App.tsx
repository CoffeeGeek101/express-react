import Home from './components/Home/Home'
import Landing from './components/Landing'
import Login from './components/Login'
import Signin from './components/Signin'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAppSelector } from './redux/store'

function App() {

  const isLoggedIN = useAppSelector((state)=>state.login.isLoggedin);
  const isSignedIN = useAppSelector((state)=>state.signin.isAunthenticated);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
