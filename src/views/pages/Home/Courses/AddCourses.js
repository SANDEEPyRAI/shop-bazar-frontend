import PaginationComponent from "src/component/PaginationComponent";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  AddCoursesContainer: {
    "& .dangerous": {
      "& p": {
        fontSize: "20px",
        marginTop: "0 !important",
        marginBottom: "0 !important",
      },
    },
    "& .subscriptionMainGrid": {
      display: "flex",
      "@media(max-width:1301px)": {
        overflow: "auto",
        flexWrap: "nowrap"
      },

    },
    "& .subcriptionGrid": {
      border: "1px solid #DCDCDC",
      borderRadius: "10px",
      padding: "7px 7px 10px 7px",
    },
    "& .GridItemsingleParent": {
      width: "100%",
      minWidth: "300px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        minWidth: "220px",
        marginBottom: "16px",
      },
      "& .singleBox": {
        border: "1px solid #DCDCDC",
        padding: "6px",
        borderRadius: "10px",
        height: "100%",
        boxSizing: "border-box",
        cursor: "pointer",

        "& .courseImageContainer": {
          width: "100%",
          minHeight: "219px",
          overflow: "hidden",
        },

        "& .cartDataMain": {
          padding: "10px 10px 0px",
          marginBottom: "20px",
          "& .cartitem": {
            fontWeight: 700,
            fontSize: "20.28px",
            lineHeight: "29.63px",
            color: "rgba(38, 38, 38, 1)",
          },
        },
        "& .btnContainer": {
          background: "#F3F3F3",
          borderRadius: "10px",
          marginBottom: "5px",
          padding: "7px 0",

          flexDirection: "column",
          justifyContent: "space-evenly",

          "& .btn1": {
            borderRight: "1px solid #C7C7C7",
            display: "flex",
            borderRadius: "0px",
          },
          "& button": {
            width: "50%",
            "& .MuiButton-label": {
              flexDirection: "column",
              "& .MuiTypography-body1": {
                color: "#878787",
                marginBottom: "3px",
              },
              "& .MuiTypography-body2": {
                color: theme.palette.primary.main,
                fontSize: "14px",
                fontFamily: "poppins",
                fontWeight: 400,
              },
            },
          },
        },
        "& img": {
          height: "219px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        },
        "& h6": {
          color: theme.palette.secondary.main,
        },
        "& .titleitem": {
          fontWeight: 500,
          margin: "10px 0 7px 0",
          color: "#262626",
        },

        "& .titleSemester": {
          color: "#0856CC",
          fontSize: "14px",
        },
        "& .titletime": {
          marginBottom: "11px",
        },
        "& .carttime": {
          color: theme.palette.primary.main,
        },

        "& .datetime": {
          color: theme.palette.text.primary,
          textAlign: "center",
        },
      },
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    "& .text1": {
      fontSize: "12px",
      color: "#878787",
      textAlign: "center",
    },
    "& .technologyText": {
      fontSize: "14px",
      color: "#0856CC",
    },
    "& .datetime": {
      color: "#636880",
      textAlign: "center",
    },
  },
}));

