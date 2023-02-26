import React from 'react'
import {Box,Text,Button} from '@chakra-ui/react'
export const AdminUserList = ({city,email,firstName,lastName,mobile,is_active}) => {

    const handleDelete=()=>{

    }

  return (
    <Box  display={'grid'}  >

    <Box bg='blue.100'  alignItems={'center'} mb='5px' mt='5px' p={'7px 15px'} textAlign={'left'}  gap={'6'} display={'flex'} >
        {/* <Box >
            <Image w='80px' src={images[0]} />
        </Box> */}
        <Box w='17%' >
            <Text>{firstName+" "+lastName}</Text>
        </Box>
        
        <Box ml='30px' w='17%' >
            <Text>{email}</Text>
        </Box>
        <Box ml='40px' w="10%" >
            <Text>{mobile}</Text>
        </Box>
        <Box ml='40px' w="6%" >
            <Text>{city}</Text>
        </Box>
        <Box ml='20px' w="10%" >
            <Text>{is_active?"Active":"Inactive"}</Text>
        </Box>
        
        {/* <Button onClick={handleDelete}>DELETE</Button> */}

    </Box>
</Box>
  )
}
