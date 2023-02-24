import React from 'react'
import { Box,InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
import {ImPhone} from 'react-icons/im'
export const AdminTop = () => {
  return (
    <Box padding={'0px 100px'}  justifyContent={'space-between'} display={'flex'} bg='' height='65px' position={'sticky'} top='0' >
        <Box>logo</Box>
        <Box>
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<ImPhone color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>
        </Box>
        <Box>profile</Box>
    </Box>
  )
}
