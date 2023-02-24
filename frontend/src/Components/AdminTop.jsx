import React from 'react'
import { Box, InputGroup, InputLeftElement, Input, Flex, Avatar, Text, Badge } from '@chakra-ui/react'
import { ImPhone } from 'react-icons/im'
import {FcSearch} from 'react-icons/fc'
export const AdminTop = () => {
  return (
    <Box justifyContent={'space-between'} alignItems={'center'} padding={'0px 80px'} display={'flex'} bg='' height='70px' position={'sticky'} top='0' >
      <Box>
        <Avatar />
      </Box>
      <Box w='400px' >
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<FcSearch  />}
          />
          <Input type='text' placeholder='Search by title name ' />
        </InputGroup>
      </Box>
      <Box>
        <Flex>
          <Avatar src='https://bit.ly/sage-adebayo' />
          <Box ml='3'>
            <Text mt='10px' fontWeight='bold'>
              Jitendra
              <Badge ml='1' colorScheme='green'>
                Admin
              </Badge>
            </Text>
            {/* <Text fontSize='sm'>UI Engineer</Text> */}
          </Box>
        </Flex>



      </Box>
    </Box>
  )
}
