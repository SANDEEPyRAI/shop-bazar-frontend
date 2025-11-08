import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import toast from "react-hot-toast";

const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#fff",
  },
  formBox: {
    width: "100%",
    maxWidth: 400,
    boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: "40px 30px",
    textAlign: "center",
  },
  title: {
    color: "#C19A6B",
    fontWeight: 700,
    fontSize: 22,
    marginBottom: 16,
  },
  input: {
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "20px",
  },
  button: {
    marginTop: 28,
    backgroundColor: "#C19A6B",
    color: "#fff",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#b4875e",
    },
  },
}));

const OtpVerification = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { userLogIn } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length === 4) {
      const userData = location.state?.userData;

      // Mock success login
      userLogIn({
        token: "dummy-token-12345",
        user: {
          name: userData.name,
          email: userData.email,
        },
      });

      toast.success("Signup successful! Logged in 🎉");
      history.push("/");
    } else {
      toast.error("Please enter a valid 4-digit OTP");
    }
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.formBox}>
        <Typography className={classes.title}>Verify OTP</Typography>
        <Typography style={{ color: "#555", marginBottom: 20 }}>
          Enter the 4-digit code sent to your email
        </Typography>

        <TextField
          variant="outlined"
          placeholder="----"
          inputProps={{
            maxLength: 4,
            style: {
              textAlign: "center",
              fontSize: "22px",
              letterSpacing: "10px",
            },
          }}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
        />

        <Button
          fullWidth
          variant="contained"
          className={classes.button}
          onClick={handleVerify}
        >
          Verify & Continue
        </Button>
      </Box>
    </Box>
  );
};

export default OtpVerification;
