import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { SubcategoryData, dropsData, engeneeringData } from "src/utils";
import { useHistory } from "react-router-dom";
import AddCourses from "../Courses/AddCourses";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    background: "#FFF",

    "& .gradiantBackground": {
      backgroundImage: "url(images/GradientImage.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100%",
      minHeight: "580px",
      boxSizing: "border-box",
      padding: "120px 27px 0px 20px",
      // padding: "120px 41px 0px 31px",
      marginTop: "-100px",
    },

    "& .subBox": {
      // padding: "0 30px",
      padding: "0 10px",

      "& h1": {
        fontSize: "50px",
        color: "rgba(255, 255, 255, 1)",
        fontWeight: 500,
      },
    },
  },

  carouselContainer: {
    padding: "0px 52px",
    marginTop: "30px",
    minHeight: "370px",
    boxSizing: "border-box",
    width: "100%",

    "& .slick-prev": {
      width: "30px",
      height: "99%",
      backgroundColor: "rgba(0, 0, 0, 0.33)",
      borderRadius: "5px",
      left: "-40px",
      zIndex: 99,
      backgroundImage: "url(images/carasoul_prev.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",

      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        backgroundImage: "url(images/carasoul_prev.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },

      "&::before": {
        content: '""',
        width: "30px",
        height: "99%",
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        borderRadius: "5px",
        zIndex: 99,
        backgroundImage: "url(images/carasoul_prev.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    "& .slick-next": {
      width: "30px",
      height: "99%",
      backgroundColor: "rgba(0, 0, 0, 0.33)",
      borderRadius: "5px",
      right: "-40px",
      zIndex: 99,
      backgroundImage: "url(images/carasoul_next.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",

      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        backgroundImage: "url(images/carasoul_next.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },

      "&::before": {
        content: '""',
        width: "30px",
        height: "99%",
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        borderRadius: "5px",
        zIndex: 99,
        backgroundImage: "url(images/carasoul_next.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    "& .imagesDiv": {
      position: "relative",
      cursor: "pointer",
      width: "95% !important",
      minHeight: "370px",

      [theme.breakpoints.down("xs")]: {
        width: "100% !important",
      },

      "& .textData": {
        position: "absolute",
        bottom: "0",
        boxSizing: "border-box",
        padding: "15px",

        "& .categoryName": {
          fontSize: "24px",
          color: "#FFFFFF",
          LineHeight: "28.13px",
          fontWeight: 500,
        },

        "& .price": {
          fontSize: "18px",
          color: "#FFFFFF",
          LineHeight: "21.09px",
          fontWeight: 400,
        },

        "& .sem": {
          fontSize: "16px",
          color: "#FFFFFF",
          LineHeight: "21.09px",
          fontWeight: 400,
        },
      },

      "& img": {
        width: "100%",
        height: "370px",
        // height: "100%",
        // minHeight: "370px",
        objectFit: "cover",
        borderRadius: "10px",
      },
    },
  },
  
}));

const Marketplace = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(0);
  


  const handleButtonClick = (index) => {
    setActiveButton(index);

    const type = index === 0 ? "upcoming" : "past";



    fetchData(type);

  };
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const history = useHistory();

  const [courses, setCourses] = useState([]);

  const handlePush = () => {
    history.push("/view-allcategory");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isLg ? 4 : isMd ? 3 : isSm ? 2 : isXs ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const categories = [
    "All",
    "Engineering",
    "Management",
    "Medical",
    "Legal Services",
    "Science",
    "Hospitality and Tourism",
  ];

  const buttonLabels = ["Active & Upcoming", "Past"];


  const fetchData = async (type) => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.getAllDropCourse,
        params:{
          type: type
        }
      });
      if (res.data.responseCode === 200) {
        setCourses(res?.data?.result?.docs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData("upcoming");


  fetchData("past");


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className={classes.mainBox}>
      <Box className="gradiantBackground">
        <Box className="subBox">
          <Typography variant="h1">GYANBATUA Drops</Typography>
        </Box>
        <Box className={classes.carouselContainer}>
          <Slider {...settings}>
            {courses.map((item, index) => (
              <div
                key={index}
                className="imagesDiv"
                onClick={() => {
                  history.push({
                    pathname: "/course-details",
                    state: {
                      id: item?._id,
                    },
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <div className="textData">
                  <Typography variant="h4" className="categoryName">
                    {item?.courseType === "UNIVERSITY"
                      ? item?.templateData[0]?.course_template_name
                      : item?.courseType === "OTHER"
                        ? item?.courseName
                        : "--"}
                  </Typography>


                </div>

                <img
                  src={
                    item?.thumbnail
                      ? item?.thumbnail
                      : "images/marketplace_default.png"
                  }
                />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>

      <Box style={{ padding: "40px 30px" }}>
        <Box>
          <ButtonGroup className="buttonfilter" style={{ backgroundColor: 'rgba(198, 198, 198, 0.17)', borderRadius:"10px", padding:"5px" }}>
            {buttonLabels.map((label, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={activeButton === index ? "active" : "inactive"}
                style={{
                  backgroundColor: activeButton === index ? 'white' : 'transparent',
                  width: label === "Active & Upcoming" ? '187px' : '124px',
                  fontSize: '18px',
                  color: activeButton === index ? '#262626' : '#707070',
                  height: "44px",
                  padding: activeButton === index ? "5px" : "0px",
                  border: 'none',
                  borderRadius: activeButton === index ? '10px' : '0px',
                  boxShadow: activeButton === index ? '0px 4px 10px rgba(0, 0, 0, 0.15)' : 'none',
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>

        <Box mt={4}>
          <hr style={{ border: "1px solid #E8E8E8" }} />
        </Box>
        <Box mt={6}>
          <AddCourses type="drops" dropsData={courses} />
        </Box>
      </Box>
    </Box>
  );
};

export default Marketplace;
