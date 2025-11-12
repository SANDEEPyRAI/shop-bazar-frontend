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
  // ListItemText: {
  //   '& .MuiListItem-gutters': {
  //     padding: '0'
  //   }
  // },

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
  // const formattedDate = moment(dateString).format('MMMM D, YYYY');

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className={clsx(classes.hero)}>
      <Container maxWidth>
        <Paper elevation={1}>
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
                    ></Box>
                    <Typography align="center" variant="h1" className="ppHead">
                      Ensuring Data Privacy at GyanBatua:
                    </Typography>
                    <Box></Box>
                  </Box>

                  <Box mt={1} className="scroller">
                    <Typography variant="h5">
                      Safeguarding Your Information
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
                          primary="At GyanBatua, we take data privacy and security seriously. We understand theimportance of protecting your personal information and are committed to maintaining the highest standards of privacy practices. In this comprehensive guide, we'll delve into how we handle your data, the measures we take to safeguard it, and your rights as auser."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                      Understanding Data Privacy
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: "0px !important" }}
                          className={classes.itemText}
                          primary="Data privacy refers to the protection of individuals' personal information from unauthorized access, use, or disclosure. At GyanBatua, we recognize the sensitivity of the data we collect from our users and prioritize their privacy rights."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography variant="h5">
                      Types of Data We Collect
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: "0" }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua collects various types of data to provide personalized services and enhance
                          user experience. These include:"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>

                      <Typography variant="h5">
                        1. Personal Information
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="When you register an account on GyanBatua, we collect basic personal informationsuch as your name, email address, and contact details. This information is essential foraccount creation, authentication, and communication purposes."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">2. Learning Records</Typography>

                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua records your learning journey, including the skills you acquire, courses you enroll in, and activities you participate in. This data helps us tailor our services to your individual needs and track your progress over time."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">3. Usage Data</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We collect usage data related to your interactions with the GyanBatua platform, such as browsing activity, preferences, and device information. This data enables us to analyze user behavior, improve our services, and troubleshoot technical issues."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">How We Use Your Data</Typography>
                      <Typography variant="h5">
                        1. Providing Services
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We use the information we collect to deliver and enhance our services, including user authentication, personalized recommendations, and content delivery. Your data allows us to tailor the GyanBatua experience to your preferences and learning goals.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">2. Communication</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We may use your contact information to send you important updates, notifications, and promotional messages related to GyanBatua. You have the option to opt out of non-essential communications at any time.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">3. Analytics</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We analyze usage data to gain insights into how users interact with our platform,identify trends, and make data-driven decisions about feature development and optimization. This helps us continuously improve the GyanBatua experience for our users.
                          
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
                        {" "}
                        Ensuring Data Security
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua employs robust security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                          
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">1. Encryption</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We use encryption techniques to secure data transmission and storage, ensuring that your information remains confidential and protected against interception.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">2. Firewalls</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="Our systems are equipped with firewalls and intrusion detection systems to prevent unauthorized access and safeguard against cyber threats.
"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">3. Access Controls</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We implement strict access controls and authentication mechanisms to limit access to user data only to authorized personnel with legitimate purposes.
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
                        Your Rights as a User
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="As a user of GyanBatua, you have certain rights regarding your personal information:"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">1. Access</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="You have the right to access and review the personal information we hold about you.
                          You can request a copy of your data and verify its accuracy."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">2. Update</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="You can update or correct your personal information stored on GyanBatua through your
                          account settings. It's important to keep your information accurate and up to date."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                      <Typography variant="h5">3. Delete</Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="You have the right to request the deletion of your personal information from our
                          systems. We will promptly delete your data upon receiving a valid deletion request,
                          subject to certain legal obligations"
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <Typography variant="h5">
                        Transparency and Accountability
                      </Typography>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="GyanBatua is committed to transparency and accountability in our data privacy
                          practices. We regularly review and update our policies and procedures to ensure
                          compliance with applicable privacy laws and regulations.
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
                          primary="At GyanBatua, we prioritize the privacy and security of our users' data. We strive to
                          create a safe and trustworthy environment where individuals can learn, grow, and
                          achieve their goals without compromising their privacy rights. If you have any questions,
                          concerns, or feedback regarding our data privacy practices, please don't hesitate to
                          contact us.
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
