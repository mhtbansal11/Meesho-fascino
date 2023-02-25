import React from 'react'
import { Box,Button } from '@chakra-ui/react'
export const Sidebar = () => {
  return (
    <Box display={'grid'} mt='20px' gap={'4'}>
        <Button p={'30px 15px'} fontSize={'18px'} fontWeight={'bold'}  >DASHBOARD</Button>
        <Button p={'30px 15px'} fontSize={'18px'} fontWeight={'bold'}  >PRODUCTS</Button>
        <Button p={'30px 15px'} fontSize={'18px'} fontWeight={'bold'}  >CUSTOMERS</Button>
        <Button p={'30px 15px'} fontSize={'18px'} fontWeight={'bold'}  >HOME</Button>
        <Button p={'30px 15px'} fontSize={'18px'} fontWeight={'bold'}  >SETTING</Button>
    </Box>
  )
}
