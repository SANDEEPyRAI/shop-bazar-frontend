import React, { useRef } from "react";
import { Box, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  testimonialAll: {
    width: "97%",
    maxWidth: "1547px",
    "& .quote": {
      color: "rgba(38, 38, 38, 1)",
      lineHeight: "35.16px",
      fontSize: "30px",
      fontWeight: 500,
      width:"100%",
      maxWidth:"423px",
    },
    "& .singleCarousel": {
      width: "95%",
      maxWidth: "494px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "600px",
        width: "100%",
      },
      "& .MuiTypography-body2":{
        color:"rgba(38, 38, 38, 0.75)",
        fontSize:"14px",
        fontWeight:300,
      },
      "& .MuiTypography-body1": {
        color: "rgba(99, 104, 128, 1)",
        fontSize: "14px",
        width:"100%",
        maxWidth:"454px",
        margin: "10px 0",
      },
      "& h6": {
        margin: "10px 0 20px 0",
        color: "rgba(38, 38, 38, 0.6)",
        fontWeight: 500,
      },

      "& img": {
        width: "100%",
        height: "382px",
      },
    },
    "& .dot": {
      borderRadius: "50%",
      width: "3px",
      height: "3px",
      background: theme.palette.text.primary,
    },
    "& .slick-next, & .slick-next:hover, & .slick-next:focus": {
      right: "0px",
      [theme.breakpoints.down("xs")]: {
        right: "-13px",
      },
      width: "44px",
      top: "42%",
      backgroundImage: "url('/images/rightPrev.png')",
      backgroundRepeat: "no-repeat",
      height: "44px",
      borderRadius: "50%",
    },
    "& .slick-prev, & .slick-prev:hover, & .slick-prev:focus": {
      zIndex: "20",
      left: "-19px",
      top: "42%",
      backgroundImage: "url('/images/leftPrev.png')",
      backgroundRepeat: "no-repeat",
      height: "44px",
      width: "44px",
      borderRadius: "50%",
      content: " ",
    },
    "& .slick-next:before, & .slick-prev:before": {
      color: "transparent",
    },
  },
}));

const SecondBlogSlider = () => {
  const classes = useStyles();
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))
  const isXs = useMediaQuery(theme.breakpoints.down("xs"))

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isXs ? 1 : isSm ? 2 : 3,
    slidesToScroll: 1,
  };
  const testimonialsData = [
    {
      
      image: "images/BS1.png",
      quote:
        "Gyan Batua: Bridging the Global Skills Gap with Blockchain and AI Magic",
      author:
        "Discover how Gyan Batua is revolutionizing the workforce by bridging the global skills gap with cutting-edge Blockchain and AI technologies.",
      firstDate: "Nov 1, 2023",
      firstTime: "02 min read",
    },
    {
      title: "Google.com",
      image: "images/BS2.png",
      quote: "Digital Skills Revolution: Navigating the Future with Gyan Batua",
      author:
        "In this blog, we provide tips and insights on how users can effectively record their educational accomplishments and skills on Gyan Batua to construct a compelling Live Resume.",
      firstDate: "Nov 1, 2023",
      firstTime: "02 min read",
    },
    {
      title: "Google.com",
      image: "images/BS3.png",
      quote: "Digital Skills Revolution: Navigating the Future with Gyan Batua",
      author:
        "Find out how Gyan Batua's AI Job Matchmaking Engines recommends the best job opportunities for you and how it connects you with the right people based on your skills, interests and career goals. ",
      firstDate: "Nov 1, 2023",
      firstTime: "02 min read",
    },
    {
      title: "Google.com",
      image: "images/BS1.png",
      quote: "Digital Skills Revolution: Navigating the Future with Gyan Batua",
      author:
        "Find out how Gyan Batua's AI Job Matchmaking Engines recommends the best job opportunities for you and how it connects you with the right people based on your skills, interests and career goals.",
      firstDate: "Nov 1, 2023",
      firstTime: "02 min read",
    },
  ];

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={7}>
      <Slider {...settings} className={classes.testimonialAll}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="allDiv">
            <Box className="singleCarousel">
              <Box>
                <img src={testimonial.image} alt="" />
              </Box>
              <Typography variant="h6">Google.com</Typography>
              <Typography variant="h3" className="quote">
               {testimonial.quote}
              </Typography>
              <Typography variant="body1" >
               {testimonial.author}
              </Typography>
              <Box className="displayStart belowdateTime" gridGap={4}>
                <Typography variant="body2"> {testimonial.firstDate}</Typography>
                <Box className="dot"></Box>
                <Typography variant="body2">{testimonial.firstTime}</Typography>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SecondBlogSlider;
