import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {GoDiffAdded} from 'react-icons/go'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {SlPeople} from 'react-icons/sl'
import {RiUserSettingsLine,RiLogoutBoxLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
export const Sidebar = () => {



  return (
    <Box  bg='white'  position={'sticky'} display={'grid'} mt='20px' gap={'2'}>
      <Link to='/dashboard'><Button  bg={'white'} _focus={{bg:'blue',color:'white'}} _hover={{bg:'blue.200',color:'white'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><AiOutlineHome  /> __ DASHBOARD</Button></Link>
      <Link to='/addproduct'><Button bg={'white'}  _focus={{bg:'blue',color:'white'}} _hover={{bg:'blue.200',color:'white'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <GoDiffAdded/> __ ADD PRODUCT</Button></Link>
      <Link to='product' ><Button bg={'white'} _focus={{bg:'blue',color:'white'}} _hover={{bg:'blue.200',color:'white'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><MdProductionQuantityLimits/> __ PRODUCTS</Button></Link>
      <Link to='/customer'><Button bg={'white'} _focus={{bg:'blue',color:'white'}} _hover={{bg:'blue.200',color:'white'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><SlPeople/> __ CUSTOMERS</Button></Link>
      <Link to='/setting'><Button bg={'white'} _focus={{bg:'blue',color:'white'}} _hover={{bg:'blue.200',color:'white'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <RiUserSettingsLine/> __  SETTING</Button></Link>
     <Button bg={'white'} mt='150px' _hover={{color:'white',bg:'red'}} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <RiLogoutBoxLine/> __ LOGOUT</Button>
    </Box>
  )
}
