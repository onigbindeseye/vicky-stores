import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { blue, red } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box backgroundColor={"#735F32"} color={"#fff"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "20%" }}
          padding={"2% 2%"}
          marginTop={"2%"}
        >
          <Typography variant="h4" fontWeight="bold">
            Vicky Stores
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            width={"75%"}
            padding={"1% 0"}
            margin={"5% 14%"}
            cursor={"pointer"}
          >
            <Box
              display={"flex"}
              component="a"
              underline="none"
              href="https://twitter.com/"
              title="Twitter"
            >
              <Avatar sx={{ bgcolor: blue[300], width: 36, height: 36 }}>
                <TwitterIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              href="https://www.facebook.com/"
              title="Facebook"
            >
              <Avatar sx={{ bgcolor: blue[800], width: 36, height: 36 }}>
                <FacebookIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              href="https://www.linkedin.com/company/"
              title="LinkedIn"
            >
              <Avatar sx={{ bgcolor: blue[700], width: 36, height: 36 }}>
                <LinkedInIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              href="https://www.youtube.com/"
              title="Youtube"
            >
              <Avatar sx={{ bgcolor: red[700], width: 36, height: 36 }}>
                <YouTubeIcon />
              </Avatar>
            </Box>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", sm: "20%" }}
          padding={"2% 2%"}
          marginTop={"2%"}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Products
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Electronics
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Jewelry
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Men's clothings
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Women's clothings
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "20%" }}
          padding={"2% 2%"}
          marginTop={"2%"}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Resources
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            API Reference
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Terms & Conditions
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            FAQs
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Privacy & Security
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "20%" }}
          padding={"2% 2%"}
          marginTop={"2%"}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Shipping and Return
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Shipping details
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Return policy
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Track your order
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Customer service
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "20%" }}
          padding={"2% 2%"}
          marginTop={"2%"}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            About Us
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Contact us
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Who we are
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="body2"
            color={"#fff"}
            paddingBottom={"3%"}
            sx={{
              cursor: "pointer",
            }}
          >
            Careers
          </Typography>
        </Box>
      </Box>
      <hr />
      <Box textAlign={"center"} padding={"1% 0"}>
        <Typography variant="subtitle2">
          Copyright &copy;{new Date().getFullYear()} || Designed by
          <a href="https://oluseye.vercel.app/"> Oluseye.</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
