import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {

  

  return (
    <Box position={'sticky'} display={'grid'} mt='20px' gap={'4'}>
      <Link to='/'><Button p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >HOME</Button></Link>
      <Link to='/dashboard'><Button p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >DASHBOARD</Button></Link>
      <Link to='product' ><Button p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >PRODUCTS</Button></Link>
      <Link to='/customer'><Button p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >CUSTOMERS</Button></Link>
      <Link to='/setting'><Button p={'30px 0'} w='220px' fontSize={'18px'} fontWeight={'bold'}  >SETTING</Button></Link>
    </Box>
  )
}
