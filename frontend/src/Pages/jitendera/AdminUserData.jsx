import React,{useState,useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
export const AdminUserData = () => {
    const [user, setuser] = useState([])
    const getUser=()=>{
       fetch("https://hungry-loincloth-calf.cyclic.app/admin/user",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify()
       }).then(res=>res.json())
        .then((res)=>{
           // console.log(res.data)
            setuser(res)
        }).catch(err=>console.log(err))
    }

    useEffect(() => {
     getUser()
    }, [])
console.log(user)
  return (
    <Box>
        
    </Box>
  )
}
