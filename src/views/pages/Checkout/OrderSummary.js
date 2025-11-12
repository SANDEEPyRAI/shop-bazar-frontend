import React from "react";
import { Typography, Box } from "@material-ui/core";

const OrderSummary = () => {
  const subtotal = 150;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography>Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>Tax</Typography>
        <Typography>${tax.toFixed(2)}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={1}
        fontWeight={600}
      >
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6" style={{ color: "#C19A6B" }}>
          ${total.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
