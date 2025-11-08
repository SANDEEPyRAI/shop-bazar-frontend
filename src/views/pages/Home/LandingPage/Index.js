import React, { useState, useEffect } from "react";
import { makeStyles, Button, Box } from "@material-ui/core";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";
import HeroCarousel from "./HeroCarousel";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    "& .viewAllCategories": {
      marginBottom: "72px",
      [theme.breakpoints.down("xs")]: {
        padding: "0",
        marginBottom: "14px",
      },
      padding: "0 50px",

      "& button": {
        width: "100%",
        border: "none",
        [theme.breakpoints.down("xs")]: {
          borderRadius: "0px",
        },
        borderRadius: "10px",
        background: "#F3F3F3",
        height: "54px",
        color: "#262626",
        fontFamily: "Public Sans",
        fontSize: "16px",
        fontWeight: "500",
      },
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const [masterTrendingCourses, setMasterTrendingCourses] = useState([]);
  const history = useHistory();

  const handleGetCategory = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.listTrendingCourse,
      });
      if (res.data.responseCode === 200) {
        setMasterTrendingCourses(res?.data?.result);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  useEffect(() => {
    handleGetCategory();
  }, []);

  return (
    <div className={classes.landingPage}>
      {/* <section>
        <Hero />
      </section> */}

      <sections>
        <HeroCarousel />
      </sections>

      <section>
        <FeaturedCategories />
      </section>

      <section>
        <FeaturedProducts />
      </section>

      {/* <section className="trendingSection">
        <Trending />
      </section> */}

      {/* <section className="trendingMedicalSection">
        <TrendingComponent type="landingPage" data={masterTrendingCourses} />
      </section> */}

      {/* <Box className="viewAllCategories">
        <Button
          variant="outlined"
          endIcon={<img src="images/categoryIcon.svg" />}
          // onClick={() => history.push("/view-allCategory")}
          onClick={() => {
            history.push("/view-allCategory");
            window.scrollTo(0, 0);
          }}
        >
          View All Categories
        </Button>
      </Box> */}
    </div>
  );
}
