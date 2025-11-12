import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { CiSearch } from "react-icons/ci";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  AccordionBox: {
    marginTop: "1rem",
    marginBottom:'2rem',
    "& .AccordionFaq": {
      padding: "0px 0 0px 0 !important",
      // borderLeft: "7px solid rgba(8, 86, 204, 1)",
      marginBottom: "10px",
      borderRadius: "0 8px 0 0",
      borderTop: "1px solid rgba(0, 0, 0, 0.25)",
      borderRight: "1px solid rgba(0, 0, 0, 0.25)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
      color: theme.palette.secondary.main,

      "& .MuiAccordionSummary-root.Mui-expanded ": {
        background: "#0856CC",
        borderRadius: "0 8px 0 0",
        color: "#FFFFFF",
        borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
      },
      "& .MuiAccordionDetails-root": {
        padding: "16px",
      },
      "& h6": {
        fontWeight: 500,
      },
      " & .accord":{
       alignItems:'center',
       paddingLeft:'22px'
      },
      "& .MuiTypography-body2": {
        fontFamily: "Public Sans",
        lineHeight: "22px",
        fontSize: "16px",
        fontWeight: 300,
        
        
      },
    },
  },
}));

const AboutContent2 = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
      title: "Addressing Challenges of Traditional Platforms: Gyan Batua distinguishes itself by",
     
      summary:<span>
    Overcoming CV Inefficiencies: Uses blockchain for skill verification, streamlining the hiring process.<br/><br/>
   
    Enhanced Professional Networking: Requires blockchain-based KYC, ensuring real, verified profiles, unlike existing platforms.<br/><br/>
   
    Encouraging Professional Development: Offers rewards for skill development and AI-driven career guidance.<br/><br/>
    
    Expanded User Engagement: Enhances visibility and engagement through shareable Digital Profiles: Users share a unique QR code on social media for their dynamic resume.<br/><br/>
     
    Professional Growth Support:  AI suggestions for aligning learning with in-demand skills.
     </span>
    },
   
   
    
    
  ];
  return (
    <Box className={classes.AccordionBox}>
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
                <RemoveIcon style={{ color: "rgba(255, 255, 255, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(32, 33, 35, 1)" }} />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{
              borderLeft:
                expanded === `panel${index}`
                  ? "1px solid rgba(0, 0, 0, 0.25)"
                  : "7px solid rgba(8, 86, 204, 1)",

              borderRadius: !expanded && "5px 0px 0px 5px",
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails  className='accord'>
            
            <Typography variant="body2" className="FaqDescription">
              {item.summary}
            </Typography>
          </AccordionDetails>
         
      
        </Accordion>
      ))}
    </Box>
  );
};

export default AboutContent2;
