

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
    "& .content":{
     fontFamily:'Roboto Condensed',
     fontSize:'18px',
     fontWeight:'500',
     color:'#0856CC',
     lineHeight:'21.09px',
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
                    <Box aria-label="go back" className="displayStart" gridGap={10}>
                      <ArrowBackIcon
                        color="rgba(0, 0, 0, 1)"
                        onClick={goBackHandler}
                      />
                      <Typography color="primary" className="back" >
                        Back
                      </Typography>
                    </Box>
                    <Typography style={{color:'#262626',fontFamily:'Roboto Condensed',fontWeight:'700',fontSize:'30px',lineHeight:'35.16px'}}>
                      Privacy Policy
                    </Typography>
                    <Box></Box>
                  </Box>

                  <Box mt={3} className="scroller">
                    <Typography variant="h5" color="textPrimary" className="lastup"  paragraph>
                      Last updated on: September 5, 2023
                    </Typography>

                    {/* <List>
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
                    </List> */}
                    <Typography className="content" >
                   1. Privacy Policy
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
                          primary="We collect the following categories of personal data:

."
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
                          primary="At Gyan Batua, we highly prioritize the protection of your privacy and the confidentiality of your
                          personal information. We are committed to ensuring that your data is handled securely and
                          responsibly. This comprehensive Privacy Policy outlines the practices we employ when
                          collecting, using, and safeguarding your information on our platform.


."
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
                          style={{ padding: 0 }}
                          className={classes.itemText}
                          primary="We may collect various types of information from you, including but not limited to your name,
                          email address, contact details, and other relevant data, as part of our registration and interaction
                          processes. Additionally, we may gather data related to your usage of Gyan Batua, such as IP
                          address, device information, and browsing activity. Rest assured, we only collect the necessary
                          data essential for providing you with the best possible user experience.
                          

."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                   2. Information Collection
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
                          primary="We may collect various types of information from you, including but not limited to your name,
                          email address, contact details, and other relevant data, as part of our registration and interaction
                          processes. Additionally, we may gather data related to your usage of Gyan Batua, such as IP
                          address, device information, and browsing activity. Rest assured, we only collect the necessary
                          data essential for providing you with the best possible user experience."
                          


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
                          primary="Information necessary for compliance “Know your customer” procedure: your name, nationality, citizenship, home address, email address, personal ID code; copies of identity and other documents, selfie photo, date of birth etc.
                            Information necessary for compliance with Anti-Money Laundering Regulations and Procedures : financial data, ownership and source of funds and/or wealth, transaction data and the nature of using the service, e.g. transaction sums, transaction history, counter-parties, bank account, and card number(s) and account holders and other information which we may request in order to provide our services and comply with regulations.


."
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
                          primary="Data that identifies you such as your IP address, language, country, browser type, and version, time zone setting, browser plug-in types, some location information about where you might be, operating system and version, page response times, download errors, how long you stay on web pages, what you do on those pages, how often, and other actions;


                            Other personal data you share with us or personal data that we may legally obtain from some other sources.

."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                  3.  Use of Information
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
                          primary="The information we collect serves multiple purposes, all geared towards enhancing your
                          experience on Gyan Batua. We use your data to personalize the content you see, tailor services
                          and features to your preferences, and offer relevant recommendations based on your activities.
                          Moreover, we may use your contact details to communicate with you, respond to your inquiries,
                          provide updates, and deliver promotional materials that align with your interests."
                          


                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                  4.  Data Security
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
                          primary="We recognize the critical importance of data security, and we take every measure to safeguard
                          your information from unauthorized access, alteration, or disclosure. To maintain the highest
                          level of security, we implement industry-standard encryption protocols, conduct regular system
                          audits, and employ stringent access controls. Our dedicated security team remains vigilant in
                          protecting your data and ensuring the confidentiality of your personal information"


                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                   5. Cookies and Tracking Technologies
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
                          primary="Gyan Batua uses cookies and similar tracking technologies to optimize user experience and
                          gather essential usage statistics. Cookies allow us to remember your preferences, streamline
                          navigation, and enhance the overall functionality of the platform. Tracking technologies provide
                          us with valuable insights into user behavior, helping us improve our services and tailor offerings
                          to better suit your needs."
                          
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                   6. Third-Party Sharing
                    </Typography>
                    
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          className={classes.itemText}
                          primary="Your personal information is treated with the utmost respect, and we do not share it with third
                          parties without your explicit consent. However, to ensure the smooth functioning of our platform
                          and provide specific services, we may engage trusted third-party service providers. These
                          partners are contractually obligated to maintain strict confidentiality and comply with our data
                          privacy policies."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                  7. Data Retention
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
                          primary="We only retain your personal information for as long as necessary to fulfill the purposes for
                          which it was collected and as required by applicable laws. When you choose to delete your
                          account or request the removal of your data, we will promptly handle your request, subject to
                          any legal obligations or legitimate business reasons."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                  8.  Children's Privacy
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                          className={classes.itemText}
                          primary="Gyan Batua is intended for adult users and not designed for children under the age of 13. We do
                          not knowingly collect personal information from individuals under this age, and if we become
                          aware of any such data, we promptly remove it from our records."
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
              
                    <Typography className="content">
                  9.  Your Rights
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
                          primary="Your privacy is essential to us, and we respect your rights to control your personal information.
                          You have the right to access, update, and correct your data stored on Gyan Batua. Moreover,
                          you may request the deletion or restriction of your information, subject to any legal
                          requirements.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                
                    <Typography className="content">
                   10. Changes to Privacy Policy
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
                          primary="As we continuously strive to improve our services, this Privacy Policy may be updated from time
                          to time. Any modifications will be posted on this page, and by continuing to use Gyan Batua
                          after such changes, you indicate your acceptance of the updated Privacy Policy.
                          "
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "textSecondary",
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography className="content">
                   11. Contact Us
                    </Typography>
                    <List>
                      <ListItem
                        style={{ padding: 0 }}
                        dense={true}
                        alignItems="flex-start"
                      >
                        <ListItemText
                         
                           className={classes.itemText}
                          primary="If you have any questions, concerns, or requests regarding our Privacy Policy or data practices,
                          please feel free to contact our dedicated support team. We are here to promptly address your
                          inquiries and ensure that your privacy remains a top priority."
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
