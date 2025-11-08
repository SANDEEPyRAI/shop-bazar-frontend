import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Divider,
} from "@material-ui/core";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>

      <RadioGroup
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <FormControlLabel
          value="cod"
          control={<Radio color="primary" />}
          label="Cash on Delivery"
        />
        <FormControlLabel
          value="online"
          control={<Radio color="primary" />}
          label="Pay Online (Razorpay)"
        />
      </RadioGroup>
    </>
  );
};

export default PaymentMethod;
