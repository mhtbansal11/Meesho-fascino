import { useEffect, useState } from "react";
import { Box, Button, Center, Divider,
     Flex, Heading, HStack, Image, Input,
      Link, Select, Stack, Table, TableCaption,
       TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast 
    } from "@chakra-ui/react";
import {BsDashLg,BsPlusLg,BsXLg} from "react-icons/bs";



const Cart = () => {
const [cartProducts,setCartProducts]= useState([]);
const [promocode, setPromocode] = useState("");
const [inputText, setInputText] = useState("");
const [discount, setDiscount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const toast= useToast();
// const{productID,qty}=cartProducts;


function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // console.log(makeid(5));
  const getPromocode = () => {
    setPromocode(makeid(10));
  };

  const getDiscount = () => {
    if (promocode === inputText) {
      setDiscount(Math.round((totalPrice * 10) / 100));
    } else {
      alert("Wrong Promocode");
    }
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  
  const getCartProducts=()=>{
    fetch("https://hungry-loincloth-calf.cyclic.app/users/cart_product",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y4NGIyNzY0MzRhMzhiZWJmODY4MjkiLCJpYXQiOjE2NzcyNjczNTh9.UG1dcxZ57QlVMm9V2TGNzE0_niw1Z2hg1tRh1OIpQdQ"
        },
        body:JSON.stringify()
    }).then(res=>res.json())
      .then(res=>{
        console.log(res);
        setCartProducts(res)
      })
      .catch(err=>console.log(err.message))
}

useEffect(()=>{
    getCartProducts();
},[])


const handleUpdateCart=(val,id)=>{
    if(val<1){
        val=1
    }
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/cart_product/update/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y4NGIyNzY0MzRhMzhiZWJmODY4MjkiLCJpYXQiOjE2NzcyNjczNTh9.UG1dcxZ57QlVMm9V2TGNzE0_niw1Z2hg1tRh1OIpQdQ"
        },
        body:JSON.stringify({qty:val})
    }).then(res=>res.json())
      .then(res=>{
        console.log(res)
        getCartProducts();
      }).catch(err=>console.log(err.message))
    }

const handleDeleteCart=(id)=>{
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/cart_product/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y4NGIyNzY0MzRhMzhiZWJmODY4MjkiLCJpYXQiOjE2NzcyNjczNTh9.UG1dcxZ57QlVMm9V2TGNzE0_niw1Z2hg1tRh1OIpQdQ"
        }
    }).then(res=>res.json())
      .then(res=>{
        console.log(res)
        getCartProducts();
      }).catch(err=>console.log(err.message))
}

