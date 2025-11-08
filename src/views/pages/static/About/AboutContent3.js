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
        // padding: "16px",
      },
      " & .accord":{
        alignItems:'center'
       },
      "& h6": {
        fontWeight: 500,
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

const AboutContent3 = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
     title:'Gyan Batua features: Designed for sustainability and growth',
     
     summary:<span>Subscription and Freemium Services:  A platform with premium features for an enhanced experience.<br></br>
     <br/>
      Certification and Course Fees:  Earnings from specialized courses and certifications.<br/><br/>
     
     B2B Partnerships: Tailored services and direct talent placement with businesses and educational institutions.<br/><br/>
    
     Advertising and Sponsorships: Targeted advertising opportunities within the platform.
     
     Gyan Batua offers a dynamic approach to learning and professional development through its freemium model, designed to cater to a wide array of users - from students to skilled professionals (Gyanis) and enterprises seeking talent. Here’s an overview of our pricing structure and the unique value it brings to our users:

     </span>
    },
    {
        title:"Freemium Access:",
       
      summary:<span> Free Membership: Joining Gyan Batua is completely free, allowing users immediate access to a range of learning materials and the opportunity to engage with a community of professionals.<br/><br/>
       
      Joining Bonus: New users are welcomed with Gyan Coins, which serve as an incentive for joining and can be used within the Gyan Batua platform, our NFTised marketplace for skills.<br/><br/>
        
        Skill-Based Updates: Regular updates and recommendations are provided to users, with the option to earn more Gyan Coins through engagement and learning activities.</span>


    },
      {
        title:'Advanced Learning Options:',
        
        summary:<span>Elite Membership plans: Bronze, Silver, Gold, Platinum, Diamond  Titanium starting Rs. 101/month.<br/><br/>
       
        Paid Courses and Classes: For those looking to further their knowledge, Gyan Mandi offers paid courses and classes. Users may use their Gyan Coins or pay directly to subscribe to these advanced learning materials.<br/><br/>
      
       Hybrid Mentoring Sessions: Gyanis affiliated with the I&AI CoEs have the option to subscribe to tailor-made mentoring sessions at Rs 500/month. These sessions are designed to align with their curriculum and connect them with various professional opportunities, including internships and jobs.<br/><br/>
      
       Live Project Participation: Users can enhance their skills and gain practical experience by participating in live projects, which also come with certification upon completion. This option is available for a fee, providing a real-world application of learned skills.<br/><br/>
     
      Incentivized Learning: Gyan Coins Rewards: All learning activities, including attendance in courses and sessions, are incentivized with Gyan Coins. These coins can be redeemed on Gyan Mandi for accessing further learning resources or participating in exclusive projects.<br/><br/>
   Gyan Batua offers a dynamic approach to learning and professional development through its freemium model, designed to cater to a wide array of users - from students to skilled professionals (Gyanis) and enterprises seeking talent. Here’s an overview of our pricing structure and the unique value it brings to our users.
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

export default AboutContent3;
