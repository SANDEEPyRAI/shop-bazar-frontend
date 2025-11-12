import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
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
  },
  title: {
    textAlign: "center",
    color: "#C19A6B",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
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

const ForgotPassword = () => {
  const classes = useStyles();
  const history = useHistory();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values) => {
    toast.success("OTP sent to your email!");
    history.push({
      pathname: "/reset-password",
      state: { email: values.email },
    });
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.formBox}>
        <Typography className={classes.title}>Forgot Password</Typography>
        <Typography className={classes.subtitle}>
          Enter your registered email to receive an OTP for password reset.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                variant="outlined"
                className={classes.field}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                className={classes.button}
              >
                Send OTP
              </Button>
            </Form>
          )}
        </Formik>

        <Typography
          align="center"
          style={{ marginTop: 20, color: "#333", fontSize: 14 }}
        >
          Remember your password?{" "}
          <span
            style={{ color: "#C19A6B", cursor: "pointer" }}
            onClick={() => history.push("/login")}
          >
            Login
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
