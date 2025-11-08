import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  makeStyles,
  Button,
  Hidden,
} from "@material-ui/core";
import Page from "src/component/Page";
import LifeAtGyan from "./LifeAtGyan";
import RecruitmentProcess from "./RecruitmentProcess";
import { useLocation, useHistory } from "react-router-dom";

const FeaturedPlayListSharp = [
  {
    img: "images/enviroment.png",
    text1: " Chill Work Environment",
    text2: "  At BuyCoin, fun and work goes hand in hand.",
  },
  {
    img: "images/cup.png",
    text1: "Coffee always hot",
    text2: "A Warm Environment,bean bag and a hot cup of coffee.",
  },
  {
    img: "images/clock.png",
    text1: "Flexible Timings",
    text2:
      " We offer a supportive culture where work-life balance is nurtured that brings out best in an employee.",
  },
  {
    img: "images/bulb.png",
    text1: "Grow your passion",
    text2:
      " At BuyUcoin, you get an opportunity to explore and pursue your passion inside and beyond our walls",
  },
  {
    img: "images/location.png",
    text1: "Easy Location",
    text2: "Easy to reach with located into the Citys Heart.",
  },
  {
    img: "images/award.png",
    text1: "Performance Award",
    text2: "Talent is the multiplier.Bring your best, create your future.",
  },
];

const useStyles = makeStyles((theme) => ({
  mainCareerBox: {
    backgroundImage: "url('images/career.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 0px",
    overflow: "hidden",
    position: "relative",
    "& .textBox": {
      textAlign: "center",
      color: "#fff",
      zIndex: "1",

      "& h1": {
        fontSize: "50px",

        maxWidth: "531px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "35px",
          maxWidth: "100%",
          lineHeight: "40px",
        },
      },
    },
  },
  TeamBox: {
    padding: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
    },
    "& .teamTextBox": {
      "& h1": {
        lineHeight: "35px",
        width: "100%",
        fontSize: "35px",
        fontWeight: 700,
        fontFamily: "Roboto Condensed",
        // maxWidth: "399px",
        marginBottom: "16px",
        color: theme.palette.secondary.main,
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
        "& span": {
          color: theme.palette.primary.main,
        },
      },
      "& p": {
        width: "100%",
        // maxWidth: "329px",
        color: theme.palette.text.primary,
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
        // [theme.breakpoints.down("md")]: {

        // },
        "@media(max-width:959px)": {
          textAlign: "start",
        },
      },
    },

    "& .byCoinBox": {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "603px",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        // justifyContent: "center",
        textAlign:"start",
        flexDirection: "column",
        maxWidth: "100%",
      },
      "& p": {
        margin: "0px 0px 0px",
        [theme.breakpoints.only("sm")]: {
          margin: "20px 0px 10px",
          fontSize: "20px",
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0px 0px 0px",
          fontSize: "16px",
        },
      },
    },
  },

  gridFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    "& p": {
      width: "100%",
      maxWidth: "171px",
      margin: "0 auto",
    },
    "& .featureCardBox": {
      backgroundColor: theme.palette.background.secondary,
      height: "100%",
      minHeight: "258px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "8px",

      "& h4": {
        color: "#575757",
        padding: "10px 0px",
        width: "100%",
        maxWidth: "178px",
        margin: "0 auto",
      },
    },
  },
  gridStyle: {
    position: "relative",
    top: "12px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "0px",
    },
  },
  gridFlex: {
    display: "flex",
    // justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
    },
  },
  joinateam: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "90%",
    margin: "auto 50px",
    [theme.breakpoints.only("md")]: {
      margin: "auto 10px",
      justifyContent: "center",
      display: "flex",
      maxWidth: "90%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto 0px",
      justifyContent: "center",
      display: "flex",
      maxWidth: "100%",
    },
    // [theme.breakpoints.only("sm")]: {
    //   margin: "auto 0px",
    //   justifyContent: "center",
    //   display: "flex",
    //   maxWidth: "100%",
    // },
  },
  heading1: {
    textAlign: "center",
    color: "#262626 !important",
    fontFamily: "Roboto Condensed",
    fontSize: "35px",
    fontWeight: 500,
    lineHeight: " 50px",
    letterSpacing: "0em",
    marginBottom: "10px",
    [theme.breakpoints.only("md")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.only("sm")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginBottom: "10px",
      lineHeight: " 35px",
    },
  },
  heading2: {
    fontSize: "20px",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    lineHeight: "30px",
    color: "#262626",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: " 25px",
    },
  },
  heading3: {
    fontSize: "20px",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    lineHeight: "30px",
    color: "#262626",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: " 25px",
    },
  },
  mainBatuaBox: {
    padding: "60px 0px",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 0px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "20px 0px",
    },
  },
  careertext: {
    fontSize: "30px",
    textAlign: "center",
    color: "#262626 !important",
    fontFamily: "Roboto Condensed",
    fontSize: "35px",
    fontWeight: 500,
    lineHeight: " 50px",
    letterSpacing: "0em",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      // marginLeft: "-20px",
      textAlign:"start"
    },
  },
  careeroverview: {
    fontSize: "20px",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    lineHeight: "30px",
    color: "#636880",
  },
  learnmorebtn: {
    [theme.breakpoints.only("sm")]: {
      marginLeft: "-20px",
    },
  },
  celebratingwrapper: {
    width: "100%",
    height: "600px",
    [theme.breakpoints.only("md")]: {
      height: "465px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      height: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      height: "100%",
    },
    // objectFit:"cover",
    " & .celebratingimg": {
      height: "100%",
      objectFit: "fill",
      [theme.breakpoints.only("xs")]: {
        objectFit: "cover",
      },
      [theme.breakpoints.only("lg")]: {
        objectFit: "cover",
      },
    },
  },
  getbtn: {
    marginTop: "28px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
      // display: "flex",
      // justifyContent: "center",
    },
  },
}));

