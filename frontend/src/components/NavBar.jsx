import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "./ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: 22, sm: 28 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgBlendMode="linear"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.400"
          bgClip={"text"}
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button style={{ backgroundColor: "#606060" }}>
              <CiSquarePlus fontSize={30} style={{ color: "white" }} />
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            style={{ backgroundColor: "#606060" }}
          >
            {colorMode === "light" ? (
              <IoMoon />
            ) : (
              <LuSun size={20} color="white" />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
