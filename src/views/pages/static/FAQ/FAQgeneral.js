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
      borderRadius: "8px 7px 8px 8px",
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

const FAQgeneral = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const FaqData = [
    {
      title: "What is Gyan Batua?",
      summary:
        "Gyan Batua is a blockchain-integrated platform designed to document and verify users' learning journeys and skills in a secure and reliable environment. By requiring KYC verification on the blockchain for all users, it ensures the authenticity of each account, promoting genuine human interactions and trust.",
    },
    {
      title: "How does GyanBatua differ from traditional learning platforms?",
      summary:
        "Traditional job portals are often overwhelmed with CVs that may not accurately represent individual skills, making the hiring process difficult and unreliable. Gyan Batua tackles this issue by ensuring that all skills uploaded by users are verified through blockchain technology. This not only authenticates the skills but also allows stakeholders to confirm them, providing a more trustworthy and streamlined hiring process.",
    },

    {
      title:
        "How does Gyan Batua differ from professional networking sites like LinkedIn?",
      summary:
        "Unlike LinkedIn, Gyan Batua mandates blockchain-based KYC verification for all users, creating a platform where each account is verified to be a real person. This process ensures a trustworthy environment for professional networking and skill sharing. Moreover, Gyan Batua incentivizes users to document their learning journey through Gyan Coins, adding a unique value proposition that LinkedIn does not offer.",
    },

    {
      title:
        "How does Gyan Batua encourage continuous learning and skill development?",
      summary:
        "Users are rewarded with Gyan Coins for every verified skill they upload, which can be used to purchase additional courses on the platform. This incentivization, coupled with the representation of courses as NFTs and a Web 3.0 style UX, promotes continuous learning and keeps users engaged in their professional developmen",
    },

    {
      title:
        "What unique features does Gyan Batua offer job seekers and employers?",
      summary:
        "Gyan Batua utilizes AI to match users' skills with job opportunities, streamlining the hiring process for employers. It also encourages users to share educational content and books they've read, giving employers a holistic view of potential candidates. Skills are converted into a dynamic, QRcode-accessible resume, making it easier for job seekers to share their credentials and for employers to find the right talent",
    },
    {
      title: "How can Gyan Batua help with professional development?",
      summary:
        "By providing AI-driven skill suggestions tailored to the job market's needs, Gyan Batua helps bridge the gap between the skills job seekers have and the skills employers are looking for. This guidance helps users focus their learning on areas that will enhance their employability and professional growth.",
    },

    {
      title: "Can users share their Gyan Batua profile outside the platform?",
      summary:
      <span>Yes, users can share their unique QR code on social media, linking directly to their live resume hosted on Gyan Batua. This feature allows for effortless sharing and updating of their professional achievements, leveraging their social networks for greater visibility and opportunity.<br></br>
      By addressing the reliability issues prevalent in traditional job portals and providing a verifiable and incentivized learning and skills-sharing ecosystem, Gyan Batua offers a comprehensive solution to modern professional development and employment challenges</span>
      
    },

    {
      title: "Who can benefit from using GyanBatua?",
      summary:
        "GyanBatua is designed to benefit learners, educators, employers, and organizations seeking to enhance their skills, expand their knowledge, and access new opportunities in a rapidly evolving digital landscape.",
    },
    // {
    //   title:
    //     "What sets GyanBatua apart from other skill development platforms?",
    //   summary:
    //     "GyanBatua stands out for its innovative features, including its AI matchmaking engine, Live Resume functionality, and rewards system. It offers users a unique and dynamic platform for skill development and career advancement.",
    // },
    {
      title: "Is GyanBatua accessible to users worldwide?",
      summary:
        "Yes, GyanBatua is accessible to users worldwide, providing a global platform for learning, collaboration, and networking across borders and industries.",
    },
    {
      title:
        "Can organizations and businesses leverage GyanBatua for employee training?",
      summary:
        "Absolutely! GyanBatua offers tailored solutions for organizations and businesses looking to enhance employee skills, foster professional development, and drive innovation in the workplace.",
    },
    {
      title: "How does GyanBatua contribute to lifelong learning?",
      summary:
        "GyanBatua promotes lifelong learning by offering a diverse range of courses, resources, and opportunities for individuals to continuously develop and update their skills throughout their careers.",
    },
    {
      title: "What are the key features of GyanBatua's platform?",
      summary:
        "GyanBatua's platform boasts a range of innovative features, including AI-driven matchmaking, dynamic resume building, skill tracking, rewards system, and access to a diverse library of learning resources.",
    },
    {
      title: "Is GyanBatua committed to data privacy and security?",
      summary:
        "Yes, GyanBatua prioritizes data privacy and security, implementing stringent measures to safeguard user information and ensure compliance with global privacy regulations.",
    },
    {
      title: "How can I get started with GyanBatua?",
      summary:
        "Getting started with GyanBatua is easy! Simply create an account, set up your profile, and start exploring the platform's features and resources to embark on your learning journey.",
    },
    {
      title: "Can users customize their learning experience on GyanBatua?",
      summary:
        "Yes, GyanBatua allows users to customize their learning experience by selecting courses, setting learning goals, and tracking their progress in real-time. It empowers users to pursue their interests and achieve their learning objectives at their own pace",
    },
    {
      title: "What future developments can users expect from GyanBatua?",
      summary:
        "GyanBatua is committed to continuous innovation and improvement, with plans to introduce new features, expand its course offerings, and forge partnerships to enhance the learning experience for its users. Stay tuned for exciting updates and developments!",
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

export default FAQgeneral;
