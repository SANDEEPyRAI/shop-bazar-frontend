import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Box } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f9f9",
    display: "flex",
    minHeight: "100vh",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  contentContainer: {
    marginTop: "56px",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    padding: theme.spacing(3),
    backgroundColor: "#eef4f8",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
