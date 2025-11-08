import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Box,
  Container,
  Menu,
  Paper,
  Dialog,
  Typography,
  TextField,
  Select,
  FormControl,
  Grid,
  Avatar,
  Popover,
  Divider,
  Checkbox,
} from "@material-ui/core";
import "./topbar.css";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "./../../component/Logo";
import { NavLink } from "react-router-dom";
import { UserContext } from "src/context/User";
import { GrCart } from "react-icons/gr";
import InputAdornment from "@material-ui/core/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import clsx from "clsx";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { KeyboardArrowDown } from "@material-ui/icons";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { menuProps } from "src/utils";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AuthContext } from "src/context/Auth";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { toast } from "react-hot-toast";

const headersData = [
  {
    label: "Blockchain",
    href: "https://explorer.gyanbatua.com/",
    img: "/images/blockchain.png",
  },
  {
    label: "About Us",
    href: "/about-us",
    img: "/images/Shape.png",
  },
  {
    label: "Resource Center",
    href: "/resource-center",
    img: "/images/rccenter.png",
  },
  {
    label: "Catlog",
    href: "/catalouge",
    img: "/images/catlog.png",
  },
  {
    label: "Media",
    href: "/media",
    img: "/images/media.png",
  },
  {
    label: "Lite Paper",
    href: "/light-paper",
    img: "/images/litepaper.png",
  },
  {
    label: "FAQ",
    href: "/faq",
    img: "/images/faq.png",
  },
];

// const dropsData = [
//   {
//     label: "Featured",
//     href: "/about",
//     img: "/images/featured.png",
//   },
//   {
//     label: "Partners",
//     href: "/doctors-page",
//     img: "/images/partner.png",
//   },
// ];

const AICEO = [
  {
    label: "About I & AI COES",
    href: "/about",
    img: "/images/existingPartner.png",
  },

  {
    label: "Our Existing Partners",
    href: "/our-partner",
    img: "/images/existingPartner.png",
  },
  // {
  //   label: "I & AI CoEs",
  //   href: "/coes",
  //   img: "/images/existingPartner.png",
  // },
];

const statsData = [
  {
    label: "Ranking",
    href: "/ranking",
    img: "/images/rank.png",
  },
  {
    label: "Activity",
    href: "/activity",
    img: "/images/activity.png",
  },
];

const langData = [
  {
    label: "English",
    href: "/about",
  },
  {
    label: "Hindi",
    href: "/doctors-page",
  },
  {
    label: "Bengali",
    href: "/about",
  },
  {
    label: "Urdu",
    href: "/doctors-page",
  },
  {
    label: "Punjabi",
    href: "/doctors-page",
  },

  {
    label: "Malayalam",
    href: "/doctors-page",
  },
];

