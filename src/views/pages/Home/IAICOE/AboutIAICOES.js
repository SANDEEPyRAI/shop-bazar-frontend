import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
  makeStyles,
  InputAdornment,
  MenuItem,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  AccountCircle,
  LocationCity,
  LocationOn,
  Person,
  Phone,
  Email,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { RiSchoolLine } from "react-icons/ri";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  institute: Yup.string()
    .required("Institute / College is required")
    .min(2, "Name is too short")
    .max(50, "You cannot enter a name larger than 50 characters")
    .matches(/^[^\d]+$/, "Numbers are not allowed"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  personName: Yup.string()
    .required("Person Name is required")
    .matches(/^[^\d]+$/, "Numbers are not allowed")
    .min(2, "Person Name is too short")
    .max(15, "You cannot enter a name larger than 15 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(12, "Phone number can be at most 12 digits"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Invalid email format")
    .matches(/\.(com|in|co)$/, "Invalid email format"),
  message: Yup.string()
    .max(50, "You cannot enter a message larger than 50 characters")
    .required("Message is required"),
});

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "auto",
    position: "relative",
  },
  h3: {
    fontFamily: "Roboto Condensed",
    textAlign: "center",
    fontSize: "50px",
    fontWeight: 500,
    color: "white",
    position: "absolute",

    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      top: "70px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
      top: "110px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
      top: "150px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px",
      top: "190px",
    },
  },
  h5: {
    marginBottom: "-2rem",
    fontSize: "20px",
  },
  innovation: {
    position: "absolute",

    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      top: "80px",
      left: "24%",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
      top: "140px",
      left: "35%",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      top: "170px",
      left: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "25px",
      top: "230px",
      left: "35%",
    },
  },
  h4: {
    color: "#0856CC",
    fontSize: "30px",
    fontWeight: "500",
    fontFamily: "Roboto Condensed",
    marginTop: "10px",
  },
  body1: {
    color: "gray",
    fontSize: "14px",
    marginTop: "10px",
  },
  body2: {
    color: "#636880",
    fontSize: "14px",
    fontFamily: "Roboto Condensed",
    fontWeight: "400",
    lineHeight: "22px",
    marginTop: "10px",
  },
  aim: {
    fontWeight: "400",
    fontSize: "14px",
    fontFamily: "Roboto Condensed",
    color: "#636880",
    marginTop: "1px",
  },
  h5: {
    color: "#0856CC",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Roboto Condensed",
    lineHeight: "27px",
    marginTop: "10px",
  },
  benefits: {
    fontFamily: "Roboto Condensed",
    fontSize: "18px",
    fontWeight: "400",
    color: "#262626",
  },
  btn: {
    marginTop: "15px",
    background: "#0856CC",
  },
  btnPartner: {
    marginTop: "30px",
    background: "#0856CC",
  },
  customText: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "white",
  },

  Empower: {
    textAlign: "center",
    color: "#262626",
    fontSize: "18px",
    fontWeight: "600",
    width: "100%",
    maxWidth: "356px",
    textAlign: "center",
    marginTop: "10px",
    fontFamily: "public sans",
  },
  Catelog: {
    textAlign: "center",
    color: "gray",
    width: "100%",
    maxWidth: "422px",
    textAlign: "center",
    fontFamily: "public sans",
    fontSize: "16px",
    fontWeight: 400,
  },
  btn2: {
    background: "#0856CC",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  partner: {
    fontSize: "40px",
    paddingTop: "60px",
    fontWeight: "800",
    color: "#262626",

    textDecoration: "none",
    "&:focus": {
      outline: "none",
    },
  },
  heroSection: {
    padding: "0 10px",
    marginTop: "1rem",
    "@media (min-width:600px)": {
      padding: "0 90px",
    },
  },
  Robot: {
    marginTop: "70px",
    maxWidth: "400px",
    maxHeight: "700px",
  },
  success: {
    color: "green",
    fontSize: "20px",
    texrAlign: "center",
  },
  card: {
    backgroundColor: "rgba(250, 250, 250, 1)",
    padding: theme.spacing(2),
  },
  errorText: {
    color: "red",
  },
  btn: {
    background: "#0856CC",
  },
  formmainwrapper: {
    paddingBottom: "40px",
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
  },
  city: {
    fontSize: "14px",
    fontFamily: "Public sans",
    fontWeight: 400,
    color: "#636880",
  },
  state: {
    fontSize: "14px",
    fontFamily: "Public sans",
    fontWeight: 400,
    color: "#636880",
  },
  formcity: {
    "& .MuiSelect-select": {
      border: "none",
    },
    " &  .MuiSelect-select": {
      paddingBottom: "9px",
      paddingLeft: "5px",
    },
  },
  formstate: {
    "& .MuiSelect-select": {
      border: "none",
    },
    " &  .MuiSelect-select": {
      paddingBottom: "9px",
      paddingLeft: "5px",
    },
  },
  robotimg: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
    },
  },
}));

