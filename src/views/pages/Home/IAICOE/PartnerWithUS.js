import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AICEOBanner from "./AICEOBanner";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import { checkNumber } from "src/utils";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import ThankYouDialog from "./ThankYouDialog";

const useStyles = makeStyles((theme) => ({
  IAIDetailsContainer: {
    "& .AIChiImage": {
      [theme.breakpoints.down("sm")]: {
        marginTop: "25px",
      },
    },
    "& .partnersWithus": {
      "& h1": {
        fontFamily: "Public Sans",
        fontSize: "40px",
        textAlign: "center",
        fontWeight: 800,
        lineHeight: "51px",
        color: theme.palette.secondary.main,
      },
      "& h4": {
        fontFamily: "Public Sans",
        fontSize: "18px",
        textAlign: "center",
        fontWeight: 600,
        lineHeight: "25px",
        color: theme.palette.secondary.main,
      },
      "& h5": {
        fontFamily: "Public Sans",
        fontSize: "16px",
        fontWeight: 400,
        textAlign: "center",
        lineHeight: "22px",
        color: theme.palette.text.primary,
      },
    },
    "& .messagee": {
      "& .MuiOutlinedInput-root": {
        height: "59px",
      },
    },
    "& .MuiContainer-maxWidthLg": {
      maxWidth: "1399px",
    },
    "& .exBtn": {
      "& .MuiButton-containedPrimary": {
        textTransform: "uppercase",
        width: "100%",
        maxWidth: "233px",
      },
    },

    "& h3": {
      fontSize: "30px",
      fontWeight: 500,
      margin: "30px 0 20px 0",
      color: theme.palette.primary.main,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.primary,
      lineHeight: "22px",
    },
    "& h6": {
      marginTop: "40px",
      color: theme.palette.secondary.main,
    },
    "& h5": {
      color: theme.palette.primary.main,
      marginTop: "20px",
      fontSize: "18px",
    },
    "& .MuiTypography-body1": {
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "22px",
      color: theme.palette.text.primary,
    },
  },
  partnerContact: {
    padding: "50px 0px",
    "& .boxControl": {
      width: "100%",
      maxWidth: "422px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& h4": {
        width: "100%",
        maxWidth: "356px",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
      "& h5": {
        width: "100%",
        maxWidth: "422px",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
    },
    "& .contactBox": {},
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
      fontFamily: "Public Sans",
      lineHeight: "16.45px",
    },
  },
}));

function PartnerWithUS() {
  const classes = useStyles();
  const history = useHistory();
  const [states, setStates] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [showStates, setShowStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [countryCode, setCountryCode] = useState("");
  const [thankYou, setThankYou] = useState(false)

  const handleThankUClose = () => {
    setThankYou(false)
  }
  const handleThankUOpen = () => {
    setThankYou(true)
  }

  const changeCountry = (e) => {
    const name = e.target.value;
    changeCountryList(name);
  };
  const changeStateList = (name) => {
    const selectted = states.filter((cont) => {
      return cont.name === name;
    });

    if (selectted.length !== 0) {
      const contId = selectted[0]?.id;
      const allCity = cities.filter((city) => {
        return city.state_id === contId;
      });
      setShowCities(allCity);
    }
  };

  const changeState = (e) => {
    const name = e.target.value;
    changeStateList(name);
  };
  const changeCountryList = (name) => {
    const selectted = countries?.filter((cont) => {
      return cont.name === name;
    });

    const contId = selectted[0]?.id;
    const allState = states?.filter((state) => {
      return state.country_id === contId;
    });
    setShowStates(allState);
  };

  useEffect(() => {
    axios.get("/json/countries.json").then(function (response) {
      setCountries(response.data.countries);
      axios.get("/json/states.json").then(function (response) {
        setStates(response.data.states);
        axios.get("/json/cities.json").then(function (response) {
          setCities(response.data.cities);
        });
      });
    });
  }, []);
  const AccountRegister = async (values) => {
    try {
      const res = await axios({});
    } catch (error) {
      console.log(error);
    }
  };
  const objectives = [
    {
      content:
        "Skills Match-Making through AI-Driven Engine: Connecting skill demand and supply for Scholarships, Internships, Jobs, and Apprenticeships between CoE participants and various sectors.",
    },
    {
      content:
        "Skills Enhancement through Curriculum-Connect, Expert Interaction: Aligning education with industry requirements, AI, and Emerging Technologies, supplemented by hybrid classes and expert interactions.",
    },
    {
      content:
        "Skills Representation with Automated Resume Builder: Enhancing skill representation for participants with a unique QR-coded, dynamic resume system to generate world-class resumes.",
    },
    {
      content:
        "Digital Health-Connect: Utilizing CoEs for community outreach and collaborations in digital health, focusing on Rare diseases, Organ transplants, and Palliative, and Geriatric care.",
    },
    {
      content:
        "Innovate through Research Collaboration: Promoting collaborative research and innovation in emerging technologies.",
    },
    {
      content:
        "Customized Local Solutions: Encouraging AI-based student projects addressing local needs and challenges.",
    },
  ];

  const initialFormValues = {
    firstName: "",
    city: "",
    state: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: "",
  };
  const validationFormSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    contactPerson: Yup.string().required("Contact Person Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <>
      <ThankYouDialog
        thankYou={thankYou}
        handleThankUClose={handleThankUClose}
      />
      <AICEOBanner />
      <Box className={classes.IAIDetailsContainer}>
        <Container maxWidth="lg">
          <Typography variant="h3">I & AI CoEs</Typography>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Typography variant="body2">
                The objectives of the GyanBatua I & AI CoEs have evolved to
                better align with the rapidly advancing landscape of AI. We
                believe that positioning ourselves strategically in this AI
                revolution will not only benefit the participating institutions
                but also contribute significantly to the overall growth and
                development of the education sector.
              </Typography>
              <Typography variant="h6">
                The aim is to be on the right side of this AI revolution while
                leveraging the existing educational framework, primarily
                targeting all the government higher education institutions and
                select primary and secondary schools.
              </Typography>
              <Typography variant="h5">
                Objectives of the I & AI-CoEs:
              </Typography>

              {objectives.map((data, i) => (
                <>
                  <Typography key={i} variant="body1">
                    <span style={{ fontSize: "16px", color: "#000" }}>
                      {i + 1}-{" "}
                    </span>
                    {data.content}
                  </Typography>
                </>
              ))}

              <Typography variant="h6">Beneficiaries:</Typography>
              <Box mt={1}>
                <Typography variant="body2" color="textSecondary">
                  Primarily all participant students and teachers, with indirect
                  benefits to government and development sectors through a
                  skilled workforce and AI-led innovations.
                </Typography>
              </Box>
              <Box mt={2} className="exBtn">
                <Button
                  variant="containedPrimary"
                  onClick={() => history.push("/our-partner")}
                >
                  Our existing partner
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} align="center" className="AIChiImage">
              <Box className="displayEnd">
                <img
                  src="images/AIimg.png"
                  alt="img"
                  width="100%"
                  style={{ maxWidth: "425px" }}
                  height="521px"
                />
              </Box>

            </Grid>
          </Grid>
          <Box className={classes.partnerContact}>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="boxControl">
                  <img
                    src="images/partnerimg.png"
                    alt=""
                    width="100%"
                    style={{ maxWidth: "231px", margin: "0 auto" }}
                  />
                  <Box mt={3} className="partnersWithus">
                    <Typography variant="h1" color="textPrimary">
                      Partner With Us
                    </Typography>
                    <Box mt={2} mb={2}>
                      <Typography
                        variant="h4"
                        style={{ fontSize: "18px" }}
                        color="textPrimary"
                      >
                        Empower Your College with Innovative Learning and Career
                        Opportunities: Partner with Gyan Batua.
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="textSecondary">
                      Catalyze Student Success and Institutional Growth Through
                      a Collaborative Alliance with Gyan Batua.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="contactBox">
                  <Box>
                    <Formik
                      initialValues={initialFormValues}
                      validationSchema={validationFormSchema}
                      onSubmit={AccountRegister}
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
                          <Grid container spacing={2}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Box mt={1}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  placeholder="Name of the Institute/ college"
                                  name="firstName"
                                  value={values.firstName}
                                  error={Boolean(
                                    touched.firstName && errors.firstName
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <img
                                          src="images/House.png"
                                          alt="house"
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                <FormHelperText error>
                                  {touched.firstName && errors.firstName}
                                </FormHelperText>
                              </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                              <Box mt={1}>
                                <FormControl fullWidth>
                                  <Select
                                    fullWidth
                                    variant="outlined"
                                    name="city"
                                    value={values?.city}
                                    error={Boolean(touched.city && errors.city)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  >
                                    <MenuItem value="">
                                      <em>City</em>
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                                <FormHelperText error>
                                  {touched.city && errors.city}
                                </FormHelperText>
                              </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                              <Box mt={1}>
                                <FormControl fullWidth>
                                  <Select
                                    fullWidth
                                    variant="outlined"
                                    name="state"
                                    value={values?.state}
                                    error={Boolean(
                                      touched.state && errors.state
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  >
                                    <MenuItem value="">
                                      <em> State</em>
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                                <FormHelperText error>
                                  {touched.state && errors.state}
                                </FormHelperText>
                              </Box>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Box mt={1}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  placeholder="Contact Person Name"
                                  name="contactPerson"
                                  value={values.contactPerson}
                                  error={Boolean(
                                    touched.contactPerson &&
                                    errors.contactPerson
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <BsPerson />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                <FormHelperText error>
                                  {touched.contactPerson &&
                                    errors.contactPerson}
                                </FormHelperText>
                              </Box>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Box mt={1}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  placeholder="Phone Number"
                                  name="phone"
                                  value={values.phone}
                                  error={Boolean(touched.phone && errors.phone)}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <FiPhone />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                <FormHelperText error>
                                  {touched.phone && errors.phone}
                                </FormHelperText>
                              </Box>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Box mt={1}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  placeholder="Email"
                                  name="email"
                                  value={values.email}
                                  error={Boolean(touched.email && errors.email)}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <HiOutlineMailOpen />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                <FormHelperText error>
                                  {touched.email && errors.email}
                                </FormHelperText>
                              </Box>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Box mt={1}>
                                <TextField
                                  placeholder="Message here..."
                                  variant="outlined"
                                  className="messagee"
                                  name="message"
                                  fullWidth
                                  value={values.message}
                                  error={Boolean(
                                    touched.message && errors.message
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <FormHelperText error>
                                  {touched.message && errors.message}
                                </FormHelperText>
                              </Box>
                            </Grid>
                          </Grid>
                          <Box mt={4}>
                            <Button
                              variant="containedPrimary"
                              type="submit"
                              fullWidth
                              onClick={handleThankUOpen}
                            >
                              SUBMIT
                            </Button>
                          </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default PartnerWithUS;
