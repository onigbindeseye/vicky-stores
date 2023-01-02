import React from "react"
import { Link } from "react-router-dom"
import { Box, Typography, Avatar } from "@mui/material"
import useStyles from "../css/useStyles"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { blue, red } from '@mui/material/colors';

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Box className={classes.footerContainer}>
        <Box className={classes.footerItems}>
          <Typography variant='h4' fontWeight='bold'>
            Vicky Stores
          </Typography>
          <Box className={classes.footerSocials}>
          <Box
                display={'flex'}
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
                display={'flex'}
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
                display={'flex'}
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
                display={'flex'}
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
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            Products
          </Typography>
          <Link className={classes.footerItemsLinks}>Electronics</Link>
          <Link className={classes.footerItemsLinks}>Jewelry</Link>
          <Link className={classes.footerItemsLinks}>Men's clothings</Link>
          <Link className={classes.footerItemsLinks}>Women's clothings</Link>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            Resources
          </Typography>
          <Link className={classes.footerItemsLinks}>API Reference</Link>
          <Link className={classes.footerItemsLinks}>Terms & Conditions</Link>
          <Link className={classes.footerItemsLinks}>FAQs</Link>
          <Link className={classes.footerItemsLinks}>Privacy & Security</Link>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            Shipping and Return
          </Typography>
          <Link className={classes.footerItemsLinks}>Shipping details</Link>
          <Link className={classes.footerItemsLinks}>Return policy</Link>
          <Link className={classes.footerItemsLinks}>Track your order</Link>
          <Link className={classes.footerItemsLinks}>Customer service</Link>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            About Us
          </Typography>
          <Link className={classes.footerItemsLinks}>Contact us</Link>
          <Link className={classes.footerItemsLinks}>Who we are</Link>
          <Link className={classes.footerItemsLinks}>Blog</Link>
          <Link className={classes.footerItemsLinks}>Careers</Link>
        </Box>
      </Box>
      <hr />
      <Box className={classes.footerCopyright}>
        <Typography variant='subtitle2'>
          Copyright &copy; 2021 || Designed by
          <a href='https://oluseye.vercel.app/'> Oluseye.</a>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
