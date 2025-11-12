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
  ListItemIcon,
  Paper,
  IconButton,
} from "@material-ui/core";

import clsx from "clsx";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.dark,
    marginTop: 50,
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
                      GyanBatua Lite Paper
                    </Typography>
                    <Box></Box>
                  </Box>

                  <Box className="scroller">
                    <List>
                      <Typography variant="h5">Introduction</Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Welcome to GyanBatua – Your Skills Wallet! GyanBatua is an innovative
                          Blockchain-enabled Learning Record Management platform designed to empower
                          individuals across diverse fields to showcase their skills, explore new opportunities, and
                          seamlessly navigate the world of learning and employment.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <List>
                      <Typography variant="h5">Vision and Mission</Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Vision Statement:
                          Transforming Learning, Enriching Lives: Our vision for GyanBatua is to be the leading platform for lifelong learning and skill development, transforming the way individuals acquire knowledge, showcase their talents, and pursue their passions. We envision a world where every learner has access to personalized learning experiences, real-world skills, and meaningful opportunities for growth and success.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                        
                      </ListItem>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Mission Statement:
                          Empowering Skills, Unlocking Opportunities: Our mission at GyanBatua is to empower
                          individuals to harness their skills and expertise, envisioning the ultimate knowledge
                          wallet, and unlocking boundless global opportunities. We are committed to bridging the
                          gap between skills and opportunities, connecting learners with a diverse range of
                          educational resources, career pathways, and professional development opportunities.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">GyanBatua Features</Typography>
                      <Typography variant="h5">
                        1. Blockchain-Enabled Learning Records
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua leverages blockchain technology to provide secure, immutable records of
                          learning achievements. Each user possesses a unique Blockchain Secured Digital ID
                          containing a live resume with dynamic updates of skills and activities"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        {" "}
                        2. AI-Powered Matchmaking
                      </Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Our AI matchmaking system connects users with customized opportunities for
                          scholarships, internships, jobs, apprenticeships, projects, and partnerships. Complex
                          algorithms ensure precise matching based on skills and qualifications across multiple
                          industries"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3. Skills Wallet and Unique QR Code
                      </Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua creates a Skills Wallet for users, generating a unique QR code that acts as a
    gateway to their latest skills, qualifications, and achievements. This innovative approach
    replaces traditional resumes and offers immediate access to a user's professional
    profile.
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        4. Activity-Based Gyan Coins
                      </Typography>

                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Users earn Activity-Based Gyan Coins through various platform activities. These coins
                          can be redeemed at the Skills Marketplace to acquire new skills, access educational
                          assets, and participate in challenges, making skill development more interactive and
                          rewarding.
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">5. Skill Marketplace</Typography>

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
                          Coins and digital payments.e.
    "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">GyanBatua Ecosystem</Typography>
                      <Typography variant="h5">1. Skills Challenges</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua offers a variety of AI-based Skills Challenges that users can take to discover
                          and enhance their skills. Challenges cover multiple domains and are repeatable,
                          incentivizing users with Activity-Based Gyan Coins
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        2. Employer's Connect
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Employers registered at GyanBatua can keep a watchlist of selected users' learning and
                          skill journeys through smart contracts. They may offer internships, projects, job
                          opportunities, and post openings for all to join, creating a dynamic employer-user
                          connection..
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3. Digital Health Initiatives
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua, in collaboration with partner Centers of Excellence, facilitates digital health
                          initiatives in the community. The platform aims to provide digital technology-based
                          health assistance, catering to diverse needs such as rare diseases, differently-abled
                          individuals, and economically weaker communities."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <List>
                      <Typography variant="h5">
                        GyanBatua Launch Plan
                      </Typography>
                      <Typography variant="h5">
                        Vision Statement Alignment
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Ensure alignment of GyanBatua's features with the platform's vision
                          and mission.                        
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Regularly review the platform's features and
                          enhancements against the established vision and mission.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Establish a strong and diverse user community on GyanBatua.
                          .                        
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Implement marketing strategies to attract users from
                            different skill domains and industries.
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Enhance the blockchain and AI capabilities of GyanBatua for improved
                          user experiences.
                                                 
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Conduct regular technology updates and improvements
                          based on user feedback.
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Expand the Skills Marketplace with a variety of educational assets.
                       
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Collaborate with content providers to add diverse
                          e-books, research papers, and courses to the Skills Marketplace
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Actively engage users with regular Skills Challenges and incentivize
                          participation.                     
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Launch and promote new AI-based Skills Challenges with
                          attractive rewards.
                          
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Strengthen employer-user connections and increase opportunities for
                          users.
                                               
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Enhance the Employer's Connect feature, promote
                          employer engagement, and encourage job postings.
                          
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Objective: Implement and promote the Digital Health Initiatives in collaboration
                          with partner Centers of Excellence.
                                               
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textPrimary",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="● Monthly Activity: Conduct awareness campaigns and initiatives to support digital health within the community.
                            
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">Conclusion</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua is not just a platform; it's a transformative journey for individuals seeking to
                          showcase their skills, explore opportunities, and connect with a global community. With
                          its innovative features, blockchain technology, and AI-driven capabilities, GyanBatua is
                          poised to redefine the landscape of skill development and talent exploration"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Join us on this exciting journey as we revolutionize the way skills are recognized,
                          learned, and traded. GyanBatua – Your Skills Wallet, Your Gateway to Global
                          Opportunities!"
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
