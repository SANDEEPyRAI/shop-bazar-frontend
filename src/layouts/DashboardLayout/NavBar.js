import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#fff",
    borderRight: "1px solid #eee",
  },
  sidebarHeader: {},
  activeItem: {
    background: "linear-gradient(90deg, #C19A6B 0%, #e2b887 100%)",
    color: "#fff !important",
    "& svg": {
      color: "#fff !important",
    },
  },
  navItem: {
    color: "#444",
    "&:hover": {
      background: "rgba(193, 154, 107, 0.1)",
    },
  },
}));

const menuItems = [
  { label: "My Profile", icon: <FiUser />, path: "/profile" },
  { label: "My Orders", icon: <FiShoppingBag />, path: "/account/orders" },
  { label: "Addresses", icon: <FiMapPin />, path: "/account/addresses" },
  { label: "Wishlist", icon: <FiHeart />, path: "/account/wishlist" },
  { label: "Notifications", icon: <FiBell />, path: "/account/notifications" },
  {
    label: "Security Settings",
    icon: <FiSettings />,
    path: "/account/security-settings",
  },
  {
    label: "Help Center",
    icon: <FiHelpCircle />,
    path: "/account/help-center",
  },
  { label: "Logout", icon: <FiLogOut />, path: "/logout" },
];

const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles();
  const location = useLocation();

  const drawerContent = (
    <div>
      <Box className={classes.sidebarHeader}>
        <h6>My Dashboard</h6>
      </Box>
      <List>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <ListItem
              button
              key={item.label}
              component={RouterLink}
              to={item.path}
              className={`${classes.navItem} ${
                active ? classes.activeItem : ""
              }`}
              onClick={onMobileClose}
            >
              <ListItemIcon style={{ color: active ? "#fff" : "#C19A6B" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>

      <Hidden mdUp implementation="css">
        <Drawer
          anchor="left"
          open={openMobile}
          onClose={onMobileClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
