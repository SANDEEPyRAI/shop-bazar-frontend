import React, { useState, useRef } from "react";
import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { CgArrowTopRight } from "react-icons/cg";
import { truncate } from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronRightCircle } from "react-icons/lu";
import { LuChevronLeftCircle } from "react-icons/lu";

const useStyles = makeStyles((theme) => ({
  muiMainContainer: {
    marginTop: "50px",
    "& .mainBox": {
      padding: "10px 20px",
      borderRadius: "10px",
      background: "rgba(240, 240, 240, 1)",
      "@media(max-width:400px)": {
        flexDirection: "column",
        gap: "10px",
        alignItems: "start",
      },
      "& .filterBtn": {
        background: "rgba(255, 70, 38, 1)",
        borderRadius: "10px",
        border: "none",
      },
      "& h5": {
        fontSize: "22px",
        // fontFamily: "Sora",
        fontWeight: "400",
        color: "rgba(38, 38, 38, 1)",
      },
      "& .mainContentBox": {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        "& h6": {
          fontWeight: "600",
          color: "rgba(255, 20, 5, 1)",
        },
      },
    
    },
  
  },
  lineContainer: {
    position: "relative",
    width: "100%",
    height: "100px",
  },
  line: {
    position: "absolute",
    width: "100%",
    height: "5px",
    backgroundColor: "#00000026",
    top: "50%",
    transform: "translateY(-50%)",
  },
  point: {
    position: "absolute",
    top: "-6px",
    width: "14px",
    height: "14px",
    backgroundColor: "#262626",
    color: "#fff",
    textAlign: "center",
    lineHeight: "40px",
    borderRadius: "50%",
    cursor: "pointer",

    left: (props) => `${props.left}%`,
  },
  himage: {
    position: "absolute",
    top: "-348px",
    left: "-188px",
    height: "320px",
    width: "367px",
    backgroundImage: 'url("/images/hoverbox.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingLeft: "30px",
    "& h2": {
      textAlign: "left",
      marginTop: "40px",
    },
    "& p": {
      textAlign: "left",
      width: "284px",
      marginTop: "20px",
    },
  },
  image: {
    position: "absolute",
    top: "-21px",
    left: "-8px",
  },
  year: {
    fontFamily: "Roboto Condensed",
    fontSize: "25px",
    fontWeight: 700,
    color: "#262626",
    position: "absolute",
    top: "50px",
    right: "-22px",
  },
  tit: {
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    fontSize: "55px",
  },
  text: {
    fontWeight: 500,
  },
  text1: {
    width: "400px",
    marginTop: "20px",
  },
  iconNmae: {
    position: "absolute",
    right: 0,
    top: "212px",
    right: "377px",
  },
  "& .slideMain": {
    "& .slick-dots": {
      display: "hidden !important",
    
  },
}
}));

const Point = ({ id, content, left, year, qtr, text }) => {
  const classes = useStyles({ left });
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const yrs = ["2021,2022,2023,2024,2025,2026,2027"];

  return (
    <div
      className={classes.point}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <img
          src="/images/pishvi.png"
          alt="Hovered Point"
          className={classes.image}
        />
      )}
      {/* {showTooltip && (
        <img
          src="/images/hoverbox.png"
          alt="Hovered Point"
          className={classes.himage}
        />
      )} */}

      {showTooltip && (
        <Box className={classes.himage}>
          <Typography variant="h2">{qtr}</Typography>
          <Typography variant="body2">{text}</Typography>
        </Box>
      )}

      {showTooltip && <Typography className={classes.year}>{year}</Typography>}
    </div>
  );
};

const DiscreteSlider = () => {
  const classes = useStyles();
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      id: 1,
      text: "See the Roadmap of GyanBatua",
      text1:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
    },
    {
      id: 2,
      text: "See the Roadmap of GyanBatua",
      text1:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
    },
    {
      id: 3,
      text: "See the Roadmap of GyanBatua",
      text1:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
    },
    // Add more slides as needed
  ];

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const pointsData = [
    {
      id: 1,
      label: "Point 1",
      content: "This is point 1.",
      year: "2021",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },
    {
      id: 2,
      label: "Point 2",
      content: "This is point 2.",
      year: "2022",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },
    {
      id: 3,
      label: "Point 3",
      content: "This is point 3.",
      year: "2023",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },
    {
      id: 4,
      label: "Point 3",
      content: "This is point 3.",
      year: "2024",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },

    {
      id: 5,
      label: "Point 3",
      content: "This is point 3.",
      year: "2025",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },

    {
      id: 6,
      label: "Point 3",
      content: "This is point 3.",
      year: "2026",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },

    {
      id: 7,
      label: "Point 3",
      content: "This is point 3.",
      year: "2027",
      qtr: "Quarter 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer",
    },
  ];
  const spreadPercentage = 70;
  const startPoint = (100 - spreadPercentage) / 2;

  const calculatedPointsData = pointsData.map((point, index, year) => {
    const increment = spreadPercentage / (pointsData.length - 1);
    return {
      ...point,
      left: startPoint + increment * index,
    };
  });
  return (
    <Box className={classes.muiMainContainer} pt={4}>
      <Box>
        <Container>
          <Typography className={classes.tit}>Our Roadmap</Typography>
          <Box mt={"70px"} className="slideMain">
            <Box className={classes.sliderBox}>
              <Slider ref={sliderRef} {...settings}>
                {slidesData.map((slide) => (
                  <div key={slide.id}>
                    <Typography variant="h2" className={classes.text}>
                      {slide.text}
                    </Typography>
                    <Typography variant="body2" className={classes.text1}>
                      {slide.text1}
                    </Typography>
                  </div>
                ))}
              </Slider>
            </Box>

            <Box className={classes.iconNmae}>
              <LuChevronLeftCircle
                style={{
                  fontSize: "xx-large",
                  marginRight: "10px",
                  color: "#0856CC",
                  cursor: "pointer",
                }}
                onClick={goToPrevious}
              />

              <LuChevronRightCircle
                style={{
                  fontSize: "xx-large",
                  color: "#262626",
                  cursor: "pointer",
                }}
                onClick={goToNext}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mt={"350px"}>
        <div className={classes.lineContainer}>
          <div className={classes.line}>
            {calculatedPointsData.map((point) => (
              <Point key={point.id} {...point} />
            ))}
          </div>
        </div>
      </Box>
      <Box mt={6}>
        <Container>
          <Box className="mainBox displaySpacebetween" mb={3}>
            <Typography variant="h5">Website for Gyanbatua</Typography>
            <Button variant="contained" className="filterBtn">
              Coming Soon
            </Button>
          </Box>
          <Box className="mainBox displaySpacebetween" mb={3}>
            <Typography variant="h5">White Paper launch</Typography>
            <Box className="mainContentBox">
              <Typography variant="h6">NEW</Typography>
              <CgArrowTopRight style={{ height: "25px", width: "25px" }} />
            </Box>
          </Box>
          <Box className="mainBox displaySpacebetween" mb={3}>
            <Typography variant="h5">Lorem ipsum</Typography>
          </Box>
          <Box className="mainBox displaySpacebetween" mb={3}>
            <Typography variant="h5">Courses launch</Typography>
          </Box>
          <Box className="mainBox displaySpacebetween" mb={3}>
            <Typography variant="h5">Website for Gyanbatua</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default DiscreteSlider;
