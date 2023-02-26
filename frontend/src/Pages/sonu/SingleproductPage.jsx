import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import Slider from "react-slick";
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SingleProduct() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const [img, setImg] = useState([]);
  const [data, setData] = useState({});
  const { id } = useParams();
  // console.log(id);
  const getData = async () => {
    try {
      let r = await fetch(
        `https://hungry-loincloth-calf.cyclic.app/users/product/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(),
        }
      );
      let d = await r.json();
      setData(d);
      console.log(d.images);
      setImg(d.images);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(52,data);
  useEffect(() => {
    getData();
  }, []);

  const {
    brand,
    category,
    discounted_price,
    rating,
    rating_count,
    size,
    strike_price,
    title,
    type,
  } = data;

  const cards = [];
  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Box
            position={"relative"}
            height={"600px"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {img?.map((url, index) => (
                <Box
                  key={index}
                  height={"6xl"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${url})`}
                />
              ))}
            </Slider>
          </Box>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${strike_price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {category}
                </Text>
                <Text fontSize={"lg"}>{"description"}</Text>
              </VStack>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Product Name:
                    </Text>{" "}
                    {title}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      MRP:
                    </Text>{" "}
                    {strike_price}Rs
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Discounted_Price:
                    </Text>{" "}
                    {discounted_price}Rs
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Catogery:
                    </Text>{" "}
                    {category}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      brand:
                    </Text>{" "}
                    {brand}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Rating:
                    </Text>{" "}
                    {rating}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      rating_count:
                    </Text>{" "}
                    {rating_count}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Type:
                    </Text>{" "}
                    {type}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("green", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}

// const [slider, setSlider] = React.useState<Slider | null>(null);
