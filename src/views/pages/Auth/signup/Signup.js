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

const useStyles = makeStyles((theme) => ({
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

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    toast.success("OTP sent to your email!");
    history.push({
      pathname: "/verify-otp",
      state: { userData: values },
    });
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.formBox}>
        <Typography className={classes.title}>Create Account</Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                fullWidth
                name="name"
                label="Full Name"
                variant="outlined"
                className={classes.field}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                variant="outlined"
                className={classes.field}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                className={classes.field}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                className={classes.button}
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>

        <Typography
          align="center"
          style={{ marginTop: 20, color: "#333", fontSize: 14 }}
        >
          Already have an account?{" "}
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

export default Signup;
