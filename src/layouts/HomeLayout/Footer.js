import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube"; // 👈 Added YouTube

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "linear-gradient(135deg, #C19A6B, #D4AF37)", // Royal gold gradient
    color: "#fff",
    padding: theme.spacing(6, 2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 2),
    },
  },
  brand: {
    fontFamily: theme.typography.h4.fontFamily,
    fontWeight: 700,
    fontSize: "28px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  sectionTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  link: {
    display: "block",
    color: "#fff",
    marginBottom: theme.spacing(0.5),
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    "& .MuiIconButton-root": {
      color: "#fff",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
  bottomBar: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={4}>
        {/* Brand & Social */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.brand}>𝕾𝕹 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓𝖘</Typography>
          <Box className={classes.socialIcons}>
            <IconButton href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://pinterest.com" target="_blank">
              <PinterestIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank">
              {" "}
              {/* YouTube */}
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.sectionTitle}>Quick Links</Typography>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="shop" className={classes.link}>
            Shop
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Link href="/" className={classes.link}>
            Contact
          </Link>
        </Grid>

        {/* Categories */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.sectionTitle}>Categories</Typography>
          <Link href="#" className={classes.link}>
            Silk Dresses
          </Link>
          <Link href="#" className={classes.link}>
            Cotton Dresses
          </Link>
          <Link href="#" className={classes.link}>
            Festive Dresses
          </Link>
          <Link href="#" className={classes.link}>
            Handcrafted
          </Link>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.sectionTitle}>Contact Us</Typography>
          <Typography>info@sncollections.com</Typography>
          <Typography>+91 76687 31244</Typography>
          <Typography>India</Typography>
        </Grid>
      </Grid>

      <Box className={classes.bottomBar}>
        © {new Date().getFullYear()} 𝕾𝕹 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓𝖘. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
