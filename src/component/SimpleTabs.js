import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "react-scroll";
import axios from "axios";
import toast from "react-hot-toast";
import { apiConfig } from "../apiconfig/ApiConfig";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiTab-textColorInherit ": {
      color: "#636880",
    },
    "& .MuiTabs-fixed": {
      overflowX: "auto !important",
      [theme.breakpoints.down("xs")]:{
        borderTop: "4px solid #d8d8d8",
      },
    },
    "& .MuiTab-root": {
      fontSize: 14,
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#F3F3F3",
    },
    "& .displaySpacebetween": {
      width: "50%",
    },
    "& .PrivateTabIndicator-colorSecondary-139 ": {
      backgroundColor: "#0856CC !important",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },
    "& .displayColumnCenter": {
      gap: "30px",
      "& containedPrimary": {
        color: "#ffffff",

        fontSize: "16px",
        fontFamily: "Roboto Condensed",
        lineHeight: "auto",
      },
    },
  },
  imageDiv: {
    display: "flex",
    width: "100%",
    maxWidth: "179px",
    gap: "25px",
  },
  reqbtn: {
    color: "#fff",
    height: "50px",
    fontSize: "16px",
    backgroundColor: "#0856CC",
    border: "none",
    fontWeight: 500,
    lineHeight: "normal",
    fontFamily: "Roboto Condensed",
    borderRadius: "5px",
    padding: "16px 25px",
    "&:hover": {
      color: "#0856CC",
      border: "1px solid #0856CC",
      backgroundColor: "#FFF",
    },
  },
}));

