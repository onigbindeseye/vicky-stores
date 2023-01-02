import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../images/banner.jpg";

const styles = {
  paperContainer: {
    height: 700,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function Banner() {
  return (
    <Box style={styles.paperContainer}>
      <Box
        padding={"3%"}
        width={"30%"}
        backgroundColor={"#fff"}
        position={"absolute"}
        top={{ xs: "55%", sm: "35%" }}
        marginLeft={{ xs: "0%", sm: "7%" }}
      >
        <Typography
          variant="h4"
          color="#000"
          fontWeight={700}
          padding={"5% 3% 1% 3%"}
          textAlign={"left"}
        >
          Black friday sales!
        </Typography>
        <Typography
          variant="h6"
          color="#000"
          fontWeight={500}
          padding={"5% 3% 1% 3%"}
          textAlign={"left"}
        >
          Get up to 20% off our fashion category this period. Use code:{" "}
          <strong> Spring</strong>
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
