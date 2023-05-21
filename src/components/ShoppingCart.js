import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Box, Typography, Grid } from "@mui/material";
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Container from "../common/Container";

const ShoppingCart = (props) => {
  const ColorButton = styled(Button)(() => ({
    color: "#000",
    width: 225,
    height: 45,
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#fff",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#C69749",
    },
  }));

  const ColorButton2 = styled(Button)(() => ({
    color: "#fff",
    width: 250,
    height: 50,
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#735F32",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#C69749",
    },
  }));

  const total = props.cart.reduce((sum, d) => sum + d.price, 0).toFixed(2);
  return (
    <Container>
      <Grid
        container
        marginTop={{ xs: "40%", sm: "10%" }}
        paddingBottom={{ xs: "10%", sm: "5%" }}
      >
        <Grid items xs={12} sm={12}>
          <Box
            textAlign={"left"}
            paddingLeft={{ xs: "8%", sm: "5%" }}
            color={"#000"}
            paddingBottom={"2%"}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              paddingBottom={{ xs: "5%", sm: "2%" }}
            >
              Shopping Cart
            </Typography>
            <Link to="/">
              <ColorButton2 variant="contained">Continue Shopping</ColorButton2>
            </Link>
          </Box>
        </Grid>
        <Grid items xs={12} sm={8}>
          <Typography
            variant="h6"
            padding={{ xs: "3% 0%", sm: "2% 0%" }}
            fontWeight={700}
          >
            Item Details
          </Typography>
          <Grid items xs={12} sm={12}>
            {props.cart.map((product) => (
              <Box
                display="flex"
                padding="5% 0"
                key={product.id}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Box width={{ xs: "95%", sm: "50%" }}>
                  <Box
                    component="img"
                    height={{ xs: "10vh", sm: "12vh" }}
                    width={{ xs: "45%", sm: "20%" }}
                    sx={{
                      position: "relative",
                    }}
                    src={product.image}
                    alt={product.title}
                  />
                  <Typography variant="subtitle2">{product.title}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    Price
                  </Typography>
                  <Typography variant="subtitle1">
                    &#8358;{product.price}
                  </Typography>
                </Box>
                <Box>
                  <ColorButton
                    variant="contained"
                    onClick={() => props.removeFromCart(product)}
                  >
                    Remove
                  </ColorButton>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid items xs={12} sm={4} marginTop={{ xs: "7%", sm: "0%" }}>
          <Typography variant="h6" fontWeight={700}>
            Order Summary
          </Typography>
          <Typography variant="subtitle1">{props.cart.length} items</Typography>
          <hr />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={{ xs: "60%", sm: "40%" }}
            padding={{ xs: "5% 0%", sm: "4% 0%" }}
          >
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6"> &#8358;{total}</Typography>
          </Box>
          <Box width={{ xs: "80%", sm: "70%" }}>
            <ColorButton2
              variant="contained"
              onClick={() => props.history.push("/checkout")}
              startIcon={<ShoppingCartCheckoutOutlined />}
            >
              Continue to checkout
            </ColorButton2>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
