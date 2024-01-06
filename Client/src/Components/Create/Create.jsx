import React, { useState } from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import useStore from "../../Zustand/zustand";
import BackHome from "../BackHome/BackHome";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Create = () => {
  const classes = useStyles();
  const [secret, setSecret] = useState("");
  const [tag, setTag] = useState("");
  const { user, logout } = useStore();

  return (
    <div className={classes.main}>
      {user == null ? (
        <BackHome />
      ) : (
        <div className={classes.formDiv}>
          <Link to="/main">
            <ArrowBack
              style={{ color: "black" }}
              className={classes.backIcon}
            />
          </Link>
          <Typography className={classes.title}>Share Your Secret</Typography>
          <Typography className={classes.subTitle}>
            Anonymously share your secrets with the world
          </Typography>
          <form
            className={classes.form}
            action="https://ckrets.vercel.app"
            method="POST"
          >
            <label>Your Secret</label>
            <textarea
              type="text"
              className={classes.input}
              rows={10}
              cols={12}
              value={secret}
              onChange={(e) => {
                setSecret(e.target.value);
              }}
              name="secret"
            />
            <label>
              tags{" "}
              <span className={classes.tagSpan}>
                (#love, #regret, #cheating, #exam)
              </span>
            </label>
            <input
              type="text"
              className={classes.input}
              placeholder="#tag"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
              name="tag"
            />
            <Button type="submit" className={classes.btn}>
              Share
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Create;
