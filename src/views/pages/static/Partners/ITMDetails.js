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
    maxWidth: "1282px",
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
      image: "./images/ResourcesImg/haridevcollege.jpg",
      description: "rahul",
      name: "rahul",
    },
    {
      image: "./images/ResourcesImg/dypatilcollege.jpg",
      description: "rahul",
      name: "rahul",
    },
    {
      image: "./images/ResourcesImg/ritroorkeecollege.jpeg",
      description: "rahul",
      name: "rahul",
    },
    {
      image: "./images/ResourcesImg/maharanacollege.jpg",
      description: "rahul",
      name: "rahul",
    },
  ];
  return (
    <>
    <div style={{ backgroundColor: "#ECECEC" }}>
      <Container>
        <div className={classes.campusimgbox}>
          <div style={{ maxWidth: "1282px", maxHeight: "361px" }}>
            <Box className={classes.bannerbox}>
              <img
                src="images/ResourcesImg/ITM Gorakhpur.jpg"
                alt="iitmadraash"
                className={classes.campusimg}
              />
            </Box>
            <div className={classes.logo}>
              <Box className={classes.logobox}>
                <img
                  src="images/ResourcesImg/ITM.png"
                  alt="iitmadraashlogo"
                  className={classes.logoimg}
                />
              </Box>
            </div>
          </div>

          <div>
            <div className={classes.heading}>
              <Typography className={classes.headingtext}>
                Institute of Technology and Management
              </Typography>
              <Typography style={{ paddingTop: "10px" }}>
                {" "}
                <b>Address: </b>{" "}
                <span style={{ color: "#636880" }}>
                  AL-1, Sector- 7, GIDA, Gorakhpur, 273209
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

        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="images/ResourcesImg/itmcollege.jpeg"
              alt="iitmadraash"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h6" style={{ color: "#262626" }}>
              <b>I&AI CoE at Institute of Technology and Management</b>
            </Typography>
            <Typography className={classes.paragraph}>
              We are delighted to announce the establishment of the GyanBatua
              Innovation & Artificial Intelligence Center of Excellence (I&AI
              CoE) in collaboration with Institute of Technology and Management
              . The memorandum of understanding (MoU) was signed on [Date of MoU
              Signing] by [Name and Designation of Institute Authority] and
              [Name and Designation of GyanBatua Representative], solidifying
              our commitment to fostering innovation and technology adoption in
              education. The CoE was inaugurated on [Date of Inauguration] by
              [Name of Key Management Personnel of the Institute], marking a
              significant milestone in our partnership journey.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14252.175171091214!2d83.2550227847342!3d26.742978568605988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6acb3de3508d%3A0x4595d733fd766bf9!2sITM%20college%20GIDA!5e0!3m2!1sen!2sin!4v1707913812385!5m2!1sen!2sin"
                  width="100%"
                  frameborder="0"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid container spacing={3} style={{ marginTop: "5%" }}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <img src="images/team1.png" alt="pic1" className={classes.footerimg} />
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <img src="images/team2.png" alt="pic1" className={classes.footerimg} />
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <img src="images/team3.png" alt="pic1" className={classes.footerimg} />
          </Grid>
        </Grid> */}
      </Container>
    </div>
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
    </>
  );
}

export default App;
