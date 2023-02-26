import React, { useState } from 'react'
import { Grid, GridItem, Link, Button, Box } from '@chakra-ui/react'


import { AllRoutes } from '../../routes/AllRoutes'
import { AdminTop } from './AdminTop'
import { AiOutlineHome } from 'react-icons/ai'
import { GoDiffAdded } from 'react-icons/go'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { SlPeople } from 'react-icons/sl'
import { RiUserSettingsLine, RiLogoutBoxLine } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'
import { AdminDashboard } from './AdminDashboard'
import { AdminAddProduct } from './AdminAddProduct'
import { Products } from './AdminProducts'
import { AdminUserData } from './AdminUserData'
export const AdminNavbar = () => {

  const [dashboard, setdashboard] = useState(true)
  const [addProduct, setaddProduct] = useState(false)
  const [product, setproduct] = useState(false)
  const [customer, setcustomer] = useState(false)
  const handleDashboard = () => {
    setaddProduct(false)
    setdashboard(true)
    setproduct(false)
    setcustomer(false)
  }
  const handleaddProduct = () => {
    setaddProduct(true)
    setdashboard(false)
    setproduct(false)
    setcustomer(false)
  }


  const handleProduct = () => {
    setaddProduct(false)
    setdashboard(false)
    setproduct(true)
    setcustomer(false)
  }

  const handleCustomer = () => {
    setaddProduct(false)
    setdashboard(false)
    setproduct(false)
    setcustomer(true)
  }

  return (

    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
      gridTemplateRows={'70px 1fr 30px'}
      gridTemplateColumns={'250px 1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha'
      fontWeight='bold'
    >

      <GridItem boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px;'}  zIndex={'999'} width='100%' position={'fixed'} top='0' pl='2' bg='white' area={'header'}>
        <AdminTop />
      </GridItem>
      <GridItem position={'fixed'} paddingRight='10px' boxShadow=' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;' bg='white' height={'100vh'} top={'70px'} zIndex='1' pl='2' area={'nav'}>
        <Box bg='white' position={'sticky'} display={'grid'} mt='20px' gap={'2'}>
          <Button onClick={handleDashboard} bg={'white'} _focus={{ bg: 'blue', color: 'white' }} _hover={{ bg: 'blue.200', color: 'white' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><AiOutlineHome />  DASHBOARD</Button>
          <Button onClick={handleaddProduct} bg={'white'} _focus={{ bg: 'blue', color: 'white' }} _hover={{ bg: 'blue.200', color: 'white' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <GoDiffAdded />  ADD PRODUCT</Button>
          <Button onClick={handleProduct} bg={'white'} _focus={{ bg: 'blue', color: 'white' }} _hover={{ bg: 'blue.200', color: 'white' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><MdProductionQuantityLimits />  PRODUCTS</Button>
          <Button onClick={handleCustomer} bg={'white'} _focus={{ bg: 'blue', color: 'white' }} _hover={{ bg: 'blue.200', color: 'white' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  ><SlPeople />  CUSTOMERS</Button>
          <Button bg={'white'} _focus={{ bg: 'blue', color: 'white' }} _hover={{ bg: 'blue.200', color: 'white' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <RiUserSettingsLine />   SETTING</Button>
          <Button bg={'white'} mt='150px' _hover={{ color: 'white', bg: 'red' }} p={'30px 0'} w='220px' fontSize={'17px'} fontWeight={'bold'}  > <RiLogoutBoxLine /> __ LOGOUT</Button>
        </Box>
      </GridItem>
      <GridItem pl='2' bg='' area={'main'}>
        {dashboard ? <AdminDashboard /> : ""}
        {addProduct ? <AdminAddProduct /> : ""}
        {product ? <Products /> : ""}
        {customer ? <AdminUserData /> : ""}
      </GridItem>
    </Grid>
  )
}