const Home = () => {
  const initialValues = {
    institute: "",
    city: "",
    state: "",
    personName: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const [showmessage, setShowmessage] = useState(false);

  // const handleSubmit = (values) => {
  //   console.log("Form Data:", values);
  //   setShowmessage(true);
  //   setTimeout(() => {
  //     window.location.href = "/";
  //   }, 1000);
  // };

  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values) => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    console.log(values, "uggjhbsa");
    setShowmessage(true);
    setIsLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: "https://nodev3-learningrecords.mobiloitte.io/api/v1/landingUniversity/addLandingUniversity",
        data: {
          instituteName: values.institute,
          city: values.city,
          state: values.state,
          personName: values.personName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          message: values.message,
        },
      });
      if (res.data.responseCode === 200) {
        toast.success(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 400) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 401) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 404) {
        toast.error(res?.data?.responseMessage);
      } else if (res?.data?.responseCode === 409) {
        toast.error(res?.data?.responseMessage);
      } else {
        toast.error("Failed to submit form");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error, "error");
      setIsLoading(false);
      toast.error("Failed to submit form");
    }
  };

  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} position="relative">
        <img
          src="/images/AICOEsImages/IAICOES.png"
          alt="Your Alt Text"
          className={classes.container}
        />
        <Typography variant="h3" className={classes.h3}>
          I & AI CoEs
        </Typography>
        <Typography className={classes.innovation}>
          Innovation and Artificial Intelligence Centers of Excellence
        </Typography>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          justifyContent="center"
          display="flex"
          alignItems="center"
          className={classes.heroSection}
        >
          <Box textAlign="justify">
            <Typography variant="h4" className={classes.h4}>
              I & AI-CoEs
            </Typography>
            <Typography variant="body1" className={classes.body1} mt={5}>
              The objectives of the GyanBatua I & AI CoEs have evolved to better
              align with the rapidly advancing landscape of AI. We believe that
              positioning ourselves strategically in this AI revolution will not
              only benefit the participating institutions but also contribute
              significantly to the overall growth and development of the
              education sector.
            </Typography>
            <br />

            <Typography className={classes.aim}>
              The aim is to be on the right side of this AI revolution while
              leveraging the existing educational framework, primarily targeting
              all the government higher education institutions and select
              primary and secondary schools.
              <br />
            </Typography>
            <Typography variant="h5" className={classes.h5}>
              Objective of the I & AI-CoEs
            </Typography>
            <Typography variant="body2" className={classes.body2}>
              1. Skills Match-Making through AI-Driven Engine: Connecting skill
              demand and supply for Scholarships, Internships, Jobs, and
              Apprenticeships between CoE participants and various sectors.
              <br />
              2. Skills Enhancement through Curriculum-Connect, Expert
              Interaction: Aligning education with industry requirements, AI,
              and Emerging Technologies, supplemented by hybrid classes and
              expert interactions.
              <br />
              3. Skills Representation with Automated Resume Builder: Enhancing
              skill representation for participants with a unique QR-coded,
              dynamic resume system to generate world-class resumes.
              <br />
              4. Digital Health-Connect: Utilizing CoEs for community outreach
              and collaborations in digital health, focusing on Rare diseases,
              Organ transplants, and Palliative, and Geriatric care.
              <br />
              5. Innovate through Research Collaboration: Promoting
              collaborative research and innovation in emerging technologies.
              <br />
              6. Customized Local Solutions: Encouraging AI-based student
              projects addressing local needs and challenges.
              <br />
              <br />
            </Typography>
            <Typography className={classes.benefits}>Beneficiaries:</Typography>
            <Typography variant="body2" className={classes.body2}>
              Primarily all participant students and teachers, with indirect
              benefits to government and development sectors through a skilled
              workforce and AI-led innovations.
            </Typography>
            <Typography>
              <Link to="/our-partner">
                <Button
                  className={classes.btnPartner}
                  variant="contained"
                  color="primary"
                  style={{ paddign: "0px" }}
                >
                  our existing partner
                </Button>
              </Link>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          align="center"
          className={classes.robotimg}
        >
          <Box className={classes.Robot}>
            <img
              src="/images/AICOEsImages/RobotImage.png"
              alt="Robot Image"
              width="90%"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ paddingTop: "90px" }}
        className={classes.formmainwrapper}
      >
        <Grid item xs={12} sm={12} md={5} lg={5} align="center">
          <Typography>
            <img
              src="images/AICOEsImages/HandeSake.png"
              alt="HandeSake Image"
              width="35%"
              style={{ paddingBottom: "30px" }}
            />
          </Typography>
          <Link to="/partners" className={classes.link}>
            <Typography
              className={classes.partner}
              component="span"
              display="inline"
              style={{ paddingTop: "1rem" }}
            >
              Partner With Us
            </Typography>
          </Link>
          <Typography className={classes.Empower}>
            Empower Your College with Innovative Learning and Career
            Opportunities: Partner with Gyan Batua.
            <br />
            <br />
          </Typography>
          <Typography className={classes.Catelog}>
            Catalyze Student Success and Institutional Growth Through a
            Collaborative Alliance with Gyan Batua.
          </Typography>
        </Grid>

        <Grid
          sm={12}
          xs={12}
          md={7}
          lg={7}
          justifyContent="center"
          width="100%"
        >
          <Grid container justify="center" className={classes.root}>
            <Grid item xs={12} sm={7} md={7}>
              <Card className={classes.card}>
                <CardContent>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              name="institute"
                              placeholder="Name of the Institute/ college"
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img
                                      src="./images/Partners/homeicon.png"
                                      alt="homeicon"
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            {errors.institute && touched.institute && (
                              <Typography
                                variant="caption"
                                className={classes.errorText}
                              >
                                {errors.institute}
                              </Typography>
                            )}
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                              <Field
                                className={classes.formcity}
                                name="city"
                                placeholder="city"
                                as={Select}
                                startAdornment={
                                  <InputAdornment position="start">
                                    <Typography className={classes.city}>
                                      City
                                    </Typography>
                                  </InputAdornment>
                                }
                              >
                                <MenuItem value="">Select City</MenuItem>
                                <MenuItem value="Gida">Gida</MenuItem>
                                <MenuItem value="Dehli">Delhi</MenuItem>
                                <MenuItem value="Mumbai">Mumbai</MenuItem>
                                <MenuItem value="Agra">Agra</MenuItem>
                                <MenuItem value="Meerut">Meerut</MenuItem>
                                <MenuItem value="Lucknow">Lucknow</MenuItem>
                                <MenuItem value="Mahroli">Mahroli</MenuItem>
                                <MenuItem value="Partapur">Partapur</MenuItem>
                                <MenuItem value="Amritsar">Amritsar</MenuItem>
                                <MenuItem value="Pune">Pune</MenuItem>
                                <MenuItem value="Jaipur">Jaipur</MenuItem>
                                <MenuItem value="Bahlolpur">Bahlolpur</MenuItem>
                                <MenuItem value="Jodhpur">Jodhpur</MenuItem>
                                <MenuItem value="Jaunpur">Jaunpur</MenuItem>
                                <MenuItem value="Sitapur">Sitapur</MenuItem>
                                <MenuItem value="Varanasi">Varanasi</MenuItem>
                                <MenuItem value="Anantpur">Anantpur</MenuItem>
                                <MenuItem value="Dehradun">Dehradun</MenuItem>
                                <MenuItem value="Satna">Satna</MenuItem>
                                <MenuItem value="Giduri">Giduri</MenuItem>
                              </Field>

                              {errors.city && touched.city && (
                                <Typography
                                  variant="caption"
                                  className={classes.errorText}
                                >
                                  {errors.city}
                                </Typography>
                              )}
                            </FormControl>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                              <Field
                                className={classes.formstate}
                                name="state"
                                as={Select}
                                placeholder="state"
                                startAdornment={
                                  <InputAdornment position="start">
                                    <Typography className={classes.state}>
                                      State
                                    </Typography>
                                  </InputAdornment>
                                }
                              >
                                <MenuItem value="">Select State</MenuItem>
                                <MenuItem value="Uttar Pradesh">
                                  Uttar Pradesh
                                </MenuItem>
                                <MenuItem value="Delhi">Delhi</MenuItem>
                                <MenuItem value="Maharashtra">
                                  Maharashtra
                                </MenuItem>
                                <MenuItem value="Punjab">Punjab</MenuItem>
                                <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                <MenuItem value="Punjab">Punjab</MenuItem>
                                <MenuItem value="Gorakhpur">Gorakhpur</MenuItem>
                                <MenuItem value="Uttarakhand">
                                  Uttarakhand
                                </MenuItem>
                                <MenuItem value="Madhya Pradesh">
                                  Madhya Pradesh
                                </MenuItem>
                              </Field>

                              {errors.state && touched.state && (
                                <Typography
                                  variant="caption"
                                  className={classes.errorText}
                                >
                                  {errors.state}
                                </Typography>
                              )}
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              // label="Person Name"
                              name="personName"
                              placeholder="Contact Person Name"
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img
                                      src="./images/Partners/personicon.png"
                                      alt="personicon"
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            {errors.personName && touched.personName && (
                              <Typography
                                variant="caption"
                                className={classes.errorText}
                              >
                                {errors.personName}
                              </Typography>
                            )}
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              // label="Phone Number"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img
                                      src="./images/Partners/phoneicon.png"
                                      alt="phoneicon"
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                              <Typography
                                variant="caption"
                                className={classes.errorText}
                              >
                                {errors.phoneNumber}
                              </Typography>
                            )}
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              // label="Email"
                              name="email"
                              placeholder="Email"
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img
                                      src="./images/Partners/emailicon.png"
                                      alt="emailicon"
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            {errors.email && touched.email && (
                              <Typography
                                variant="caption"
                                className={classes.errorText}
                              >
                                {errors.email}
                              </Typography>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              // label="Message "
                              placeholder="Message here..."
                              name="message"
                              multiline
                              variant="outlined"
                            />
                            {errors.message && touched.message && (
                              <Typography
                                variant="caption"
                                className={classes.errorText}
                              >
                                {errors.message}
                              </Typography>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <Box variant="containedPrimary">
                              <Button
                                className={classes.btn}
                                style={{ width: "100%" }}
                                type="submit"
                                variant="contained"
                                color="primary"
                              >
                                Submit
                              </Button>
                            </Box>
                          </Grid>
                          {/* {showmessage && (
                            <Typography
                              style={{
                                color: "green",
                                fontSize: "20px",
                                textAlign: "center",
                              }}
                            >
                              Submitted Successfully
                            </Typography>
                          )} */}
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ background: "#faf8f8" }}>{/* <FooterUpper/> */}</Box>
    </>
  );
};

export default Home;
