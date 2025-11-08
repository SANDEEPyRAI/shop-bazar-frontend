// |☰ (Left Sidebar)|     𝕾𝕹 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓𝖘     |🔍 🛒 👤 ☰(Main Menu)

import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    zIndex: theme.zIndex.drawer + 2,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#C19A6B",
    letterSpacing: 1,
  },
  navLinks: {
    display: "flex",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navLink: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#C19A6B",
    },
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  loginButton: {
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    color: "#fff",
    borderRadius: "30px",
    fontWeight: 600,
    padding: "8px 20px",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
      boxShadow: "0 0 10px rgba(212,175,55,0.4)",
    },
  },
  avatar: {
    backgroundColor: "#C19A6B",
    color: "#fff",
    cursor: "pointer",
    width: 36,
    height: 36,
    fontSize: "14px",
  },
  drawerList: {
    width: 250,
    paddingTop: theme.spacing(2),
  },
  leftIconBox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
}));

const TopBar = ({ onLeftSidebarOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const { profileData, userLoggedIn, setIsLogin } = useContext(AuthContext);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleMainDrawer = (open) => () => setMainDrawerOpen(open);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    handleMenuClose();
    history.push("/login");
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const userName =
    profileData?.name ||
    profileData?.username ||
    profileData?.email?.split("@")[0] ||
    "User";

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* Left side — Sidebar icon + Logo */}
          <Box className={classes.leftIconBox}>
            {isMobile && (
              <IconButton color="inherit" onClick={onLeftSidebarOpen}>
                <FiMenu />
              </IconButton>
            )}
            <Typography className={classes.logoText}>𝕾𝕹 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓𝖘</Typography>
          </Box>

          {/* Center — Desktop navigation */}
          <Box className={classes.navLinks}>
            {menuItems.map((item) => (
              <RouterLink
                key={item.label}
                to={item.path}
                className={classes.navLink}
              >
                {item.label}
              </RouterLink>
            ))}
          </Box>

          {/* Right side — Icons and menu */}
          <Box className={classes.iconGroup}>
            <IconButton color="inherit">
              <FiSearch />
            </IconButton>

            <IconButton color="inherit" component={RouterLink} to="/cart">
              <FiShoppingCart />
            </IconButton>

            {!userLoggedIn ? (
              <Button
                variant="contained"
                className={classes.loginButton}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
            ) : (
              <>
                <IconButton onClick={handleMenuOpen}>
                  <Avatar className={classes.avatar}>
                    {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => history.push("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}

            {/* Right menu icon — main nav drawer */}
            {isMobile && (
              <IconButton color="inherit" onClick={toggleMainDrawer(true)}>
                <FiMenu />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Right Drawer (Main Menu) */}
      <Drawer
        anchor="right"
        open={mainDrawerOpen}
        onClose={toggleMainDrawer(false)}
      >
        <Box className={classes.drawerList}>
          <Box display="flex" justifyContent="flex-end" pr={2}>
            <IconButton onClick={toggleMainDrawer(false)}>
              <FiX />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={toggleMainDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            {!userLoggedIn ? (
              <ListItem
                button
                onClick={() => {
                  history.push("/login");
                  toggleMainDrawer(false);
                }}
              >
                <ListItemText primary="Login" />
              </ListItem>
            ) : (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBar;
