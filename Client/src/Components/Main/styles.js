import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    boxSizing: "border-box",
    backgroundImage: "linear-gradient(40deg, #20002c, #f80759)",
    color: "white",
    textAlign: "center",
    overflow: "auto",
  },
  appBar: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
  logo: {
    fontSize: "3rem",
    fontFamily: "Smooch",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  postBtn: {
    border: "2px solid #fff",
    backgroundColor: "white",
    borderRadius: "20px",
    fontFamily: "Roboto",
    color: "black",
    margin: "0.5rem",
    padding: "0.4rem",
    paddingLeft: "0.8rem",
    paddingRight: "0.8rem",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      border: "2px solid #fff",
      borderRadius: "20px",
      backgroundColor: "black",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.2rem",
      padding: "0.3rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "0.8rem",
    },
  },
  logoutBtn: {
    border: "2px solid #fff",
    borderRadius: "20px",
    fontFamily: "Roboto",
    color: "white",
    margin: "0.5rem",
    padding: "0.4rem",
    paddingLeft: "0.8rem",
    paddingRight: "0.8rem",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.2rem",
      padding: "0.3rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "0.8rem",
    },
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bolder",
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1rem",
      fontSize: "1.8rem",
    },
  },
  subtitle: {
    fontSize: "1rem",
    fontFamily: "Montserrat",
    opacity: "0.8",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  search: {
    outline: "none",
    border: "none",
    marginTop: "2rem",
    padding: "0.8rem",
    paddingLeft: "1rem",
    width: "50%",
    borderRadius: "20px",
    fontFamily: "Montserrat",
    [theme.breakpoints.down("xs")]: {
      padding: "0.6rem",
      margin: "0.8rem",
      fontSize: "0.7rem",
      width: "80%",
    },
  },
  tagsDiv: {
    display: "flex",
    gap: 5,
    padding: "1rem",
    paddingBottom: "2rem",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      flexWrap: "wrap",
      paddingTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0rem",
      width: "auto",
      flexWrap: "wrap",
    },
  },
  tabBtn: {
    cursor: "pointer",
    fontFamily: "Poppins",
    fontSize: "0.7rem",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  cardContainer: {
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
  card: {
    color: "white",
    margin: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  },
  secretbody: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  tag: {
    marginTop: "0.4rem",
    fontFamily: "Montserrat",
    fontSize: "0.8rem",
    fontWeight: "bolder",
    letterSpacing: 1,
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  loader: {
    padding: "4rem",
  },
  reactionsContainer: {
    margin: "1rem",
    // backgroundColor: "rgba(255, 255, 255, 0.2)",
    // borderRadius: "10px",
    // boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default useStyles;
