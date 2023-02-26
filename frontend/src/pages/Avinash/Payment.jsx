import { AiOutlineCheck,AiOutlineWarning, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsCreditCard2FrontFill, BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../sonu/Navbar";
import Footer from "../sonu/footer";

// type userDetail = {
//   firstName:string,
//   lastName:string,
//   mobile:number,
//   email:string
// }

const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentLoad, setPaymentLoad] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const initialRef = React.useRef(null);
  const toast = useToast();
  const [modalValue, setModalValue] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products,setProducts]=useState([]);

  //   let id = Number(JSON.parse(localStorage.getItem("id") || ""));
  //   const [accountDetails, setAccountDetails] = useState({
  //     card: 0,
  //     UPI: "",
  //     userName: "",
  //     password: "",
  //   });

  const handleModalClick = (val) => {
    setModalValue(val);
    onOpen();
  };

  const getUserDetails = () => {
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/get`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUserDetails(res);
        setAddress(res.shipping_address);
      })
      .catch((err) =>{
         toast({
          title: `${err.message}`,
          description: "somthing went wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
        });
  };

  const getCartProducts=()=>{
    setLoading(true);
    fetch("https://hungry-loincloth-calf.cyclic.app/users/cart_product",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            "Authorization": localStorage.getItem("token")
        },
        body:JSON.stringify()
    }).then(res=>res.json())
      .then(res=>{
        setLoading(false);
        console.log(res);
        res.msg==="Token didn't match, Please Login First!"?
        toast({
          title: `${res.msg}`,
          description: "you are not logined",
          status: "error",
          duration: 2000,
          isClosable: true,
        }):
        console.log(res)
        setProducts(res)
      })
      .catch(err=>{
        console.log(err.message)
        setLoading(false);
        toast({
          title: `${err.message}`,
          description: "somthing went wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      })
}

  useEffect(() => {
    getUserDetails();
    getCartProducts();
  }, []);

  let totalPrice = 0;

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //   };

  const triggerPayment = () => {
    setPaymentLoad(true);
    setTimeout(() => {
      setPaymentLoad(false);
      setPaymentStatus(true);
    }, 2000);
    onClose();
  };

  const btnValue = ["Debit Card", "UPI", "Net Banking"];

  if (paymentStatus) {
    return (
      <>
        <Box w={{ base: "100%", md: "50%" }} m="auto">
          <Heading color={"green.500"}>Products Ordered Successfully</Heading>
          <Image src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08.gif" />
          <Link href={"/"}>
            <Button>Go To Home</Button>
          </Link>
        </Box>
      </>
    );
  }
  if (paymentLoad) {
    return (
      <>
        <Box w={{ base: "100%", md: "50%" }} m="auto">
          <Image src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" />
        </Box>
      </>
    );
  }
  return (
    <><Navbar/>
    <Box
      w={{ base: "full", lg: "75%" }}
      m={"auto"}
      mt={"50px"}
      mb="50px"
      borderRadius={10}
    >
      
      <Heading borderRadius={10} bg="blue.500" p={2} color={"white"} mb={10}>
        Payment
      </Heading>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <>
        <Grid
          templateRows={{ base: "1fr 2fr 1fr 1fr", lg: "repeat(3,1fr)" }}
          templateColumns={{ base: "100%", md: "100%", lg: "repeat(3, 1fr)" }}
          gap={2}
        >
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            rowSpan={1}
             boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            borderRadius={10}
          >
            <Stack p={5} color={"gray.500"}>
              <HStack fontWeight={"bold"} color={products.length>0?"blue.500":"red.500"} textAlign="left">
               <Text>Login</Text>  {products.length>0?<AiOutlineCheck/>:<AiOutlineWarning/>}
              </HStack>
              <Stack>
                <Text
                  color={"ActiveBorder"}
                  fontWeight={"bold"}
                  fontSize={"xl"}
                  fontStyle={"italic"}
                  textAlign="left"
                >
                  {userDetails?.firstName} {userDetails?.lastName}
                </Text>
                <HStack><AiOutlineMail /><Text textAlign="left"> {userDetails?.email}</Text></HStack>
                <HStack><AiFillPhone /><Text textAlign="left"> {userDetails?.mobile}</Text></HStack>
              </Stack>
            </Stack>
            {/* --------------------------------------------------------------------------------------------> */}
          </GridItem>
          <GridItem
            colSpan={{ base: 1, lg: 1 }}
            rowSpan={{ base: 1, lg: 3 }}
            boxShadow= {"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius={10}
          >
            <Stack>
              <Text p={2} color={"blue.500"} fontWeight={"bold"}>
                Your Order
              </Text>
              <Divider />
              <Stack>
                {products?.map((item) => {
                totalPrice += item.productID.discounted_price * item.qty;
                return (
                  <Flex key={item.id} gap={5}>
                    <Image
                      src={item.productID.images[0]}
                      objectFit={"contain"}
                      w={{ base: "50px", md: "100px" }}
                      h={{ base: "50px", md: "100px" }}
                    />
                    <Box textAlign={"left"}>
                      <Text fontWeight={"bold"}>
                        {item.productID.type + " " + item.productID.category}
                      </Text>
                      <Text>Size:- {item.productID.size[1]}</Text>
                      <Text>
                        Price:- {item.productID.discounted_price} x {item.qty}
                      </Text>
                      <Text color={"green.500"}>
                        RS {item.productID.discounted_price * item.qty}/-
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
                <Box p={5}>
                  <Flex
                    m={"auto"}
                    color={"white"}
                    borderRadius={20}
                    bg={"facebook.500"}
                    justifyContent={"center"}
                    fontWeight={"bold"}
                    gap={10}
                  >
                    <Text>Total Price</Text>
                    <Text>RS {totalPrice}/-</Text>
                  </Flex>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            rowSpan={1}
             boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            borderRadius={10}
          >
            <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
              <Stack>
                <Box>
                  <HStack fontWeight={"bold"} color={products.length>0?"blue.500":"red.500"} textAlign="left" >
                    <Text> Shipping Address</Text> {products.length>0?<AiOutlineCheck/>:<AiOutlineWarning/>}
                  </HStack>
                  <Box w={"70%"} textAlign="left">
                    {`${address?.full_name} ${
                    address?.street
                  } ${address?.city
                  } ${address?.state} ${
                    address?.postal_code}
                    \n ${
                      address?.contact
                    }`}
                  </Box>
                </Box>
              </Stack>
              <Link to={"/checkout"}>
                <Button colorScheme={"blue"}>Change Address</Button>
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            rowSpan={1}
             boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            borderRadius={10}
          >
            <Box h={10} p={2}>
              <Text color={"blue.500"} fontWeight={"bold"} textAlign="left">
                Payment Method
              </Text>
            </Box>
            <Divider orientation="horizontal" />
            <Stack direction={{ sm: "column", md: "row" }}>
              {btnValue.map((val) => (
                <Button
                  colorScheme="facebook"
                  size={{ base: "xs", md: "sm", lg: "md" }}
                  onClick={() => handleModalClick(val)}
                  leftIcon={
                    val === "Debit Card" ? (
                      <BsCreditCard2FrontFill color="white"/>
                    ) : val === "UPI" ? (
                      <Image
                        objectFit={"contain"}
                        borderRadius="10"
                        h={5}
                        src="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"
                      />
                    ) : (
                      <BsGlobe2 color="white" />
                    )
                  }
                  key={val}
                  ml={"5"}
                >
                  {val}
                </Button>
              ))}
              <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                {modalValue === "Debit Card" && (
                  <ModalContent>
                    <ModalHeader>Card Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Enter Card Number</FormLabel>
                        <Input
                          name="card"
                          // onChange={handleChange}
                          ref={initialRef}
                          placeholder="Card Number"
                        />
                      </FormControl>
                      <HStack justifyContent={"space-between"}>
                        <FormControl mt={4}>
                          <FormLabel>Valid Date</FormLabel>
                          <Input
                            ref={initialRef}
                            placeholder="Select Date"
                            size="md"
                            type="date"
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel>CVV</FormLabel>
                          <Input ref={initialRef} />
                        </FormControl>
                      </HStack>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        onClick={triggerPayment}
                        colorScheme="blue"
                        mr={3}
                      >
                        Pay {totalPrice}/-
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                )}

                {modalValue === "UPI" && (
                  <ModalContent>
                    <ModalHeader>Verify UPI ID</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Enter UPI ID</FormLabel>
                        <Input
                          name="UPI"
                          // onChange={handleChange}
                          ref={initialRef}
                          placeholder="Card Number"
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={onOpen} colorScheme="blue" mr={3}>
                        Verify
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                )}

                {modalValue === "Net Banking" && (
                  <ModalContent>
                    <ModalHeader>Login Your Bank Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Enter User Name</FormLabel>
                        <Input
                          name="userName"
                          // onChange={handleChange}
                          ref={initialRef}
                          placeholder="User Name"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                          name="password"
                          // onChange={handleChange}
                          ref={initialRef}
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={onOpen} colorScheme="blue" mr={3}>
                        Login
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                )}
              </Modal>
            </Stack>
          </GridItem>
        </Grid>
        </>
      )}
      
    </Box>
      <Footer/>
    </>
  );
};

export default Payment;
