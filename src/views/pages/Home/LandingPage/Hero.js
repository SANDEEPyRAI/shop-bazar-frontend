import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroSection: {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(4),
    background: "linear-gradient(135deg, #F4E3B2, #C19A6B)", // Gold gradient
    color: theme.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      minHeight: "70vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      minHeight: "80vh",
    },
  },

  heroTitle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: theme.typography.h1.fontSize,
    lineHeight: theme.typography.h1.lineHeight,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },

  heroSubText: {
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    fontWeight: theme.typography.body1.fontWeight,
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },

  heroButton: {
    borderRadius: "50px",
    padding: "12px 35px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
      boxShadow: "0 0 12px rgba(212,175,55,0.5)",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "14px",
      padding: "10px 20px",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.heroSection}>
      <Typography className={classes.heroTitle}>
        Divine Dresses for Laddu Gopal Ji
      </Typography>
      <Typography className={classes.heroSubText}>
        Bring home elegance with our handcrafted premium dresses. Perfect for
        festive occasions and daily adorations.
      </Typography>
      <Button className={classes.heroButton}>Shop Now</Button>
    </Box>
  );
};

export default Hero;
