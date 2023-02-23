import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {



  return (
    <Box position={'sticky'} display={'grid'} mt='20px' gap={'3'}>
      <Link to='/dashboard'><Button  bg={'white'} _focus={{bg:'blue',color:'white'}} p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >DASHBOARD</Button></Link>
      <Link to='/addproduct'><Button bg={'white'} _focus={{bg:'blue',color:'white'}} p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >ADD PRODUCT</Button></Link>
      <Link to='product' ><Button bg={'white'} _focus={{bg:'blue',color:'white'}} p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >PRODUCTS</Button></Link>
      <Link to='/customer'><Button bg={'white'} _focus={{bg:'blue',color:'white'}} p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >CUSTOMERS</Button></Link>
      <Link to='/setting'><Button bg={'white'} _focus={{bg:'blue',color:'white'}} p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >SETTING</Button></Link>
    </Box>
  )
}
