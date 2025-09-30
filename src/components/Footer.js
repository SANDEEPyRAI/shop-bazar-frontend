import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      textAlign: "center",
      py: 2,
      mt: 4,
      borderTop: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} Shop Bazar. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
