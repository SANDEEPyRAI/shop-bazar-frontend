import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
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
    maxWidth: 420,
    boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: "40px 30px",
    textAlign: "center",
  },
  title: {
    color: "#C19A6B",
    fontWeight: 700,
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "20px",
  },
  field: {
    marginTop: 16,
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

const ResetPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const email = location.state?.email || "";
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [step, setStep] = useState(1);

  const handleVerifyOTP = () => {
    if (otp.length === 4) {
      toast.success("OTP verified successfully!");
      setStep(2);
    } else {
      toast.error("Invalid OTP! Please enter 4 digits.");
    }
  };

  const handleResetPassword = () => {
    if (newPass.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (newPass !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Password reset successfully!");
    history.push("/login");
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.formBox}>
        {step === 1 ? (
          <>
            <Typography className={classes.title}>Verify OTP</Typography>
            <Typography style={{ color: "#555", marginBottom: 20 }}>
              Enter the 4-digit OTP sent to <b>{email}</b>
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
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </Button>
          </>
        ) : (
          <>
            <Typography className={classes.title}>
              Enter New Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              label="New Password"
              variant="outlined"
              className={classes.field}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              className={classes.field}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={handleResetPassword}
            >
              Update Password
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ResetPassword;
