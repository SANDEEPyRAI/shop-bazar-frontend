import React from "react";
import { TextField, Grid, Typography } from "@material-ui/core";

const AddressForm = ({ onAddressChange }) => {
  const handleChange = (e) => {
    onAddressChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Postal Code"
            name="postalCode"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