const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiMenuItem-root": {
      display: "flex",
      alignItems: "center !important",
    },
  },
  menuButton: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    borderRadius: 0,
    minWidth: "auto",
    color: "#636880",
    padding: "0px 20px",
    textDecoration: " none",
    "@media (max-width: 900px)": {
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      padding: "15px !important",
      height: "51px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "&.active": {
      color: theme.palette.text.primary,
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  appBar: {
    "& .MuiContainer-root": {
      // paddingLeft: "30px",
      // paddingRight: "30px",
      padding: "4px 30px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "16px",
        paddingRight: "4px",
      },

      "@media (min-width: 1280px)": {
        paddingLeft: "40px",
        paddingRight: "40px",
      },
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    padding: " 8px 0px",

    "& .MuiOutlinedInput-root ": {
      height: "44px",
      borderRadius: "10px",
    },
    "& .MuiSelect-icon": {
      // top: "4px",
      fontSize: "x-large",
    },
    "& .MuiList-root": {
      paddingRight: "40px",
    },

    "& .MuiSelect-select ": {
      border: "none",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },

  ecoButton: {
    borderRadius: "10px",
    width: "100%",
    minWidth: "225px",
  },

  signUpBtn: {
    background: "linear-gradient(275deg, #4D164F 4.07%, #681E65 98.21%)",
  },

  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    width: "140px",
  },
  drawerContainer: {
    boxSizing: "border-box",
    padding: "20px",
    height: "100%",
    background: "#ffffff",
    color: "#262626",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& .MuiSelect-select ": {
      border: "none",
    },
  },
  drawericon: {
    color: "#000",
    marginLeft: "0px !important",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
      width: "75px",
    },
  },
  menuMobile: {
    fontSize: "14px",
    fontWeight: "500",
    paddingLeft: "10px",
    "@media (max-width: 500px)": {
      padding: "7px 0",
      width: "100%",
    },
  },
  paper1: {
    background: "black",
    color: "white",
  },

  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  search: {
    height: "40px",
    position: "relative",
    color: "#ABABAB",
    borderRadius: "100px",
    backgroundColor: "#DAF4FF",
    border: "1px solid #fff",
    marginLeft: 20,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  searchIcon: {
    fontSize: "16px",
    padding: "0px 9px",
    color: "#000000",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontSize: "16px",
    width: "100%",
  },
  inputInput: {
    padding: "8px 6px 8px 0px",
    fontSize: "12px",
    marginTop: "-2px",
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "#000",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
  menuButton1: {
    paddingLeft: "0",
  },
  searcBox: {
    backgroundColor: "#DAF4FF",
    borderRadius: " 50px",
  },

  searchdiaogBox: {
    "& .MuiDialogContent-root": {
      minHeight: "calc(100vh - 100px)",
      [theme.breakpoints.only("xs")]: {
        padding: "20px 0 !important",
      },
    },
    "& .MuiDialog-paperScrollPaper": {
      overflowY: "auto",
    },
  },
  selectHeader: {
    "& .MuiInputBase-input": {
      color: "#636880",
      fontSize: "16px",
      paddingTop: "10px",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none !important",
    },
  },

  mobileDraweSelect: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    marginTop: "20px",
  },

  mobileMenuItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "16px",
    color: "#262626",
  },

  transparentTextfield: {
    "& .MuiOutlinedInput-root": {
      background: "rgba(255,255,255,0.2)",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "& .MuiOutlinedInput-input": {
      "&::placeholder": {
        color: "rgba(177, 177, 177, 1)",
      },
    },

    "& .MuiInputBase-input": {
      color: "rgba(255,255,255,0.8)",
    },
  },
  suggestions: {
    color: "#262626",
    position: "absolute",
    backgroundColor: "#fff",
    top: "44px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "400px",
    "& .suggestionslist": {
      cursor: "pointer",
      paddingLeft: "20px",
      "& li": {
        marginBottom: "6px",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const {
    menuMobile,
    menuButton,
    menuButton1,
    divstake,
    toolbar,
    drawerContainer,
    drawericon,
    logoDrawer,
    mainHeader,
    mobileDraweSelect,
    mobileMenuItem,
    transparentTextfield,
  } = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const history = useHistory();
  const auth = useState(AuthContext);

  const profileData = auth?.profileData;

  const [coeSelect, setCoeSelect] = useState("");
  const [mobileExplore, setMobileExplore] = useState("");

  const user = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedPage, setSelectedPage] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const skillMarketPlaceRoute =
    history.location.pathname === "/skill-marketplace" ||
    history.location.pathname === "/drop-details";
  let token = localStorage.getItem("token");

  const handleClose4 = () => {
    setAnchorEl1(null);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleSelectSuggestion = (suggestion, index) => {
    history.push({
      pathname: "/skill-marketplace",
      state: {
        categoryId: suggestion?._id,
        categoryName: suggestion?.categoryName,
        description: suggestion?.description,
        bannerImage: suggestion?.bannerImage,
        categoryImage: suggestion?.categoryImage,
        userId: index + 1,
      },
    });
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handlePush = () => {
    history.push("/skill-marketplace");
  };
  const handlePushed = () => {
    history.push("/drop-details");
  };
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const fetchSuggestions = async () => {
    try {
      const params = {};
      if (searchQuery) {
        params.name = searchQuery;
      }
      const res = await axios({
        method: "GET",
        url: apiConfig.getAllCategory,
        params: params,
      });
      if (res?.data?.responseCode === 200) {
        const filteredSuggestions = res?.data?.result.filter((suggestion) =>
          suggestion.categoryName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      }
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.responseMessage);
      }
    }
  };
  console.log(suggestions, "suggestions");

  const [open1, setOpen1] = useState({ community: false, user: false });
  const anchorRef = { community: useRef(null), user: useRef(null) };
  const StyledMenu = withStyles({
    paper: {
      marginTop: "2px",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: "30px",
            marginRight: "10px",
          }}
        >
          {femmecubatorLogo}
          <FormControl fullWidth style={{ maxWidth: "400px" }}>
            <TextField
              variant="outlined"
              fullWidth
              className={skillMarketPlaceRoute ? transparentTextfield : ""}
              placeholder="Search"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() === "") {
                  setSuggestions([]);
                } else {
                  fetchSuggestions();
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch style={{ fontSize: "x-large" }} />
                  </InputAdornment>
                ),
              }}
            />

            {searchQuery &&
              suggestions.filter((suggestion) =>
                suggestion.categoryName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ).length > 0 && (
                <div className={classes.suggestions}>
                  <ul
                    className="suggestionslist"
                    style={{ listStyleType: "none" }}
                  >
                    {suggestions
                      .filter((suggestion) =>
                        suggestion.categoryName
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            handleSelectSuggestion(suggestion, index)
                          }
                        >
                          {suggestion?.categoryName ?? ""}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
          </FormControl>
        </Box>

        <div
          className={
            skillMarketPlaceRoute ? "optionWrapperTransParent" : "optionWrapper"
          }
        >
          <PopupState variant="popover" popupId="popup-popover0">
            {(popupState) => (
              <div>
                <div
                  className={
                    skillMarketPlaceRoute ? "marketPlaceOption" : "option"
                  }
                  {...bindTrigger(popupState)}
                >
                  <span style={{ whiteSpace: "nowrap" }}>
                    I & AI CoE
                    <KeyboardArrowDown style={{ fontSize: "13px" }} />
                  </span>
                </div>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <div
                    className="dropContainer"
                    style={{ display: "flex", alignitems: "center" }}
                  >
                    <div>
                      <p
                        onClick={() => history.push("/about")}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="/images/Aicoe2.png" alt="" /> About I & AI
                        COEs
                      </p>

                      <p
                        onClick={() => history.push("/our-partner")}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="/images/Aicoe2.png" alt="" /> Our existing
                        partners
                      </p>
                    </div>
                  </div>
                </Popover>
              </div>
            )}
          </PopupState>

          <PopupState variant="popover" popupId="popup-popover1">
            {(popupState) => (
              <div>
                <div
                  className={
                    skillMarketPlaceRoute ? "marketPlaceOption" : "option"
                  }
                  {...bindTrigger(popupState)}
                >
                  <span>
                    Explore
                    <KeyboardArrowDown style={{ fontSize: "13px" }} />
                  </span>
                </div>

                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <div
                    className="dropContainer"
                    style={{ display: "flex", alignitems: "center" }}
                  >
                    <div
                      style={{
                        borderRight: "1px solid #dcdcdc",
                        cursor: "pointer",
                      }}
                    >
                      <p
                        onClick={() =>
                          window.open("https://explorer.gyanbatua.com/")
                        }
                      >
                        <img src="/images/blockchain_img.svg" alt="" />{" "}
                        Blockchain
                      </p>

                      <p onClick={() => history.push("/about-us")}>
                        <img src="/images/about_img.svg" alt="" /> About Us
                      </p>

                      <p onClick={() => history.push("/resource-center")}>
                        <img src="/images/resource_center_img.svg" alt="" />{" "}
                        Resource Center
                      </p>

                      <p onClick={() => history.push("/catalouge")}>
                        <img src="/images/catalouge_img.svg" alt="" /> Catalog
                      </p>
                    </div>
                    <div
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <p onClick={() => history.push("/media")}>
                        <img src="/images/media_img.svg" alt="" /> Media
                      </p>

                      <p onClick={() => history.push("/light-paper")}>
                        <img src="/images/litepaper_img.svg" alt="" /> LitePaper
                      </p>

                      <p onClick={() => history.push("/faq")}>
                        <img src="/images/faq_img.svg" alt="" /> FAQs
                      </p>
                    </div>
                  </div>
                </Popover>
              </div>
            )}
          </PopupState>

          <Button
            variant="body2"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              border: "none",
              padding: " 0px 10px 1px 1px",
              color: skillMarketPlaceRoute ? "rgba(255,255,255,0.8)" : "",
            }}
            onClick={handlePushed}
          >
            Drops
          </Button>

          <Button
            variant="body2"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              border: "none",
              padding: " 0px 10px 1px 1px",
              color: skillMarketPlaceRoute ? "rgba(255,255,255,0.8)" : "",
            }}
            onClick={handlePush}
          >
            Marketplace
          </Button>

          <PopupState variant="popover" popupId="popup-popover3">
            {(popupState) => (
              <div>
                <div
                  className={
                    skillMarketPlaceRoute ? "marketPlaceOption" : "option"
                  }
                  {...bindTrigger(popupState)}
                >
                  <span>
                    Stats
                    <KeyboardArrowDown style={{ fontSize: "13px" }} />
                  </span>
                </div>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <div
                    className="dropContainer"
                    style={{ display: "flex", alignitems: "center" }}
                  >
                    <div>
                      <p
                        onClick={() => history.push("/ranking")}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="/images/stats1.png" alt="" />
                        Ranking
                      </p>
                      <p
                        onClick={() => history.push("/activity")}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="/images/stats2.png" alt="" />
                        Activity
                      </p>
                    </div>
                  </div>
                </Popover>
              </div>
            )}
          </PopupState>

          {token ? (
            <Button
              variant="containedPrimary"
              style={{
                fontSize: "14px",

                whiteSpace: "pre",
                cursor: "pointer",
                height: "40px",
                padding: "9px 15px",
                border: "1px solid transparent",
              }}
              onClick={() => history.push("/profile")}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant="containedPrimary"
              style={{
                fontSize: "14px",

                whiteSpace: "pre",
                cursor: "pointer",
                height: "40px",
                padding: "9px 15px",
                border: "1px solid transparent",
              }}
              onClick={() => history.push("/login")}
            >
              Get Started
            </Button>
          )}

          <Box style={{ whiteSpace: "pre", height: "40px" }}>
            <Button
              variant="outlined"
              style={{
                whiteSpace: "pre",
                border: "none",
                background: "#C6C6C62B",
                padding: "8px 8px",
                height: "100%",
              }}
              onClick={() => {
                history.push("/cart");
              }}
            >
              {" "}
              <GrCart
                style={{ color: skillMarketPlaceRoute ? "white" : "grey" }}
              />
            </Button>
          </Box>
          <Box>
            {profileData?.firstName && (
              <Button
                variant="outlined"
                style={{
                  whiteSpace: "pre",
                  border: "none",
                }}
              >
                <Typography>
                  {profileData ? profileData?.firstName : ""}
                </Typography>
                <ExpandMoreIcon />

                <Avatar
                  src={profileData ? profileData?.profileImage : ""}
                  style={{ color: "grey" }}
                />
              </Button>
            )}
          </Box>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    //mobile
    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Box
              mb={1}
              onClick={() => {
                history.push("/");
              }}
            >
              <img className={logoDrawer} src="images/logo.png" alt="" />
            </Box>
            <div className={mobileDraweSelect}>
              <Select
                variant="outlined"
                displayEmpty
                value={coeSelect}
                IconComponent={KeyboardArrowDown}
                MenuProps={menuProps}
              >
                <MenuItem value="" disabled>
                  I & AI CoE
                </MenuItem>

                {/* <MenuItem
                  value="partnerWithUs"
                  className={mobileMenuItem}
                  onClick={() => history.push("/partners")}
                >
                  <img src="/images/Aicoe1.png" alt="" /> Partner with us
                </MenuItem> */}

                <MenuItem
                  value="existingPartner"
                  className={mobileMenuItem}
                  onClick={() => history.push("/our-partner")}
                >
                  <img src="/images/Aicoe2.png" alt="" /> Our existing partners
                </MenuItem>
                {/* <MenuItem
                  value="coes"
                  className={mobileMenuItem}
                  onClick={() => history.push("/coes")}
                >
                  <img src="/images/Aicoe2.png" alt="" /> I & AI CoEs
                </MenuItem> */}
                <MenuItem
                  value="about"
                  className={mobileMenuItem}
                  onClick={() => history.push("/about")}
                >
                  <img src="/images/Aicoe2.png" alt="" /> About I & AI COES
                </MenuItem>
              </Select>

              <Select
                variant="outlined"
                displayEmpty
                value={mobileExplore}
                IconComponent={KeyboardArrowDown}
                MenuProps={menuProps}
              >
                <MenuItem value="" disabled>
                  Explore
                </MenuItem>

                <MenuItem
                  value="aboutUs"
                  onClick={() => window.open("https://explorer.gyanbatua.com/")}
                  className={mobileMenuItem}
                >
                  <img src="/images/blockchain_img.svg" />
                  Blockchain
                </MenuItem>

                <MenuItem
                  value="aboutUs"
                  onClick={() => history.push("/about-us")}
                  className={mobileMenuItem}
                >
                  <img src="/images/about_img.svg" />
                  About Us
                </MenuItem>

                <MenuItem
                  value="resourceCenter"
                  onClick={() => history.push("/resource-center")}
                  className={mobileMenuItem}
                >
                  <img src="/images/resource_center_img.svg" />
                  Resource Center
                </MenuItem>

                <MenuItem
                  value="catalog"
                  onClick={() => history.push("/catalouge")}
                  className={mobileMenuItem}
                >
                  <img src="/images/catalouge_img.svg" />
                  Catalog
                </MenuItem>

                <MenuItem
                  value="media"
                  onClick={() => history.push("/media")}
                  className={mobileMenuItem}
                >
                  <img src="/images/media_img.svg" />
                  Media
                </MenuItem>
              </Select>

              <Button
                variant="body2"
                style={{
                  whiteSpace: "pre",
                  border: "none",
                  background: "#C6C6C62B",
                  padding: "8px 8px",
                  height: "100%",
                }}
                onClick={handlePushed}
              >
                Drops
              </Button>

              <Button
                variant="body2"
                style={{
                  whiteSpace: "pre",
                  border: "none",
                  background: "#C6C6C62B",
                  padding: "8px 8px",
                  height: "100%",
                }}
                onClick={handlePush}
              >
                Marketplace
              </Button>

              <Select
                variant="outlined"
                displayEmpty
                value={coeSelect}
                IconComponent={KeyboardArrowDown}
                MenuProps={menuProps}
              >
                <MenuItem value="" disabled>
                  Stats
                </MenuItem>

                <MenuItem
                  value="partnerWithUs"
                  onClick={() => history.push("/ranking")}
                  className={mobileMenuItem}
                >
                  <img src="/images/stats1.png" alt="" />
                  Ranking
                </MenuItem>

                <MenuItem
                  value="existingPartner"
                  onClick={() => history.push("/activity")}
                  className={mobileMenuItem}
                >
                  <img src="/images/stats1.png" alt="" /> Activity
                </MenuItem>
              </Select>

              {token ? (
                <Button
                  variant="containedPrimary"
                  style={{
                    fontSize: "14px",

                    whiteSpace: "pre",
                    cursor: "pointer",
                    height: "40px",
                    padding: "9px 15px",
                    border: "1px solid transparent",
                  }}
                  onClick={() => history.push("/profile")}
                >
                  Dashboard
                </Button>
              ) : (
                <Button
                  variant="containedPrimary"
                  style={{
                    fontSize: "14px",

                    whiteSpace: "pre",
                    cursor: "pointer",
                    height: "40px",
                    padding: "9px 15px",
                    border: "1px solid transparent",
                  }}
                  onClick={() => history.push("/login")}
                >
                  Get Started
                </Button>
              )}

              <Button
                variant="outlined"
                style={{
                  whiteSpace: "pre",
                  border: "none",
                  background: "#C6C6C62B",
                  padding: "8px 8px",
                  height: "100%",
                }}
                onClick={() => {
                  history.push("/cart");
                }}
              >
                {" "}
                <GrCart style={{ color: "grey" }} />
              </Button>
            </div>
          </div>
        </Drawer>

        <Box display="flex" justifyContent="space-between">
          {femmecubatorLogo}
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton
            className={drawericon}
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon
              width="60px"
              height="60px"
              style={{ color: "#EC1F24", fontSize: "26px" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Box>
      <Link to="/">
        <Logo
          skillMarketPlaceRoute={skillMarketPlaceRoute}
          className="logoImg"
        />
      </Link>
    </Box>
  );

  return (
    <>
      <AppBar
        position={history.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        className={classes.appBar}
        style={{
          backgroundColor: skillMarketPlaceRoute
            ? "rgba(255,255,255,0.03)"
            : "#FFF",
          border: "none",
        }}
      >
        <Container maxWidth="xlg">
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>

      {dialogOpen && (
        <Paper>
          <Dialog
            fullWidth
            maxWidth="lg"
            className={classes.searchdiaogBox}
            style={{
              position: "absolute",
              top: "10%",
            }}
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          >
            <IconButton
              className="closeButton"
              onClick={() => setDialogOpen(false)}
            >
              <CloseIcon style={{ color: "#AAAAAA" }} />
            </IconButton>

            <Box className="dialogBoxHeight">
              <CloseIcon style={{ color: "#AAAAAA" }} />
            </Box>
          </Dialog>
        </Paper>
      )}
    </>
  );
}
