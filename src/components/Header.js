import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Button, Box, Typography, TextField } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import useStyles from "../css/useStyles";

const Header = ({ handleSearch, cart }) => {
  const classes = useStyles();

  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 125,
    height: 45,
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#735F32",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#C69749",
    },
  }));

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
      backgroundColor={"#fff"}
      color={"#f88905"}
      overflow={"hidden"}
      position={"fixed"}
      top={"0"}
      zIndex={"1"}
      boxShadow={"0 2px 5px 0 rgba(0, 0, 0, 0.16)"}
      paddingBottom={{ xs: "2%", sm: "1%" }}
    >
      <Box width={{ xs: "100%", sm: "20%" }}>
        <Link to="/" textDecoration="none">
          <Typography variant="h3" fontWeight={700} color={"#C69749"}>
            Vicky Stores
          </Typography>
        </Link>
      </Box>
      <Box width={"20%"} display={{ xs: "none", sm: "inline" }}>
        <TextField
          fullWidth
          type="text"
          placeholder="Search by category"
          onChange={handleSearch}
          variant="standard"
        />
      </Box>
      <Box
        width={"30%"}
        display={{ xs: "none", sm: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1%"}
      >
        <Box>
          <Link underline="none" component="a" href="/" color={"#000"}>
            Electronics
          </Link>
        </Box>
        <Box>
          <Link underline="none" component="a" href="/" color="#000">
            Jewelry
          </Link>
        </Box>
        <Box>
          <Link underline="none" component="a" href="/" color="#000">
            Fashion
          </Link>
        </Box>
      </Box>
      <Box marginTop={{ xs: "2%", sm: "0%" }}>
        <Link to="/cart">
          <ColorButton variant="contained" startIcon={<ShoppingCartRounded />}>
            My Cart
            <span className={classes.cartBadge}>
              {cart.length > 0 && cart.length}
            </span>
          </ColorButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
