import React from "react";
import useSyles from "./styles";
import { Typography } from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import useStore from "../../Zustand/zustand";

const Home = () => {
  const classes = useSyles();
  const { login } = useStore();

  return (
    <div className={classes.main}>
      <div className={classes.logoDiv}>
        <Typography className={classes.logo}>Ckrets</Typography>
        <Typography className={classes.subtitle}>
          Unveiling the Veiled, where Anonymity Meets Expression
        </Typography>
      </div>
      <div className={classes.hrDiv}>
        <hr className={classes.hr} />
      </div>
      <div className={classes.login}>
        <div className={classes.googleBtn}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              var token = jwt_decode(credentialResponse.credential);
              login(token);
              window.location.replace("/main");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <Typography className={classes.note}>
          Your Privacy is Respected! Rest assured, your personal details won't
          be shared. Sign in enables authentic and meaningful engagement,
          including reacting to others' posts.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
