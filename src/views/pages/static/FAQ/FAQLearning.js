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

const useStyles = makeStyles((theme) => ({
  AccordionBox: {
    marginTop: "2rem",
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
      "& .MuiTypography-body2": {
        fontFamily: "Public Sans",
        lineHeight: "22px",
        fontSize: "16px",
        fontWeight: 300,
      },
    },
  },
}));

const FAQLearning = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
      title: "How can I record my learning journey on GyanBatua?",
      summary:
        "You can record your learning journey on GyanBatua by adding skills, courses, and certifications to your profile. This helps you track your progress and showcase your achievements..",
    },
    {
      title: "What is the benefit of adding skills to my GyanBatua profile?",
      summary:
        "Adding skills to your GyanBatua profile helps you demonstrate your expertise and qualifications to potential employers and collaborators. It enhances your profile's visibility and credibility.",
    },
    {
      title: "Can I track my progress on GyanBatua?",
      summary:
        "Yes, GyanBatua allows you to track your progress by monitoring the skills you've acquired and the courses you've completed. This feature helps you stay organized and focused on your learning goals.",
    },
    {
      title: "How does GyanBatua's AI matchmaking engine work?",
      summary:
        "GyanBatua's AI matchmaking engine connects users with relevant opportunities based on their skills and qualifications. It analyzes user data to suggest suitable job openings, projects, or collaborations, maximizing potential matches.",
    },
    {
      title: "Can I earn rewards for my learning achievements on GyanBatua?",
      summary:
        "Yes, GyanBatua rewards users for their learning achievements through Gyan Coins. By completing courses, acquiring new skills, or participating in challenges, users can earn Gyan Coins that can be redeemed for various benefits.",
    },
    {
      title: "What are Gyan Coins, and how can I earn them?",
      summary:
        "Gyan Coins are rewards earned for completing learning activities on GyanBatua. You can earn them by actively engaging in the platform, such as completing courses, participating in challenges, or contributing valuable content",
    },
    {
      title: "How can I redeem Gyan Coins?",
      summary:
        "You can redeem Gyan Coins to access premium courses, unlock exclusive content, or participate in special events on GyanBatua. They serve as a form of currency within the platform, rewarding users for their participation and contributions.",
    },
    {
      title: "Is my learning data secure on GyanBatua?",
      summary:
        "Yes, GyanBatua prioritizes the security and privacy of user data. The platform employs robust security measures and encryption protocols to safeguard user information, ensuring confidentiality and peace of mind.",
    },
    {
      title: "Can I connect with other learners and experts on GyanBatua?",
      summary:
        "Absolutely! GyanBatua encourages collaboration and networking among users. You can connect with fellow learners, industry experts, and potential collaborators to exchange knowledge, insights, and opportunities.",
    },
    {
      title: "What is the Live Resume feature on GyanBatua?",
      summary:
        "The Live Resume feature on GyanBatua enables users to create dynamic, up-to-date resumes that reflect their latest skills, qualifications, and achievements. It provides a comprehensive snapshot of your professional profile, enhancing visibility and credibility.",
    },
    {
      title: "How can I access GyanBatua's learning resources?",
      summary:
        "GyanBatua offers a wide range of learning resources, including courses, tutorials, and educational materials, accessible through its online portal. Users can explore topics of interest, acquire new skills, and advance their knowledge conveniently.",
    },
    {
      title:
        "Does GyanBatua offer support for skill development in specific sectors?",
      summary:
        "Yes, GyanBatua caters to various industries and sectors, providing targeted support for skill development. Whether you're interested in technology, business, healthcare, or creative arts, GyanBatua offers resources and opportunities tailored to your needs.",
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

export default FAQLearning;
