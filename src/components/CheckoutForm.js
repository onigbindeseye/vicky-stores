import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import useForm from "../hooks/useForm";
import { Typography, Box, TextField, Grid, Button } from "@mui/material";
import ShoppingCartCheckoutRounded from "@mui/icons-material/ShoppingCartCheckoutRounded";
import Container from "../common/Container";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

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
    <Container>
      <Box
        marginTop={{ xs: "40%", sm: "10%" }}
        paddingBottom={{ xs: "10%", sm: "5%" }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" fontWeight={700}>
            Checkout Form
          </Typography>
          <Grid container spacing={1} paddingTop={{ xs: "5%", sm: "3%" }}>
            <Grid item xs={12} sm={4} sx={{ marginBottom: 2 }}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                First Name
              </Typography>
              <TextField
                fullWidth
                id="firstName"
                placeholder="First Name"
                name="firstName"
                autoComplete="firstName"
                variant="outlined"
                value={values.firstName}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                Last Name
              </Typography>
              <TextField
                fullWidth
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                autoComplete="lastName"
                variant="outlined"
                value={values.lastName}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                Address
              </Typography>
              <TextField
                fullWidth
                id="address"
                placeholder="Address"
                name="address"
                autoComplete="address"
                variant="outlined"
                value={values.address}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                City
              </Typography>
              <TextField
                fullWidth
                id="city"
                placeholder="City"
                name="city"
                autoComplete="city"
                variant="outlined"
                value={values.city}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                State
              </Typography>
              <TextField
                fullWidth
                id="state"
                placeholder="State"
                name="state"
                autoComplete="state"
                variant="outlined"
                value={values.state}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant={"subtitle2"}
                sx={{ marginBottom: 2 }}
                align={"left"}
              >
                Zip
              </Typography>
              <TextField
                fullWidth
                id="zip"
                placeholder="Zip"
                name="zip"
                autoComplete="zip"
                variant="outlined"
                value={values.zip}
                onChange={handleChanges}
              />
            </Grid>
            <Grid marginTop={{ xs: "4%", sm: "2%" }}>
              <ColorButton
                variant="contained"
                startIcon={<ShoppingCartCheckoutRounded />}
              >
                Checkout
              </ColorButton>
            </Grid>
          </Grid>
        </form>

        {showSuccessMessage && (
          <Box data-testid="successMessage">
            <Typography variant="h6">
              You have ordered some items! Woo-hoo! <span role="img">🎉</span>
            </Typography>
            <Typography variant="h6">
              Your orders will be shipped to:
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle2">
              {values.firstName} {values.lastName}
            </Typography>
            <Typography variant="subtitle2">{values.address}</Typography>
            <Typography variant="subtitle2">
              {values.city}, {values.state} {values.zip}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CheckoutForm;
