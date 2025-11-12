import React, { useContext, useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@material-ui/core";
import DataLoader from "./DataLoader";
import { useHistory } from "react-router-dom";
import QrCodeComp from "src/views/pages/Profile/QRCodeComp";

const useStyles = makeStyles((theme) => ({
  gayniCardContainer: {
    [theme.breakpoints.down("xl")]: {
      "& .gyanigridContainer": {
        flexWrap: "nowrap",
        overflowX: 'scroll',
        paddingTop: '20px'
      },
    },

    "& .gyanigridContainer": {
      // justifyContent: "space-between",
      gap: "15px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        gap: "13px",
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "22px",
      },

      "& .gyanigridItem": {
        minWidth: "298px",
        // height: "214px",

        [theme.breakpoints.down("xs")]: {
          maxWidth: "100%",
          minWidth: "127px",
        },

        [theme.breakpoints.up("md")]: {
          maxWidth: "100%",
          height: "190px",
          minWidth:"auto",
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "100%",
          height: "214px",
          minWidth:"auto",
        },
        

        "@media(min-width:1280px)": {
          marginBottom: "26px",
        },

        "& .gyaniCard": {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          background: "#fff",
          borderRadius: "10px",
          border: "1px solid #F0F0F0",
          textAlign: "center",
          [theme.breakpoints.down("xs")]: {
            height: "154px"
          },
          "& h6": {
            marginTop: "6px",
            marginBottom: "4px",
          },

          "& .qrImage": {
            marginTop: "14px",
            [theme.breakpoints.down("xs")]: {
              width: "65px",
              height: "65px",
            },
          },
          "& .profileText": {
            position: "relative",
            top: "-20px",
          },

          "& .profileImageContainer": {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",

            "& img": {
              [theme.breakpoints.down("xs")]: {
                width: "50px",
                height: "50px",
              },
              borderRadius: "50%",
              objectFit: "cover",
              width: "72px",
              height: "72px",
              position: "relative",
              top: "-18px",
            },

            "& .avatar": {
              [theme.breakpoints.down("xs")]: {
                width: "50px",
                height: "50px",
              },
              objectFit: "cover",
              width: "72px",
              height: "72px",
              position: "relative",
              top: "-18px",
            },
          },
        },
      },
    },

    "& .gyanigridContainerLarge": {
      // justifyContent: "space-between",
      gap: "15px",

      "& .gyanigridItem": {
        flexBasis: "19%",
        maxWidth: "19%",
        boxSizing: "border-box",

        "& .gyaniCard": {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          background: "#fff",
          borderRadius: "10px",
          border: "1px solid #F0F0F0",
          textAlign: "center",

          "& h6": {
            marginTop: "6px",
          },

          "& .qrImage": {
            marginTop: "14px",
          },
          "& .profileText": {
            position: "relative",
            top: "-20px",
          },

          "& .profileImageContainer": {
            // position: "relative",
            // top: "-20px",

            display: "flex",
            justifyContent: "center",
            alignContent: "center",

            "& img": {
              borderRadius: "50%",
              objectFit: "cover",
              width: "78px",
              height: "78px",
              position: "relative",
              top: "-20px",
            },
            "& .avatar": {
              objectFit: "cover",
              width: "78px",
              height: "78px",
              position: "relative",
              top: "-20px",
            },
          },
        },
      },
    },

  },

  trendingInEngineeringCardContainer: {
    "& .engineeringGridContainer": {
      overflow: 'auto',
      flexWrap: 'nowrap',
      gap: '20px',
      justifyContent: "space-between",

      [theme.breakpoints.down("xs")]: {
        // justifyContent: "flex-start",
        // gap: "50px",
        gap: '10px',
      },

      "&.flexStartAndGap": {
        justifyContent: "flex-start",
        gap: "20px",
      },

      "& .engineeringGridItem": {
        maxWidth: "300px",
        height: "366px",
        // boxSizing: "border-box",

        [theme.breakpoints.down("xs")]: {
          // maxWidth: "100%",
          maxWidth: '220px',
          height: '265px',
          marginBottom:'0 !important'
        },

        "@media(max-width:1599px)": {
          marginBottom: "20px",
        },

        "& .engineeringCardContainer": {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "11px",
          borderRadius: "10px",
          border: "1px solid #DCDCDC",
          background: "#FFF",
          [theme.breakpoints.down("xs")]:{
            width: "216.55px",
            height: "265px",
            padding:'8px'
          },

          "& .engineeringImageContainer": {
            width: "278px",
            height: "271px",
            overflow: "hidden",
            borderRadius: "10px",

            [theme.breakpoints.down("xs")]: {
              // width: "100%",
              // borderRadius: "10px",
              // overflow: "hidden",
              width: '199px',
              height: '196px',
            },

            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",

              // [theme.breakpoints.down("xs")]: {
              //   objectFit: "cover",
              // },
            },
          },

          "& .mechanicalBtn": {
            marginTop: "17px",
            border: "none",
            width: "100%",
            height: "53px",
            borderRadius: "10px",
            background: "#F3F3F3",
            color: "#262626",
            fontSize: "20px",
            fontWeight: "500",

            [theme.breakpoints.down("xs")]: {
              fontSize: "14px",
              marginTop: "10px",
              height: "38.9px",
            },
          },
        },
      },
    },

    "& .engineeringGridContainerLarge": {
      justifyContent: "space-between",

      "&.flexStartAndGap": {
        justifyContent: "flex-start",
        gap: "20px",
      },

      "& .engineeringGridItem": {
        flexBasis: "19%",
        maxWidth: "19%",
        boxSizing: "border-box",
        cursor: "pointer",
        "& .engineeringCardContainer": {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "11px",
          borderRadius: "10px",
          border: "1px solid #DCDCDC",
          background: "#FFF",

          "& .engineeringImageContainer": {
            height: "271px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "10px",

            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          },

          "& .mechanicalBtn": {
            marginTop: "17px",
            border: "none",
            width: "100%",
            height: "53px",
            borderRadius: "10px",
            background: "#F3F3F3",
            color: "#262626",
            fontSize: "20px",
            fontWeight: "500",
          },
        },
      },
    },
  },

  nodatafound: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      width: "168px",
      height: "168px",
    },

    "& h4": {
      marginTop: "10px",
    },
  },
}));

