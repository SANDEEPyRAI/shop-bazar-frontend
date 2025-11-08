import React, {
  forwardRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
import { Helmet } from "react-helmet";
import { useLocation, useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
// import ReactGa from "react-ga";
// import Logo from "src/components/Logo";
import { toast } from "react-hot-toast";
import { FaYoutube, FaInstagram } from "react-icons/fa";

import {
  Box,
  Container,
  Link,
  Typography,
  Grid,
  ListItem,
  List,
  IconButton,
  makeStyles,
  Paper,
  Divider,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { AuthContext } from "src/context/Auth";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    position: "relative",
    zIndex: 1,
    padding: "10px 0px 0",
    overflow: "hidden",
    "& .MuiListItem-gutters": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    "& .MuiListItem-root": {
      paddingTop: "0px !important",
    },
    "& .SubText": {
      "& p": {
        width: "100%",
        maxWidth: "286px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
    },
    "& h4": {
      margin: "8px 0px",
    },
    "& .footerBackground": {
      marginBottom: "16px",
      position: "relative",
      padding: "40px 200px 40px 200px",
      [theme.breakpoints.down("md")]: {
        padding: "40px 100px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "40px 50px",
      },
    },
    "& .rightSideContent": {
      width: "100%",
      maxWidth: "695px",
      paddingRight: "20px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        paddingRight: "0px",
      },
    },
    "& .flexButton": {
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
      "& .MuiOutlinedInput-input": {
        padding: "13.5px 14px",
      },
    },
    "& .socialIcon": {
      background: theme.palette.background.whiteTab,
      border: `1px solid ${theme.palette.divider}`,
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .flexIcon": {
      marginTop: "30px",
      gap: "10px",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    "& .rightGrid": {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginTop: "20px",
      },
    },
  },

  listbox: {
    background: "none",
    border: "none",
    margin: "0px",
    "& a": {
      color: theme.palette.text.secondary,
      display: "block",
      fontSize: "16px",
      fontWeight: "400",
      paddingTop: "4px",
      fontFamily: "'Roboto Condensed', serif",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
      "&:hover": {
        color: "none",
      },
    },
  },
}));
let inicialPageUrl = window.location.href;
const Page = forwardRef(
  (
    {
      children,
      title = "",
      description = "",
      keyword = "",
      footer = true,
      ...rest
    },
    ref
  ) => {
    const location = useLocation();
    // const themeSeeting = useContext(SettingsContext);
    const user = useContext(AuthContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [marketplaceCategories, setMarketplaceCategories] = useState([]);
    let url1 = "/static/Gyan-Batua-Logo2.png";
    const [pageUrl, setPageUrl] = useState(inicialPageUrl);
    const classes = useStyles();
    // const sendPageViewEvent = useCallback(() => {
    //   if (process.env.NODE_ENV !== "development") {
    //     ReactGa.pageview(location.pathname);
    //   }
    // }, []);

    const getAllMarketplaceCategories = async () => {
      try {
        const res = await Axios({
          method: "GET",
          url: apiConfig.getAllCategory,
        });
        console.log(res, "ghjhj");

        if (res?.data?.responseCode === 200) {
          console.log(res?.data?.result?.categoryName);
          setMarketplaceCategories(res?.data?.result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      setPageUrl(window.location.href);
      // sendPageViewEvent();
    }, [location]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
      getAllMarketplaceCategories();
    }, []);

    const today = new Date();
    const year = today.getFullYear();
    const footerSections = [
      {
        title: "My Account",
        links: [
          { label: "Batua", path: "/" },
          { label: "Watchlist", path: "/" },
          // { label: 'Drops', path: '/create-drop' }
        ],
      },
      {
        title: "Stats",
        links: [
          { label: "Ranking", path: "/ranking" },
          // { label: 'Activity', path: '/activity' }
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", path: "/about-us" },
          { label: "Careers", path: "/careers" },
          // { label: 'Media', path: '/media' },
          { label: "FAQs", path: "/faqs" },

          { label: "Contacts", path: "/contacts" },
        ],
      },
    ];

    const resourcesSections = [
      {
        title: "Resources",
        links: [
          { label: "Blog", path: "/blog" },
          // { label: 'Community', path: '/community' },
          { label: "Partners", path: "/our-partner" },
          // { label: 'Litepaper', path: '/litepaper' },
          // {
          //   label: 'Whitepaper',
          //   path:
          //     '/https://res.cloudinary.com/dm4kmsxee/image/upload/v1705390596/r7udf8rdrcbynppv5j5j.pdf'
          // },
          // { label: 'Platform Specific', path: '/platform-specific' },
          // { label: 'Tax & Fee', path: '/tax-and-fee' },
          { label: "Privacy Policy", path: "/privacy-policy" },
          { label: "Terms & Conditions", path: "/terms-and-conditions" },
          // { label: 'Data Privacy', path: '/data-privacy' }
          // { label: 'Roadmap', path: '/roadmap' }
        ],
      },
    ];

    const marketplaceSections = [
      {
        title: "Marketplace",
        links: [
          "Health and Medicine",
          "Engineering and Technology",
          "Business and Finance",
          "Arts and Design",
          "Education and Training",
          "Information Technology",
          "Legal Services",
          "Trades and Services",
          "Agriculture and Environmental Sciences",
          "Media and Communication",
          "Sports and Fitness",
          "Hospitality and Tourism",
          "Public Service and Government",
          "Research and Development",
          "Arts and Creative Professions",
        ],
      },
    ];

    const learningSections = [
      {
        title: "Learning",
        links: [
          "What is Gyan Batua?",
          "Who can benefit from Gyan Batua",
          "What is Live Resume & My Barcode on Gyan Batua",
          "How do I record my learning journey and what happens next?",
          "How do I activate AI matchmaking engine for me",
          "How do I monetize my skills on Gyan Batua",
          "Navigating the Gyan Batua",
          "Introduction to Gyan Coins",
          "Transaction Fees Explained",
          "What is Gyan Chain for Tracking Skill Ownership and Exchange",
          "How do I secure my Educational Assets on Gyan Batua",
          "Key Differentiators of Gyan Batua",
        ],
      },
    ];

    const handleBatuaClick = () => {
      if (user) {
        history.push("/wallet");
      } else {
        toast.error("Please login first");
      }
    };
    const handleWatchListClick = () => {
      if (user) {
        history.push("/watchlist");
      } else {
        toast.error("Please login first.");
      }
    };

    const checkEmailValidation = async () => {
      if (!email.trim()) {
        setEmailError("Email address is required.");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Please enter a valid email address.");
        return false;
      }

      setEmailError("");
      return true;
    };

    const subscribe = async () => {
      if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        try {
          setIsLoading(true);
          const res = await Axios({
            method: "POST",
            url: apiConfig.subscribe,
            data: {
              email: email,
            },
          });
          if (res.data.responseCode === 200) {
            toast.success(res?.data?.responseMessage);
          } else {
            toast.error(res?.data?.responseMessage);
          }
          setIsLoading(false);
        } catch (error) {
          toast.error(error?.resonse?.data?.responseMessage);
        }
      }
    };

    return (
      <Box>
        <div ref={ref} {...rest}>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keyword} />
            <link rel="canonical" href={pageUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description}></meta>
          </Helmet>
          {children}
          {footer && (
            <Box className={classes.footerSection}>
              <Box>
                <Container maxWidth={false}>
                  <Paper elevation={1} className="footerBackground">
                    <Grid container spacing={2}>
                      <Grid lg={9} md={9} sm={12} xs={12}>
                        <Box className="rightSideContent">
                          <Typography
                            variant="h2"
                            style={{ marginBottom: "10px" }}
                            color="textPrimary"
                          >
                            Never miss an Opportunity, Join our Drops List!
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            Dive into "Gyan Batua" – the pioneering digital
                            wallet and marketplace for skill-based collectibles
                            and exclusive educational content. Empower, record
                            your intellect, purchase, exchange, and immerse in
                            unique learning experiences.
                          </Typography>
                          <Box className="flexButton">
                            <TextField
                              onBlur={() => {
                                checkEmailValidation();
                              }}
                              placeholder="Your email address"
                              variant="outlined"
                              type="email"
                              value={email}
                              required
                              onChange={(e) => {
                                checkEmailValidation();
                                setEmailError("");
                                setEmail(e?.target?.value);
                              }}
                              inputProps={{
                                style: {
                                  height: "20px",
                                  width: "350px",
                                },
                              }}
                            />
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{
                                marginLeft: "10px",
                                width: "150px",
                                borderRadius: "5px",
                              }}
                              onClick={() => {
                                if (checkEmailValidation()) {
                                  subscribe();
                                }
                              }}
                            >
                              Subscribe
                            </Button>
                          </Box>
                          {emailError && (
                            <FormHelperText style={{ color: "red" }}>
                              {emailError}
                            </FormHelperText>
                          )}
                        </Box>
                      </Grid>
                      <Grid lg={3} md={3} sm={12} xs={12} className="rightGrid">
                        <Box>
                          {/* <Box
                            style={{
                              position: 'absolute',
                              left: '90%',
                              top: '-5%'
                            }}
                          >
                            <img
                              style={{ width: '100px' }}
                              src="images/chaticon.png"
                            />
                          </Box> */}

                          <Typography variant="h2" color="textPrimary">
                            Join the community
                          </Typography>
                          <Box className="flexIcon">
                            <Box
                              sx={{
                                border: `1px solid #DDDDDD`,
                              }}
                              className="socialIcon"
                            >
                              <IconButton
                                style={{ background: "transparent" }}
                                href="https://www.facebook.com/gyaanbatua/"
                                target="_blank"
                              >
                                <img src="images/Social/facebookicon.svg" />
                              </IconButton>
                            </Box>
                            <Box className="socialIcon">
                              <IconButton
                                style={{ background: "transparent" }}
                                href="https://twitter.com/GyanBatua"
                                target="_blank"
                              >
                                <img src="images/Social/twittericon.svg" />
                              </IconButton>
                            </Box>
                            <Box className="socialIcon">
                              <IconButton
                                style={{ background: "transparent" }}
                                href="https://www.instagram.com/gyanbatua/"
                                target="_blank"
                              >
                                {/* <img src="images/Social/insta.svg" /> */}
                                <FaInstagram />
                              </IconButton>
                            </Box>
                            <Box className="socialIcon">
                              <IconButton
                                style={{ background: "transparent" }}
                                href=" https://www.linkedin.com/company/gyan-batua/"
                                target="_blank"
                              >
                                <img src="images/Social/linkedinicon.svg" />
                              </IconButton>
                            </Box>
                            <Box className="socialIcon">
                              <IconButton
                                style={{ background: "transparent" }}
                                href="https://www.youtube.com/@gyanbatua"
                                target="_blank"
                              >
                                <FaYoutube color="red" />
                              </IconButton>
                            </Box>
                            <Box className="socialIcon">
                              <IconButton
                                style={{ background: "transparent" }}
                                href="https://in.pinterest.com/GyanBatua/"
                                target="_blank"
                              >
                                <img src="images/Social/discordicon.svg" />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={1}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box>
                          <RouterLink to="/">
                            <img src={url1} style={{ width: "200px" }} />
                          </RouterLink>
                        </Box>{" "}
                        <Box mt={2} mb={1} className="SubText">
                          <Typography variant="body1" color="textSecondary">
                            Gyan Batua is redefining matchmaking for skills.
                            Create your own Skills Wallet, generate a unique QR
                            code, and maintain a Live Resume. Get noticed,
                            showcase your talents, and trade your abilities
                            seamlessly.
                          </Typography>{" "}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Grid container spacing={2}>
                          <Grid item xs={6} sm={3} md={3} lg={3}>
                            {footerSections.map((section) => (
                              <Box key={section.title}>
                                <Typography variant="h4" color="textPrimary">
                                  {section.title}
                                </Typography>
                                <List className={classes.listbox}>
                                  {section.links.map((link) => (
                                    <RouterLink
                                      key={link.label}
                                      to={link.path}
                                      onClick={() =>
                                        link.label === "Batua"
                                          ? handleBatuaClick()
                                          : link.label === "Watchlist"
                                          ? handleWatchListClick()
                                          : null
                                      }
                                    >
                                      <ListItem>{link.label}</ListItem>
                                    </RouterLink>
                                  ))}
                                </List>
                              </Box>
                            ))}
                          </Grid>
                          <Grid item xs={6} sm={3} md={3} lg={3}>
                            {resourcesSections.map((section) => (
                              <Box key={section.title}>
                                <Typography variant="h4" color="textPrimary">
                                  {section.title}
                                </Typography>
                                <List className={classes.listbox}>
                                  {section.links.map((link) =>
                                    link.label === "Whitepaper" ? (
                                      <a
                                        target="_blank"
                                        key={link.label}
                                        href="https://res.cloudinary.com/dm4kmsxee/image/upload/v1705390596/r7udf8rdrcbynppv5j5j.pdf"
                                      >
                                        <ListItem>{link.label}</ListItem>
                                      </a>
                                    ) : link.label === "Litepaper" ? (
                                      <a
                                        target="_blank"
                                        key={link.label}
                                        href="https://res.cloudinary.com/dm4kmsxee/image/upload/v1705395004/jlhcgtnzsmgdxz7cqnlz.pdf"
                                      >
                                        <ListItem>{link.label}</ListItem>
                                      </a>
                                    ) : (
                                      <RouterLink
                                        key={link.label}
                                        to={link.path}
                                      >
                                        <ListItem>{link.label}</ListItem>
                                      </RouterLink>
                                    )
                                  )}
                                </List>
                              </Box>
                            ))}
                          </Grid>

                          <Grid item xs={6} sm={3} md={3} lg={3}>
                            {marketplaceSections.map((section) => (
                              <Box>
                                <Typography variant="h4" color="textPrimary">
                                  {section.title}
                                </Typography>
                                <List className={classes.listbox}>
                                  {marketplaceCategories.map((link) => (
                                    <ListItem
                                      style={{
                                        color: "#adb0bb",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        history.push({
                                          pathname: "view-subcategory",
                                          state: link,
                                        })
                                      }
                                    >
                                      {link.categoryName}
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                            ))}
                          </Grid>

                          <Grid item xs={6} sm={3} md={3} lg={3}>
                            {learningSections.map((section) => (
                              <Box>
                                <Typography variant="h4" color="textPrimary">
                                  {section.title}
                                </Typography>
                                <List className={classes.listbox}>
                                  {section.links.map((link) => {
                                    return (
                                      <ListItem
                                        onClick={() => {
                                          sessionStorage.setItem(
                                            "faqTab",
                                            "Learning"
                                          );
                                          history.push("faqs");
                                        }}
                                      >
                                        {" "}
                                        <a
                                          style={{
                                            color: "#546e7a",
                                            cursor: "pointer",
                                          }}
                                          href="/faqs"
                                        >
                                          {link}
                                        </a>
                                      </ListItem>
                                    );
                                  })}
                                </List>
                              </Box>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>
              </Box>
            </Box>
          )}
        </div>
      </Box>
    );
  }
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