const AddCourses = ({
  CategoryData,
  type,
  SubcategoryDataMain,
  dropsData,
  courseData,
  noOfPages,
  setPage,
  page,
  handleNext,
  handlePrevious,
  recommendedData,
  cartRecommendedCourse,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [courseNames, setCourseNames] = useState({});

  useEffect(() => {
    const fetchCourseNames = async () => {
      try {
        const courseNameMap = {};
        for (const item of dropsData) {
          const templateId = item?.template_id;
          const res = await axios.get(apiConfig.viewTemplate, {
            params: { template_id: templateId },
          });
          if (res.data?.responseCode === 200) {
            courseNameMap[templateId] = res.data.result.course_template_name;
          }
        }
        setCourseNames(courseNameMap);
      } catch (error) {
        console.error("Error fetching course names:", error);
      }
    };
    fetchCourseNames();
  }, [dropsData]);

  return (
    <Box className={classes.AddCoursesContainer}>
      <Grid container spacing={2} className="subscriptionMainGrid">
        {type === "drops" && (
          <>
            {dropsData.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} className="GridItemsingleParent">
                <Box
                  className="singleBox"
                  onClick={() =>{
                    history.push({
                      pathname: "/course-details",
                      state: {
                        id: item?._id,
                      },
                    })
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box>
                    <img
                      src={
                        item?.thumbnail
                          ? item?.thumbnail
                          : "images/marketplace_default.png"
                      }
                    />
                  </Box>

                  <Box pl={0.8}>
                    <Typography variant="h6" className="titleitem">
                      {courseNames[item?.template_id] || ""}
                    </Typography>
                  </Box>

                  <Box className="btnContainer">
                    <Box className={classes.btnContainer}>
                      <Button className="btn1">
                        <Typography variant="body1">
                          Available Sessions
                        </Typography>
                        <Typography variant="body2">
                          {item.totalBuyer ? item.totalBuyer : 0} / 1000
                        </Typography>
                      </Button>
                      <Button>
                        <Typography variant="body1"></Typography>
                        <Typography variant="body2">DROP</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}

        {type === "cartData" && (
          <>
            {CategoryData.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} className="GridItemsingleParent">
                <Box
                  className="singleBox"
                  onClick={() =>{
                    history.push({
                      pathname: "/course-details",
                      state: {
                        id: item?._id,
                      },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box>
                    <img src={item?.thumbnail} />
                  </Box>

                  <Box pl={0.8}>
                    <Typography variant="h6" className="titleitem">
                      {item.courseName ? item.courseName : "N/A"}
                    </Typography>
                  </Box>

                  <Box className="btnContainer">
                    <Box className={classes.btnContainer}>
                      <Button className="btn1">
                        <Typography variant="body1">
                          Available Sessions
                        </Typography>
                        <Typography variant="body2">
                          {item.technology ? item.technology : "N/A"}
                        </Typography>
                      </Button>
                      <Button>
                        <Typography variant="body1">Price</Typography>
                        <Typography variant="body2">
                          {item.Price ? item.Price : "N/A"}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}

        {type === "subCategory" && (
          <>
            {SubcategoryDataMain.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} className="GridItemsingleParent">
                <Box
                  className="singleBox"
                  onClick={() =>{
                    history.push({
                      pathname: "/course-details",
                      state: {
                        id: item?._id,
                      },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box className="courseImageContainer">
                    <img
                      src={
                        item?.thumbnail
                          ? item?.thumbnail
                          : "images/course_default.png"
                      }
                    />
                  </Box>

                  <Box pl={0.8}>
                    <Typography variant="h6" className="titleitem">
                      {item?.courseType === "UNIVERSITY"
                        ? item?.template_id?.course_template_name
                        : item?.courseType === "OTHER"
                          ? item?.otherCourseName
                          : ""}
                    </Typography>
                  </Box>

                  <Box className="btnContainer">
                    <Box className={classes.btnContainer}>
                      <Button className="btn1">
                        <Typography variant="body1">
                          Available Sessions
                        </Typography>
                        <Typography variant="body2">
                          {item.supply ? item.supply : "0"} /1000
                        </Typography>
                      </Button>
                      <Button>
                        <Typography variant="body1">Price</Typography>
                        <Typography variant="body2">
                          {item?.price?.price ? item?.price?.price : 0}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}

        {type === "recommendeData" && (
          <>
            {recommendedData?.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} className="GridItemsingleParent">
                <Box
                  className="singleBox"
                  onClick={() =>{
                    history.push({
                      pathname: "/course-details",
                      state: {
                        id: item?._id,
                      },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box className="courseImageContainer">
                    <img
                      src={
                        item?.thumbnail
                          ? item?.thumbnail
                          : "images/course_default.png"
                      }
                      alt=""
                    />
                  </Box>

                  <Box
                    pl={0.8}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" className="titleitem">
                      {item?.courseType === "OTHER"
                        ? item?.courseName
                        : item?.courseType === "UNIVERSITY"
                          ? item?.course_template_name
                          : "--"}
                    </Typography>

                    <Typography variant="h6" className="titleitem">
                      {item?.duration ? item?.duration : 0}&nbsp;Hours
                    </Typography>
                  </Box>

                  <Box className="btnContainer">
                    <Box className={classes.btnContainer}>
                      <Button className="btn1">
                        <Typography variant="body1">Skills</Typography>
                        <Typography variant="body2">
                          {item?.skill_id?.name ? item?.skill_id?.name : "--"}
                        </Typography>
                      </Button>
                      <Button>
                        <Typography variant="body1">Price</Typography>
                        <Typography variant="body2">
                          {item?.price?.price ? item?.price?.price : "DROP"}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}

        {type === "cartRecommendedCourse" && (
          <>
            {cartRecommendedCourse?.slice(0, 4)?.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} className="GridItemsingleParent">
                {console.log("data", item)}
                <Box
                  className="singleBox"
                  onClick={() =>{
                    history.push({
                      pathname: "/course-details",
                      state: {
                        id: item?._id,
                      },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box className="courseImageContainer">
                    <img
                      src={
                        item?.thumbnail
                          ? item?.thumbnail
                          : "images/course_default.png"
                      }
                    />
                  </Box>

                  <Box
                    pl={0.8}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="secondary"
                      style={{ fontSize: "25px", fontWeight: 700 }}
                    >
                      {item?.courseType === "OTHER"
                        ? item?.otherCourseName
                        : item?.courseType === "UNIVERSITY"
                          ? item?.template_id?.course_template_name
                          : "--"}
                    </Typography>

                    <Typography
                      variant="h6"
                      style={{ fontSize: "17px", color: "#0856CC" }}
                    >
                      {item.duration ? item.duration : 0}&nbsp;Hours
                    </Typography>
                  </Box>

                  <Box className="btnContainer">
                    <Box className={classes.btnContainer}>
                      <Button className="btn1">
                        <Typography variant="body1">Skills</Typography>
                        <Typography variant="body2">
                          {item?.skill_id && item?.skill_id?.name.length > 10
                            ? item?.skill_id?.name.slice(0, 10) + "..."
                            : item?.skill_id?.name || " "}
                        </Typography>
                      </Button>
                      <Button>
                        {item?.price?.price == null ||
                          item?.price?.price == 0 ||
                          item?.price?.price == undefined ? (
                          <Typography variant="body2">DROP</Typography>
                        ) : (
                          <>
                            <Typography variant="body1">Price</Typography>
                            <Typography variant="body2">
                              {item?.price?.price}
                            </Typography>
                          </>
                        )}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}
      </Grid>

      {type === "subscription" && (
        <>
          <Grid container spacing={2}>
            <>
              {courseData?.map((item, i) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Box className="singleBox subcriptionGrid">
                    <Box
                      onClick={() => history.push("/my-subscription-details")}
                    >
                      <img
                        src={item?.data?.thumbnail}
                        alt=""
                        width="100%"
                        height="219px"
                      />
                    </Box>
                    <Box pl={0.8} pt={1.5} className="displaySpacebetween">
                      <Typography
                        variant="h6"
                        className="titleitem dangerous"
                        style={{ fontSize: "22px", fontWeight: 700 }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.data?.learn,
                          }}
                        />
                      </Typography>
                      {/* <Typography
                      variant="body1"
                      className="titleSemester"
                      style={{ fontSize: "14px", color: "#0856CC" }}
                    >
                      {item.semester}
                    </Typography> */}
                    </Box>

                    <Box mt={2} className="btnContainer">
                      <Box
                        className={classes.btnContainer}
                        style={{
                          backgroundColor: "#F7F7F7",
                          marginBottom: "10px",
                          padding: "5px 0px",
                        }}
                      >
                        <Box width="50%" borderRight="1px solid #E8E3E3">
                          <Typography className="btn1">
                            <Box>
                              <Typography variant="body1" className="text1">
                                Skills
                              </Typography>
                              <Typography
                                variant="body2"
                                className="technologyText"
                                style={{ textAlign: "center" }}
                              >
                                {item?.data?.courseName}
                              </Typography>
                            </Box>
                          </Typography>
                        </Box>
                        <Box width="50%">
                          <Box>
                            <Typography className="text1" variant="body1">
                              Price
                            </Typography>
                            <Typography
                              variant="body2"
                              className="technologyText"
                              style={{ textAlign: "center" }}
                            >
                              ₹ {item?.data?.price?.price}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box mt={1} className="displayCenter">
                      <Typography
                        variant="body1"
                        className="datetime"
                        style={{ color: "#878787" }}
                      >
                        Start Date:{" "}
                        {moment(item?.data?.startDate).format(
                          "MMM DD, YYYY hh:mm A"
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </>
          </Grid>

          {noOfPages > 1 && (
            <PaginationComponent
              count={noOfPages}
              onChange={(e, value) => setPage(value)}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              page={page}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default AddCourses;
