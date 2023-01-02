import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#f88905",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    zIndex: "1",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16)",
    paddingBottom: "1%",
  },
  headerLinks: {
    color: "#C69749",
    textDecoration: "none",
    width: "20%",
  },
  searchbar: {
    width: "20%",
  },
  textfield: {
    width: "100%",
    padding: "1%",
    fontFamily: "Raleway, sans-serif",
    fontSize: "1.2rem",
    borderBottom: " 1px solid #ccc",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
    width: "30%",
  },
  buttons: {
    textDecoration: "none",
  },
  buttons2: {
    textDecoration: "none",
    marginRight: "2rem",
  },
  banner: {
    marginTop: "6%",
    backgroundColor: "#4ca1a3",
    width: "100%",
    padding: "4% 4% 0%",
    display: "flex",
    justifyContent: "space-between",
    color: "#4f4f4f",
    alignItems: "center",
  },
  bannerImgContainer: {
    width: "60%",
    paddingBottom: "0",
  },
  bannerImg: {
    width: "70%",
    height: "70vh",
  },
  bannerImg2: {
    width: "30%",
    position: "absolute",
    right: "0%",
    top: "11.8%",
  },
  bannerText: {
    textAlign: "left",
    lineHeight: "1.5",
  },
  cartBadge: {
    position: "absolute",
    top: "25px",
    right: "0.1%",
    borderRadius: "50%",
    backgroundColor: "#000",
    color: "#fff",
    display: "inline-block",
    paddingLeft: " 5px",
    paddingRight: "5px",
    fontSize: "0.6rem",
  },
  productContainer: {
    margin: "3% 0%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cart: {
    marginTop: "10%",
  },
  cartHeader: {
    textAlign: "left",
    paddingLeft: "2%",
    color: "#4ca1a3",
  },
  cartContainer: {
    display: "flex",
  },
  cartItems: {
    flexWrap: "wrap",
    width: "100%",
  },
  productCard: {
    display: "flex",
    margin: "2%",
    padding: "32px 0",
    width: "100%",
  },
  productImage: {
    width: "10%",
    height: "10vh",
  },
  productTitle: {
    width: "50%",
  },
  productPrice: {
    width: "20%",
  },
  productAction: {
    width: "20%",
  },
  productItems: {
    width: "25%",
    padding: "2%",
  },
  productItemsImg: {
    width: "60%",
    height: "25vh",
  },
  checkoutSection: {
    color: "#000",
    padding: "32px 25px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-end",
    width: "30%",
  },
  checkoutTitle: {
    display: "flex",
    padding: "5% 2%",
    width: "100%",
  },
  checkoutSubTitle: {
    paddingRight: "15%",
  },
  checkoutSubTitle2: {
    paddingRight: "35%",
  },
  checkoutButton: {
    paddingRight: "20%",
  },
  form: {
    boxShadow: "5px 5px 5px 5px #ddd",
    padding: "3%",
    maxWidth: "75%",
    margin: "10% 20%",
    color: "#fff",
  },
  field: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "3%",
  },
  label: {
    width: "20%",
    textTransform: "uppercase",
    textAlign: "right",
    marginRight: "5%",
    fontWeight: 700,
  },
  textField: {
    marginTop: "1rem",
  },
  successMessage: {
    width: "400px",
    margin: "0 auto",
    marginTop: "32px",
    padding: "24px",
    backgroundColor: "#735F32",
  },
  footer: {
    backgroundColor: "#735F32",
    color: "#fff",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  footerItems: {
    width: "20%",
    padding: "2% 2%",
    marginTop: "2%",
  },
  footerItemsLinks: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    paddingTop: "2%",
    paddingBottom: "4%",
    textDecoration: "none",
    fontSize: "0.8rem",
  },
  footerSocials: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "75%",
    padding: "1% 0",
    margin: "5% 14%",
    cursor: "pointer",
  },
  footerCopyright: {
    textAlign: "center",
    padding: "1% 0",
  },
}))

export default useStyles