export default function SimpleTabs({ data }) {
  console.log("data is ....", data._id);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [checkStatus, setCheckStatus] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();
  const checkWatchlistStatusHandler = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://node.gyanbatua.com/api/v1/user/checkWatchlistStatus",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          hashCode: data.hashCode,
        },
      });
      if (res.data.responseCode === 200) {
        setCheckStatus(res.data.result);
      }
    } catch (error) {}
  };

  const addWatchlist = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        // throw new Error("please login first");
        setError("please login first");
      }
      const userId = data._id;
      const params = {
        userId: userId,
      };
      const res = await axios({
        method: "get",
        url: `https://nodev3-learningrecords.mobiloitte.io/api/v1/watchlist/addWatchList`,
        headers: {
          token: localStorage.getItem("token"),
        },
        params: params,
      });
      if (res.data.responseCode === 200) {
        // toast.success("Added To Watchlist Successfully");
        // console.log("Added To Watchlist Successfully")
        setSuccess("Added To Watchlist Successfully");
      }
    } catch (error) {
      // toast.error(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    checkWatchlistStatusHandler();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className="tabsAtMobile"
        >
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="LEARNING JOURNEY" {...a11yProps(1)} />
          <Tab label="RESUME" {...a11yProps(2)} />
          <Tab label="BADGES" {...a11yProps(3)} />
          <Tab label="CONTACT" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h5">Overview</Typography>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          I am a proficient Blockchain Developer in Chandigarh, India,
          specializing in Ethereum and Hyperledger. My experience includes
          creating smart contracts, NFTs, and DeFi Protocols. I hold a B.Tech in
          Computer Science and have worked with Webmob Software Solutions,
          Mobiloitte, and MindDeft Technologies.
        </Typography>
        <Box className="displaySpacebetween" mt={3}>
          <Box>
            <Typography variant="body2">
              Validated resume:{" "}
              {data.resumeApproval === undefined ||
              data.resumeApproval === "Pending"
                ? "No"
                : "Yes"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Skill challenges taken:{" "}
              {data?.skills && data?.skills.length > 0 ? data.skills : "NO"}
            </Typography>
          </Box>
        </Box>
        <Box className="displaySpacebetween" mt={4}>
          <Box>
            <Typography variant="body2">
              Validated learning instances:{" "}
              {data?.selfAssessment && data?.selfAssessment.lenth > 0
                ? data?.selfAssessment
                : 0}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Badges earned:{" "}
              {data?.userBadge && data?.userBadge.length > 0
                ? data.userBadge
                : 0}
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5">Learning Journey</Typography>
        {data?.certificates && data?.certificates.length > 0 ? (
          <></>
        ) : (
          <Typography
            variant="body1"
            style={{ marginTop: "10px", textAlign: "center", fontSize: "18px" }}
          >
            No Data Found
          </Typography>
        )}

        {/* <>
    <Typography variant="body1" style={{ marginTop: "10px" }}>
      I pursued a B.Tech in Computer Science at J.C. Bose University of
      Science and Technology, YMCA. As a Blockchain Developer in Chandigarh,
      I specialized in Ethereum and Hyperledger technologies. This path
      allowed me to develop expertise in smart contracts, NFTs, and DeFi
      Protocols, with valuable experience in the field.
    </Typography>
    <Box style={{ padding: "0 15px" }} mt={3}>
      <Box>
        <Typography variant="body2">Certificate Name</Typography>
        <Typography variant="body1">03/Jun/2023</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="body2">Certificate Name</Typography>
        <Typography variant="body1">03/Jun/2023</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="body2">Certificate Name</Typography>
        <Typography variant="body1">03/Jun/2023</Typography>
      </Box>
    </Box>
  </> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5">Resume</Typography>
        {data?.resume ? (
          <></>
        ) : (
          <Typography
            variant="body1"
            style={{ marginTop: "10px", textAlign: "center", fontSize: "18px" }}
          >
            No Data Found
          </Typography>
        )}
        {/* <Typography variant="body1" style={{ marginTop: "10px" }}>
          My comprehensive resume, complete with certifications and
          qualifications, is available for download on the 'Gyan Batyua'
          platform. It offers valuable insights into my experience as a
          Blockchain Developer and provides a detailed overview of my
          accomplishments
        </Typography>
        <Box style={{ padding: "0px 17px" }}>
          <Box className="displaySpacebetween" style={{ width: "100%" }} mt={2}>
            <Box>
              <Typography variant="body2">Resume umair.Doc</Typography>
              <Typography variant="body1">26 Jun 17 05:32</Typography>
            </Box>
            <Box>
              <img src="/images/download.png" alt="" />
            </Box>
          </Box>
          <Box className="displaySpacebetween" style={{ width: "100%" }} mt={2}>
            <Box>
              <Typography variant="body2">Resume umair.Doc</Typography>
              <Typography variant="body1">26 Jun 17 05:32</Typography>
            </Box>
            <Box>
              <img src="/images/download.png" alt="" />
            </Box>
          </Box>
          <Box className="displaySpacebetween" style={{ width: "100%" }} mt={2}>
            <Box>
              <Typography variant="body2">Resume umair.Doc</Typography>
              <Typography variant="body1">26 Jun 17 05:32</Typography>
            </Box>
            <Box>
              <img src="/images/download.png" alt="" />
            </Box>
          </Box>
          <Box className="displaySpacebetween" style={{ width: "100%" }} mt={2}>
            <Box>
              <Typography variant="body2">Resume umair.Doc</Typography>
              <Typography variant="body1">26 Jun 17 05:32</Typography>
            </Box>
            <Box>
              <img src="/images/download.png" alt="" />
            </Box>
          </Box>
        </Box> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h5">Badges</Typography>

        {data?.userBadge && data?.userBadge.length > 0 ? (
          <></>
        ) : (
          <Typography
            variant="body1"
            style={{ marginTop: "10px", textAlign: "center", fontSize: "18px" }}
          >
            No Data Found
          </Typography>
        )}
        {/* <Typography variant="body1" style={{ marginTop: "10px" }}>
          I pursued a B.Tech in Computer Science at J.C. Bose University of
          Science and Technology, YMCA. As a Blockchain Developer in Chandigarh,
          I specialized in Ethereum and Hyperledger technologies. This path
          allowed me to develop expertise in smart contracts, NFTs, and DeFi
          Protocols, with valuable experience in the field.
        </Typography>

        <Box className={classes.imageDiv} mt={2}>
          <img src="/images/certif.png" />

          <img src="/images/certif.png" />

          <img src="/images/certif.png" />
        </Box> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box mt={2} className="displayColumnCenter">
          <Typography variant="h5" style={{ fontFamily: "Public Sans" }}>
            Contact
          </Typography>
          <Typography variant="body2" style={{ maxWidth: "556px" }}>
            Through the Digital Skills Marketplace, enterprises and universities
            gain the ability to directly engage and connect with talented
            students possessing digital skills, fostering collaboration and
            opportunity within the digital realm.
          </Typography>
          <Button
            variant="containedPrimary"
            className={classes.reqbtn}
            onClick={() => addWatchlist()}
          >
            REQUEST FOR WATCHLIST
          </Button>
          <Typography
            variant="body2"
            textAlign="center"
            style={{ color: error ? "red" : success ? "green" : "initial" }}
          >
            {error || success || ""}
          </Typography>
        </Box>
      </TabPanel>
    </div>
  );
}
