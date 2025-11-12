import React, { useContext } from "react";
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Button,
  Divider,
  Grid,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdError } from "react-icons/md";
import { useHistory } from "react-router-dom";
import SocailLogin from "./SocialLogin";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(145deg, #1e1e1e, #2e2e2e, #3a3a3a)", // metallic look
    padding: "20px",
  },
  logBox: {
    width: "100%",
    maxWidth: 420,
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    boxShadow:
      "rgba(255,255,255,0.2) 0px 1px inset, rgba(0,0,0,0.4) 0px 3px 8px",
    borderRadius: 10,
    padding: "40px 50px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 20px",
    },
  },
  heading: {
    fontWeight: 700,
    color: "#2e2e2e",
    textAlign: "center",
  },
  subText: {
    color: "#555",
    fontSize: "14px",
    textAlign: "center",
    marginTop: 8,
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: 4,
  },
  loginButton: {
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: 600,
    padding: "8px 20px",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
      boxShadow: "0 0 10px rgba(212,175,55,0.4)",
    },
  },
  dividerOr: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: 20,
  },
  dividerOrTypo: {
    color: "#666",
    fontSize: 14,
  },
  footerText: {
    color: "#444",
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
  },
  link: {
    color: "#1e90ff",
    fontWeight: 500,
    cursor: "pointer",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { profileData, userLoggedIn, setIsLogin } = useContext(AuthContext);
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    // Update context login state
    history.push("/"); // ⬅️ Change route after login success
    setIsLogin(true);

    // Fetch profile data (optional but good)
    // getProfileData();
    localStorage.setItem("token", "kjsdhfkjhdskfjhskjdfhkjsdf");
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.logBox}>
        <Typography variant="h5" className={classes.heading}>
          Welcome Back
        </Typography>
        <Typography className={classes.subText}>
          Log in to continue to your personalized dashboard.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Box mt={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                />
                {touched.email && errors.email && (
                  <Typography color="error" className={classes.errorBox}>
                    <MdError fontSize="14px" /> {errors.email}
                  </Typography>
                )}
              </Box>

              <Box mt={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                />
                {touched.password && errors.password && (
                  <Typography color="error" className={classes.errorBox}>
                    <MdError fontSize="14px" /> {errors.password}
                  </Typography>
                )}
              </Box>

              <Box mt={3}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  className={classes.loginButton}
                >
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        <Box className={classes.dividerOr}>
          <Divider style={{ flex: 1 }} />
          <Typography className={classes.dividerOrTypo}>or</Typography>
          <Divider style={{ flex: 1 }} />
        </Box>

        <Box mt={2}>
          <Grid container justifyContent="center">
            <SocailLogin />
          </Grid>
        </Box>

        <Typography className={classes.footerText}>
          Don’t have an account?{" "}
          <span
            className={classes.link}
            onClick={() => history.push("/register")}
          >
            Sign up
          </span>
        </Typography>

        <Typography className={classes.footerText}>
          <span
            className={classes.link}
            onClick={() => history.push("/forgot-password")}
          >
            Forgot Password?
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
