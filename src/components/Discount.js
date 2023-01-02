import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fashion from "../images/fashion2.jpg";

function Discount() {
  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 275,
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
    <Box margin={{ xs: "25% 0%", sm: "10% 0%" }}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Box width={{ xs: "100%", sm: "50%" }}>
          <img src={fashion} alt="product"  height={660} width="100%"/>
        </Box>
        <Box
          padding={"15.8% 7%"}
          width={{ xs: "100%", sm: "50%" }}
          height={"100%"}
          backgroundColor="#ddd"
        >
          <Typography
            paddingBottom="4%"
            variant="h5"
            textAlign="left"
            color="#000"
            fontWeight={700}
          >
            Get the most out of your next purchase
          </Typography>
          <Typography
            paddingBottom="4%"
            variant="subtitle2"
            textAlign="left"
            color="#000"
          >
            Only those who hear from us get the best deals. Sign up for our
            newsletter and get 15% off your first purchase.
          </Typography>
          <Box display="flex" justifyContent="space-between" width="90%" alignItems={'center'}>
            <TextField
              fullWidth
              type="text"
              placeholder="Enter your email address"
              onChange={""}
              variant="outlined"
            />
            <ColorButton variant="contained">Get discount</ColorButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Discount;
