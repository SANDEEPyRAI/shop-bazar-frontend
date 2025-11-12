import React from "react";
import { Button, Box } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

const SocailLogin = () => {
  const handleGoogleLogin = () => {
    // integrate Google OAuth here
    console.log("Redirect to Google login...");
    window.open("https://accounts.google.com/signin", "_blank");
  };

  return (
    <Box textAlign="center">
      <Button
        variant="outlined"
        fullWidth
        onClick={handleGoogleLogin}
        startIcon={<FcGoogle size={22} />}
        style={{
          borderRadius: 50,
          padding: "10px",
          borderColor: "#ddd",
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        Continue with Google
      </Button>
    </Box>
  );
};

export default SocailLogin;
