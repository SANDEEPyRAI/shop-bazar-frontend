import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,

  Tabs,
  Tab,
 
} from "@material-ui/core";
import FAQLearning from "./FAQLearning";
import FAQgeneral from "./FAQgeneral";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom";
import FAQAI from "./FAQI&Ai";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingBottom: "25px",
    "& .ImgBox": {
      background: "url(images/FAQ/FAQ_main.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "250px",
      width: "100%",

      "& h1": {
        fontFamily: "Petemoss",
        lineHeight: "107px",
        fontWeight: 400,
        fontSize: "80px",
        color: "rgba(255, 255, 255, 1)",
        "@media(max-width:767px)": {
          fontSize: "55px !important",
        },
        "@media(max-width:1007px)": {
          lineHeight: "70px",
        },
        "@media(max-width:700px)": {
          lineHeight: "60px",
        },
      },
      "& .mainGidItem": {
        flexDirection: "column",
        marginLeft: "5%",
      },
    },
    "& .SubContainer": {
      display: "flex !important",
      gap: "35px",
      marginTop: "5rem",
      "@media(max-width:767px)": {
        marginTop: "3rem",
        gap: "25px",
      },
      "@media(max-width:450px)": {
        marginTop: "1rem",
        gap: "20px",
      },

      "& h1": {
        fontSize: "60px",
        fontWeight: 700,
        color: theme.palette.secondary.main,
        textAlign: "center",
      },
      "& .InputBox": {
        textAlign: "center",
        width: "834px",
        "& .FormBox": {
          width: "100%",
          "& .MuiOutlinedInput-adornedStart": {
            borderRadius: "15px",
          },
        },
      },
      "& .QuestionBox": {
        "& h1": {
          fontSize: "50px",
          fontWeight: 700,
          lineHeight: "58px",
        },
      },
      "& .ButtonBox": {
        "& .MuiTab-wrapper": {
          fontSize: "20px",
          fontWeight: 500,
        },
      },
    },
  },
}));

const Faq = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const initialValue = location.state ? location.state.value : 0;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      history.push("/faq", { value: 0 });
    } else if (newValue === 1) {
      history.push("/faq", { value: 1 });
    }
  };

  return (
    <Box className={classes.mainBox}>
   
        <Grid container
            lg={12}
            md={12}
            sm={12}
            xs={12}
             className="ImgBox">
          <Grid
            item
           
            className="mainGidItem displayCenter"
          >
            <Typography variant="h1"> frequently Asked Questions</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}></Grid>
        </Grid>
        <Container className="SubContainer displayColumnCenter">
          <Box>
            <Typography variant="h1">Frequently Asked Questions</Typography>
          </Box>

          <Box className="ButtonBox">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="General" />
              <Tab label="Learning" />
              <Tab label="I & AI CoE" />
            </Tabs>
          </Box>

          {value === 0 && <FAQgeneral />}
          {value === 1 && <FAQLearning />}
          {value === 2 && <FAQAI />}
        </Container>
      </Box>

  );
};

export default Faq;
