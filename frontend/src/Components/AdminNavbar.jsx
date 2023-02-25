import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
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
  <GridItem pl='2' bg='orange'  area={'header'}>
    navbar
  </GridItem>
  <GridItem pl='2' bg='pink' area={'nav'}>
    <Sidebar/>
  </GridItem>
  <GridItem pl='2' bg='green' area={'main'}>
    body
  </GridItem>
  
</Grid>
  )
}