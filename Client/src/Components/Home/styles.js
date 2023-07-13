import { makeStyles } from "@material-ui/core";

const useSyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    display: "flex",
    overflow: "auto",
    backgroundImage: "linear-gradient(40deg, #20002c, #f80759)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  logoDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  logo: {
    color: "white",
    fontSize: "10rem",
    fontFamily: "Smooch",
    textShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6rem",
    },
  },
  subtitle: {
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: "white",
    transform: "translateY(-50px)",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(-30px)",
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateY(-20px)",
      fontSize: "0.6rem",
    },
  },
  hrDiv: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  hr: {
    height: "50%",
    opacity: "0.6",
    borderColor: "white",
  },
  login: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  googleBtn: {
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    margin: "3rem",
  },
  note: {
    padding: "1rem",
    textAlign: "center",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateY(-30px)",
      fontSize: "0.6rem",
    },
  },
}));

export default useSyles;
