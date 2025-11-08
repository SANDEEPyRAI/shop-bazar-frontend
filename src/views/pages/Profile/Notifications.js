import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Notifications = () => {
  const notifications = [
    "Your order #123 has been delivered.",
    "Password changed successfully.",
    "You have a new offer on wishlist items!",
  ];

  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        Notifications
      </Typography>
      <List>
        {notifications.map((note, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notifications;
