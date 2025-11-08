import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  makeStyles,
  Button,
  Hidden,
} from "@material-ui/core";

const teamDetalData = [
  {
    total: " 150+",
    name: "Team Members",
  },
  {
    total: " 25+",
    name: "Institutes",
  },
  {
    total: "16000+",
    name: "Registrations",
  },
  {
    total: "2+",
    name: " Offices",
  },
];
const useStyles = makeStyles((theme) => ({
  memberBox: {
    position: "relative",
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
    },
    "& .circleBox": {
      backgroundColor: "rgba(8, 86, 204, 0.8)",
      width: "584px",
      height: "584px",
      borderRadius: "100%",
      position: "absolute",
      top: "50%",
      right: "30%",
      transform: "translate(50%, -50%)",
      zIndex: "2",
      padding: "20px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        right: "28%",
      },
      "@media(max-width:1180px)": {
        top: "45%",
        width: "550px",
        height: "500px",
        right: "30%",
      },

      [theme.breakpoints.down("sm")]: {
        top: "13%",
        right: "50%",
        width: "calc(100% - 150px)",
        height: "224px",
        padding: "22px",
        borderRadius: "0%",
      },
      [theme.breakpoints.down("sm")]: {
        position: "static",
        width: "calc(100% - 44px)",
        height: "auto",
        transform: "none",
        marginBottom: "10px",
        borderRadius: "0",
        padding: "20px 22px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      position: "static",
      paddingTop: "0px",
    },
    "& h2": {
      fontSize: "50px",
      color: "#fff",
      fontFamily: "Roboto Condensed",
      fontWeight: 500,
      lineHeight: "50px",
      letterSpacing: "0em",
      marginBottom: "16px",
    },

    "& h1": {
      fontSize: "50px",
      color: "#fff",
      marginBottom: "16px",
      marginLeft: "18px",
      fontFamily: "Roboto Condensed",
      fontWeight: 500,
      lineHeight: "50px",
      letterSpacing: "0em",

      [theme.breakpoints.down("md")]: {
        fontSize: "35px",
        lineHeight: "40px",
      },
      [theme.breakpoints.only("sm")]: {
        marginBottom: "0px",
        marginLeft: "0px",
      },
    },
    "& h5": {
      margin: "10px 0px",
      color: "#FFFFFF",
      maxWidth: "100%",
      marginLeft: "18px",
      fontFamily: " Roboto Condensed",
      fontSize: " 16px",
      fontWeight: 400,
      lineHeight: "25px",
      letterSpacing: "0em",
      textAlign: " left",
      [theme.breakpoints.only("sm")]: {
        margin: "5px 0px",
      },
    },
    "& .teamMemberBox": {
      backgroundColor: "#0856CC",
      padding: "80px 0px",
      position: "relative",
      zIndex: "999",
      "& h1": {
        textAlign: "center",
      },
      "& p": {
        color: "#fff",
      },
    },
  },
  teamcard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const LifeAtGyan = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.memberBox}>
        <Container maxWidth={false}>
          <Grid container >
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <img
                src="images/celebration.jpg"
                alt="celebration.jpg"
                width="100%"
                marginBottom="5px"
              />
            </Grid>
          </Grid>
          <Box className="circleBox">
            <Typography variant="h1" style={{ fontWeight: "500" }}>
              Life At Gyanbatua
            </Typography>
            <Typography variant="h5">
              Life at Gyan Batua transcends the conventional job experience,
              offering a journey rich in growth, teamwork, and breakthroughs.
              Our essence is captured in our lively culture, the unity of our
              collaborative endeavors, and our relentless pursuit of excellence.
              Joining our team means becoming an integral part of a dynamic
              network of enthusiasts committed to redefining the realms of
              education and technology.
            </Typography>
            <Typography variant="h5">
              Here, it's more than just work; it's about belonging to a
              community that champions diversity, fosters collaboration, and
              highly regards both personal and professional development.
            </Typography>
          </Box>
        </Container>
        {/* <Box className="teamMemberBox">
          <Container maxWidth="md">
            <Grid container spacing={2}>
              {teamDetalData?.map((data, i) => (
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TeamCard data={data} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box> */}
      </Box>
    </>
  );
};
export default LifeAtGyan;

const TeamCard = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.teamcard}>
        <Typography
          variant="h2"
          style={{ fontWeight: "600", fontSize: "35px" }}
        >
          {data.total}
        </Typography>
        <Typography variant="body2">{data.name}</Typography>
      </Box>
    </>
  );
};
