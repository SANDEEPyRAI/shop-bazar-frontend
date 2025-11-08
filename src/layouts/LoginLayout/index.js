import React, { useEffect, useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  TopbarInside: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    height: "100px",
    paddingLeft: "30px",
  },
  TopbarAuth: {
    background: "#f2f2f2",
  },
  headerTypo: {
    fontSize: "20.125px",
    fontFamily: "Calistoga",
    fontWeight: 600,
    letterSpacing: "0.604px",
  },
  TopImage: {
    // width: "150.842px",
    height: "71px",
  },
  headerTypo2: {
    color: "#591958",
    fontFamily: "Outfit",
    fontWeight: 500,
  },
  childrenBox: {
    minHeight: "calc(100vh - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function LoginLayout({ children }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.TopbarAuth}>
        <Box className={classes.TopbarInside}>
          <img src="images/logo.png" alt="Logo" className={classes.TopImage} />
        </Box>
        <Box className={classes.childrenBox}>{children}</Box>
      </Box>
    </>
  );
}
LoginLayout.propTypes = {
  children: PropTypes.node,
};
