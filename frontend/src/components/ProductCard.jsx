import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s "
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
      m={4}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <Button bg="blue.500" w={10}>
            <FaRegEdit />
          </Button>
          <Button bg="red.600" w={10}>
            <MdDelete />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
