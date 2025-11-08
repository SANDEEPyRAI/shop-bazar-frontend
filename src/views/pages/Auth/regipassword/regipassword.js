import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Button,
  IconButton,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";
import DataLoader from "src/component/DataLoader";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { MdError } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "64px",
    "@media (max-width: 600px)": {
      paddingTop: "20px",
      padding: "0px 20px 39px 20px",
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
      gap: "7px",
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
    "& .termsBox": {
      color: "#3760F1",
      gap: "20px",
    },
    "& .paraTypo": {
      color: "#636880",
      textAlign: "center",
      fontWeight: 400,
    },
    "& .eyeIcon": {
      cursor: "pointer",
    },
    "& .errormsg": {
      marginTop: "8px",
      fontSize: "14px",
    },
    "& .btnContinue": {
      height: "50px",
    },
    "& .forgetTypo": {
      color: "#0856CC",
    },
    "& .customDivider": {
      height: "20px",
      background: "#B2B2B2",
    },
    "& .editText": {
      color: "#0856CC",
      fontSize: "16px",
      paddingLeft: "20px",
      fontWeight: 400,
    },
    "& .errormsg": {
      marginTop: "8px",
      fontSize: "14px",
    },
    "& .allreadyAcc": {
      color: "#262626",
      fontSize: "14px !important",
      fontWeight: 400,
    },
  },
  redPlaceholder: {
    color: "red", // Set the desired color
  },
}));

const Regipassword = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [Error, SetError] = useState(false);
  const [ErrorMsg, SetErrorMsg] = useState("");

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.register,
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (res.data.responseCode === 200) {
        toast.success(res?.data?.responseMessage);
        history.push({
          pathname: "/verify-otp",
          state: { email: values.email, type: "signup" },
        });
        setIsLoading(false);
      } else if (res?.data?.responseCode === 400) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 401) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 404) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 409) {
        toast.error(res?.data?.responseMessage);
        setIsLoading(false);
      } else {
        toast.error("Failed to Login");
      }
    } catch (error) {
      console.log(error, "eroorrrr");
      if (error?.response?.data?.responseCode === 409) {
        // toast.error(error?.response?.data?.responseMessage );
        SetError(true);
        SetErrorMsg(error?.response?.data?.responseMessage);
      }
      setIsLoading(false);
    }
  };






  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const handleEdit = () => {
    setIsEdit(true);
  };

  const formInitialSchema = {
    // email: '',
    email: props.location.state.email || "",
    password: "",
  };

  const formValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .max(256, "Email must be at most 256 characters")
      .required("Email is required.")
      .matches(
        /^[a-zA-Z0-9._%+$-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address."
      ),
    password: Yup.string()
      .required("Password must be at least 8 characters")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  return (
    <Box className={classes.mainBox}>
      <Box className="logBox">
        <Box className="subBox displayColumnCenter">
          <Typography variant="h5">CREATE YOUR ACCOUNT</Typography>
          <Typography className="paraTypo" variant="body2">
            Get ready to take control of your skills and career growth with Gyan
            Batua, your Skills' Matchmaking Wallet. It's time to build your
            unique Gyan Batua and connect to a world of opportunities.
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
                  placeholder="de-umair@mobiloitte.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  disabled={!isEdit}
                  onBlur={handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button className="editText" onClick={handleEdit}>
                          Edit
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                {(touched.email && errors.email) || Error ? (
                  <Typography
                    color="error"
                    className="errormsg"
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdError /> {errors.email || ErrorMsg}
                  </Typography>
                ) : null}
              </Box>
              <Box mt={2.3}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  inputProps={{ maxLength: 16 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          className="eyeIcon"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className={`passwordInput ${
                    isPasswordValid ? "valid" : "invalid"
                  }`}
                />
                {touched.password && errors.password ? (
                  <Typography
                    color="error"
                    className="errormsg"
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <MdError />
                    {errors.password}
                  </Typography>
                ) : null}
              </Box>
              <Box mt={7}>
                <Button
                  className="btnContinue"
                  variant="containedPrimary"
                  fullWidth
                  type="submit"
                >
                  {" "}
                  Continue
                  {isLoading && <ButtonCircularProgress />}{" "}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box mt={4} className="displayColumnCenter">
          <Typography className="allreadyAcc" variant="body2">
            Already have an account?{" "}
            <span className="spanTag" onClick={handleLogin}>
              Log in
            </span>
          </Typography>
        </Box>
        <Box mt={6}>
          <Box className="termsBox displayCenter">
            <Typography variant="body2">Terms of Use</Typography>
            <Divider orientation="vertical" className="customDivider" />
            <Typography variant="body2">Privacy Policy</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Regipassword;
