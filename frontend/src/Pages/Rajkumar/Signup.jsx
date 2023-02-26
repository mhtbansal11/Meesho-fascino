import React from 'react'
import { useState } from 'react'
import './Signup.css'
import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';

const initialsate = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    is_admin: false,
    is_active: false,
    
}



const Signup = () => {
    // const [pass,setpass]=useState(false)
    const [user, setuser] = useState(initialsate)
    // const [tologin,settologin]=useState(false)
    const toast = useToast()
const navigate=useNavigate()
    const handleuser = (e) => {
        const { name } = e.target
        setuser({ ...user, [name]: e.target.type=="checkbox"?e.target.checked:e.target.value })
    }

  console.log(user)

    // const registeruser = () => {
    //     axios({
    //         method: 'post',
    //         url: `${apiurl}/register`,
    //         data: user
    //     })
    //         .then((res) => {
    //             if (res.data.status === 'success') {
    //                 toast({
    //                     title: `Sign Up successful`,
    //                     position: 'top',
    //                     status: 'success',
    //                     isClosable: true,
    //                 })
    //                 //   settologin(true)

    //             } else {
    //                 toast({
    //                     title: 'Cannot create account try again',
    //                     position: 'top',
    //                     status: 'error',
    //                     isClosable: true,
    //                 })
    //             }
    //         })
    //         .catch((err) => {
    //             // console.log(err)
    //             toast({
    //                 title: 'Please try again',
    //                 position: 'top',
    //                 status: 'error',
    //                 isClosable: true,
    //             })
    //         })
    // }
    const registeruser=()=>{
        fetch(`https://hungry-loincloth-calf.cyclic.app/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
          .then(res=>{
            toast({
                title: `${res.msg}`,
                
                status: res.msg==="You have been registered successfully"?"success":"error",
                duration: 2000,
                isClosable: true,
              })
              navigate("/login");
          }).catch(err=>{
            toast({
                title: `${err}`,
                description: "somthing went wrong",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
          })
    }

    // if(tologin){
    //     return <Navigate to="/login"/>
    // }

    // const {firstName,email,mobile_no,password}=user
    return (
        <div className='signup'>
            <div className='box'>
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="signup-box-image" />
                <div>
                    <input type="text" name='firstName' placeholder='firstName' onChange={handleuser} />
                    <input type="text" name='lastName' placeholder='lastName' onChange={handleuser} />
                    <input type="text" name='email' placeholder='Email' onChange={handleuser} />
                    <input type="text" name='mobile' placeholder='Mobile' onChange={handleuser} />

                    <input type="password" name='password' placeholder='Password' onChange={handleuser} />

                    <input type="checkbox" name="is_admin" onChange={handleuser} />
                    <label for="true"> I want to become Admin</label>

                    <button className='button' onClick={registeruser}>Sign Up</button>
                    <p>Already have account? <Link to='/login'><span>Login</span></Link></p>
                </div>
            </div>
        </div>
    )
}


export default Signup