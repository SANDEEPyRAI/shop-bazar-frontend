import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";

const MyOrders = () => {
  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        My Orders
      </Typography>
      <Box mt={2}>
        {[1, 2].map((order) => (
          <Paper key={order} style={{ padding: 16, marginBottom: 12 }}>
            <Typography>Order #{order} - Status: Delivered</Typography>
            <Typography color="textSecondary">Date: 12 Oct 2025</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default MyOrders;
