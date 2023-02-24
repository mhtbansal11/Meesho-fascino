import { Box, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'

export const AdminProductList = ({ _id, brand, category, discount, discounted_price, strike_price, title, type, images, rating,deleteProduct }) => {

    const handleDelete=()=>{
        deleteProduct(_id)
    }

    return (
        <Box  display={'grid'}  >

            <Box bg='blue.100' justifyContent='center' alignItems={'center'} mb='5px' mt='5px' p={'7px 15px'} textAlign={'left'}  gap={'6'} display={'flex'} >
                <Box >
                    <Image w='80px' src={images[0]} />
                </Box>
                <Box w='300px' >
                    <Text>{title}</Text>
                </Box>
                <Box w='90px' >
                    <Text>Rs :- {strike_price}</Text>
                </Box>
                <Box w='120px' >
                    <Text>{discount ? discount : '(50% OFF)'}</Text>
                </Box>
                <Box w='150px' >
                    <Text>{brand}</Text>
                </Box>
                <Box w='90px' >
                    <Text>{category}</Text>
                </Box>
                <Box w='70px' >
                    <Text>{type}</Text>
                </Box>
                <Button>EDIT</Button>
                <Button onClick={handleDelete}>DELETE</Button>

            </Box>
        </Box>
    )
}
