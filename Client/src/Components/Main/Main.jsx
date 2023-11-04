import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  MoodOutlined,
  SentimentDissatisfiedOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Masonry } from "@mui/lab";
import useStore from "../../Zustand/zustand";
import BackHome from "../BackHome/BackHome";

const Main = () => {
  const classes = useStyles();
  const [loader, setLoader] = useState(true);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const { user, logout } = useStore();

  useEffect(() => {
    const fetchSecrets = async () => {
      const response = await fetch("https://ckrets.onrender.com/find");
      const data = await response.json();
      setLoader(false);
      setResults(data);
    };
    fetchSecrets();
  }, []);

  function handleTabBtnClick(tagType) {
    console.log(tagType);
    setQuery(tagType);
  }

  return (
    <div className={classes.main}>
      {user == null ? (
        <BackHome />
      ) : (
        <div>
          <AppBar position="sticky">
            <Toolbar className={classes.appBar}>
              <Typography className={classes.logo}>Ckrets</Typography>
              <div>
                <Link to="/create" className={classes.postBtn}>
                  Post
                </Link>
                <Link
                  className={classes.logoutBtn}
                  onClick={() => {
                    logout();
                    window.location.replace("/");
                  }}
                >
                  Sign out
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <Typography className={classes.title}>Share & Explore</Typography>
          <Typography className={classes.subtitle}>
            Unveil Your Secrets, Embrace the Enigma of Others Anonymously.
          </Typography>
          <input
            className={classes.search}
            placeholder="Explore Secrets by #tag"
            onChange={(e) => {
              setTimeout(() => {
                setQuery(e.target.value);
              }, 1000);
            }}
          />
          <div className={classes.tagsDiv}>
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("");
              }}
              label="All"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("love");
              }}
              label="Love"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("regret");
              }}
              label="Regret"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("confession");
              }}
              label="Confession"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("affair");
              }}
              label="Affair"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("cheating");
              }}
              label="Cheating"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("toxic");
              }}
              label="Toxic"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("mental-health");
              }}
              label="Mental Health"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("exam");
              }}
              label="Exam"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("partner");
              }}
              label="Partner"
            />
            <Chip
              size="small"
              className={classes.tabBtn}
              onClick={() => {
                handleTabBtnClick("sad");
              }}
              label="Sad"
            />
          </div>
          <div className={classes.cardContainer}>
            {loader ? (
              <div>
                <CircularProgress
                  color="black"
                  size="4rem"
                  className={classes.loader}
                />
                <Typography className={classes.secretbody}>
                  Unearthing the finest secrets – our backend is stirring to
                  life...
                </Typography>
              </div>
            ) : (
              <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                {results
                  .filter((post) => {
                    return post.secretTag.includes(query);
                  })
                  .map((singleSecret, index) => {
                    return (
                      <Card key={index} className={classes.card}>
                        <CardContent>
                          <Typography
                            align="left"
                            className={classes.secretbody}
                          >
                            {singleSecret.secretBody}
                          </Typography>
                          <Typography align="left" className={classes.tag}>
                            {singleSecret.secretTag}
                          </Typography>
                        </CardContent>
                        {/* <CardActions className={classes.reactionsContainer}>
                        <FavoriteBorderOutlined fontSize="small" />
                        <ThumbUpAltOutlined fontSize="small" />
                        <MoodOutlined fontSize="small" />
                        <SentimentDissatisfiedOutlined fontSize="small" />
                      </CardActions> */}
                      </Card>
                    );
                  })}
              </Masonry>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
