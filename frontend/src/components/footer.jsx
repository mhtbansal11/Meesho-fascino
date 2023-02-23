import {
  Button,
  ButtonGroup,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        width: "95%",
        margin: "auto",
        marginBottom: "3%",
        background: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          width: "57%",
        }}
      >
        <div>
          <Heading marginBottom={"30px"} size="md">
            Living room Sofa
          </Heading>
          <Text marginBottom={"30px"}>This sofa is perfect for</Text>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <UnorderedList>
            <ListItem>Careers</ListItem>
            <ListItem>Become a supplier</ListItem>
            <ListItem>Hall of Fame</ListItem>
          </UnorderedList>
        </div>
        <div>
          <UnorderedList>
            <ListItem>Legal and Policies</ListItem>
            <ListItem>Meesho Tech Blog</ListItem>
            <ListItem>Notices and Returns</ListItem>
          </UnorderedList>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "35px",
        }}
      >
        <div>
          <Heading marginBottom={"30px"} size="md">
            Reach to us
          </Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <img
              src="https://images.meesho.com/images/pow/facebook.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/instagram.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/youtube.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/linkedin.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/twitter.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <Heading size="md">Contact Us</Heading>
          <Text width={"300px"}>
            Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
            06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
            Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
            E-mail address: query@meesho.com © 2015-2022 Meesho.com
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
