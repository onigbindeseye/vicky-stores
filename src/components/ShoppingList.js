import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import useStyles from "../css/useStyles";
import Container from "../common/Container";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Header from "./Header";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import Discount from "./Discount";

const ShoppingList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  const classes = useStyles();

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
          <Box className={classes.productContainer}>
            {filteredProduct.map((product, id) => (
              <Box key={id} className={classes.productItems}>
                <img
                  src={product.image}
                  alt="product"
                  className={classes.productItemsImg}
                />
                <Typography variant="subtitle2"> {product.title}</Typography>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  width={"35%"}
                  alignItems="center"
                  paddingLeft={'3%'}
                >
                  <Typography variant="caption">&#8358;{product.price}</Typography>
                  <Box>
                    <AddShoppingCartIcon
                      onClick={() => addToCart(product)}
                      sx={{ color: "#C69749", width: 26, height: 26, cursor:"pointer"}}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
        <Discount/>
      </Box>
    </Box>
  );
};

export default ShoppingList;
