import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddCourses from "./AddCourses";
import FilterComponent from "src/component/FilterComponent";
import { SubcategoryDataMain } from "src/utils";
import { useLocation } from "react-router-dom";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  SubCategoryContainer: {
    "& .buttonfilter": {
      // borderBottom: "1px solid #E9E9E9",
      " & .MuiButton-root": {
        fontSize: "18px",
      },
      "& .MuiButton-root.Mui-selected": {
        backgroundColor: "white",
        borderRadius: "10px",
        color: "#262626",
      },
      "& .MuiButtonGroup-root": {
        background: "rgba(198, 198, 198, 0.17)",
        padding: "3px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "341px",
        "& .MuiButton-outlined": {
          border: "none",
          width: "100%",
          maxWidth: "113px",
        },
      },
    },
    "& .NoDataClass": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    "& .helperTxt": {
      width: "100%",
      maxWidth: "1073px",
      color: "#636880",
      fontWeight: 400,
      margin: "27px 0 43px 0",
    },
    "& .available": {
      "& h3": {
        fontWeight: 700,
        fontSize: "30px",
        color: "#262626",
      },
    },

    "& .categoryback": {
      width: "100%",
      margin: "0 auto",
      background: "url(images/SubCategory.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
      minHeight: "441px",

      "& .categoryflex": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "441px",

        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        },

        "& .categorytextdata": {
          width: "100%",
          maxWidth: "612px",
          padding: "30px",

          [theme.breakpoints.down("sm")]: {
            padding: "15px",
            boxSizing: "border-box",
          },

          "& h3": {
            fontSize: "30px",
            color: "#fff",
            fontWeight: 700,
            marginTop: "10px",
          },

          "& p": {
            fontSize: "16px",
            color: "#fff",
            marginTop: "10px",
          },
        },

        "& .countContainer": {
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",

          [theme.breakpoints.down("sm")]: {
            padding: "15px",
            boxSizing: "border-box",
            flexWrap: "wrap",
          },

          "& .countAndType": {
            textAlign: "center",

            "& h3": {
              fontSize: "30px",
              color: "#fff",
            },

            "& p": {
              fontSize: "16px",
              color: "#fff",
            },
          },
        },
      },
    },
    "& .belowSubCategoryBanner": {
      width: "91%",
      maxWidth: "1598px",
      margin: "0 auto",
      padding: "0 25px 25px",
    },
  },
}));

const buttonLabels = ["Items", "Offers", "Drops"];

const SubCategory = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(0);
  const [SubcategoryDataMain, setSubcategoryDataMain] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  console.log(location);
  // console.log(SubcategoryDataMain);
  const id = location?.state?.id;
  const bannerImage = location?.state?.bannerImage;
  const Description = location?.state?.Description;
  const short = location?.state?.short;
  const name = location?.state?.name;
  const image = location?.state?.image;
  const history = useHistory();

  const getAllCoursesHandler = async (type) => {
    try {
      setIsLoading(true);
      const params = {
        filterBy: type
      };

      if (selectedPriceFilter) {
        params.sortByPrice = selectedPriceFilter;
      }

      if (id) {
        params.subCategory_id = id;
      }
      const res = await axios({
        url: apiConfig.getAllCoursesBySubCategory,
        method: "GET",
        params: params,
      });
      if (res?.data?.responseCode === 200) {
        setSubcategoryDataMain(res?.data?.result);
        setIsLoading(false);
      } else if (res?.data?.responseCode === 204) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCoursesHandler();
  }, [selectedPriceFilter]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  const onSubCategorySerch = (filterValue) => {
    console.log(filterValue,"filterValuefilterValue")
    setSelectedPriceFilter(filterValue);
  };

  return (
    <Box className={classes.SubCategoryContainer}>
      <Box
        className="categoryback"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <Box className="categoryflex">
          <Box className="categorytextdata">
            <img src="images/category_logo.svg" />

            <Typography variant="h3">{name}</Typography>

            <Typography variant="body2">{short}</Typography>
          </Box>

          <Box className="countContainer">
            <div className="countAndType">
              <Typography variant="h3">2,032</Typography>
              <Typography variant="body2">Sessions</Typography>
            </div>

            <div className="countAndType">
              <Typography variant="h3">52</Typography>
              <Typography variant="body2">Owner</Typography>
            </div>

            <div className="countAndType">
              <Typography variant="h3">410</Typography>
              <Typography variant="body2">Sessions</Typography>
            </div>

            <div className="countAndType">
              <Typography variant="h3">7074</Typography>
              <Typography variant="body2">Sessions</Typography>
            </div>
          </Box>
        </Box>
      </Box>
      <Box className="belowSubCategoryBanner">
        <Typography variant="h5" className="helperTxt">
          {Description}
        </Typography>

        <Box className="buttonfilter" pb={3} mb={3} style={{ borderRadius: "10px", padding: "5px" }}>
          <ButtonGroup>
            {buttonLabels.map((label, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleButtonClick(index);
                  getAllCoursesHandler(label === "Offers" ? "offers" : label === "Drops"? "drops" : "--");
                }
                }
                className={activeButton === index ? "Mui-selected" : ""}
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

        <Divider />

        <FilterComponent
          type="filterSubCategory"
          onSubCategorySerch={onSubCategorySerch}
        />

        <Box className="available" mb={5} mt={5}>
          <Typography variant="h3">Available Sessions</Typography>
        </Box>
        {!isLoading && SubcategoryDataMain.length === 0 ? (
          <Box className="NoDataClass" mt={4}>
            <img src="images/no_sessions.png" alt="" />
            <Typography
              variant="h4"
              color="secondary"
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              No Sessions Available
            </Typography>

            <Typography
              variant="body2"
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "16px",
                color: "#636880",
              }}
            >
              No sessions available currently this time.
            </Typography>

            <Button
              variant="containedPrimary"
              onClick={() => history.goBack()}
              style={{
                height: "44px",
                width: "100%",
                maxWidth: "153px",
                marginTop: "30px",
              }}
            >
              Go Back
            </Button>
          </Box>
        ) : (
          <>

            <AddCourses
              SubcategoryDataMain={SubcategoryDataMain}
              type="subCategory"
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default SubCategory;
