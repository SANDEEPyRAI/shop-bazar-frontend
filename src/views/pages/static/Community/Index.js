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

  const history = useHistory();

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
                      GyanBatua Community Standards
                    </Typography>
                    <Box></Box>
                  </Box>
                  <Box mt={1} className="scroller">
                    <List>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Welcome to GyanBatua – Your Skills Wallet! As a vibrant community of learners, educators, and
                          professionals, we value the diversity of skills, experiences, and perspectives that each member
                          brings. To foster a positive and inclusive learning environment, we have established the
                          following Community Standards:
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <List>
                      <Typography variant="h5">
                        1. Respect and Inclusivity
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="GyanBatua is committed to creating a respectful and inclusive space for all users. Treat fellow
                          community members with kindness, understanding, and empathy. Embrace diversity and be
                          open to different perspectives and backgrounds.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        2. Integrity and Authenticity
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Maintain the highest standards of integrity and authenticity. Provide accurate information about
                          your skills, achievements, and learning journey. Avoid misrepresentation or the use of false
                          credentials.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        3. Collaboration and Knowledge Sharing
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Encourage collaboration and knowledge sharing among community members. Share your
                          expertise, experiences, and insights to contribute to the collective learning of the community.
                          Foster a spirit of cooperation and support.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        4. Positive Engagement
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Promote positive engagement and constructive feedback. Use respectful language and
                          communicate in a manner that encourages a healthy exchange of ideas. Be open to receiving
                          feedback and appreciate the learning opportunities it presents.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        5. Compliance with Policies
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Adhere to GyanBatua's terms of service, privacy policy, and any other applicable policies.
                          Respect copyright and intellectual property rights. Report any content that violates these
                          policies.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        6. Cybersecurity Awareness
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Prioritize the security of your account and personal information. Be cautious about sharing
                          sensitive details. Report any suspicious activities or attempts of phishing promptly.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        7. Inappropriate Content
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="Avoid posting content that is offensive, harmful, or inappropriate. This includes but is not
                          limited to hate speech, harassment, discrimination, or any content that violates community
                          standards.
                          
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        8. Responsible Use of AI and Blockchain
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Engage responsibly with AI and blockchain features. Understand that the technology is meant to
                          enhance learning and skill development. Avoid misuse or attempts to exploit the platform.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        9. Reporting Concerns
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="If you come across any content or behavior that violates our community standards, please
                          report it promptly. GyanBatua is committed to maintaining a safe and positive learning
                          environment.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">
                        10. Continuous Improvement
                      </Typography>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="GyanBatua is a dynamic platform that evolves with user feedback. Provide suggestions and
                          feedback to help us improve and enhance the learning experience for everyone.
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
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="By joining GyanBatua, you agree to abide by these Community Standards. Let's build a
                          supportive and collaborative community where skills are celebrated, and opportunities are
                          unlocked!
                          "
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
