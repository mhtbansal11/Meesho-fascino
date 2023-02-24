import { Box } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AdminProductList } from './AdminProductList'
export const Products = () => {
    let [products, setProducts] = useState([])

    const getData = () => {
        axios.get(`https://hungry-loincloth-calf.cyclic.app/products`)
            .then((res) => {
                setProducts(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(products)

    return (
        <Box>
           <Box zIndex={'999'} textAlign={'left'} p={'0px 15px'} color={'white'} w='100%' position={'fixed'} top='64px' bg='grey' gap='6' display={'flex'}>
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
                products?.map((el) => (
                    <AdminProductList
                        {...el}
                    />
                ))
            }


        </Box>
    )
}
