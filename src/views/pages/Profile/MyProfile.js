import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    background: "#fff",
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    maxWidth: 600,
  },
  title: {
    fontWeight: 700,
    color: "#C19A6B",
    marginBottom: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  btnPrimary: {
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    color: "#fff",
    borderRadius: 8,
    padding: "10px 30px",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
    },
  },
}));

const MyProfile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Typography variant="h6" className={classes.title}>
        My Profile
      </Typography>
      <TextField
        fullWidth
        label="Full Name"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        fullWidth
        label="Email Address"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        fullWidth
        label="Phone Number"
        variant="outlined"
        className={classes.input}
      />
      <Button className={classes.btnPrimary}>Save Changes</Button>
    </Box>
  );
};

export default MyProfile;
