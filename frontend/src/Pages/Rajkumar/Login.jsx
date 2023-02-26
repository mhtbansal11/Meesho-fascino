import React from 'react'
import { useState, useContext } from 'react'
import './Signup.css'
// import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import { Globalcontext } from './Context/Context';
// import { apiurl } from './Apiurl';
// import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import Navbar from '../sonu/Navbar';

const initialsate = {
  email: "",
    password: "",
}

const Login = () => {
 
  const [user, setuser] = useState(initialsate)
  
  const [tohome, settohome] = useState(false)
  const { settoken, userdetails, setuserdetails, setlogout } = useContext(Globalcontext)
  const toast = useToast()
  const navigate = useNavigate();
  const [loading,setLoading]=useState("true")
  // console.log(userdetails)
  const handleuser = (e) => {
    const { name, value } = e.target
    setuser({ ...user, [name]: value })
  }

  
    const loginuser=()=>{
      fetch(`https://hungry-loincloth-calf.cyclic.app/login`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              
          },
          body:JSON.stringify(user)
      }).then(res=>res.json())
        .then(res=>{
          localStorage.setItem("token",res.token);
          setLoading("false")
          toast({
              title: `${res.msg}`,
              status: res.msg==="Login Successfull"?"success":"error",
              duration: 2000,
              isClosable: true,
            })
            navigate("/");
        }).catch(err=>{
          toast({
              title: `${err.message}`,
              description: "somthing went wrong",
              status: "error",
              duration: 2000,
              isClosable: true,
            })
        })
  }
  

  const firebaseConfig = {
    apiKey: "AIzaSyAlFpCanOp-3Zr2cFn6lAyU8ATq7LdRPpI",
    authDomain: "auth-78872.firebaseapp.com",
    projectId: "auth-78872",
    storageBucket: "auth-78872.appspot.com",
    messagingSenderId: "805594121279",
    appId: "1:805594121279:web:00e3ead318c81ea263248a"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const provider = new GoogleAuthProvider()

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        //   console.log(res._tokenResponse)
        const userdetailsfromgoogle = {
          username: res._tokenResponse.displayName,
          email: res._tokenResponse.email
        }
        setuserdetails(userdetailsfromgoogle)
        toast({
          title: `Login successful`,
          position: 'top',
          status: 'success',
          isClosable: true,
        })
        settohome(true)
      })
      .catch((err) => {
        console.log(err)
        toast({
          title: 'Some error with logging in with google',
          position: 'top',
          status: 'error',
          isClosable: true,
        })
      })
  }

  // if (toadmin) {
  //   return <Navigate to='/adminDashboard' />
  // }
  if (tohome) {
    return <Navigate to='/' />
  }

  // const { username, password } = user
  return (
    
    <div className='signup'>
      
      <div className='box'>
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="signup-box" />
        <div>
          <input type="text" name='email'  placeholder='email' onChange={handleuser} />
          <div>
            <input type= "password" name='password'  placeholder='Password' onChange={handleuser} />
            
          </div>
          <button className='button' isloading={loading}  onClick={loginuser}>Login</button>
          <button className='google' onClick={signinwithgoogle} >Login with Google</button>

          <p>Dont't have account? <Link to='/signup'><span>Sign Up</span></Link></p>
        </div>
      </div>
    </div>
   
  )
}


export default Login;