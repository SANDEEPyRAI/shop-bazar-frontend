import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Shop Bazar
      </Typography>
      <Typography variant="h5" gutterBottom>
        Shop your favorite categories!
      </Typography>
      <Box mt={4}>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          sx={{ mr: 2 }}
        >
          Signup
        </Button>
        <Button component={Link} to="/login" variant="outlined">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
