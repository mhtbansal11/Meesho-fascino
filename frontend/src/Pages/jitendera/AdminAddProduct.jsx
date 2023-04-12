import { Box,Input,Flex ,Button,Heading, Select} from '@chakra-ui/react'
import axios from 'axios'
import React ,{useState}from 'react'
import { useToast } from '@chakra-ui/react'
export const AdminAddProduct = () => {
  const [image, setimage] = useState([])
  const [title, settitle] = useState("")
  const [price, setprice] = useState("")
  const [discount, setdiscount] = useState("")
  const [name, setname] = useState("")
  const [category, setcategory] = useState("")
  const [type, settype] = useState("")
console.log(category,type)

const toast = useToast({
  position: 'top',
  title: 'Product Added Successfully',
 
  containerStyle: {
    width: '800px',
    maxWidth: '100%',
  },
})


const handleAdd=()=>{
  const payload={
    type,
    category,
    brand:name,
    title,
    discounted_price:discount,
    strike_price:price,
    images:image,

  }
  fetch(`https://dark-gray-alligator-kit.cyclic.app/admin/add/product`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    },
    body:JSON.stringify(payload)

  }).then(res=>res.json())
  .then((res)=>{
     console.log(res)
     toast({
      containerStyle: {
        border: '2px solid red',
      },
    })
  }).catch(err=>console.log(err))
  
}


  return (
    <Box mt='40px'>
      <Heading mb='20px'>ADD NEW PRODUCT</Heading>
      <Box p='20px 20px' boxShadow={' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'} display={'grid'}  gap='4' margin='auto' width={'35%'}>
      <Input value={image} onChange={(e)=>setimage(e.target.value)} type='url' placeholder='enter image url' />
      <Input value={title} onChange={(e)=>settitle(e.target.value)} type='text' placeholder='enter product title' />
      <Input value={price} onChange={(e)=>setprice(e.target.value)} type='number' placeholder='enter price' />
      <Input value={discount} onChange={(e)=>setdiscount(e.target.value)} type='text' placeholder='enter discount' />
      <Input value={name} onChange={(e)=>setname(e.target.value)} type='text' placeholder='enter brand name' />
<Select onChange={(e)=>setcategory(e.target.value)}>
<option value={''}  >select category</option>
  <option >T-shirt</option>
  <option>Jeans</option>
  <option>Jacket</option>
  <option>Pants</option>
  <option>Sweatshirt</option>
  <option>Kurta</option>
</Select>
<Select onChange={(e)=>settype(e.target.value)} >
  <option value={''}>select type</option>
  <option >Mens</option>
  <option>Child</option>
  <option>Womens</option>
  
</Select>
     <Button onClick={handleAdd} mt='20px' bg='red' _hover={{bg:'blue'}} color={'white'}>ADD</Button>
      </Box>
    </Box>
  )
}
