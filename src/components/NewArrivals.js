import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "../css/useStyles";
import fashion from "../images/fashion.jpeg";

function NewArrivals() {
  const [category, setCategory] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Box>
      <Box padding={"2%"}>
        <Typography
          variant="h6"
          color="#000"
          fontWeight={700}
          textAlign={"left"}
        >
          New Arrivals
        </Typography>
        <Box className={classes.productContainer}>
          {category.map((product, id) => (
            <Box key={id} className={classes.productItems}>
              <img
                src={product.image}
                alt="product"
                className={classes.productItemsImg}
              />
              <Typography variant="subtitle2"> {product.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        margin="3% 0%"
      >
        <Box
          padding={"15.8% 5%"}
          width={{ xs: "100%", sm: "50%" }}
          height={"100%"}
          backgroundColor="#735F32"
        >
          <Typography
            paddingBottom="4%"
            variant="h6"
            textAlign="left"
            color="#fff"
          >
            Fashion
          </Typography>
          <Typography
            paddingBottom="4%"
            variant="h4"
            textAlign="left"
            color="#fff"
            fontWeight={700}
          >
            Christmas Pyjamas
          </Typography>
          <Typography
            paddingBottom="4%"
            variant="subtitle2"
            textAlign="left"
            color="#fff"
          >
            Vicky Stores your number one online fashion store in Nigeria.
            Finding quality clothes, footwears and jewelries has never been made
            so easy online, with Vicky Stores you don’t need to worry about
            getting value for your money, with our money back guarantee you can
            trust we would deliver what you order in good time.
          </Typography>
        </Box>
        <Box>
          <img src={fashion} alt="product" />
        </Box>
      </Box>
    </Box>
  );
}

export default NewArrivals;
