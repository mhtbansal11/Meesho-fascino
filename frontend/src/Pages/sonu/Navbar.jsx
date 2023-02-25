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
} from "@chakra-ui/react";
import logo from "./style/fascino.jpeg";

export default function Navbar() {
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
          <Avatar
            size={"sm"}
            src={
              "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
            }
          />

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
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Delete Account</MenuItem>
                  <MenuItem>Admin</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
