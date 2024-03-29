import React, { useState } from "react";
import Navbar from "../sonu/Navbar";
import Footer from "../sonu/footer";
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
  full_name: "",
  street: "",
  city: "",
  state: "",
  postal_code: "",
  contact: "",
};
const Checkout = () => {
  const [address, setAddress] = useState(adress);
  const toast = useToast();
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();

  const addAddress = async () => {
    setProgress(true);
    fetch(`https://dark-gray-alligator-kit.cyclic.app/users/add/location`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ shipping_address: address }),
    })
      .then((res) => res.json())
      .then((res) => {
        setProgress(false);
        toast({
          title: `${res.msg}`,
          description: "You can go to payment.",
          status: res.msg === "Address Submitted" ? "success" : "error",
          duration: 2000,
          isClosable: true,
        });
        navigate("/payment");
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          description: "somthing went wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <>
      <Navbar />
      <Box
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
                Full name
              </FormLabel>
              <Input
                type="text"
                name="full_name"
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
                  htmlFor="contact"
                  fontSize="sm"
                  color="teal.500"
                  fontWeight="bold"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Contach No
                </FormLabel>
                <Input
                  type="text"
                  name="contact"
                  id="contact"
                  autoComplete="contact"
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
                  htmlFor="state"
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
                  id="state"
                  name="state"
                  autoComplete="state"
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

      <Footer/>
    </>
  );
};

export default Checkout;
