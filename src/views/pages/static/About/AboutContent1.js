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
      "& .accord":{
        alignItems:'center'
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

const AboutContent1 = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
      title: " For Skilled Users:",
      
      summary:<span>BlockchainVerified Skills: Authenticates and bolsters the marketplace credibility of professional skills. <br/><br/>
        
         Learning Incentives: Rewards skill acquisition and verification with Gyan Coins, fostering continuous professional growth.<br/><br/>
       
         Personalized Job Matchmaking: AI-driven matching of user skills with fitting job opportunities, streamlining the search for jobs, internships,        apprenticeships, and gigs.Dynamic, Shareable Resumes: Provides QRcoded, live resumes for enhanced visibility and easy sharing.<br/><br/>

         Dynamic, Shareable Resumes: Provides QRcoded, live resumes for enhanced visibility and easy sharing.         
         </span>
    },
    {
      title:'For Skill Seekers and Employers:',
     
      summary:<span>Verified Talent Pool: Access to a pool of professionals with blockchain-endorsed skills, ensuring reliability.<br/><br/>
     
     Efficient Recruitment: AI tools that simplify the hiring process by matching skills.<br/><br/>
     
     Skills Marketplace: A vibrant community platform for exchanging digital skills and educational content.
      </span>
    },
    {
      title:'For Universities and Colleges:',
      
      summary: <span>I & AI CoEs: Multifaceted CoE to boost AI-based learning, industry connect.<br/><br/>
     
     Curriculum Enhancement: Resources to update academic offerings with industry demands on real time basis.<br/><br/>
      
      Student Skill Verification: Enhances academic credentials by verifying student skills for better placements.<br/><br/>
    
   Direct Talent Placement: Bridges the gap between education and employment through enterprise collaboration.
      </span>
    }
   
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
          <AccordionDetails className='accord'>
          
            <Typography variant="body2" className="FaqDescription">
              {item.summary}
            </Typography>
          </AccordionDetails>
         
        </Accordion>
      ))}
    </Box>
  );
};

export default AboutContent1;
