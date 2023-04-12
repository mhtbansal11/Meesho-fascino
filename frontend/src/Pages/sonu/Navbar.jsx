import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Image,
  Input,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MegaMenu from "./megamenu";
import logo from "./style/fascino.jpeg";

export default function Navbar() {
  const [user,setUser]=useState();
  const [status,setStatus]=useState(false)
 const navigate= useNavigate();
 
  const userLogout=()=>{
    fetch("https://dark-gray-alligator-kit.cyclic.app/users/logout",{
     method:"PATCH",
     headers:{
       "Content-Type":"application/json",
       "Authorization":localStorage.getItem("token")
     },
     body:JSON.stringify()
    }).then(res=>res.json())
     .then((res)=>{
      localStorage.removeItem("token");
      setStatus(false)
      alert("you have been logged out");
     }).catch(err=>console.log(err))
 }

  const getUser=()=>{
    fetch("https://dark-gray-alligator-kit.cyclic.app/users/get",{
     method:"GET",
     headers:{
       "Content-Type":"application/json",
       "Authorization":localStorage.getItem("token")
     },
     body:JSON.stringify()
    }).then(res=>res.json())
     .then((res)=>{
        // console.log(res.data)
        setUser(res)
        setStatus(true)
     }).catch(err=>{
      console.log(err)
      setStatus(false)
    })
 }

 useEffect(()=>{
  getUser()
 },[])

 const handleAdmin=()=>{
  user.is_admin?navigate("/admin"):alert("You are not authorized for Admin!")
 }

//  console.log(user)
  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              width={"40%"}
              // height={"70px"}
             src={logo}
            />
          </Box>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                focusBorderColor="lime"
                width={"400px"}
                type="cart"
                placeholder="Try Saree ,Kurti or Search By product Code"
              />
            </InputGroup>
          </Stack>

          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Text size={"sm"}>Download App</Text>
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <MenuDivider />
              <MenuItem>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                  textDecoration={"none"}
                >
                  Google Play Store
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="https://apps.apple.com/us/app/meesho/id1457958492"
                  textDecoration={"none"}
                >
                  Apple Store
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Text>Become a Supplier</Text>
          <Link href="/cart">
          <HStack>
            {/* <Box fontWeight={"bold"} mr={-3} h={5} w={5} rounded={"full"}  >1</Box> */}
            <Avatar
            size={"sm"}
            src={
              "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
            }
          /></HStack>
          </Link>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    {status?<p>{`${user?.firstName} ${user?.lastName}`}</p>:<p>welcome</p> }
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Delete Account</MenuItem>
                  <MenuItem onClick={handleAdmin}>Admin</MenuItem>
                  {status?<MenuItem onClick={userLogout}>Logout</MenuItem>:
                  <Link href="/login"><MenuItem>Login</MenuItem></Link>}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <MegaMenu/>
    </>
  );
}
