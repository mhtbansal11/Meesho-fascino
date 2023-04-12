import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AdminProductList } from './AdminProductList'
import { useToast } from '@chakra-ui/react'
export const Products = () => {
    let [products, setProducts] = useState([])
    let [isLoading,setIsLoading]=useState(false)

    const toast = useToast({
        position: 'top',
        title: 'Product deleted Successfully',
       
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })
      const toast1 = useToast({
        position: 'top',
        title: 'Product deleted Successfully',
       
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })

      const toast2 = useToast({
        position: 'top',
        title: 'Product updated Successfully',
       
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })

    const getData = () => {
        setIsLoading(true)
        axios.get(`https://dark-gray-alligator-kit.cyclic.app/products`)
            .then((res) => {
                setIsLoading(false)
                setProducts(res.data)
                
            }).catch((err) => {
                console.log(err)
            })
    }

    const deleteProduct=(id)=>{
        setIsLoading(true)
        fetch(`https://dark-gray-alligator-kit.cyclic.app/admin/delete/product/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify()
       }).then(res=>res.json())
        .then((res)=>{
           console.log(res)

           //res.msg==="Product has been deleted successfully"? alert("product deleted"):alert("cannot delete product")
        //    console.log(`https://dark-gray-alligator-kit.cyclic.app/admin/delete/product/${id}`)
           getData()
           setIsLoading(false)
           toast({
            containerStyle: {
              
              color:'green'
            },
          })
        }).catch(err=>{
            console.log(err)
            alert("cannot delete product")
        })
    }


    const UpdateProduct=(id,discountprice,price)=>{
        const payload={
            discounted_price:discountprice,
    strike_price:price,
        }
        setIsLoading(true)
        fetch(`https://dark-gray-alligator-kit.cyclic.app/admin/update/product/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
       }).then(res=>res.json())
        .then((res)=>{
           console.log(res)

           
        //    console.log(`https://dark-gray-alligator-kit.cyclic.app/admin/delete/product/${id}`)
           getData()
           setIsLoading(false)
           toast2({
            containerStyle: {
             
              color:'green'
            },
          })
        }).catch(err=>{
            console.log(err)
            alert("cannot update product")
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
                        updateProduct={UpdateProduct}
                    />
                ))
            
          
          }
         
            


        </Box>
    )
}
