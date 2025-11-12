import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "../../../../scss/Testimonials.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    maxWidth: "2600px",
    height: "361px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      height: "250px !important",
    },
    [theme.breakpoints.up("xs")]: {
      height: "190px !important",
    },
    [theme.breakpoints.only("sm")]: {
      height: "250px !important",
    },
    [theme.breakpoints.up("sm")]: {
      height: "300px !important",
    },
    [theme.breakpoints.only("md")]: {
      height: "361px !important",
    },
    [theme.breakpoints.up("lg")]: {
      height: "361px !important",
    },
  },
  campusimg: {
    border: "1px solid #ECECEC",
    borderRadius: "20px",
    height: "100%",
    width: "100%",
    // objectFit: "cover",
  },
  logo: {
    position: "absolute",
    marginTop: "-70px",
    marginLeft: "4%",
    spacing: "4",
    maxWidth: "138px",
    maxHeight: "129px",
    [theme.breakpoints.down("xs")]: {
      width: "90px !important",
      height: "90px !important",
      marginLeft: "6% !important",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100px",
      height: "100px",
      marginLeft: "6%",
      marginTop: "-50px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "110px",
      height: "110px",
      marginLeft: "6%",
      marginTop: "-70px",
    },
    [theme.breakpoints.only("md")]: {
      width: "120px",
      height: "120px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "138px",
      height: "129px",
    },
  },
  logobox: {
    height: "129px",
    width: "138px",
    paddingLeft: " 0%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "68px !important",
      height: "70px !important",
    },
    [theme.breakpoints.up("xs")]: {
      width: "88px",
      height: "90px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "88px",
      height: "90px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100px",
      height: "102px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "138px",
      height: "129px",
    },
  },
  logoimg: {
    height: "91px",
    width: "92px",
    // backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      width: "50px !important",
      height: "52px  !important",
    },
    [theme.breakpoints.up("xs")]: {
      width: "60px",
      height: "62px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "62px",
    },
    [theme.breakpoints.up("md")]: {
      width: "72px",
      height: "74px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90px",
      height: "91px",
    },
  },
  heading: {
    marginLeft: "7%",
    marginTop: "9%",
    marginBottom: "2%",
    [theme.breakpoints.down("xs")]: { marginTop: "16% !important" },
    [theme.breakpoints.up("xs")]: { marginTop: "16% !important" },
    [theme.breakpoints.down("sm")]: { marginTop: "10% !important" },
    [theme.breakpoints.up("sm")]: { marginTop: "6% !important" },
    [theme.breakpoints.up("md")]: {
      marginTop: "6% !important",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "6% !important",
    },
  },
  headingtext: {
    color: "#0856CC",
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: { fontSize: "22px" },
    [theme.breakpoints.up("sm")]: { fontSize: "26px" },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px",
    },
  },
  paragraph: {
    color: "#636880",
    fontSize: "10px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      lineHeight: "21px",
    },
  },
  listStyle: {
    color: "#636880",
    fontSize: "10px",
  },
  footerimg: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
  },
  campusimgbox: {
    border: "1px solid white",
    backgroundColor: "white",
    borderRadius: "20px",
    position: "relative",
  },
  mainbanner: {
    background:
      "linear-gradient(180deg, rgba(125,125, 0, 0.065) 0%, #000000 126%) !important",
    position: "absolute",
    position: "relative",
    borderRadius: "20px",
  },
  collegebanner: {
    maxWidth: "593px",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  heading1: {
   
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
}));
function App() {
  const slider = React.useRef(null);
  const classes = useStyles();


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "14px",
    slidesToShow: 3,
    speed: 1000,

    autoplay: true,
    autoplaySpeed: 1500,
    backgroundColor: "rgba(8, 86, 204, 0.03)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  };

  const styles = {
    image: {
      height: "100%",
      width: "100%",
      borderRadius:"5px",
    },
    paragraph: {
      textAlign: "center",
      objectFit: "cover",
    },
    footer: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      margin: "1rem 2rem",
    },
    testimonialCard: {},
  };
  const testimonials = [
    {
      image: "./images/collegegallery/GHR1.jpeg",
    },
    {
      image: "./images/collegegallery/GHR1.jpeg",
    },
    {
      image: "./images/collegegallery/GHR1.jpeg",
    },
    {
      image: "./images/collegegallery/GHR1.jpeg",
    },
  ];
  return (
    <>
    <div style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}>
      <Container   style={{
            maxWidth: "2600px",
            display: "flex",
            justifyContent: "center",
          }}>
            <Box sx={{ width: "90%", margin: "auto 0" }}>
        <div className={classes.campusimgbox}>
          <div style={{ maxWidth: "2600px", maxHeight: "361px" }} className={classes.mainbanner}>
            <Box className={classes.bannerbox}>
              <img
                src="images/ResourcesImg/G H Raisoni College of Engineering & Management, Pune.jpg"
                alt="iitmadraash"
                className={classes.campusimg}
              />
            </Box>
            <div className={classes.logo}>
              <Box className={classes.logobox}>
                <img
                  src="images/ResourcesImg/Raisoni.png"
                  alt="iitmadraashlogo"
                  className={classes.logoimg}
                />
              </Box>
            </div>
          </div>

          <div>
            <div className={classes.heading}>
              <Typography className={classes.headingtext}>
                G H Raisoni College of Engineering & Management, Pune
              </Typography>
              <Typography style={{ paddingTop: "10px" }}>
                {" "}
                <b>Address: </b>{" "}
                <span style={{ color: "#636880" }}>
                  Gat 1200, Domkhel Rd, Wageshwar Nagar, Wagholi, Pune, 412207
                </span>
              </Typography>
              <Typography style={{ paddingTop: "5px" }}>
                {" "}
                <span
                  style={{
                    backgroundColor: "#F7F7F7",
                    color: "#636880",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  Public/Government Institute{" "}
                </span>
                <span
                  style={{
                    backgroundColor: "#F7F7F7",
                    color: "#636880",
                    fontSize: "14px",
                    marginLeft: "2%",
                  }}
                >
                  {" "}
                  Estd. 1935
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
          <Box className={classes.collegebanner} >
            <img
              src="./images/ResourcesImg/GHR1.jpeg"
              alt="iitmadraash"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Typography variant="h6" style={{ color: "#262626" }} className={classes.heading1}>
              <b>
                I&AI CoE at G H Raisoni College of Engineering & Management,
                Pune
              </b>
            </Typography>
            <Typography className={classes.paragraph}>
              We are delighted to announce the establishment of the GyanBatua
              Innovation & Artificial Intelligence Center of Excellence (I&AI
              CoE) in collaboration with G H Raisoni College of Engineering &
              Management, Pune. The memorandum of understanding (MoU) was signed
              on [Date of MoU Signing] by [Name and Designation of Institute
              Authority] and [Name and Designation of GyanBatua Representative],
              solidifying our commitment to fostering innovation and technology
              adoption in education. The CoE was inaugurated on [Date of
              Inauguration] by [Name of Key Management Personnel of the
              Institute], marking a significant milestone in our partnership
              journey.
            </Typography>
            <Typography className={classes.paragraph}>
              Since its inception, the CoE has been instrumental in organizing
              various activities, under the guidance of [Name of Key Management
              Personnel of the Institute], aimed at empowering students and
              faculty with cutting-edge skills in artificial intelligence,
              machine learning, blockchain, and other emerging technologies.
              Through these initiatives, we aim to create a dynamic learning
              ecosystem that prepares students for the challenges and
              opportunities of the future
            </Typography>

            <Grid item xs={12} sm={12} md={12}>
              <div
                style={{ height: "400px", maxWidth: "100%", marginTop: "2rem" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.9207329576143!2d74.9705025749323!3d31.690734838706533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bd883c444a785%3A0x83b0b0a88a6aa5e2!2sGlobal%20Institutes%20Amritsar%20%7C%20Engineering%2C%20Management%2C%20Pharmacy%20College!5e0!3m2!1sen!2sin!4v1707837647123!5m2!1sen!2sin"
                  width="100%"
                  frameborder="0"
                  style={{ height: "100%", width: "100%", objectFit: "fill" }}
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Grid>

     
    
    {/* <Box
        className="slider-container"
        sx={{ position: "relative", bgcolor: "#ECECEC" }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "55%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <IconButton onClick={() => slider.current.slickPrev()}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{
              color: "#0856CC",
              marginTop: "4rem",
              marginBottom: "2rem",
            }}
          >
            Gallery
          </Typography>
        </Box>
        <Slider ref={slider} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              className="testimonial-card"
              style={{
                background:
                  index % 2 === 0 ? "rgba(82, 49, 104, 0.10)" : "#e9e9e9",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              <Box style={styles.paragraph}>
                <img src={testimonial.image} alt="pic" style={styles.image} />{" "}
              </Box>
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "55%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <IconButton onClick={() => slider.current.slickNext()}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box> */}
      </Box>
      </Container>
    </div>
    </>
  );
}

export default App;
