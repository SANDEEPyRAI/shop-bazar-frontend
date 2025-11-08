import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Header from "./header";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#FAFAFA",
  },
  MainLayout: {
    minHeight: "calc(100vh - 415px)",
    // backgroundColor: "#FAFAFA",
    // height: "100vh",
  },

  MainLayoutWithHeight: {
    minHeight: "calc(100vh - 415px)",
    backgroundColor: "#FAFAFA",
    height: "100vh",
    overflow: "hidden",
  },

  // paddingWrapper: {
  //   paddingTop: "88px",

  //   [theme.breakpoints.down("sm")]: {
  //     paddingTop: "72px",
  //   },

  //   [theme.breakpoints.down("xs")]: {
  //     paddingTop: "56px",
  //   },
  // },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  const routesWithHeader = [
    "/login",
    "/register",
    "/login-password",
    "/reset-password",
    "/register-password",
    "/forgot",
    "/verifyOtp",
    "/verify-otp",
  ];

  const showTopBar = routesWithHeader.includes(history.location.pathname);

  const homeRoute = window.location.pathname === "/";

  return (
    <div className={classes.root}>
      {showTopBar ? (
        <>
          {/* <TopBar /> */}
          <Header />
          <div className={homeRoute ? classes.paddingWrapper : null}>
            <div
              className={
                showTopBar ? classes.MainLayoutWithHeight : classes.MainLayout
              }
            >
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <TopBar /> */}
          <Header />
          <div className={homeRoute ? classes.paddingWrapper : null}>
            <div className={classes.MainLayout}>{children}</div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
