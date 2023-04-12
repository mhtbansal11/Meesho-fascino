import React,{useState,useEffect} from 'react'
import { Box,Image } from '@chakra-ui/react'
import axios from 'axios'
import { AdminUserList } from './AdminUserList'
export const AdminUserData = () => {
    const [user, setuser] = useState([])
    let [isLoading,setIsLoading]=useState(false)
    const getUser=()=>{
      setIsLoading(true)
       fetch("https://dark-gray-alligator-kit.cyclic.app/admin/user",{
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
            setIsLoading(false)
        }).catch(err=>console.log(err))
    }


  //   const deleteProduct=(id)=>{
  //     fetch(`https://dark-gray-alligator-kit.cyclic.app/admin/delete/product/${id}`,{
  //     method:"DELETE",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":localStorage.getItem("token")
  //     },
  //     body:JSON.stringify()
  //    }).then(res=>res.json())
  //     .then((res)=>{
  //        console.log(res)

  //        res.msg==="Product has been deleted successfully"? alert("product deleted"):alert("cannot delete product")
  //     //    console.log(`https://dark-gray-alligator-kit.cyclic.app/admin/delete/product/${id}`)
  //        getData()
  //     }).catch(err=>{
  //         console.log(err)
  //         alert("cannot delete product")
  //     })
  // }


    useEffect(() => {
     getUser()
    }, [])
console.log(user)
  return (
    <Box>
         <Box zIndex={'999'} textAlign={'left'} p={'0px 15px'} color={'white'} w='100%' position={'fixed'} top='69px' bg='grey' gap='6' display={'flex'}>
           
                <Box w='17%' >
                    Name
                </Box>
                <Box w='17%' >
                  Email
                </Box>
                <Box w='10%' >
                   Mobile
                </Box>
                <Box w='6%' >
                    City
                </Box>
                <Box w='10%' >
                  Status
                </Box>
                <Box  >
                  
                </Box>
           </Box>
           {
            isLoading ?  <Box  justifyContent={'center'}  display={'flex'}  margin={'auto'} > <Image mt='150px' w='30%' src='https://media2.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp?cid=ecf05e47pauzvbuvi4ppv8hrx8r750oxkv6xysi1mgrnrs38&rid=200.webp&ct=g' /></Box>   :
          
           
                user?.map((el) => (
                  <Box mt='20px'>
                    <AdminUserList
                        {...el}
                        
                    />
                     </Box>
          
                ))
            
         
                }   
            

    </Box>
  )
}
