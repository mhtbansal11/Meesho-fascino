import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Sidebar } from './AdminSidebar'

import { AllRoutes } from '../routes/AllRoutes'
import { AdminTop } from './AdminTop'
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

      <GridItem boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px;'} zIndex={'999'} width='100%' position={'fixed'} top='0' pl='2' bg='white' area={'header'}>
        <AdminTop />
      </GridItem>
      <GridItem  position={'fixed'} paddingRight='10px' boxShadow=' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;' bg='white' height={'100vh'} top={'70px'} zIndex='1' pl='2' area={'nav'}>
        <Sidebar />
      </GridItem>
      <GridItem pl='2' bg='' area={'main'}>
        <AllRoutes />
      </GridItem>
    </Grid>
  )
}