export default function CardComponent({
  type,
  data,
  gyanisData,
  loading,
  subCategoryData,
}) {
  const classes = useStyles();
  const history = useHistory();
  const isLargeScreen = useMediaQuery("(min-width:1680px)");
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleCardClick = (subCategoryId) => {
    history.push({
      pathname: "/sub-category",
      state: {
        id: subCategoryId,
        data: data,
      },
    });
  };

  return (
    <>
      {type === "gyanis" && (
        <div className={classes.gayniCardContainer}>
          {loading ? (
            <>
              <DataLoader />
            </>
          ) : (
            <>
              <Grid
                container
                className={
                  isLargeScreen
                    ? "gyanigridContainerLarge"
                    : "gyanigridContainer"
                }
              >
                {gyanisData?.slice(0, 5)?.map((gyani, i) => (
                  <Grid item xs={12} sm={12} md={4} className="gyanigridItem">
                    <Box key={i} className="gyaniCard">
                      <div className="profileImageContainer">
                        {gyani?.profileImage ? (
                          <>
                            <img src={gyani.profileImage} alt="" />
                          </>
                        ) : (
                          <>
                            <Avatar className="avatar" />
                          </>
                        )}
                      </div>

                      <div className="profileText">
                        <Typography variant="h6" color="secondary">
                          {gyani.firstName + " " + gyani.lastName}
                        </Typography>
                        {/* <img
                          src={
                            gyani.qrCode ? gyani.qrCode : "/images/gyani_qr.svg"
                          }
                          className="qrImage"
                        /> */}
                        <QrCodeComp
                          qrCodeSize={isSmallScreen ? 65 : 78}
                          // qrCodeSize={78}
                          className={classes.qrCode}
                          value={`https://web-gyantraining.mobiloitte.io/scanCode?${gyani.hashCode}`}
                        />
                      </div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </div>
      )}

      {type === "landingPage" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge"
                : "engineeringGridContainer"
            }
          >
            {data?.slice(0, 5)?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                onClick={() => {
                  history.push({
                    pathname: "/sub-category",
                    state: {
                      id: item?._id,
                      bannerImage: item?.bannerImage,
                      Description: item?.description,
                      short: item?.short_description,
                      name: item?.subCategoryName,
                      image: item?.subCategoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }}

              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.subCategoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item.subCategoryName.length <= 20
                      ? item.subCategoryName
                      : item.subCategoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {type === "skillMarketPlace" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge"
                : "engineeringGridContainer"
            }
            style={{
              overflowX: "auto",
              scrollBehavior: "smooth",
            }}
          >
            {data?.slice(0, 5)?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                onClick={() => {
                  history.push({
                    pathname: "/sub-category",
                    state: {
                      id: item?._id,
                      bannerImage: item?.bannerImage,
                      Description: item?.description,
                      short: item?.short_description,
                      name: item?.subCategoryName,
                      image: item?.subCategoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }} 
              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.subCategoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item.subCategoryName.length <= 20
                      ? item.subCategoryName
                      : item.subCategoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {type === "subCategory" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge"
                : "engineeringGridContainer"
            }
          >
            {data?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  history.push({
                    pathname: "/sub-category",
                    state: {
                      id: item?._id,
                      bannerImage: item?.bannerImage,
                      Description: item?.description,
                      short: item?.short_description,
                      name: item?.subCategoryName,
                      image: item?.subCategoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.subCategoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item.subCategoryName.length <= 20
                      ? item.subCategoryName
                      : item.subCategoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {type === "subCategorySpotlight" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge" +
                (data && data.length < 5 ? " flexStartAndGap" : "")
                : data && data.length < 5
                  ? "engineeringGridContainer flexStartAndGap"
                  : "engineeringGridContainer"
            }
          >
            {data?.slice(0, 5)?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                onClick={() => {
                  history.push({
                    pathname: "/sub-category",
                    state: {
                      id: item?._id,
                      bannerImage: item?.bannerImage,
                      Description: item?.description,
                      short: item?.short_description,
                      name: item?.subCategoryName,
                      image: item?.subCategoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.subCategoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item.subCategoryName.length <= 20
                      ? item.subCategoryName
                      : item.subCategoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {type === "allCategory" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge"
                : "engineeringGridContainer"
            }
          >
            {data?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                style={{ marginBottom: "20px" }}
                onClick={() =>{
                  history.push({
                    pathname: "/view-category",
                    state: {
                      categoryId: item?._id,
                      categoryName: item?.categoryName,
                      description: item?.description,
                      bannerImage: item?.bannerImage,
                      categoryImage: item?.categoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.categoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item.categoryName.length <= 20
                      ? item.categoryName
                      : item.categoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}

            {data?.length === 0 && (
              <div className={classes.nodatafound}>
                <img src="images/NaDataimg.png" alt="" />
                <Typography variant="h4" color="secondary">
                  No Categories Found
                </Typography>
              </div>
            )}
          </Grid>
        </div>
      )}

      {type === "subCategoryList" && (
        <div className={classes.trendingInEngineeringCardContainer}>
          <Grid
            container
            className={
              isLargeScreen
                ? "engineeringGridContainerLarge"
                : "engineeringGridContainer"
            }
          >
            {subCategoryData?.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                key={i}
                className="engineeringGridItem"
                style={{ marginBottom: "20px" }}
                onClick={() =>{
                  history.push({
                    pathname: "/sub-category",
                    state: {
                      id: item?._id,
                      bannerImage: item?.bannerImage,
                      Description: item?.description,
                      short: item?.short_description,
                      name: item?.subCategoryName,
                      image: item?.subCategoryImage,
                    },
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <Box className="engineeringCardContainer">
                  <div className="engineeringImageContainer">
                    <img src={item.subCategoryImage ?? ""} alt="" />
                  </div>
                  <Button variant="outlined" className="mechanicalBtn">
                    {item?.subCategoryName?.length <= 20
                      ? item.subCategoryName
                      : item.subCategoryName.slice(0, 20) + "..."}
                  </Button>
                </Box>
              </Grid>
            ))}

            {subCategoryData?.length === 0 && (
              <div className={classes.nodatafound}>
                <img src="images/NaDataimg.png" alt="" />
                <Typography variant="h4" color="secondary">
                  No Categories Found
                </Typography>
              </div>
            )}
          </Grid>
        </div>
      )}
    </>
  );
}
