import React from "react";
import { Box, Typography, Button, Paper } from "@material-ui/core";

const Addresses = () => {
  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        Saved Addresses
      </Typography>
      <Box mt={2}>
        {[1].map((address) => (
          <Paper key={address} style={{ padding: 16, marginBottom: 12 }}>
            <Typography variant="subtitle1">Home Address</Typography>
            <Typography color="textSecondary">
              123 MG Road, Delhi, India
            </Typography>
            <Box mt={1}>
              <Button size="small" style={{ color: "#C19A6B" }}>
                Edit
              </Button>
              <Button size="small" color="secondary">
                Delete
              </Button>
            </Box>
          </Paper>
        ))}
        <Button
          variant="contained"
          style={{
            background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
            color: "#fff",
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          Add New Address
        </Button>
      </Box>
    </Box>
  );
};

export default Addresses;
