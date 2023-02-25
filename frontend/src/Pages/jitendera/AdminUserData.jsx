import React,{useState,useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
export const AdminUserData = () => {
    const [user, setuser] = useState([])
    const getUser=()=>{
        axios.get(`https://hungry-loincloth-calf.cyclic.app/admin/user`)
        .then((res)=>{
           // console.log(res.data)
            setuser(res.data)
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
