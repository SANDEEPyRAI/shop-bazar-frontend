import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Dialog,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Form, useFormik } from "formik";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { toast } from "react-hot-toast";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { MdError } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { values } from "lodash";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "64px",
    width: "100%",
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
    "& .allready": {
      fontSize: "14px",
      fontWeight: 400,
      color: "#262626",
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
      cursor: "pointer",
      width: "100%",
      maxWidth: "106px",
      fontSize: "14px",
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

    "& .DialogMainBox": {
      padding: "50px",
    },
  },
  DialogMainBox: {
    padding: "60px 93px 77px 93px",
    "& .logBox1": {
      width: "100%",
      maxWidth: "402px",
    },
    "& .subBox": {
      marginTop: "25px",
      fontWeight: 700,
      "& h5": {
        fontWeight: 500,
        color: "rgba(0, 0, 0, 0.87)",
        marginTop: "7px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      },
      "& p": {
        fontSize: "14px",
        textAlign: "center",
        fontWeight: 400,
        marginTop: "15px",
      },
    },
    "& .paraTypo1": {
      color: "#636880",
      textAlign: "center",
      fontWeight: 400,
      width: "100%",
      maxWidth: "349px",
      fontFamily: "Public Sans",
    },
    "& .btnContinue1": {
      height: "50px",
      width: "100%",
      maxWidth: "245px",
    },
  },
}));

const Loginpassword = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loginDialogIsOpen, setLoginDialogIsOpen] = useState(false);
  const location = useLocation();
  const auth = useContext(AuthContext);
  // const handleType = location.state.type;
  const emailvalue = location.state.email;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    history.push("/forgot");
  };
  const handleSignUp = () => {
    history.push("/register");
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleGetStarted = () => {
    history.push("/profile");
  };

  const closeLoginDialog = () => {
    setLoginDialogIsOpen(false);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    auth.setLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.login,
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (res.data.responseCode === 200) {
        toast.success(res?.data?.responseMessage);
        auth.checkLogin(res?.data?.result?.token);
        localStorage.setItem("token", res?.data?.result?.token);
        auth.setIsLogin(true);
        auth.getProfileData();
        auth.setLoading(false);

        if (res?.data?.result?.firstLogin === true) {
          setLoginDialogIsOpen(true);
        } else {
          history.push("/profile");
        }

        localStorage.setItem("token", res?.data?.result?.token);
        // history.push('/profile')
        // if (res?.data?.result?.firstLogin) {
        //   // setLoginDialogIsOpen(true)
        //   history.push({ pathname: "/", state: setLoginDialogIsOpen });

        // }
      } else if (res?.data?.responseCode === 401) {
        toast.error(res?.data?.responseMessage);
        auth.setLoading(false);
      } else if (res?.data?.responseCode === 404) {
        toast.error(res?.data?.responseMessage);
        auth.setLoading(false);
      } else {
        toast.error("Failed to Login");
        auth.setLoading(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "An error occurred while Login"
      );
      auth.setLoading(false);
    } finally {
      setIsLoading(false);
      auth.setLoading(false);
    }
  };

  const formInitialSchema = {
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
      .required("Wrong email or password")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  return (
    <Box className={classes.mainBox}>
      <Box className="logBox">
        <Box className="subBox displayColumnCenter">
          <Typography variant="h5">ENTER YOUR PASSWORD</Typography>
        </Box>
        <Formik
          initialValues={formInitialSchema}
          initialStatus={{
            success: false,
            successMsg: "",
          }}
          validationSchema={formValidationSchema}
          onSubmit={handleSubmit}
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
              <Box mt={3.8}>
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
                {touched.email && errors.email ? (
                  <Typography
                    color="error"
                    className="errormsg"
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <MdError /> {errors.email}
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
                  inputProps={{ maxLength: 16 }}
                  value={values.password}
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
              <Box mt={1.25}>
                <Typography
                  className="forgetTypo"
                  variant="body2"
                  onClick={handleLogin}
                >
                  Forgot Password ?
                </Typography>
              </Box>
              <Box mt={3.25}>
                <Button
                  className="btnContinue"
                  variant="containedPrimary"
                  fullWidth
                  type="submit"
                >
                  {" "}
                  Continue
                  {isLoading && <ButtonCircularProgress />}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box mt={3} className="displayColumnCenter">
          <Typography variant="body2" className="allready">
            Already have an account?{" "}
            <span className="spanTag" onClick={handleSignUp}>
              Sign up
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

      <Dialog
        open={loginDialogIsOpen}
        onClose={closeLoginDialog}
        className={classes.dialog}
      >
        <Box className={classes.DialogMainBox}>
          <Box className="logBox1">
            <Box className="displayColumnCenter">
              <img src="/images/GyanCoinImage.png" alt="" className="image1" />
            </Box>
            <Box className="subBox displayColumnCenter">
              <Typography variant="h5">
                Hey{" "}
                <span>
                  {props.location.state.email
                    .split("@")[0]
                    .charAt(0)
                    .toUpperCase() +
                    props.location.state.email.split("@")[0].slice(1)}
                </span>{" "}
                <img src="images/helloImage.png" alt="" />
              </Typography>
              <Typography variant="h5">Welcome to GyanBatua </Typography>
              <Typography className="paraTypo1" variant="body2">
                Where your skills secure your future. Connect, grow, and unlock
                global opportunities today!
              </Typography>
            </Box>
            <Box mt={4} className="displayColumnCenter">
              <Button
                className="btnContinue1"
                variant="containedPrimary"
                fullWidth
                type="submit"
                onClick={handleGetStarted}
              >
                {" "}
                Get Started{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};
export default Loginpassword;
