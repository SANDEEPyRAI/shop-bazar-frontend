import { Box, Button, Dialog, Typography, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  ThankYouDialogContainer: {
    "& .fullBox": {
      width: "100%",
      maxWidth: "410px",
      [theme.breakpoints.down("xs")]:{
        padding:"0 24px",
      },
    },
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      maxWidth: "520px !important",
    },
  },
}));
const ThankYouDialog = ({ thankYou, handleThankUClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.ThankYouDialogContainer}
      open={thankYou}
      onClose={handleThankUClose}
    >
      <Box className="displayCenter ">
        <Box className="fullBox">
          <Box style={{ textAlign: "center" }}>
            <img src="images/thank-you 1.png" alt="thak" />
          </Box>
          <Typography
            variant="body2"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              textAlign: "center",
            }}
          >
            Thank you for your interest in partnering with Indicchain's D-CoE
            Initiative. We've successfully received your details. Our team will
            soon connect with you to explore how we can enhance the learning
            experiences at your institute using the Gyan Batua platform.
            Together, we're set to create a brighter future for your students!
          </Typography>

          <Box mt={4.5} mb={6}>
            <Button variant="containedPrimary" fullWidth>
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ThankYouDialog;
