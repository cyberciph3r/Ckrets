import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    boxSizing: "border-box",
    backgroundImage: "linear-gradient(40deg, #20002c, #f80759)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Poppins",
    position: "relative",
    overflow: "auto",
  },
  backIcon: {
    backgroundColor: "white",
    padding: "0.6rem",
    borderRadius: "50%",
  },
  formDiv: {
    padding: "4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bolder",
    fontFamily: "Poppins",
    paddingBottom: "0.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  subTitle: {
    paddingBottom: "1rem",
    fontFamily: "Montserrat",
    opacity: "0.8",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  form: {
    width: "70%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "5px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      fontSize: "0.8rem",
    },
  },
  input: {
    outline: "none",
    border: "none",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  },
  tagSpan: {
    fontFamily: "Montserrat",
    fontSize: "0.9rem",
    opacity: "0.8",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    textTransform: "none",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

export default useStyles;
