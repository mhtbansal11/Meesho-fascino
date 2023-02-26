import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

export default function MegaMenu() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          ></Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "black");
  const linkHoverColor = useColorModeValue("#f43397", "black");
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={4}
                href={navItem.href ?? "#"}
                // borderRadius={"8px 8px 0px 0px"}
                fontSize={["5px", "10px", "16px"]}
                fontWeight={500}
                h={"100%"}
                color={linkColor}
                _hover={{
                  textDecoration: "underline",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"xl"}
                p={4}
                bg={"white"}
                display={"flex"}
                rounded={"xl"}
                minW={"2xl"}
                minH={"400px"}
              >
                <Flex>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  subLabel1,
  subLabel2,
  subLabel3,
  subLabel4,
  subLabel5,
  subLabel6,
  subLabel7,
}) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={6}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"#f43397"}
            fontSize={["5px", "10px", "16px"]}
            fontWeight={500}
          >
            {label}
          </Text>
          <Box ml={"5%"}>
            <Text
              fontSize={"15px"}
              mt={"18px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
              w={"150px"}
            >
              {subLabel1}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
              w={"140px"}
            >
              {subLabel2}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel3}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel4}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel5}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel6}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
            >
              {subLabel7}
            </Text>
          </Box>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        ></Flex>
      </Stack>
    </Link>
  );
};
const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("black", "black")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "All",
    href: "/productpage",
    children: [
      {
        label: "All Women Ethnic",
        subLabel: "View All",
        href: "/productpage",
      },
      {
        label: "Sarees",
        subLabel: "All Sarees",
        subLabel1: "Silk Sarees",
        subLabel2: "Cotton Silk Sarees",
        subLabel3: "Cotton Sarees ",
        subLabel4: "Georgette Sarees",
        subLabel5: "Chiffon Sarees",
        subLabel6: "Satin Sarees",
        subLabel7: "Embroidered Sarees",

        href: "/women",
      },
      {
        label: "Kurtis",
        subLabel: "All Kurtis",
        subLabel1: "Anarkali Kurtis",
        subLabel2: "Rayon Kurtis",
        subLabel3: "Cotton Kurtis",
        subLabel4: "Embroidered Kurtis",
        href: "/women",
      },
      {
        label: "Kurta Sets",
        subLabel: "All Kurta Sets",
        href: "/women",
      },
      {
        label: "Suits and Dress Materials",
        subLabel: "All Suits & Dress Material",
        subLabel1: "Cotton Suits",
        subLabel2: "Embroidered Suits",
        subLabel3: "Chanderi Suits",
        href: "/women",
      },
      {
        label: "Other Ethnic",
        subLabel: "Blouses",
        subLabel1: "Dupattas",
        subLabel2: "Lehanga",
        subLabel3: "Gown",
        subLabel4: "Ethnic Bottomwear",
        href: "/women",
      },
    ],
  },
  {
    label: "Women Western",
    href: "#",
    children: [
      {
        label: "Top Wear",
        subLabel: "Tops",
        subLabel1: "Dresses",
        subLabel2: "Sweaters",
        subLabel3: "Jumpsuits",
        href: "/women",
      },
      {
        label: "Bottom Wear",
        subLabel: "Jeans",
        subLabel1: "Jeggings",
        subLabe2: "Palazzos",
        subLabel3: "Shorts",
        subLabel4: "Skirts",
        href: "/women",
      },
      {
        label: "Innner Wear",
        subLabel: "Bras",
        subLabel1: "Breifs",
        href: "/women",
      },
      {
        label: "Sleep Wear",
        subLabel: "Nightsuits",
        subLabel1: "Babydolls",
        href: "/women",
      },
    ],
  },
  {
    label: "Men",
    href: "#",
    children: [
      {
        label: "Top Wear",
        subLabel: "All Top Wear",
        subLabel1: "Tshirts",
        subLabel2: " Shirts",
        href: "/men",
      },
      {
        label: "Bottom Wear",
        subLabel: "Track Pants",
        subLabel1: "Jeans",
        subLabel2: "Trousers",
        href: "/men",
      },
      {
        label: "Mens Accessories",
        subLabel: "All Men Accessories",
        subLabel1: "Watches",
        subLabel2: "Belts",
        subLabel3: "Wallets",
        subLabel4: "Jewellery",
        subLabel5: "Sunglasses",
        subLabel6: "Bags",
        href: "/men",
      },
      {
        label: "Mens Footwear",
        subLabel: "All Men Accessories",
        subLabel1: "Casual Shoes",
        subLabel2: "Sports Shoes",
        subLabel3: "Sandals",
        subLabel4: "Jewellery",
        subLabel5: "Formal Shoes",

        href: "/men",
      },
      {
        label: "Ethnic Wear",
        subLabel: "Men Kurtas",
        subLabel1: "Ethnic Jackets",
        href: "/men",
      },
      {
        label: "Inner & Sleep Wear",
        subLabel: "All Inner & Sleep Wear",
        subLabel1: "Vests",
        href: "/men",
      },
    ],
  },
  {
    label: "Kids",
    href: "#",
    children: [
      {
        label: "Boys & Girls 2+ Years",
        subLabel: "Dresses",
        href: "/men",
      },
      {
        label: "Infant 0-2 Years",
        subLabel: "Rompers",
        href: "/men",
      },
      {
        label: "Toys & Accessories",
        subLabel: "Soft Toys",
        subLabel1: "Footwear",
        subLabel2: "Stationery",
        subLabel3: "Watches",
        subLabel4: "Bags & Backpacks",
        href: "/men",
      },
      {
        label: "Baby Care",
        subLabel: "All Baby Care",
        href: "/men",
      },
    ],
  },
  {
    label: "Home & Kitchen",
    href: "#",
    children: [
      {
        label: "Home Furnishing",
        subLabel: "Bedsheets",
        subLabel1: "Doormats",
        subLabel2: "Curtains & Sheers",
        subLabel3: "Cushions & Cushion Covers",
        subLabel4: "Mattress Protectors",
        href: "/homeKitchen",
      },
      {
        label: "Home Decor",
        subLabel: "All Home Decor",
        subLabel1: "Stickers",
        subLabel2: "Clocks",
        subLabel3: "Showpieces",
        href: "/homeKitchen",
      },
      {
        label: "Kitchen & Dining",
        subLabel: "Kitchen Storage",
        subLabel1: "Cookware & Bakeware",
        href: "/homeKitchen",
      },
    ],
  },
  {
    label: "Beauty & Health",
    href: "#",
    children: [
      {
        label: "Makeup",
        subLabel: "Face",
        subLabel1: "Eyes",
        subLabel2: "Lips",
        subLabel3: "Nails",
        href: "/beauthHealth",
      },
      {
        label: "Wellness",
        subLabel: "Sanitizers",
        subLabel1: "Oral Care",
        subLabel2: "Feminine Hygiene",
        href: "/beauthHealth",
      },
      {
        label: "Skincare",
        subLabel: "Deodrants",
        href: "/beauthHealth",
      },
    ],
  },
  {
    label: "Bags & Footwear",
    href: "#",
    children: [
      {
        label: "Women Bags",
        subLabel: "All Women Bags",
        subLabel1: "Handbags",
        subLabel2: "Clutches",
        subLabel3: "Slingbags",
        href: "/bagsFootwear",
      },
      {
        label: "Men Bags",
        subLabel: "All Men Bags",
        subLabel1: "Men Wallets",
        href: "/bagsFootwear",
      },
      {
        label: "Men Footwear",
        subLabel: "Sports Shoes",
        subLabel1: "Casual Shoes",
        subLabel2: "Formal Shoes",
        subLabel3: "Sandals",
        href: "/bagsFootwear",
      },
      {
        label: "Women Footwear",
        subLabel: "Flats",
        subLabel1: "Bellies",
        subLabel2: "Jutties",
        href: "/bagsFootwear",
      },
    ],
  },
  {
    label: "Jewellery & Accessories",
    href: "#",
    children: [
      {
        label: "Jewellery",
        subLabel: "Jewellery Set",
        subLabel1: "Earrings",
        subLabel2: "Mangalsutras",
        subLabel3: "Studs",
        subLabel4: "Bangles",
        subLabel5: "Necklaces",
        subLabel6: "Rings",
        subLabel7: "Anklets",
        href: "/jewellery",
      },
      {
        label: "Women Accessory",
        subLabel: "Bags",
        subLabel1: "Watches",
        subLabel2: "Hair Accessories",
        subLabel3: "Sunglasses",
        subLabel4: "Socks",

        href: "/jewellery",
      },
    ],
  },
  {
    label: "Electronics",
    children: [
      {
        label: "Mobile & Accessories",
        subLabel: "All Mobile & Accessories",
        subLabel1: "Smartwatches",
        subLabel2: "Mobile Holders",
        subLabel3: "Mobile cases and covers",

        href: "/jewellery",
      },
      {
        label: "Appliances",
        subLabel: "All Appliances",
        subLabel1: "Grooming",
        subLabel2: "Home Appliances",

        href: "/jewellery",
      },
    ],
  },
];
