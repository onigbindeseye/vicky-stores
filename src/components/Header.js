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
    <Box className={classes.header}>
      <Box>
        <Link to="/" className={classes.headerLinks}>
          <Typography variant="h3" fontWeight={700}>
            Vicky Stores
          </Typography>
        </Link>
      </Box>
      <Box className={classes.searchbar}>
        <TextField
          fullWidth
          type='text'
          placeholder='Search by category'
          onChange={handleSearch}
          className={classes.textfield}
          variant="standard"
        />
      </Box>
      <Box className={classes.navbar}>
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
      <Box>
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
