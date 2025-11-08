import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";

const SecuritySettings = () => {
  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        Security Settings
      </Typography>
      <Box mt={2} maxWidth={400}>
        <TextField
          fullWidth
          label="Current Password"
          variant="outlined"
          type="password"
          margin="normal"
        />
        <TextField
          fullWidth
          label="New Password"
          variant="outlined"
          type="password"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirm New Password"
          variant="outlined"
          type="password"
          margin="normal"
        />
        <Button
          variant="contained"
          style={{
            background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
            color: "#fff",
            marginTop: 12,
            borderRadius: 8,
          }}
        >
          Update Password
        </Button>
      </Box>
    </Box>
  );
};

export default SecuritySettings;
