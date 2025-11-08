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

const FAQAI = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
      title: "What is the Gyan Batua I&AI CoE?",
      summary:
        "The Gyan Batua Innovation & AI Centre of Excellence (I&AI CoE) is a dedicated initiative designed to bridge the gap between academic learning and industry demands. It focuses on skill matchmaking, curriculum enhancement, and promoting innovation through collaborative research, specifically leveraging AI and blockchain technologies",
    },
    {
      title: "How does the I&AI CoE facilitate skills matchmaking?",
      summary: (
        <span>
          The CoE employs an AI-driven engine to connect the supply and demand
          for skills, offering pathways to scholarships, internships, jobs, and
          apprenticeships. The action plan includes <br /> <br />Free Enrolment:
          Encouraging students and faculty to join the platform at no cost.
          <br /><br /> Profile Creation:Participants create profiles, listing their
          skills and job preferences.
          <br /><br />
          AI Matchmaking:The AI engine analyzes profiles to match participants
          with suitable opportunities in their chosen locations.
        </span>
      ),
    },
    {
      title: "What strategies are in place for skills enhancement?",
      summary: (
        <span>
          {" "}
          Skills enhancement at the CoE is achieved through:-
          <br />
          <br />
          Curriculum-Connect: Aligning academic content with industry
          requirements and emerging technologies.
          <br />
          <br />
          Expert Interaction:Facilitating hybrid classes and discussions with
          industry experts.
          <br />
          <br />
          Action Plan: Engaging in joint curriculum discussions with faculty to
          map out future educational pathways.
        </span>
      ),
    },
    {
      title: "How does the CoE improve skills representation?",
      summary:
        "The CoE introduces an automated resume builder that enhances skill representation through Unique QR-coded resumes: Providing participants with dynamic, easily shareable resumes that accurately reflect their skill set and achievements.",
    },
    {
      title: "Can the CoE assist in digital health initiatives?",
      summary:
        "Yes, GyanBatua rewards users for their learning achievements through Gyan Coins. By completing courses, acquiring new skills, or participating in challenges, users can earn Gyan Coins that can be redeemed for various benefits.",
    },

    {
      title: "How does the CoE support innovation and research? ",
      summary: (
        <span>
          Innovation through research is a cornerstone of the CoE, with efforts
          aimed at
          <br />
          Collaborative Research: Encouraging partnerships and projects in
          emerging technologies to foster innovation.
          <br />
          Local Solutions:Supporting AI-based student projects that address
          local needs and challenges, promoting practical, community-focused
          solutions.
          <br />
        </span>
      ),
    },
    {
      title: "What is the benefit of customized local solutions?",
      summary:
        "Customized local solutions allow CoE participants to: Apply AI and technology in addressing specific challenges within their communities. Develop projects that have a direct impact on local issues, enhancing their practical skills and contributing to societal improvement.",
    },
    // {
    //   title: "Can I connect with other learners and experts on GyanBatua?",
    //   summary:
    //     "Absolutely! GyanBatua encourages collaboration and networking among users. You can connect with fellow learners, industry experts, and potential collaborators to exchange knowledge, insights, and opportunities.",
    // },
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

export default FAQAI;
