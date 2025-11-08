import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Select,
  MenuItem,
  ButtonGroup,
  Box,
  Divider,
} from "@material-ui/core";
import { engeneeringData } from "src/utils";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";

const useStyles = makeStyles((theme) => ({
  catalogueContainer: {
    background: "#F2F2F2",
    padding: "30px",

    "& .title": {
      padding: "20px",

      "& h1": {
        fontSize: "55px",
      },
    },
  },
}));

export default function Catalogue() {
  const classes = useStyles();

  const [masterTrendingCourses, setMasterTrendingCourses] = useState([]);

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
    handleGetCategory();
  }, []);

  return (
    <div className={classes.catalogueContainer}>
      <Box className="title">
        <Typography variant="h1" color="secondary">
          Catalogue
        </Typography>
      </Box>

      <section className="trendingMedicalSection">
        <TrendingComponent type="landingPage" data={masterTrendingCourses} />
      </section>
    </div>
  );
}
