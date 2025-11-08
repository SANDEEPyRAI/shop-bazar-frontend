import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Button,
  Divider,
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { MdError } from "react-icons/md";
import SocailLogin from "./SocialLogin";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "64px",
    "& .MuiTypography-colorError": {
      fontSize: "14px",
      marginTop: "5px",
    },
    "& .erorrr": {
      display: "flex",
      gap: "8px",
      alignItems: "center",
    },
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      // border: "1px solid rgba(0, 0, 0, 0.08)",
    },
    "& .textfields:hover .MuiOutlinedInput-notchedOutline , & .selectTag:hover .MuiOutlinedInput-notchedOutline , & .addressTextfield:hover .MuiOutlinedInput-notchedOutline , & .datePickerField:hover .MuiOutlinedInput-notchedOutline ,":
      {
        // border: "1px solid rgba(0, 0, 0, 0.08)",
      },
    "@media (max-width: 600px)": {
      padding: "0px 20px 39px 20px",
      paddingTop: "20px",
    },
    "& .logBox": {
      width: "100%",
      maxWidth: "419px",
      padding: "30px 80px 39px 80px",
      boxShadow: "2px 2px 45px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      "@media (max-width: 600px)": {
        padding: "0px 20px 39px 20px",
      },
    },
    "& .subBox": {
      gap: "16px",
      fontWeight: 700,
      "& h5": {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.87)",
      },
      "& p": {
        fontSize: "14px",
        textAlign: "center",
      },
    },
    "& .spanTag": {
      color: "#0856CC",
      fontWeight: 500,
      cursor: "pointer",
    },
    "& .already": {
      color: "#262626",
      fontSize: "14px",
    },
    "& .termsBox": {
      color: "#3760F1",
      gap: "20px",
      "& p": {
        cursor: "pointer",
      },
    },
    "& .gridBox": {
      borderRadius: "5px",
      border: "1px solid #E7E7E7",
      padding: "14px 0px",
      gap: "15px",
      width: "100%",
      maxWidth: "570px",
    },
    "& .linkBox": {
      borderRadius: "5px",
      border: "1px solid #E7E7E7",
      padding: "14px 0px",
      gap: "15px",
      width: "100%",
      maxWidth: "410px",
    },
    "& .paraTypo": {
      color: "#636880",
      textAlign: "center",
      fontWeight: 400,
    },
    "& .dividerOr": {
      gap: "15px",
    },
    "& .dividerOrTypo": {
      color: "#262626",
      fontSize: "14px",
    },
    "& .customDivider": {
      height: "20px",
      background: "#B2B2B2",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/register");
  };
  const handleSubmit = (values) => {
    history.push({
      pathname: "/login-password",
      state: { email: values.email },
    });
  };

  const formInitialSchema = {
    email: "",
  };

  const formValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .max(256, "Email must be at most 256 characters")
      .required("Email is required.")
      .matches(
        /^[a-zA-Z0-9._%+$-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address."
      ),
  });

  return (
    <Box className={classes.mainBox}>
      <Box className="logBox">
        <Box className="subBox displayColumnCenter">
          <Typography variant="h5">SIGN IN</Typography>
          <Typography className="paraTypo" variant="body2">
            Your gateway to endless opportunities and skill development! Please
            log in to access your Skills' Matchmaking Wallet./////////////
          </Typography>
        </Box>
        <Formik
          initialValues={formInitialSchema}
          initialStatus={{
            success: false,
            successMsg: "",
          }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            setFieldValue,
          }) => (
            <Form>
              <Box mt={2.25}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Email Address"
                  name="email"
                  value={values.email}
                  onChange={(e) =>
                    setFieldValue("email", e.target.value.toLowerCase())
                  }
                  className="textfields"
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                />
                {touched.email && errors.email ? (
                  <Typography color="error" className="erorrr">
                    <MdError fontSize="14px" />
                    {errors.email}
                  </Typography>
                ) : null}
              </Box>
              <Box mt={2.5}>
                <Button variant="containedPrimary" fullWidth type="submit">
                  {" "}
                  Continue{" "}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box mt={2.5} className="displayColumnCenter">
          <Typography variant="body2" className="already">
            Don't Have An Account?&nbsp;
            <span className="spanTag" onClick={handleSignUp}>
              SIGN UP
            </span>
          </Typography>
        </Box>
        <Box mt={2.5} className="dividerOr displayCenter">
          <Divider style={{ flex: 1 }} />
          <Typography className="dividerOrTypo">or</Typography>
          <Divider style={{ flex: 1 }} />
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} sm={12} className="displayCenter">
              <SocailLogin />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                className="gridBox displayCenter"
                startIcon={<img src="/images/facebook.png" alt="" />}
              >
                Continue with Facebook
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                className="linkBox displayCenter"
                startIcon={<img src="/images/linkedIn.png" alt="" />}
              >
                Continue with LinkedIn
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                className="linkBox displayCenter"
                startIcon={<img src="/images/microsoft.png" alt="" />}
              >
                Continue with Microsoft
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                className="linkBox displayCenter"
                startIcon={<img src="/images/apple.png" alt="" />}
              >
                Continue with Apple
              </Button>
            </Grid> */}
          </Grid>
        </Box>
        <Box mt={7.5}>
          <Box className="termsBox displayCenter">
            <Typography
              variant="body2"
              onClick={() => history.push("/terms-and-condition")}
            >
              Terms of Use
            </Typography>
            <Divider orientation="vertical" className="customDivider" />
            <Typography
              variant="body2"
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
