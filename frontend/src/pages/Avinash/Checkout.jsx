
import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


const adress = {
  firstName:"",
  lastName:"",
  street: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  mobile: "",
};
const Checkout = () => {
  const [address, setAddress] = useState(adress);
  const toast = useToast();
  const [progress, setProgress] = useState(true);
  const navigate = useNavigate();



  const addAddress = async () => {
    //id=profile[0].id
    fetch(`https://hungry-loincloth-calf.cyclic.app/users/add/location`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Y4NGIyNzY0MzRhMzhiZWJmODY4MjkiLCJpYXQiOjE2NzcyNjczNTh9.UG1dcxZ57QlVMm9V2TGNzE0_niw1Z2hg1tRh1OIpQdQ"
        },
        body:JSON.stringify(address)
    }).then(res=>res.json())
      .then(res=>{
        setProgress(false)
        toast({
            title: `${res.msg}`,
            description: "You can go to payment.",
            status: res.msg==="Address Submitted"?"success":"error",
            duration: 2000,
            isClosable: true,
          })
          navigate("/payment");
      }).catch(err=>{
        toast({
            title: `${err}`,
            description: "somthing went wrong",
            status: "error",
            duration: 2000,
            isClosable: true,
          })
      })
    }


 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  

  return (
    <>
      {/* <Navbar /> */}

      <Box
        my={{ lg: "150px", md: "100px", sm: "70px" }}
        borderWidth="1px"
        rounded="lg"
        shadow="xl"
        maxWidth={800}
        p={6}
        m="50px auto"
        as="form"
      >
        {
          <>
            {" "}
            <Heading
              color="white"
              bg={"teal.500"}
              borderRadius={"20px"}
              w="100%"
              textAlign={"center"}
              fontWeight="bold"
              mb="2%"
            >
              Shipping Address
            </Heading>
            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="street_address"
                fontSize="sm"
                color="teal.500"
                fontWeight="bold"
                _dark={{
                  color: "gray.50",
                }}
                mt="2%"
              >
                Street address
              </FormLabel>
              <Input
                type="text"
                name="street"
                id="street_address"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                onChange={handleChange}
              />
            </FormControl>
            <Flex alignItems={"center"} gap="15px" mt={"15px"}>
              <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                  htmlFor="city"
                  fontSize="sm"
                  color="teal.500"
                  fontWeight="bold"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  City
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="state"
                  fontSize="sm"
                  color="teal.500"
                  fontWeight="bold"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Country / Region
                </FormLabel>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
            <Flex alignItems={"center"} gap="15px" mt={"15px"}>
              <FormControl>
                <FormLabel
                  htmlFor="postal_code"
                  fontSize="sm"
                  color="teal.500"
                  fontWeight="bold"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  ZIP / Postal
                </FormLabel>
                <Input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="teal.500"
                  fontWeight="bold"
                  htmlFor="country"
                  fontSize="sm"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  State / Province
                </FormLabel>
                <Select
                  color="blue.500"
                  fontWeight="bold"
                  id="country"
                  name="country"
                  autoComplete="country"
                  placeholder="Select option"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                >
                  <option>Karnatka</option>
                  <option>Maharastra</option>
                  <option>Bihar</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi</option>
                  <option>Tamil Nadu</option>
                  <option>Jharkhand</option>
                  <option>Andhra Pradesh</option>
                  <option>West Bengal</option>
                  <option>Gujrat</option>
                  <option>Assam</option>
                </Select>
              </FormControl>
            </Flex>
          </>
        }
        <Button
          isLoading={progress}
          loadingText="Submitting"
          mt="5%"
          color="white"
          fontWeight="bold"
          colorScheme="blue"
          variant="solid"
          onClick={() => {
            addAddress();
          }}
        >
          Proceed To Payment
        </Button>
      </Box>

      {/* <LargeWithAppLinksAndSocial /> */}
    </>
  );
};

export default Checkout;