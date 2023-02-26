import { Box, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'
export const AdminProductList = ({ _id, brand, category, discount, discounted_price, strike_price, title, type, images, rating, deleteProduct ,updateProduct}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [price, setprice] = useState("")
    const [discountprice, setdiscountprice] = useState("")
    const handleDelete = () => {
        deleteProduct(_id)
        console.log(_id)
    }

    const handleUpdate=()=>{
       updateProduct(_id,discountprice,price)
    }

    // console.log(_id)
    return (
        <Box display={'grid'}  >

            <Box bg='blue.100' justifyContent='center' alignItems={'center'} mb='5px' mt='5px' p={'7px 15px'} textAlign={'left'} gap={'6'} display={'flex'} >
                <Box >
                    <Image w='80px' src={images[0]} />
                </Box>
                <Box w='300px' >
                    <Text>{title}</Text>
                </Box>
                <Box w='90px' >
                    <Text>Rs :- {strike_price}</Text>
                </Box>
                <Box w='120px' >
                    <Text>{discount ? discount : '(50% OFF)'}</Text>
                </Box>
                <Box w='150px' >
                    <Text>{brand}</Text>
                </Box>
                <Box w='90px' >
                    <Text>{category}</Text>
                </Box>
                <Box w='70px' >
                    <Text>{type}</Text>
                </Box>
                <Button onClick={onOpen}>EDIT</Button>
                <Button onClick={handleDelete}>DELETE</Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Price</FormLabel>
                                <Input onChange={(e)=>setprice(e.target.value)} value={price}  placeholder='enter new price' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Discount</FormLabel>
                                <Input onChange={(e)=>setdiscountprice(e.target.value)} value={discountprice} placeholder='enter discount price' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={handleUpdate} colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </Box>
        </Box>
    )
}