const handleOrderSummery=(userID)=>{
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/order/add`,{
        method:"POST",
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
      .then(res=>{
        toast({
          title: `${res.msg}`,
          description: "Congratulations....",
          status: res.msg==="Product ordered"?"success":"error",
          duration: 2000,
          isClosable: true,
        })
        getCartProducts();
      }).catch(err=>console.log(err.message))
}

const handleClearCart=(id)=>{
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/clear_cart`,{
        method:"DELETE",
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
      .then(res=>{
        console.log(res)
        getCartProducts();
      }).catch(err=>console.log(err.message))
}


//Update Total Price--------------------------------------------------------->
  let total = 0;
  const handlePrice = () => {
    cartProducts?.map((el) => {
      return (total += el.price * el.qty);
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  //while cart is empty-------------------------------------------------------->
  if (cartProducts?.length === 0) {
    return (
      <>
        <Box m={"auto"} p={50} w={"60%"} mt={"50px"} boxShadow= "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em">
            {/* <Navbar/> */}
        <Center>
          <Stack>
          <Image
          m={"auto"}
          src={"https://thumbs.gfycat.com/SlushyObedientGrackle-max-1mb.gif"}
          w={{ base: "100px", md: "150px", lg: "250px" }}
          h={{ base: "100px", md: "150px", lg: "250px" }}
        />
        <Text mt={10} fontWeight={"bold"} color={"gray.500"} fontSize={30}>
          Looks like you have no items in your shopping cart
        </Text>
        <Link to="/">
        <Button color={"white"} mt={10} bg={"pink.600"} w={300} fontSize={20}>
          Return to shop
        </Button>
        </Link>
          </Stack>
        </Center>
    </Box>
      </>
    );
  }

  // while products is added to cart-------------------------------------------->
  return (
    <>
    <Box my={{lg: "150px", md: "100px", sm: "70px"}}>
        {/* <Navbar /> */}
        <Flex
          justifyContent={"space-evenly"}
          flexDirection={{ base: "column", lg: "row" }}
          m="auto"
          p={{ base: 0, lg: 10 }}
          gap={5}
         >
          
        <Box
            w={{ base: "full", lg: "70%" }}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            >
            <TableContainer overflowX={"auto"}>
            <Table
          size={{ base: "xs", md: "md", lg: "lg" }}
          textAlign="left"
          variant="striped"
          colorScheme="teal"
            >
          <TableCaption color={"blue.500"} fontWeight="bold">
            10 days Free Return
          </TableCaption>
          <Thead bg={"blue.500"}>
            <Tr>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Product
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Price
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Quantity
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Subtotal
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              cartProducts?.map((el) => {
                return (
                  <Tr key={el._id}>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={{ base: "column", xl: "row" }}>
                        <Image
                          objectFit={"contain"}
                          w={{ base: "50px", md: "100px" }}
                          h={{ base: "50px", md: "100px" }}
                          src={el.productID.images[0]}
                        />
                        <Box>
                          <Text>{el.productID.title}</Text>
                          <Text>{el.productID.brand}</Text>
                          <Text>{el.productID.type}</Text>
                          <Select w={"80px"}>
                            <option value="">Size</option>
                            {el.productID.size.map((s)=><option key={s} value={s}>{s}</option>)}
                          </Select>
                        </Box>
                      </Stack>
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={"column"}>
                        <Text color={"red.400"} as="s">
                          RS {el.strike_price}/-
                        </Text>
                        <Text color="blue.500">RS {el.discounted_price}/-</Text>
                      </Stack>
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={{ base: "column", md: "row" }}>
                        <Box
                          onClick={() => handleUpdateCart(el.qty - 1, el._id)}
                        >
                          <BsDashLg cursor={"pointer"} />
                        </Box>
                        <Box color={"gray.700"} fontWeight="semibold">
                          {el.qty}
                        </Box>
                        <Box
                          onClick={() => handleUpdateCart(el.qty + 1, el._id)}
                        >
                          <BsPlusLg cursor={"pointer"} />
                        </Box>
                      </Stack>
                    </Td>
                    <Td color="blue.500" fontWeight="semibold">
                      {el.productID.price * el.qty}/-
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Box onClick={() => handleDeleteCart(el._id)}>
                        <BsXLg color={"red.500"} cursor={"pointer"} />
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            </Table>
            </TableContainer>
        </Box>

          
        <Box
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            w={{ base: "full", lg: "25%" }}
            color="white"
            >
            <Box h={50} bg={"blue.500"}>
                <Heading p={3} fontWeight={"bold"} fontSize={15}>
                CART TOTAL
                </Heading>
            </Box>
            <Box>
                <HStack
                    p={5}
                    justifyContent={"space-between"}
                    fontWeight={"bold"}
                    h={50}
                    m={5}
                    color={"gray.700"}
                    >
                    <Text>Sub Total</Text>
                        {discount > 0 ? (
                        <Text as={"s"} color={"red.400"}>
                         RS {totalPrice}/-
                        </Text>
                        ) : (
                    <Text color={"green.500"}>RS {totalPrice}/-</Text>
                    )}
                </HStack>
                {discount > 0 && (
                <HStack
                    p={5}
                    justifyContent={"space-between"}
                    fontWeight={"bold"}
                    h={50}
                    m={5}
                    >
                    <Text color={"gray.700"}>Discount</Text>
                    <Box color={"green.500"} border="2px solid green" borderRadius={10}>
                        RS {discount}/-
                    </Box>
                </HStack>
                    )}
                    {discount > 0 && (
                <HStack
                    p={5}
                    justifyContent={"space-between"}
                    fontWeight={"bold"}
                    h={50}
                     m={5}
                     >
                    <Text color={"gray.700"}>Total Price</Text>
                    <Text color={"green.500"}>RS {totalPrice - discount}/-</Text>
                </HStack>
                )}
            </Box>
            <Stack p={5} justifyContent={"space-between"}>
            <Button fontWeight={"bold"} colorScheme="teal" onClick={getPromocode}>
             Get Promocode
            </Button>
                {promocode && (
            <Box
            color="green.500"
            p={2}
            fontWeight={"bold"}
            border={"2px solid green"}
            borderRadius={10}
            >
            {promocode}
          </Box>
            )}
            </Stack>

            <Divider orientation="horizontal" />
            <HStack fontWeight="semibold" p={5}>
            <Input
                placeholder="Apply Promocode"
                autoFocus={true}
                color="green.500"
                fontWeight={"bold"}
                onChange={handleChange}
                name="promo"
                value={inputText}
            />
            <Button colorScheme="blue" onClick={getDiscount}>
            Apply
            </Button>
            </HStack>
            <Divider orientation="horizontal" />
            <Box
                fontSize={{ base: "xs", md: "md", lg: "md", xl: "lg" }}
                fontWeight={"bold"}
                h={50}
                m={5}
                >
                 <Link to="/address">
                    <Button colorScheme="blue" w={"full"}>
                    Proceed to checkout
                    </Button>
                </Link>
            </Box>
            <Divider orientation="horizontal" />
            <Stack
                direction={{ base: "row" }}
                fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
                justifyContent={"space-between"}
                fontWeight={"bold"}
                h={50}
                m={5}
            >
            <Link to="/">
            <Button colorScheme="blue">Continue shopping</Button>
            </Link>
            <Button onClick={() => handleClearCart()} colorScheme="red">
             Clear cart
            </Button>
            </Stack>
        </Box>
          

        </Flex>
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Cart;