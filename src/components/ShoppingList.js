import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import Container from "../common/Container";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Header from "./Header";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import Discount from "./Discount";

const ShoppingList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const filteredProduct = products.filter((shopping) => {
    return shopping.category
      .toLowerCase()
      .includes(searchProducts.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchProducts(e.target.value);
  };

  return (
    <Box>
      <Banner />
      <Box>
        <Header handleSearch={handleSearch} cart={cart} />
        <Container>
          <NewArrivals />
          <Typography
            variant="h6"
            fontWeight={700}
            textAlign="left"
            paddingTop="4%"
          >
            {" "}
            Featured Products
          </Typography>
          <Box
            margin={"3% 0%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {filteredProduct.map((product, id) => (
              <Box key={id} width={{ xs: "100%", sm: "25%" }} padding={"2%"}>
                <Box
                  component="img"
                  height={{ xs: "35vh", sm: "28vh" }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={product.image}
                  alt={"product"}
                />
                <Typography variant="subtitle2"> {product.title}</Typography>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  width={"35%"}
                  alignItems="center"
                  paddingLeft={"3%"}
                >
                  <Typography variant="body2">
                    &#8358;{product.price}
                  </Typography>
                  <Box>
                    <AddShoppingCartIcon
                      onClick={() => addToCart(product)}
                      sx={{
                        color: "#C69749",
                        width: 26,
                        height: 26,
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
        <Discount />
      </Box>
    </Box>
  );
};

export default ShoppingList;
