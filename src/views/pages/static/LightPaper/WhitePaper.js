
import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";

import clsx from "clsx";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("md")]: {
      paddingBottom: 60,
    },
    "& .scroller": {
      overflowY: "scroll",
      height: "686px",
      paddingRight: "10px",
      "&::-webkit-scrollbar": {
        width: "7px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(8, 86, 204, 1)",
        borderRadius: "8px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
      },
    },
    "& .lastup": {
      color: "rgba(38, 38, 38, 1)",
      fontWeight: 400,
      fontSize: "16px",
    },
    "& .back": {
      color: "rgba(99, 104, 128, 1)",
      fontWeight: 400,
    },
    "& .ppHead": {
      color: "rgba(38, 38, 38, 1)",
      fontSize: "30px !important",
    },
    "& h5": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "500",
      marginTop: "8px",
    },
  },
}));

const PrivacyPolicy = ({ className }) => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [updatedDateString, setUpdatedDateString] = useState("");
  const [createdDateString, setCreatedDateString] = useState("");
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className={clsx(classes.hero)}>
      <Container maxWidth={false}>
        <Paper elevation={1}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                  className="privacy"
                >
                  <Box className="displaySpacebetween">
                    <Box
                      aria-label="go back"
                      className="displayStart"
                      gridGap={10}
                    ></Box>
                    <Typography align="center" variant="h1" className="ppHead">
                      GyanBatua White Paper
                    </Typography>
                    <Box></Box>
                  </Box>

                  <Box className="scroller">
                    <List>
                      <Typography variant="h5">Executive Summary</Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Welcome to the GyanBatua White Paper, where we unravel the intricacies of our
                          groundbreaking platform designed to revolutionize skill development, learning, and
                          talent exploration. GyanBatua, a fusion of Gyan (knowledge) and Batua (wallet) in
                          Hindi, is a Blockchain-enabled Learning Record Management System (LRMS) developed
                          by Mobiloitte. This document provides an in-depth exploration of the platform's vision,
                          features, technology stack, ecosystem components, use cases, tokenomics, security
                          measures, community governance, roadmap, and a compelling conclusion.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <List>
                      <Typography variant="h5">Table of Contents</Typography>

                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Introduction"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Vision and Mission listitem text"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Key Features
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Technology Stack"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Ecosystem Components"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Use Cases"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Tokenomics
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Security and Privacy"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Community Governance
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Roadmap
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Conclusion

                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">1. Introduction</Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua stands at the forefront of a paradigm shift in education and skill
                          development. It represents more than just a learning platform; it is an ecosystem where
                          knowledge converges with opportunity. Built on the premise of blockchain technology,
                          GyanBatua ensures the immutability and security of learning records while leveraging
                          artificial intelligence (AI) to foster seamless connections between skills and global
                          prospects."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        2. Vision and Mission
                      </Typography>
                      <Typography variant="h5">Vision Statement:</Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Transforming Learning, Enriching Lives: Our vision for GyanBatua is to be the leading
                          platform for lifelong learning and skill development, transforming the way individuals
                          acquire knowledge, showcase their talents, and pursue their passions. We envision a
                          world where every learner has access to personalized learning experiences, real-world
                          skills, and meaningful opportunities for growth and success.Empowering individuals to harness their skills in cutting-edge technologies, envision
                          the ultimate knowledge wallet, and unlock boundless global opportunities."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">Mission Statement:</Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Empowering Skills, Unlocking Opportunities: Our mission at GyanBatua is to empower
                          individuals to harness their skills and expertise, envisioning the ultimate knowledge
                          wallet, and unlocking boundless global opportunities. We are committed to bridging the
                          gap between skills and opportunities, connecting learners with a diverse range of
                          educational resources, career pathways, and professional development opportunities"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">3. Key Features</Typography>
                      <Typography variant="h5">
                        3.1 Blockchain-Enabled Learning Records
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua integrates blockchain to create an immutable ledger of learning
                          achievements. Each user possesses a unique Blockchain Secured Digital ID containing
                          a live resume with dynamic updates of skills and activities.
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3.2 AI-Powered Matchmaking
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="The platform's AI matchmaking system is a sophisticated engine that connects users
                          with customized opportunities. Through complex algorithms, GyanBatua ensures
                          precise matching based on skills and qualifications across multiple industries.
                          
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3.3 Skills Wallet and Unique QR Code
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua introduces a Skills Wallet for users, generating a unique QR code that acts
                          as a gateway to their latest skills, qualifications, and achievements. This innovative
                          approach replaces traditional resumes and offers immediate access to a user's
                          professional profile."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3.4 Activity-Based Gyan Coins
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Users are incentivized through Activity-Based Gyan Coins earned for various platform
                          activities. These coins can be redeemed at the Skills Marketplace to acquire new skills,
                          access educational assets, and participate in challenges, making skill development
                          more interactive and rewarding."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3.5 Skill Marketplace
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua's Skill Marketplace revolutionizes the skills landscape by providing a unique
                          platform for trading and acquiring educational assets. Users can access e-books,
                          research papers, and activities, and take paid, free, or subsidized courses through Gyan
                          Coins and digital payments"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">4. Technology Stack</Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua's foundation is built on a robust and scalable technology stack to ensure a
                          secure and seamless user experience."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">4.1 Blockchain</Typography>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Blockchain Platform: Ethereum"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Smart Contracts: Solidity"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Consensus Mechanism: Proof of Authority (PoA)

    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        4.2 Artificial Intelligence
                      </Typography>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Machine Learning Framework: TensorFlow"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● AI Algorithms: Neural Networks, Decision Trees
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Natural Language Processing (NLP): spaCy


    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <Typography variant="h5">4.3 Web Technologies</Typography>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Frontend Framework: React.js"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Backend Framework: Node.js"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Database: MongoDB

"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Communication: WebSocket for real-time updates


"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <Typography variant="h5">4.4 Security</Typography>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Cryptography: AES for data encryption"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Authentication: OAuth 2.0
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Secure Communications: HTTPS
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <Typography variant="h5">
                        5. Ecosystem Components
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua's ecosystem comprises various components that work harmoniously to
                          deliver a comprehensive learning and skill development experience.
                          
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● User Profiles"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Skills Wallet
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Skills Marketplace
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● AI Matchmaking Engine
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Blockchain Records

"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Activity-Based Gyan Coins

"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">6. Use Cases</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua's versatility allows it to cater to a wide range of use cases, including but not
                          limited to:                     
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: "0", flexDirection: "column" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Individual Skill Showcase
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Educational Asset Trading
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Opportunity Matching
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="● Digital Health Initiatives

    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">7. Tokenomics</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="The GyanBatua ecosystem is powered by the Gyan Coin (GYC). Gyan Coins are earned
                          through platform activities and can be used for various purposes within the ecosystem,
                          including course enrollment, accessing premium content, and participating in
                          challenges.
                                               
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        8. Security and Privacy
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua places the utmost priority on the security and privacy of user data.
                          Blockchain ensures the integrity of records, while robust encryption and authentication
                          mechanisms safeguard user information."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
