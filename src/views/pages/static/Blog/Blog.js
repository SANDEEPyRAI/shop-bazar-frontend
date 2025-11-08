import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { BlogData } from "src/utils";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ImgBox: {
    background: "url(images/BlogImages/BlogFirst.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "250px",
    width: "100%",
    "& h1": {
      fontSize: "85px",
      fontWeight: 700,
      lineHeight: "30px",
      fontFamily: "Alumni Sans",
      color: "rgba(255, 255, 255, 1)",

      "@media(max-width:767px)": {
        fontSize: "65px !important",
      },
      "@media(max-width:500px)": {
        fontSize: "55px !important",
      },
    },
    "& span": {
      fontSize: "85px",
      fontWeight: 400,
      lineHeight: "30px",
      fontFamily: "Arizonia",
      color: "rgba(255, 255, 255, 1)",
      "@media(max-width:767px)": {
        fontSize: "65px !important",
      },
      "@media(max-width:500px)": {
        fontSize: "55px !important",
      },
    },
  },
  mainBox: {
    margin: "3rem 5rem",
    "@media(max-width:767px)": {
      margin: "2rem",
    },

    "& .GridItem1": {
      "& .imageBox": {
        borderRadius: "20px",
        overflow: "hidden",
        background: "url(images/BlogImages/blog1.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxHeight: "100%",
        height: "352px",
        maxWidth: "724px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "960px",
        },
        width: "100%",
        "& h1": {
          fontSize: "85px",
          LineHeight: "30.38px",
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
          "@media(max-width:1200px)": {
            fontSize: "75px !important",
          },
          "@media(max-width:767px)": {
            fontSize: "65px !important",
          },
          "@media(max-width:550px)": {
            fontSize: "55px !important",
          },
        },
      },
    },

    "& .contentBox": {
      padding: "5px 25px",
      "@media(max-width:959px)": {
        padding: "0px 0px",
      },
      "& h6": {
        fontWeight: 500,
        lineHeight: "20px",
        marginBottom: "15px",
        color: "rgba(38, 38, 38, 0.6)",
        "@media(max-width:959px)": {
          marginTop: "5px",
          marginBottom: "10px",
        },
      },
      "& h2": {
        fontWeight: 700,
        lineHeight: "50px",
        color: "rgba(38, 38, 38, 1))",
        // marginBottom: "15px",
        "@media(max-width:959px)": {
          marginTop: "5px",
        },
      },
      "& .MuiTypography-body1": {
        fontSize: "14px",
        color: "rgba(99, 104, 128, 1)",
        marginBottom: "15px",
        width: "100%",
        maxWidth: "521px",
        "@media(max-width:959px)": {
          maxWidth: "100%",
        },
      },
      "& .MuiTypography-body2": {
        fontSize: "14px",
        fontWeight: 300,
        color: "rgba(38, 38, 38, 0.75)",
      },
    },

    "& .GridContainer": {
      marginTop: "4rem",
      "@media(max-width:959px)": {
        marginTop: "1rem",
      },
      "& .subBoxes": {
        maxWidth: "495px",
        width: "100%",
        "@media (min-width: 1701px)": {
          maxWidth: "660px",
          maxHeight: "660px",
        },
        maxHeight: "596px",
        height: "100%",
        "& .imgsubBoxes": {
          maxHeight: "383px",
          "@media (min-width: 1701px)": {
            maxHeight: "442px",
          },
          objectFit: "cover",
          "& .img": {
            width: "100%",
            height: "100%",
          },
        },

        "& h6": {
          fontWeight: 500,
          lineHeight: "20px",
          margin: "10px 0px",
          color: "rgba(38, 38, 38, 0.6)",
        },
        "& h2": {
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "35px",
          marginBottom: "10px",
          color: "rgba(38, 38, 38, 1)",
        },
        "& .MuiTypography-body1": {
          lineHeight: "20px",
          fontSize: "14px",
          color: "rgba(99, 104, 128, 1)",
          marginBottom: "10px",
          width: "100%",
          maxWidth: "454px",
        },
        "& .MuiTypography-body2": {
          fontSize: "14px",
          fontWeight: 300,
          color: "rgba(38, 38, 38, 0.75)",
        },
      },
    },
  },
  subheading: {
    maxWidth: "405px",
    "@media(max-width:959px)": {
      maxWidth: "100%",
      marginBottom: "5px",
    },
  },
}));
const Blog = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid container className={classes.ImgBox}>
        <Grid
          item
          style={{ width: "100%", flexDirection: "row", gap: "15px" }}
          className="displayColumnCenter"
        >
          <Typography variant="h1">GyanBatua</Typography>
          <span>Blog</span>
        </Grid>
      </Grid>
      <Box className={classes.mainBox}>
        <Grid container>
          <Grid item lg={5} md={5} sm={12} xs={12} className="GridItem1">
            <Box className="imageBox displayCenter">
              <Typography variant="h1">GyanBatua</Typography>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box className="contentBox">
              <Typography variant="h6">Gyan Batua</Typography>
              <Box className={classes.subheading}>
                <Typography variant="h2">
                  GyanBatua Blog: Insights, Inspiration and Innovation
                </Typography>
              </Box>

              <Typography variant="body1">
                Explore the latest insights, trends, and innovations in
                education, technology, and beyond with the GyanBatua Blog. From
                expert interviews and industry analysis to practical tips and
                thought-provoking discussions, our blog covers a wide range of
                topics to inform, inspire, and empower readers on their learning
                journey. Dive into our collection of articles, stay up-to-date
                with the latest developments, and join the conversation as we
                explore the future of learning and beyond.
              </Typography>
              <Typography variant="body2">Nov 1, 2023 . 02 min read</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} className="GridContainer">
          {BlogData.map((data, index) => (
            <Grid item key={index} lg={4} md={6} sm={6} xs={12}>
              <Box
                className="subBoxes"
                // onClick={() => history.push("/gyan-blog")}
              >
                <Box className="imgsubBoxes">
                  <img
                    src={data.img}
                    alt={`Blog Image ${index}`}
                    className="img"
                  />
                </Box>
                <Typography variant="h6">{data.headText}</Typography>
                <Typography variant="h2">{data.firstText}</Typography>
                <Typography variant="body1">{data.secondText}</Typography>
                <Typography variant="body2">{data.datetime}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Blog;
