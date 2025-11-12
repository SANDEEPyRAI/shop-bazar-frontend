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
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FiMenu, FiSearch, FiShoppingCart, FiX, FiUser } from "react-icons/fi";
import { AuthContext } from "src/context/Auth"; // ✅ adjust if your file name differs

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    underline: "none",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#C19A6B",
    letterSpacing: 1,
    cursor: "pointer",
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
    cursor: "pointer",
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
  mobileMenuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  drawerList: {
    width: 250,
    paddingTop: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { profileData, userLoggedIn, setIsLogin } = useContext(AuthContext);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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

  console.log("====--->>", userLoggedIn);

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* Logo */}
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            className={classes.logo}
          >
            𝕾𝕹 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓𝖘
          </Link>

          {/* Desktop Menu */}
          <Box className={classes.navLinks}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.path}
                className={classes.navLink}
                underline="none"
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Icons & Auth Buttons */}
          <Box className={classes.iconGroup}>
            <IconButton color="inherit">
              <FiSearch />
            </IconButton>

            <Link component={RouterLink} to="/cart">
              <IconButton color="inherit">
                <FiShoppingCart />
              </IconButton>
            </Link>

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
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  {userName}
                </Typography>

                {/* User Menu */}
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

            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              className={classes.mobileMenuButton}
            >
              <FiMenu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box className={classes.drawerList}>
          <Box display="flex" justifyContent="flex-end" pr={2}>
            <IconButton onClick={toggleDrawer(false)}>
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
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            {!userLoggedIn ? (
              <ListItem
                button
                onClick={() => {
                  history.push("/login");
                  toggleDrawer(false);
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

export default Header;
