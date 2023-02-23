import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Sidebar } from './AdminSidebar'

import { AllRoutes } from '../routes/AllRoutes'
export const AdminNavbar = () => {
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
  <GridItem zIndex={'999'}  position={'sticky'}   top='0' pl='2' bg='pink'  area={'header'}>
    navbar
  </GridItem>
  <GridItem position={'fixed'}  top={'70px'} zIndex='1' pl='2'  area={'nav'}>
    <Sidebar/>
  </GridItem>
  <GridItem pl='2' bg='' area={'main'}>
  <AllRoutes/>
  </GridItem>
  
</Grid>
  )
}
