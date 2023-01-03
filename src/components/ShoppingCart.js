import React from "react"
import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles";
import { Button, Box, Typography } from "@mui/material"
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCartCheckoutOutlined"
import useStyles from "../css/useStyles"

const ShoppingCart = (props) => {
  const classes = useStyles()

  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 225,
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

  const total = props.cart.reduce((sum, d) => sum + d.price, 0)
  return (
    <Box className={classes.cart}>
      <Box className={classes.cartHeader}>
        <Typography variant='h4' fontWeight='bold' paddingBottom={'2%'}>
          Shopping Cart
        </Typography>
        <Link to='/' className={classes.buttons}>
          <ColorButton variant='contained'>Continue Shopping</ColorButton>
        </Link>
      </Box>
      <Box className={classes.cartContainer}>
        <Box className={classes.cartItems}>
        <Typography variant='h6' className={classes.productTitle} >Item Details</Typography>
          {props.cart.map((product) => (
            <Box className={classes.productCard} key={product.id}>
              <Box className={classes.productTitle}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.productImage}
                />
                <Typography variant='subtitle2'>{product.title}</Typography>
              </Box>
              <Box className={classes.productPrice}>
                <Typography variant='h6'>Price</Typography>
                <Typography variant='subtitle1'>
                  &#8358;{product.price}
                </Typography>
              </Box>
              <Box className={classes.productAction}>
                <Typography variant='h6'>Action</Typography>
                <ColorButton
                  variant='contained'
                  className='product-button'
                  onClick={() => props.removeFromCart(product)}
                >
                  Remove
                </ColorButton>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.checkoutSection}>
          <Box className={classes.checkoutTitle}>
            <Typography variant='h6' className={classes.checkoutSubTitle}>
              Order Summary
            </Typography>
            <Typography variant='subtitle1'>
              {props.cart.length} items
            </Typography>
          </Box>
          <hr />
          <Box className={classes.checkoutTitle}>
            <Typography variant='h6' className={classes.checkoutSubTitle2}>
              Total
            </Typography>
            <Typography variant='h6'> &#8358;{total}</Typography>
          </Box>
          <Box className={classes.checkoutTitle}>
            <ColorButton2
              variant='contained'
              className={classes.checkoutButton}
              onClick={() => props.history.push("/checkout")}
              startIcon={<ShoppingCartCheckoutOutlined />}
            >
              Continue to checkout
            </ColorButton2>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ShoppingCart
