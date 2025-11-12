import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  AccordionBox: {
    "& h2": {
      fontWeight: 500,
      marginBottom: "25px",
      lineHeight: "38px",
      color: theme.palette.secondary.main,
    },
    "& .AccordionFaq": {
      padding: "8px 12px",
      background: "#F0F0F0",
      borderRadius: "8px",
      borderBottom: "1px solid grey",
      "&:before": {
        background: "none",
      },
      "& .MuiIconButton-label": {
        background: "#FFFFFF",
        borderRadius: "50%",
      },
      "& h4": {
        fontWeight: 500,
      },
    },
  },
}));

const Standard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const FaqData = [
    {
      title: "How do I get started?",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How do I get started?",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How do I get started?",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How do I get started?",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Box className={classes.AccordionBox}>
      <Typography variant="h2">Community Standards</Typography>
      {FaqData.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChangeAccordion(`panel${index}`)}
          className="AccordionFaq"
          key={index}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveIcon />
              ) : (
                <AddIcon style={{ color: "rgba(32, 33, 35, 1)" }} />
              )
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h4" color="secondary">
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
  );
};

export default Standard;