const Career = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Box className={classes.mainCareerBox}>
        <Box className="textBox">
          <Box>
            <Typography variant="h1">Join Our Team</Typography>
            <Typography variant="h3">
              Send your CV at hrd@gyanbatua.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.TeamBox}>
        <Container maxWidth={false}>
          <Box className="teamTextBox">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className={classes.celebratingwrapper}>
                  <img
                    src="images/teamimg.jpg"
                    alt="celebration.jpg"
                    width="100%"
                    className="celebratingimg"
                  />
                </Box>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={classes.gridFlex}
              >
                <Box className={classes.joinateam}>
                  <Typography className={classes.heading1}>
                    Join a Team that Thrives on Mutual Support and Celebration
                    of our Achievements.
                  </Typography>
                  <Typography className={classes.heading2}>
                    At GyanBatua, we offer exhilarating opportunities for you to
                    develop your career in an environment where innovation leads
                    to significant impact. We are dedicated to redefining how
                    people learn and connect, aiming to revolutionize the
                    education and technology sectors. We invite passionate
                    individuals to contribute to our mission, shaping the future
                    together. Embrace the chance to make a real difference with
                    us.
                  </Typography>
                  <Typography className={classes.heading3}>
                    This version aims to clarify the initial invitation and
                    better contextualize the opportunities at GyanBatua, making
                    the content both sensible and inspiring.
                  </Typography>
                  <Box className={classes.getbtn}>
                    <Button
                      variant="containedPrimary"
                      onClick={() => history.push("/contact-us")}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box className={classes.mainBatuaBox}>
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid
                item
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className={classes.gridFlex}
              >
                <Hidden xsDown>
                  {/* <Container maxWidth="md"> */}
                    <CommonContent />
                  {/* </Container> */}
                </Hidden>

                <Hidden smUp>
                  <CommonContent />
                </Hidden>
              </Grid>
              <Grid
                item
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className={classes.gridFlexEnd}
              >
                <Grid container spacing={2}>
                  {FeaturedPlayListSharp?.map((data, i) => (
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      className={classes.gridStyle}
                    >
                      <Box className="featureCardBox">
                        <Box>
                          <img src={data.img} alt="" />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "500" }}
                          >
                            {data.text1}
                          </Typography>
                          <Typography variant="body1" color="textPrimary">
                            {data.text2}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <LifeAtGyan />
        </Box>
      </Box>
    </>
  );
};
export default Career;
const CommonContent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="byCoinBox">
        <Typography variant="h1" className={classes.careertext}>
          Careers Overview
        </Typography>
        <Typography
          variant="body2"
          className={classes.careeroverview}
          color="textPrimary"
        >
          At GyanBatua, our dedication lies in assembling a multifaceted and
          skilled team unified by a common vision and shared values. Our doors
          are open to everyone, from industry veterans to recent graduates,
          ensuring there's a niche for every talent. Dive into our extensive
          array of career options and discover the ideal role where you can
          contribute significantly while simultaneously enhancing your expertise
          and professional trajectory.
        </Typography>

        {/* <Box mt={4}>
          <Button variant="containedPrimary"className={classes.learnmorebtn} >Learn More</Button>
        </Box> */}
      </Box>
    </>
  );
};
