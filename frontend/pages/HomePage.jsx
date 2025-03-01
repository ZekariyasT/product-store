import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/product";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products: ", products);
  return (
    <Container maxW="2xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="2xl"
          fontWeight={"bold"}
          bgBlendMode="linear"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.400"
          bgClip={"text"}
          textAlign={"center"}
        >
          {" "}
          Current Products 🚀
        </Text>
        <SimpleGrid
          column={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => {
            <ProductCard key={product._id} product={product} />;
          })}
        </SimpleGrid>
        <Text
          fontSize="md"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No products found 😢
          <Link to={"/create"}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
