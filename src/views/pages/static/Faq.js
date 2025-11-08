import {
  Box,
  makeStyles,
  Typography,
  IconButton,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const useStyles = makeStyles((theme) => ({
  FaqBox: {
    zIndex: "999",
    "& h4": {
      fontFamily: "Clash Display",
      fontWeight: "500",
      fontSize: "30px",
      color: "#262626",
      marginLeft: "20px",
    },
    "& h5": {
      fontFmily: "Clash Display",
      fontWeight: "400",
      fontSize: "24px",
      color: "#262626",
    },
    "& h6": {
      fontWeight: "400",
    },
    "& .backBtn": {
      border: "1px solid rgba(0, 0, 0, 0.08)",
    },
    "& .paperBox": {
      padding: "40px 50px 287px !important",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 15px 50px !important",
      },
      "& .FaqTopHeading": {
        fontFamily: "Calistoga",
        color: theme.palette.text.primary,
      },
    },

    "& .MuiAccordionSummary-root": {
      background: theme.palette.background.default,
      borderTop: "1px solid rgba(0, 0, 0, 0.10)",
    },
    "& .MuiPaper-elevation1": {
      padding: "5px",
    },
  },
  AccordionFaq: {
    "& .MuiAccordionSummary-expandIcon.Mui-expanded": {
      transform: "rotate(45deg) !important",
    },
    "& svg": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "0 !important",
    },

    "& .FaqTitle": {
      color: theme.palette.primary.dark,
    },
    "& .FaqDescription": {
      color: "rgba(8, 5, 21, 0.60)",
      fontSize: "16px",
    },
  },
}));

export default function Faq() {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const FaqData = [
    {
      title: "The most popular question",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "The most popular question",
      summary:
        "Another example of a frequently asked question with a detailed answer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "The most popular question",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "The most popular question",
      summary:
        "Another example of a frequently asked question with a detailed answer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "The most popular question",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "The most popular question",
      summary:
        "Another example of a frequently asked question with a detailed answer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "The most popular question",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "The most popular question",
      summary:
        "Another example of a frequently asked question with a detailed answer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <Box className={classes.FaqBox}>
      <Paper elevation={1} className="paperBox">
        <Box mb={2}>
          <Typography variant="h2" className="FaqTopHeading">
            Have a question?
          </Typography>
        </Box>
        <Divider style={{ height: "2px", marginBottom: "20px" }} />
        <Box>
          {FaqData.map((item, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className={classes.AccordionFaq}
              key={index}
            >
              <AccordionSummary
                expandIcon={<GoPlus />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" className="FaqTitle">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className="FaqDescription">
                  {item.summary}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
