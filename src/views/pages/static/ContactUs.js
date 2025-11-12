import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  contactUsContainer: {
    "& .leftContactBox": {
      "& h2": {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        marginBottom: "19px",
      },
      "& h6": {
        fontSize: "14px",
        color: theme.palette.text.primary,
        width: "100%",
        maxWidth: "664px",
      },
      "& .contactinfo": {
        gap: "30px",
        "& .contactinfoIn": {
          gap: "20px",
          "& .contactinfoInChild": {
            "& .nameContactUS": {
              color: theme.palette.secondary.main,
              fontWeight: 400,
              lineHeight: "26px",
            },
            "& .infoContactUS": {
              color: theme.palette.text.primary,
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "26px",
              width: "100%",
              maxWidth: "322px",
            },
          },
        },
      },
    },
  },
}));
const ContactUs = () => {
  const classes = useStyles();

  const contactData = [
    {
      image: <img src="images/ContactCall.png" alt="call" />,
      name: "Email",
      info: "connect@gyanbatua.com",
    },
    {
      image: <img src="images/ContactMail.png" alt="mail" />,
      name: "Phone Number",
      info: "+91-9999525801",
    },
    {
      image: <img src="images/ContactLocation.png" alt="location" />,
      name: "Location",
      info: "D-115, Okhla Phase -1, New Delhi - 110020",
    },
  ];
  return (
    <Container className={classes.contactUsContainer} maxWidth={"lg"}>
      <Box mt={5} mb={10}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="leftContactBox">
              <Typography variant="h2">We are here for you!</Typography>
              <Typography variant="h6">
                Your feedback, questions, and inquiries are important to us. We
                are here to assist you and provide the information you need.
                Feel free to reach out anytime, and we’ll get back to you as
                soon as possible.
              </Typography>
              <Box mt={5} className="contactinfo displayColumnStart">
                {contactData.map((item) => {
                  return (
                    <Box className="displayStart contactinfoIn">
                      {item.image}
                      <Box className="contactinfoInChild">
                        <Typography variant="body2" className="nameContactUS">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" className="infoContactUS">
                          {item.info}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084.41486783378!2d77.2782538428171!3d28.52306400689034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14e8eaf7fb5%3A0xa1a88f8cca006fd0!2sMobiloitte%20Technologies%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sca!4v1707295328011!5m2!1sen!2sca"
              width="100%"
              frameborder="0"
              style={{ border: 0, height: "402px" }}
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
