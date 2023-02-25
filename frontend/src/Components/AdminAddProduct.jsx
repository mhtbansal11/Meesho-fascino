import { Box,Input,Flex ,Button,Heading, Select} from '@chakra-ui/react'
import React from 'react'

export const AdminAddProduct = () => {
  return (
    <Box mt='50px'>
      <Heading mb='20px'>bhramarbar pls add new product</Heading>
      <Box p='20px 20px' boxShadow={' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'} display={'grid'}  gap='4' margin='auto' width={'35%'}>
      <Input type='url' placeholder='enter image url' />
      <Input type='text' placeholder='enter product title' />
      <Input type='number' placeholder='enter price' />
      <Input type='text' placeholder='enter discount' />
      <Input type='text' placeholder='enter brand name' />
<Select>
  <option></option>
  <option></option>
  <option></option>
  <option></option>
  <option></option>
</Select>
<Select>
  <option>select type</option>
  <option>Mens</option>
  <option>Child</option>
  <option>Womens</option>
  
</Select>
     <Button bg='red' _hover={{bg:'orange'}} color={'white'}>Sibu</Button>
      </Box>
    </Box>
  )
}
