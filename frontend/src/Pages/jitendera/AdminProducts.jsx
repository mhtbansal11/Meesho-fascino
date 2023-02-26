import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AdminProductList } from './AdminProductList'
export const Products = () => {
    let [products, setProducts] = useState([])
    let [isLoading,setIsLoading]=useState(false)
    const getData = () => {
        setIsLoading(true)
        axios.get(`https://hungry-loincloth-calf.cyclic.app/products`)
            .then((res) => {
                setIsLoading(false)
                setProducts(res.data)
                
            }).catch((err) => {
                console.log(err)
            })
    }

    const deleteProduct=(id)=>{
        fetch(`https://hungry-loincloth-calf.cyclic.app/admin/delete/product/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify()
       }).then(res=>res.json())
        .then((res)=>{
           // console.log(res.data)
            alert("product deleted")
        }).catch(err=>{
            console.log(err)
            alert("cannot delete product")
        })
    }



    useEffect(() => {
        getData()
    }, [])

    console.log(products)

    return (
        <Box>
           <Box zIndex={'999'} textAlign={'left'} p={'0px 15px'} color={'white'} w='100%' position={'fixed'} top='69px' bg='grey' gap='6' display={'flex'}>
           <Box  w='80px'>
                    Image
                </Box>
                <Box w='300px' >
                    Title
                </Box>
                <Box w='90px' >
                   Price
                </Box>
                <Box w='120px' >
                    Discount
                </Box>
                <Box w='150px' >
                    Brand
                </Box>
                <Box w='90px' >
                   Category
                </Box>
                <Box w='70px' >
                  Type
                </Box>
           </Box>
           {
            isLoading ?  <Box justifyContent={'center'}  display={'flex'}  margin={'auto'} > <Image mt='150px' w='30%' src='https://media2.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp?cid=ecf05e47pauzvbuvi4ppv8hrx8r750oxkv6xysi1mgrnrs38&rid=200.webp&ct=g' /></Box>   :
          
            
                products?.map((el) => (
                    <AdminProductList
                        {...el}
                        deleteProduct={deleteProduct}
                    />
                ))
            
          
          }
         
            


        </Box>
    )
}
