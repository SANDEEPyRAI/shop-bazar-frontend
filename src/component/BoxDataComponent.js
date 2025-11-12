import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Select,
  MenuItem,
  ButtonGroup,
  Box,
  Divider,
  IconButton,
} from "@material-ui/core";
import PaginationComponent from "./PaginationComponent";
import BadgeDialog from "src/views/pages/Dashboard/Badges/BadgeDialog";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxDataComponentContainer: {
    overflowX: "scroll",

    "& .box": {
      width: "100%",
      maxWidth: "1300px",
      overflowX: "scroll",
      height: "100%",
      minHeight: "146px",
      boxSizing: "border-box",
      boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)",
      marginTop: "20px",

      "@media(max-width:1500px)": {
        minWidth: "1300px",
      },

      "& .titleContainer": {
        padding: "15px",
        background: "#F5F5F5",
      },

      "& .attendancetitleContainer": {
        padding: "15px",
        background: "#F5F5F5",
        gap: "20px",

        "& .subtitle": {
          color: "rgba(8, 86, 204, 1)",
        },
      },

      "& .textAndAction": {
        padding: "15px",
        justifyContent: "space-between",

        "& .imageContainer": {
          cursor: "pointer",
        },

        "& .headingAndValue": {
          width: "100%",
          maxWidth: "1100px",
          justifyContent: "space-between",

          "& .heading": {
            fontSize: "12px",
            color: theme.palette.text.primary,
          },

          "& .value": {
            color: "rgba(38, 38, 38, 1)",
            fontSize: "14px",
            marginTop: "15px",
          },

          "& .greenValue": {
            color: "rgba(52, 199, 123, 1)",
            fontSize: "14px",
            marginTop: "15px",
          },

          "& .actionicons": {
            marginTop: "15px",
            display: "flex",
            alignContent: "center",
            gap: "20px",

            "& button": {
              padding: "0px",
            },
          },
        },
      },
    },
  },
}));

export default function BoxDataComponent({ type, data }) {
  const classes = useStyles();
  const history = useHistory();

  const [openBadgeDialog, setOpenBadgeDialog] = useState(false);

  const handleBadgeDialogClose = () => {
    setOpenBadgeDialog(false);
  };

  return (
    <div className={classes.boxDataComponentContainer}>
      {type === "badges" && (
        <>
          {data.map((item, i) => (
            <Box key={i} className="box">
              <Box className="titleContainer">
                <Typography variant="body2" color="secondary">
                  {item.title}
                </Typography>
              </Box>

              <Box className="textAndAction alignCenter">
                <Box className="imageContainer">
                  <img
                    src={item.badgeImg}
                    onClick={() => setOpenBadgeDialog(true)}
                  />
                </Box>

                <div className="headingAndValue alignCenter">
                  {item.headings.map((heading, j) => (
                    <Box key={j}>
                      <React.Fragment>
                        <Typography variant="body1" className="heading">
                          {heading}
                        </Typography>
                        {item.values[j] && (
                          <Typography
                            variant="body2"
                            className="value"
                            color="secondary"
                          >
                            {item.values[j]}
                          </Typography>
                        )}
                        {heading === "Action" &&
                          j === item.headings.length - 1 && (
                            <div className="actionicons">
                              <IconButton>
                                <img
                                  src="images/sendIcon.svg"
                                  alt="Send Icon"
                                />
                              </IconButton>
                              <IconButton onClick={() => history.push("/approval")}>
                                <img
                                  src="images/downloadIcon.svg"
                                  alt="Download Icon"
                                />
                              </IconButton>
                            </div>
                          )}
                      </React.Fragment>
                    </Box>
                  ))}
                </div>
              </Box>
            </Box>
          ))}
          <PaginationComponent noOfPages={3} />

          <BadgeDialog
            open={openBadgeDialog}
            onClose={handleBadgeDialogClose}
          />
        </>
      )}

      {type === "skills" && (
        <>
          {data.map((item, i) => (
            <Box key={i} className="box">
              <Box className="titleContainer">
                <Typography variant="body2" color="secondary">
                  {item.title}
                </Typography>
              </Box>

              <Box className="textAndAction alignCenter">
                <Box className="imageContainer">
                  <img src={item.badgeImg} />
                </Box>

                <div className="headingAndValue alignCenter">
                  {item.headings.map((heading, i) => (
                    <Box key={i}>
                      <React.Fragment>
                        <Typography variant="body1" className="heading">
                          {heading}
                        </Typography>
                        {item.values[i] && (
                          <Typography
                            variant="body2"
                            className={
                              item.values[i] === "Claimed"
                                ? "greenValue"
                                : "value"
                            }
                            color="secondary"
                          >
                            {item.values[i]}
                          </Typography>
                        )}
                      </React.Fragment>
                    </Box>
                  ))}
                </div>
              </Box>
            </Box>
          ))}
          <PaginationComponent noOfPages={3} />

          <BadgeDialog
            open={openBadgeDialog}
            onClose={handleBadgeDialogClose}
          />
        </>
      )}

      {type === "attendance" && (
        <>
          {data.map((item, i) => (
            <Box key={i} className="box">
              <Box className="attendancetitleContainer alignCenter">
                <Typography variant="body2" color="secondary">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary"
                  className="subtitle"
                >
                  {item.subtitle}
                </Typography>
              </Box>

              <Box className="textAndAction alignCenter">
                <div className="headingAndValue alignCenter">
                  {item.headings.map((heading, j) => (
                    <Box key={j}>
                      <React.Fragment>
                        <Typography variant="body1" className="heading">
                          {heading}
                        </Typography>
                        {item.values[j] && (
                          <Typography
                            variant="body2"
                            className="value"
                            color="secondary"
                          >
                            {item.values[j]}
                          </Typography>
                        )}
                        {/* {heading === "Attendance" &&
                          j === item.headings.length - 1 && (
                            <div className="actionicons">
                              <IconButton>
                                <img
                                  src="images/sendIcon.svg"
                                  alt="Send Icon"
                                />
                              </IconButton>
                            </div>
                          )} */}
                      </React.Fragment>
                    </Box>
                  ))}
                </div>
              </Box>
            </Box>
          ))}
          <PaginationComponent noOfPages={3} />

          <BadgeDialog
            open={openBadgeDialog}
            onClose={handleBadgeDialogClose}
          />
        </>
      )}
    </div>
  );
}
