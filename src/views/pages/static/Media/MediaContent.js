import React from "react";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AccordionBox: {
    marginTop: "1rem",
    marginBottom: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("lg")]: {
      width: "73%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "73%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  datevise: {
    fontSize: '18px',
    color:'black',
    marginTop:'30px',
   
  },
  span: {
    fontSize: '20px',
    lineHeight: '50px',
    color:'	#2081f9',
    textDecoration: "none",
  },
  month:{
    fontSize:'20px',
    color:'black',
    lineHeight: '50px',
  },
  press:{
    fontSize:'30px',
    lineHeight:'60px',
    textAlign:'center',
    width:'96%',
    marginLeft:'20px'
  },
}));

const MediaContent = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      month: "February  2023",
      items2: [
        {
          datevise: "February 17, 2023",
          url: "/media1",
          summary: "Center of Excellence Unveiled at RSMT, Varanasi to Elevate IT Education and Employment"
        },
        {
          datevise: "February 19, 2023",
          items2: [
            {
              url: "/media3",
              summary: "VITS College Collaborates to Open New Centre of Excellence: Shaping the Future of Technology Education for Youth"
            },
            {
              url: "/media7",
              summary: "Empowering Regional Youth: VITS College and Mobiloitte Technologies Forge Partnership for Technological Excellence"
            },
            {
              url: "/media8",
              summary: "VITS College Unveils IndicChain Center of Excellence for Emerging Technologies"
            },
            {
              url: "/media9",
              summary: "Technological Renaissance: VITS College and Mobiloitte Technologies Unveil IndicChain Center of Excellence"
            },
            {
              url: "/media2",
              summary: "Satna Welcomes 'IndicChain Center of Excellence': A Cradle for Tech Innovators"
            },
          ]
        },
      ]
    },
    {
      month:"March 2023",
      items2: [
        {
          datevise: "March 17, 2023",
          url: "/media4",
          summary: "Journalism University Unveils Center of Excellence in AI and Machine Learning"
        },
        {
          url: "/media5",
          summary: "Journalism University to Launch AI and Machine Learning Excellence Center"
        },
        {
          url: "/media6",
          summary: "Journalism University to Offer AI and ML Training with New Digital Center"
        },
      ]
    }
  ];

  return (
    <Box className={classes.AccordionBox}>
      <Typography className={classes.press}>Press Releases</Typography>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChangeAccordion(`panel${index}`)}
        >
          <AccordionSummary  
            expandIcon={expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className={classes.month}>{item.month}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {item.items2.map((subItem, j) => (
                <div key={j}>
                  {subItem.datevise && (
                    <Typography variant="body2" className={classes.datevise}>{subItem.datevise}</Typography>
                  )}
                  {subItem.summary && (
                    <Typography variant="body2">
                      <Link to={subItem.url} className={classes.span}>{subItem.summary}</Link>
                    </Typography>
                  )}
                  {subItem.items2 && subItem.items2.map((subSubItem, k) => (
                    <Typography key={k} variant="body2">
                      <Link to={subSubItem.url} className={classes.span}>{subSubItem.summary}</Link>
                    </Typography>
                  ))}
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default MediaContent;
