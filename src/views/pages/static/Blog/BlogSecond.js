import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import SecondBlogSlider from "./SecondBlogSlider";

const useStyles = makeStyles((theme) => ({
  GyanBatuaBlogContainer: {
    "& .MuiContainer-maxWidthLg": {
      maxWidth: "963px",
    },
    "& .oneClass":{
      alignItems:"start"
    },
    "& .blBody": {
      "& .MuiTypography-body2": {
        color: "#636880",
   
        fontWeight: 400,
        marginTop: "10px",
        lineHeight: "25px",
      },
      "& h3": {
        margin: "15px 0",
      },
      "& img": {
        margin: "16px 0",
        // width: "100%",
        // maxWidth: "800px",
      },
    },
    "& .gb": {
      color: theme.palette.text.primary,
      marginTop: "40px",
    },
    "& .introduce": {
      width: "100%",
      maxWidth: "861px",
      fontWeight: 700,
      fontSize: "55px",
      color: "rgba(38, 38, 38, 1)",
      marginTop: "10px",
    },
    "& .estab": {
      width: "100%",
      maxWidth: "466px",
      fontSize: "14px",
      fontWeight: 400,
      marginTop: "22px",
    },
    "& .gyanImgDate": {
      alignItems: "start",
      "& img": {
        width: "55px",
        height: "55px",
      },
      "& .dot": {
        borderRadius: "50%",
        width: "3px",
        height: "3px",
        background: theme.palette.text.primary,
      },
      "& h6": {
        fontWeight: 500,
        marginBottom: "4px",
      },
      "& .MuiTypography-body2": {
        fontWeight: 300,
        fontSize: "14px",
        color: theme.palette.secondary.main,
      },
    },
    "& .GyanTop": {
      backgroundImage: "url(images/GyanBlogsecond.png)",
      height: "250px",
      width: "100%",
      "& h1": {
        fontSize: "59.24px",
        color: "#fff",
        fontFamily: "Alumni Sans",
        fontWeight: 800,
        letterSpacing: "5.06px",
        "& span": {
          fontFamily: "Arizonia",
          fontWeight: 400,
        },
      },
      "& div": {
        height: "100%",
      },
    },
  },
}));

const BlogSecond = () => {
  const classes = useStyles();
  return (
    <Box className={classes.GyanBatuaBlogContainer}>
      <Box className="GyanTop">
        <Box className="displayCenter">
          <Typography variant="h1">
            GyanBatua <span>Blog</span>
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box className="displayCenter">
          <Box
            style={{
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <Typography variant="h6" className="gb">
              Gyan Batua
            </Typography>
            <Typography variant="h1" className="introduce">
              Introducing GyanBatua, the turnkey educational solution
            </Typography>
            <Typography variant="body1" className="estab" color="textPrimary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
            <Box
              className="displayStart gyanImgDate"
              gridGap={10}
              mt={3}
              mb={5}
            >
              <Box>
                <img src="images/BlogIndia.png" alt="blog" />
              </Box>
              <Box>
                <Typography variant="h6">GyanBatua</Typography>
                <Box className="displayStart" gridGap={4}>
                  <Typography variant="body2"> Nov 1, 2023</Typography>
                  <Box className="dot"></Box>
                  <Typography variant="body2">02 min read</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="blBody">
              <Box>
                <img src="images/BL1.png" alt="bl1" />
              </Box>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>
              <Typography variant="h3">
                Never miss an Opportunity, Join our Drops List!
              </Typography>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor
              </Typography>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>

              <Typography variant="body2">
                CContrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor
              </Typography>
              <Box>
                <img src="images/BL2.png" alt="bl2" />
              </Box>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia,
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <SecondBlogSlider />
    </Box>
  );
};

export default BlogSecond;
