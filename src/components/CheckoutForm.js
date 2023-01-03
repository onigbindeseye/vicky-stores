import React, { useState } from "react"
import { styled } from "@mui/material/styles";
import useForm from "../hooks/useForm"
import { Typography, Box, TextField, Grid, InputLabel, Button } from "@mui/material"
import ShoppingCartCheckoutRounded from "@mui/icons-material/ShoppingCartCheckoutRounded"
import useStyles from "../css/useStyles"

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
}

const CheckoutForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, handleChanges] = useForm(initialValue)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
  }

  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 215,
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
    <Box>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant='h3' color='#000'>
          Checkout Form
        </Typography>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>First Name</InputLabel>
          <TextField
            fullWidth
            id='firstName'
            placeholder='First Name'
            name='firstName'
            autoComplete='firstName'
            className={classes.textField}
            variant='outlined'
            value={values.firstName}
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>Last Name</InputLabel>
          <TextField
            fullWidth
            id='lastName'
            placeholder='Last Name'
            name='lastName'
            autoComplete='lastName'
            className={classes.textField}
            variant='outlined'
            value={values.lastName}
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>Address</InputLabel>
          <TextField
            fullWidth
            id='address'
            placeholder='Address'
            name='address'
            autoComplete='address'
            className={classes.textField}
            variant='outlined'
            value={values.address}
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>City</InputLabel>
          <TextField
            fullWidth
            id='city'
            placeholder='City'
            name='city'
            autoComplete='city'
            className={classes.textField}
            variant='outlined'
            value={values.city}
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>State</InputLabel>
          <TextField
            fullWidth
            id='state'
            placeholder='State'
            name='state'
            autoComplete='state'
            className={classes.textField}
            variant='outlined'
            value={values.state}
            onChange={handleChanges}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <InputLabel className={classes.label}>Zip</InputLabel>
          <TextField
            fullWidth
            id='zip'
            placeholder='Zip'
            name='zip'
            autoComplete='zip'
            className={classes.textField}
            variant='outlined'
            value={values.zip}
            onChange={handleChanges}
          />
        </Grid>
        <ColorButton variant='contained' startIcon={<ShoppingCartCheckoutRounded />}>
          Checkout
        </ColorButton>
      </form>

      {showSuccessMessage && (
        <Box className={classes.successMessage} data-testid='successMessage'>
          <Typography variant='h6'>
            You have ordered some items! Woo-hoo! <span role='img'>🎉</span>
          </Typography>
          <Typography variant='h6'>Your orders will be shipped to:</Typography>
          <br />
          <br />
          <Typography variant='subtitle2'>
            {values.firstName} {values.lastName}
          </Typography>
          <Typography variant='subtitle2'>{values.address}</Typography>
          <Typography variant='subtitle2'>
            {values.city}, {values.state} {values.zip}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default CheckoutForm
