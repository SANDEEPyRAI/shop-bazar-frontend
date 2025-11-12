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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
      // height: "686px",
      paddingRight: "10px",
      "&::-webkit-scrollbar": {
        width: "7px",
        height: "25px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(8, 86, 204, 1)",
        borderRadius: "8px",
        height: "25px",
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
      fontSize: "30px",
    },
    "& h5": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "500",
      marginTop: "8px",
    },
  },
}));

const TermsAndCondition = ({ className }) => {
  const classes = useStyles();

  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className={clsx(classes.hero)}>
      {/* <Container maxWidth={false}> */}
      <Container maxWidth>
        <Paper elevation={1}>
          {/* <Container maxWidth="md"> */}
            <Container maxWidth>
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
                    >
                      <ArrowBackIcon
                        color="rgba(0, 0, 0, 1)"
                        onClick={goBackHandler}
                      />
                      <Typography color="primary" className="back">
                        Back
                      </Typography>
                    </Box>
                    <Typography align="center" variant="h1" className="ppHead">
                      Terms and conditions
                    </Typography>
                    <Box></Box>
                  </Box>

                  <Box mt={3} className="scroller">
                    <Typography color="textPrimary" className="lastup">
                      Last updated on: September 5, 2023
                    </Typography>
                    <Typography color="textPrimary" className="lastup">
                      Website Covered: www.gyanbatua.com
                    </Typography>

                    <List>
                      <ListItem dense={true} alignItems="flex-start">
                        <Typography
                          className={classes.itemText}
                          primary="“Gyan Batua” or “we” is committed to protecting user (also referred as “you”) privacy as outlined below. This document, along with the Terms of Use, outlines different ways that will interact with user data. Gyan Batua performs the actions with data from those who visit or use our website https://GyanBatua.com, applications and other products.

User acknowledges and gives consent to this data collection and to our Privacy Policy as a whole by using our Website, Services and Products.
."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                      Acceptance of Terms
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0" }}
                          className={classes.itemText}
                          primary="By accessing and using the Gyan Batua platform, you agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These terms constitute a legal agreement betweenyou and Gyan Batua, governing your use of our services and interactions with the platform. Ifyou do not agree with any part of these terms, kindly refrain from using our services."
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
                      ></ListItem>
                    </List>
                    <Typography variant="h5">
                     User Responsibilities
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="As a user of Gyan Batua, you are responsible for maintaining the confidentiality of your account
                          credentials and any activities conducted under your account. You must use the platform solely
                          for lawful purposes and refrain from engaging in any illegal or harmful activities that could
                          jeopardize the integrity and reputation of Gyan Batua"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                     Intellectual Property
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="All content and materials on Gyan Batua, including but not limited to logos, trademarks, text,graphics, images, and software, are protected by ntellectual property laws and international copyright treaties. Gyan Batua retains all rights, title, and interest in the platform and its content.
                          You may not use, modify, reproduce, distribute, or create derivative works based on any content without explicit permission from Gyan Batua.
                          
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">Data Privacy</Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="At Gyan Batua, we prioritize the security and privacy of user data. By using Gyan Batua, you
                          consent to the collection, storage, and processing of your personal information in accordance
                          with our Privacy Policy. We assure you that your data will be handled with utmost care and will
                          not be shared with any third parties without your consent, except as required by law.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">User Content</Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="You retain ownership of the content you submit to the platform, such as comments, reviews, and
                          contributions. However, by posting content on Gyan Batua, you grant us a worldwide,
                          royalty-free, non-exclusive license to use, reproduce, and distribute such content for
                          platform-related purposes. Rest assured, we will always credit you as the author of your
                          contributions.
                          
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                     Prohibited Activities
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          className={classes.itemText}
                          primary="You must not engage in any activities that disrupt or interfere with the functioning of Gyan Batua
                          or infringe upon the rights of others. Prohibited activities include, but are not limited to,
                          spamming, hacking, distributing malware, posting offensive content, or engaging in any illegal or
                          unethical behavior.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">Third-Party Links</Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          className={classes.itemText}
                          primary="Gyan Batua may contain links to third-party websites for your convenience. However, these
                          links are provided solely as a reference and do not imply any endorsement or affiliation with the
                          linked sites. We are not responsible for the content or practices of these external sites. Use
                          them at your own discretion and be mindful of their respective terms and conditions.
                          
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                     Termination of Services
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Gyan Batua reserves the right to terminate or suspend any user account or services at its
                          discretion, without prior notice, if any violation of these Terms and Conditions is detected. We
                          may also take appropriate legal actions in case of severe breaches of our terms.
                          

"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                    Disclaimer of Warranties
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="While we strive to provide accurate and reliable information, Gyan Batua does not warrant the
                          completeness, accuracy, or reliability of the content on the platform. The information provided is
                          for general informational purposes only and should not be considered as professional advice.
                          Users are encouraged to verify the information independently before making any decisions
                          based on it.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                   Limitation of Liability
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="In no event shall Gyan Batua, its officers, employees, or affiliates be liable for any direct,
                          indirect, incidental, consequential, special, or exemplary damages arising from your use of the
                          platform or any content therein. Gyan Batua shall not be responsible for any losses or damages
                          resulting from unauthorized access to or alteration of your data"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="h5">
                     Governing Law and Jurisdiction
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="These Terms and Conditions are governed by the laws of [Country/Region], and any disputes
                          shall be subject to the exclusive jurisdiction of the courts of [Country/Region]. Any legal action
                          against Gyan Batua must be commenced within one year after the cause of action arises."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="h5">
                    Changes to Terms and Conditions
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Gyan Batua reserves the right to modify these Terms and Conditions at any time, with or without
                          notice. Updated versions will be posted on the platform, and your continued use of Gyan Batua
                          constitutes acceptance of the modified terms. We encourage you to review these terms
                          periodically for any updates.
                          
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="By proceeding with the use of Gyan Batua, you acknowledge that you have read, understood,
                          and agree to these Terms and Conditions. We value your trust and are committed to providing a
                          safe and enriching experience on our platform. If you have any questions or concerns, please
                          reach out to our support team for assistance."
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

export default TermsAndCondition;
