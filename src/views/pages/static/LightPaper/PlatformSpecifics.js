import React, { useState, useEffect } from "react";
import { Typography, Box, Container, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  TopLightBox: {
    "& .space": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      color: "rgba(112, 122, 131, 1)",
      padding:"0 15px",
    },
    "& .horizontalLine": {
      position: "relative",
      width: "6px",
      height: "40px",
      backgroundColor: "rgba(52, 199, 123, 1)",
      marginBottom: "9px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "6px",
        height: "40px",
        backgroundColor: "rgba(52, 199, 123, 1)",
        marginBottom: "9px", // Adjust the gap between lines
      },
    },
    "& .system": {
      color: "rgba(53, 56, 64, 1)",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "37.8px",
    },
    "& .phead": {
      color: "rgba(38, 38, 38, 1)",
      fontSize: "60px",
      lineHeight: "70.31px",
    },
    padding: "70px 0px 50px",
    "& .headTextBx": {
      "& h1": {
        fontSize: "50px",
        fontWeight: "700",
        marginBottom: "40px",
        "@media(max-width:767px)": {
          fontSize: "26px",
          lineHeight: "30px",
        },
      },
      "& h2": {
        fontSize: "40px",
        fontWeight: "500",
        margin: "20px 0px",
        "@media(max-width:767px)": {
          fontSize: "26px",
        },
      },
      "& h5": {
        marginBottom: "20px",
        "& span": {
          color: theme.palette.text.primary,
        },
      },
    },
  },
}));

        
const divs = Array.from({ length: 100 }, (_, index) => (
  <div key={index} className="horizontalLine"></div>
));

const dataaa = [
  { label: "API", status: "Operational" },
  { label: "Website", status: "Operational" },
  { label: "Mobile Application", status: "Operational" },
  { label: "Support Services", status: "Operational" },
  { label: "Emails", status: "Operational" },
  {
    label: "Developer Testnets",
    status: "Operational",
    bounce: (
      <Box
        className="displayStart"
        style={{ overflow: "hidden", padding: "0 10px" }}
        gridGap={10}
      >
        {divs.map((divider, index) => (
          <React.Fragment key={index}>{divider}</React.Fragment>
        ))}
      </Box>
    ),
    belowBounce: (
      <Box className="displaySpacebetween">
        <Typography className="space">90 days ago </Typography>
        <Typography className="space">100.00% uptime </Typography>
        <Typography className="space">Today </Typography>
      </Box>
    ),
  },
];
function PlatformSpecifics() {
  const classes = useStyles();
  const location = useLocation();
  const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState("Day");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const incidentObject = [
    { date: "Nov 16, 2023" },
    { date: "Nov 15, 2023" },
    { date: "Nov 14, 2023" },
    { date: "Nov 13, 2023" },
    { date: "Nov 12, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
    { date: "Nov 11, 2023" },
  ];

  return (
    <>
      <Box className={classes.TopLightBox}>
        <Container maxWidth="md">
          <Box className="headTextBx">
            <Typography variant="h1" color="textPrimary" className="phead">
              Platform Specifics
            </Typography>
            <Box
              style={{
                backgroundColor: "#34C77B",
                height: "57px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                marginBottom: "120px",
              }}
            >
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "poppins",
                  color: "white",
                  fontWeight: 400,
                  lineHeight: "29px",
                  padding: "15px",
                }}
              >
                All Systems Operational
              </Typography>
            </Box>
            <Typography
              color="textPrimary"
              style={{
                textAlign: "right",
                fontSize: "13.6px",
                fontWeight: "400",
                fontFamily: "Poppins",
              }}
            >
              Uptime over the past 90 days.{" "}
              <span style={{ color: "#2081E2" }}>View historical uptime.</span>
            </Typography>
            {dataaa.map((item, index, dataa) => (
              <React.Fragment key={index}>
                <Box
                  style={{
                    height: "100%",
                    borderRadius: "5px",
                    border: "1px solid #E5E8EB",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      style={{
                        fontWeight: 500,
                        padding: "15px",
                        color: "rgba(53, 56, 64, 1)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      style={{
                        padding: "15px",
                        color: "#34C77B",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        lineHeight: "24px",
                      }}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                  {item?.bounce}
                  {item?.belowBounce}
                </Box>
              </React.Fragment>
            ))}

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={8}
            >
              <Typography variant="h3" color="textPrimary" className="system">
                System Metrics
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="200px"
                color="textPrimary"
              >
                <Typography
                  onClick={() => handleTabClick("Day")}
                  color={
                    activeTab === "Day"
                      ? "rgba(53, 56, 64, 1)"
                      : "rgba(175, 175, 175, 1)"
                  }
                  style={{
                    listStyle: "none",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Day
                </Typography>
                <Typography
                  onClick={() => handleTabClick("Week")}
                  color={
                    activeTab === "Week"
                      ? "rgba(53, 56, 64, 1)"
                      : "rgba(175, 175, 175, 1)"
                  }
                  style={{
                    listStyle: "none",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Week
                </Typography>
                <Typography
                  onClick={() => handleTabClick("Month")}
                  color={
                    activeTab === "Month" ? "rgba(53, 56, 64, 1)" : "green"
                  }
                  style={{
                    listStyle: "none",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Month
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                border: " 1px solid #E5E8EB",
                padding: "25px",
                marginTop: "23px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                maxWidth="600px"
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(53, 56, 64, 1)",
                    fontFamily: "Poppins",
                  }}
                  color="textPrimary"
                >
                  Average Platform Response Time
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  - -
                </Typography>
              </Box>
              <Typography
                color="textPrimary"
                style={{
                  textAlign: "center",
                  marginTop: "14px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(175, 175, 175, 1)",
                  fontFamily: "Poppins",
                }}
              >
                Oops! No data has been indexed for Average Platform Response
                Time for this time period yet.
              </Typography>
            </Box>

            <Box
              style={{
                border: " 1px solid #E5E8EB",
                padding: "25px",
                marginTop: "23px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                maxWidth="600px"
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(53, 56, 64, 1)",
                    fontFamily: "Poppins",
                  }}
                >
                  Polygon Transaction Processing Time
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  - -
                </Typography>
              </Box>
              <Typography
                color="textPrimary"
                style={{
                  textAlign: "center",
                  marginTop: "14px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(175, 175, 175, 1)",
                  fontFamily: "Poppins",
                }}
              >
                Oops! No data has been indexed for Polygon Transaction
                Processing Time for this time period yet.
              </Typography>
            </Box>

            <Typography
              style={{ marginTop: "70px" }}
              variant="h3"
              className="system"
              color="textPrimary"
            >
              Past Incidents
            </Typography>
          </Box>
          {incidentObject.map((item) => (
            <>
              <Typography
                style={{
                  color: "rgba(53, 56, 64, 1)",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  marginTop: "20px",
                }}
                variant="h4"
                color="textPrimary"
              >
                {item.date}
              </Typography>
              <hr
                style={{
                  borderTop: "1px solid rgba(229, 232, 235, 1)",
                  marginTop: "5px",
                }}
              />
              <Typography
                style={{
                  color: "rgba(112, 122, 131, 1)",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  marginTop: "20px",
                }}
              >
                No incidents reported today.
              </Typography>
            </>
          ))}
        </Container>
      </Box>
    </>
  );
}
export default PlatformSpecifics;
