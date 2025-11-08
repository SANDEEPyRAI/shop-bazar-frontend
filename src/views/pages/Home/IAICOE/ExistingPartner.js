import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Page from "src/component/Page";
import { useLocation, useHistory } from "react-router-dom";
import AICEOBanner from "./AICEOBanner";

const instituteData = [
  {
    img: "/images/ResourcesImg/vits_logo.png",
    heading: "Vindhya Institute of Technology & Science",
    address:
      "Chandi Dai Temple Rd Karhi, Giduri, Amaudha Kalan, Satna, Madhya Pradesh 485441      ",
    coenumber: "D-CoE/1117-MP/VIT/2023",
    signupdate: "19th February 2023    ",
    course1: "B.Tech (CSE)",
    course2: "B.Tech (Mech.)",
    course3: "B.Tech (EE)",
    course4: "BCA",
    course5: "MCA",
    course6: "BBA",
    course7: "MBA",
    course8: "Diploma-ME",
    course9: "Diploma-EE",
    course10: "Diploma-CE",
    course11: "Diploma-CSE",
  },
  {
    img: "/images/ResourcesImg/bit_logo.png",
    heading: "Buddha Institute of Technology , Gorakhpur",
    address: "Address: CL-1 Sector -7, GIDA, Uttar Pradesh 273209",
    coenumber: "D-CoE/1115-UP/RSMT/2023",
    signupdate: "16 February 2023   ",
    course1: "B.Tech (CSE)",
    course2: "B.Tech (Mech.)",
    course3: "B.Tech (EE)",
    course4: "B.Tech (CE)",
    course5: " B.Tech (IT)",
    course6: " B.Tech (AI & ML)",
    course7: "B.Tech (DATA SCIENCE)",
    course8: "BBA",
    course9: "BCA",
    course10: "Diploma (CE)",
    course11: "Diploma (ME-Auto & Prod)",
    course11: "B.Pharm",
    course11: "D.Pharm",
  },
  {
    img: "/images/ResourcesImg/mpgi_logo.png",
    heading: "Maharana Pratap Group of Institutions    ",
    address: " Kothi, Mandhana, Bahlolpur, Uttar Pradesh 209217    ",
    coenumber: "D-CoE/1114-UP/MPGI/2023",
    signupdate: "18 February 2023 ",
    course1: "B.Tech (CSE)",
    course2: "B.Tech (ME)",
    course3: "B.Tech (EE)",
    course4: "B.Tech (CE)",
    course5: "BCA",
    course6: "MCA",
    course7: "BBA",
    course8: "MBA",
    course9: "Nursing",
  },
  {
    img: "/images/ResourcesImg/iom_logo.png",
    heading:
      "The Institute of Technology and Management (ITM, GIDA, Gorakhpur)     ",
    address:
      "Institute of Technology & Management (ITM, GIDA, Gorakhpur)AL-1, Sector 7, GIDA, Gorakhpur      ",
    coenumber: "D-CoE/1118-UP/ITM/2023",
    signupdate: "17 February 2023    ",
    course1: "B.Tech (CSE)",
    course2: "B.Tech (with AI & ML)",
    course3: "B.Tech (CSE with Data Science)",
    course4: "B.Tech (EE)",
    course5: "B.Tech (CE)",
    course6: "B.Tech (ME)",
    course7: "B.Tech (Applied Science)",
    course8: "MBA",
    course9: "B.Pharm    ",
  },
  {
    img: "/images/ResourcesImg/hiu_log.png",
    heading:
      "Haridev Joshi University of Journalism and Mass Communication    ",
    address: "Circuit House, Gopalbari, Jaipur, Rajasthan 302001    ",
    coenumber: "D-CoE/1119-RJ/HJU/2023",
    signupdate: "17 March 2023",
    course1: "PG Diploma in Public Health and Mass Communication    ",
  },
];

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    backgroundImage: "url('images/aibg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "95px 0px",
    overflow: "hidden",
    position: "relative",
    "& .textBox": {
      textAlign: "center",
      color: "#fff",
      "& h1": {
        marginBottom: "20px",
      },
    },
  },
  partnerBox: {
    padding: "40px 0px",
  },
  collegeListBox: {
    "& .MuiContainer-maxWidthLg": {
      maxWidth: "1399px",
    },
    padding: "40px 0px",
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
  },
  mainBox: {
    cursor: "pointer",
    "& .coursesName": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      "& p": {
        marginLeft: "20px",
        borderRight: "1px solid #EDEDED",
        paddingRight: "10px",
      },
    },
    "& .flexControl": {
      display: "flex",
      "@media(max-width:699px)": {
        display: "block",
      },
    },
    "& .marginManage": {
      marginLeft: "24px",
      "@media(max-width:699px)": {
        marginLeft: "0px",
        marginTop: "16px",
      },
    },
    "& .imgBox": {
      padding: "10px",
      border: "1px solid #B5B5B5",
      height: "100%",
      minHeight: "171px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const ExistingPartner = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [search, setSearch] = useState("");
  const [locationState, setLocationState] = useState("Location");
  const [specialization, setSpecialization] = useState("Specialization");

  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };
  const handleChangeSpecialization = (event) => {
    setLocationState(event.target.value);
  };
  return (
    <>
      <AICEOBanner />
      <Box className={classes.collegeListBox}>
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <TextField
                  className={classes.searchbar}
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    style: {
                      height: "44px !important",
                      width: "40px !important",
                    },
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by College name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M14.6725 14.6412L19 19M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                            stroke="#636880"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    className="selectItemBox"
                    value={locationState}
                    onChange={handleChange}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                  >
                    <MenuItem value="Location">
                      Select College Location
                    </MenuItem>
                    <MenuItem value="Location1"> Madhya Pradesh </MenuItem>
                    <MenuItem value="Location2">Rajasthan</MenuItem>
                    <MenuItem value="Location3">Uttar Pradesh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    className="selectItemBox"
                    value={specialization}
                    onChange={handleChangeSpecialization}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                  >
                    <MenuItem value="Specialization">
                      Select College Specialization
                    </MenuItem>
                    <MenuItem value="Spec1">B.Tech (CSE)</MenuItem>
                    <MenuItem value="Spec2">B.Tech (with AI & ML)</MenuItem>
                    <MenuItem value="Spec3">B.Tech (EE)</MenuItem>
                    <MenuItem value="Spec3">B.Tech (Mech.)</MenuItem>
                    <MenuItem value="Spec3">MBA</MenuItem>
                    <MenuItem value="Spec3">Nursing</MenuItem>
                    <MenuItem value="Spec3">B.Pharma</MenuItem>
                    <MenuItem value="Spec3">M.Pharma</MenuItem>
                    <MenuItem value="Spec3">BCA</MenuItem>
                    <MenuItem value="Spec3">MCA</MenuItem>
                    <MenuItem value="Spec3">Diploma (CE)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={2} md={2} sm={6} xs={12}>
                <Button variant="containedPrimary" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
            <Box
              mt={4}
              className={classes.mainBox}
              onClick={() => history.push("/ai-coe-details")}
            >
              {instituteData?.map((data, i) => {
                return (
                  <Box mb={2}>
                    <Paper elevation={1}>
                      <>
                        <Box className="flexControl">
                          <Box className="imgBox">
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              style={{ padding: "10px", width: "144px" }}
                            >
                              <img
                                src={data.img}
                                alt=""
                                width="100%"
                                style={{ maxWidth: "115px" }}
                              />
                            </Box>
                          </Box>
                          <Box className="marginManage">
                            <Box mb={1}>
                              <Typography
                                variant="h3"
                                style={{ fontWeight: "500", color: "#0856CC" }}
                              >
                                {data.heading}
                              </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Typography variant="body1">Address:</Typography>
                              <Box style={{ marginLeft: "8px" }}>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.address}
                                </Typography>
                              </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Typography variant="body1">CoE No.:</Typography>
                              <Box style={{ marginLeft: "8px" }}>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.coenumber}
                                </Typography>
                              </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Typography variant="body1">
                                Signup date:
                              </Typography>
                              <Box style={{ marginLeft: "8px" }}>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.signupdate}
                                </Typography>
                              </Box>
                            </Box>
                            <Box className="coursesName" pt={4}>
                              {" "}
                              <Typography variant="h6" color="textSecondary">
                                Available Courses :
                              </Typography>
                              {data.course1 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course1}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course2 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course2}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course3 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course3}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course4 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course4}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course5 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course5}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course6 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course6}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course7 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course7}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course8 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course8}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course9 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course9}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course10 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course10}
                                </Typography>
                              ) : (
                                <></>
                              )}
                              {data.course11 ? (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course11}
                                </Typography>
                              ) : (
                                <></>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>

    
    </>
  );
};

export default ExistingPartner;
