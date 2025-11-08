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
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

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
    url: "/vits-college",
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
    url: "/bitg-college",
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
    url: "/mpgi-college",
  },
  {
    img: "/images/ResourcesImg/Rajarshi.jpg",
    heading: "RAJARSHI SCHOOL OF MANAGEMENT & TECHNOLOGY, VARANASI",
    address: "Narayanpur, Varanasi, Uttar Pradesh 221003",
    coenumber: "CoE/1116-UP/RSMT/2023",
    signupdate: "17 February 2023    ",
    course1: "BBA",
    course2: "MCA",
    course3: "MBA",
    course4: "BCA",
    url: "/rsmtv-college",
  },
  {
    img: "/images/ResourcesImg/hiu_log.png",
    heading:
      "Haridev Joshi University of Journalism and Mass Communication    ",
    address: "Circuit House, Gopalbari, Jaipur, Rajasthan 302001    ",
    coenumber: "D-CoE/1119-RJ/HJU/2023",
    signupdate: "17 March 2023",
    course1: "PG Diploma in Public Health and Mass Communication    ",
    url: "/haridev-college",
  },
  {
    img: "/images/ResourcesImg/ITM.png",
    heading: "Institute of Technology and Management",
    address: "AL-1, Sector- 7, GIDA, Gorakhpur, 273209",
    coenumber: "CoE/1119-UP/ITM/2023    ",
    signupdate: " ",
    course1: "- B.tech (CSE)",
    course2: "B.tech (CSE) AL/ML",
    course3: "B.tech (Mech.)",
    course4: "B.tech (CE)",
    course5: "MBA",
    course6: "Pharmacy",
    url: "/itm-college",
  },
  {
    img: "/images/ResourcesImg/tulas.png",
    heading: "Tula’s Institute",
    address:
      "Tulas Institute Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun Uttarakhand Uttarakhand, 248197",
    coenumber: "CoE/1120-UK/TI/2023",
    signupdate: " ",
    course1: "- B.tech",
    course2: " M.tech",
    course3: " B.SC.",
    course4: "(Hons.) Agriculture",
    course5: "  BAJMC",
    course6: " B.com (Hons.)",
    course7: "BBA",
    course8: "MBA",
    course9: "BCA",
    course10: "MCA",
    url: "/ti-college",
  },
  {
    img: "images/ResourcesImg/global.png",
    heading: "Global Institute of Technology",
    address: "Batala - Amritsar Rd, NH 54, Amritsar, Jethuwal, Punjab 143501",
    coenumber: "CoE/1121-PU/GIT/2023",
    signupdate: " ",
    course1: "B.tech (CSE)",
    course2: " B.tech (CSE) AL/ML",
    course3: "B.tech (Mech.)",
    course4: "B.tech (CE)",
    course5: "Polytechnic Diploma",
    course6: "MBA",
    course7: "MCA",
    course8: " BBA",
    course9: "BCA",
    course10: " B.COM (Hons.)",
    course11: "Hotel Management",
    course12: "Pharmacy",
    course13: "Paramedical",
    url: "/git-college",
  },
  {
    img: "images/ResourcesImg/patil.png",
    heading: "D. Y. Patil Vidyapeeth, Pune",
    address:
      "Sant Tukaram Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018",
    coenumber: "CoE/1122-MH/DYP/2024",
    signupdate: " ",
    course1: "B.tech (AI & Data Sci.)",
    course2: "B.tech (Biotechnology)",
    course3: " M.tech (Biotech.)",
    course4: "BCA",
    course5: "BSC(CS)",
    course6: "MCA",
    course7: "BBA",
    course8: " BC",
    course9: "MBA",
    course10: "Designing",
    course11: " Optometry",
    course12: "Allied Health Science",
    url: "/dypv-college",
  },
  {
    img: "/images/ResourcesImg/ZEAL.png",
    heading: "ZEAL College Of Engineering & Research ",
    address:
      "Survey No, 39, Dhayari Narhe Road, Narhe, Pune, Maharashtra 411041",
    coenumber: "CoE/1123-MH/Zeel/2024",
    signupdate: "",
    course1: "B.tech (AI & Data Sci.)",
    course2: "B.tech (CE)",
    course3: "B.tech (CS)",
    course4: "B.tech (Electrical B.tech (Mech.)",
    course5: "MBA",
    course6: "M.tech",
    url: "/zcer-college",
  },
  {
    img: "/images/ResourcesImg/Shivnagar.png",
    heading: "Shivnagar Vidya Prasarak Mandal, Pune",
    address:
      "- Nira-Baramati Road, Malegaon Budruk, Malegaon Bk, Maharashtra 413115",
    coenumber: "CoE/1124-MH/SVPM/2024",
    signupdate: "",
    course1: "B.E. (Mech., Electronics, Civil, Computer, Electrical)",
    course2: "M.E. (Elect. Mech.,) Ph.d",
    course3: "B.Tech",
    course4: "BBA",
    course5: "MBA",
    course6: "MCA",
    url: "/svpmp-college",
  },
  {
    img: "/images/ResourcesImg/Raisoni.png",
    heading: "G H Raisoni College of Engineering & Management, Pune",
    address: "Gat 1200, Domkhel Rd, Wageshwar Nagar, Wagholi, Pune, 412207",
    coenumber: "CoE/1125-MH/GHRC/2024",
    signupdate: "",
    course1: "B.tech (CE)",
    course2: "B.tech (CS)",
    course3: "B.tech (Electrical)",
    course4: " B.tech (Mech.)",
    course5: "MBA",
    course6: "MCA",
    course7: "B.tech (AI/ML)",
    course8: "B.tech (Data Sci.)",
    url: "/ghrcem-college",
  },
  {
    img: "/images/ResourcesImg/Bharat.png",
    heading: "Bharat Institute of Technology, Meerut",
    address: "NH58 Bypass, Partapur, Meerut, Mahroli, Uttar Pradesh 250103",
    coenumber: "CoE/1126-UP/BIT/2024",
    signupdate: "   ",
    course1: "MBA",
    course2: "BBA",
    course3: "M.Tech",
    course4: "B.Tech",
    course5: "BCA",
    course6: "MCA",
    course7: "M.Pharma",
    course8: "B.Pharma",
    course9: "D.Pharma ",
    course10: "M.Ed",
    course11: " B.Ed",
    course12: "D.El.ED",
    url: "/bitm-college",
  },
  {
    img: "/images/ResourcesImg/Roorkee.png",
    heading: "Roorkee Institute of Technology, Roorkee",
    address: "- Puhana - Jhabrera Rd, Nanheda Anantpur, Uttarakhand 247668",
    coenumber: "CoE/1127-UK/RIT/2024",
    signupdate: " ",
    course1: "B.tech (CE)",
    course2: "B.tech (CS)",
    course3: "B.tech (Electrical) ",
    course4: "B.tech (Mech.)",
    course5: "MBA",
    course6: "MCA",
    course7: " B.tech (AI/ML)",
    course8: "B.tech (Electronics)",
    course9: "B.Sc. Agriculture",
    course10: "Optometry",
    course11: "Paramedical B.Ed",
    url: "/ritr-college",
  },
  {
    img: "/images/ResourcesImg/Marathwada.png",
    heading: "Marathwada Mitra Mandals Institute of Technology, Pune",
    address: "Wadgaon Shinde Road, Lohegaon, Pune, Maharashtra 411047",
    coenumber: "CoE/1128-MH/MMIT/2024",
    signupdate: " ",
    course1: "B.E. (Computer)",
    course2: "B.E. (AI/ML)",
    course3: "B.E. (CIVIL) ",
    course4: "B.E. (Mech.)",
    course5: "B.E.(Mechatronics)",
    url: "/mmmitp-college",
  },

  {
    img: "/images/ResourcesImg/SMS.png",
    heading: "School of Management Sciences, Lucknow",
    address: "Raj Bhavan Colony, Arjunganj, Lucknow, Uttar Pradesh 226001",
    coenumber: "CoE/1129-UP/SMS/2024",
    signupdate: " ",
    course1: "MBA",
    course2: "B.Tech",
    course3: "BCA ",
    course4: "BBA",
    course5: " B.Com",
    course6: " B.Com (Hons)",
    course7: "B.SC",
    course8: " Diploma",
    url: "/smsl-college",
  },

  {
    img: "/images/ResourcesImg/Prasad.png",
    heading: "Prasad Institute of Technology, Jaunpur",
    address: "Jaunpur, Balibhaddarpur, Uttar Pradesh 222002",
    coenumber: "CoE/1130-UP/PIT/2024",
    signupdate: "",
    course1: "MBA",
    course2: "B.Tech",
    course3: "B.Pharma",
    course4: "Diploma",
    course5: "D.Pharma",
    url: "/pitj-college",
  },

  {
    img: "/images/ResourcesImg/Poornima.png",
    heading: "Poornima University, Jaipur",
    address: "Ramchandrapura P.O. Vidhani Vatika Road Sitapura, Rajasthan",
    coenumber: "CoE/1112-RJ/PU/2019 ",
    signupdate: "",
    course1: " B.Tech",
    course2: "BCA",
    course3: " B.Arch",
    course4: "MCA",
    course5: "P.hd",
    course6: "B.Sc.",
    course7: " M.Tech",
    course8: "B.Com",
    course9: "BBA",
    course10: "MBA",
    course11: "BA",
    url: "/puj-college",
  },

  {
    img: "/images/ResourcesImg/Maulana.png",
    heading: "Maulana Azad University, Jodhpur",
    address: "Village Bujhawar, Tehsil Luni, Jodhpur, Rajasthan 342802",
    coenumber: "CoE/1113-RJ/MA/2019",
    signupdate: "",
    course1: "B.Tech",
    course2: "Diploma",
    course3: "BCA",
    course4: "MCA",
    course5: "B.Com",
    course6: "M.Com",
    course7: "BBA",
    course8: "MBA",
    course9: "BA",
    course10: "MA",
    course11: "B.Sc.",
    course12: "Nursing",
    course13: "D.Pharma",
    course14: "B.Pharma",
    url: "/mauj-college",
  },
];

const useStyles = makeStyles((theme) => ({
  MainImgBox: {
    background: "url(images/Partners/PartnersMain.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "250px",
    width: "100%",

    "& h1": {
      fontSize: "72px",
      fontWeight: 500,
      lineHeight: "65px",
      fontFamily: "Alumni Sans",
      color: "rgba(255, 255, 255, 1)",

      "@media(max-width:767px)": {
        fontSize: "60px !important",
      },
      "@media(max-width:500px)": {
        fontSize: "40px !important",
      },
    },
    "& span": {
      fontSize: "85px",
      fontWeight: 400,
      lineHeight: "30px",
      fontFamily: "Arizonia",
      textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      "@media(max-width:767px)": {
        fontSize: "65px !important",
      },
      "@media(max-width:500px)": {
        fontSize: "55px !important",
      },
    },
    "& h4": {
      fontWeight: 500,
      lineHeight: "65px",
      textAlign: "center",
      color: "#FFB443",
      "@media(max-width:500px)": {
        lineHeight: "32px",
      },
    },
  },

  partnerBox: {
    padding: "40px 0px",
  },
  collegeListBox: {
    padding: "40px 0px",
    "& .selectItemBox": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
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
      color:'black',
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
    address:{
      fontSize:'10px'
    }
  },
}));

const Partners = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [search, setSearch] = useState("");
  const [locationState, setLocationState] = useState("Location");
  const [specialization, setSpecialization] = useState("Specialization");
  const [Data, setData] = useState(instituteData);

  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };
  const handleChangeSpecialization = (event) => {
    setLocationState(event.target.value);
  };
  const masterSearch = (event) => {
    setSearch(event.target.value);
    let serachTest = event.target.value.trim().toLowerCase();
    const filterData = serachTest
      ? instituteData.filter((item) =>
          item.heading.toLowerCase().includes(serachTest)
        )
      : instituteData;

    setData(filterData);
  };

  const locationfilter = (event) => {
    setLocationState(event.target.value);

    let serachTest = event.target.value.trim().toLowerCase();
    const filterData = serachTest
      ? instituteData.filter((item) =>
          item.address.trim().toLowerCase().includes(serachTest)
        )
      : instituteData;

    setData(filterData);
  };

  const specializationfilter = (event) => {
    const serachTest = event.target.value.trim().toLowerCase();
    const filterData = serachTest
      ? instituteData.filter((item) => {
          for (let i = 1; i <= 11; i++) {
            let courseid = "course" + i;

            if (
              item[courseid] &&
              item[courseid].toLowerCase().includes(serachTest)
            ) {
              return true;
            }
          }
          return false;
        })
      : instituteData;
    setData(filterData);
  };

  useEffect(() => {
    const sortedData = [...instituteData].sort((a, b) =>
      a.heading.charAt(0).localeCompare(b.heading.charAt(0))
    );
    setData(sortedData);
  }, []);



  return (
    <>
      <Grid container className={classes.MainImgBox}>
        <Grid
          item
          style={{ width: "100%", gap: "15px" }}
          className="displayColumnCenter"
        >
          <Box className="">
            <Typography variant="h1">
              GyanBatua <span>Partners</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4">
              We’ve integrated with the below partners and more
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container>
        <Box className={classes.collegeListBox}>
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
                onChange={masterSearch}
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
                  onChange={locationfilter}
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
                  <MenuItem value="Location">Select College Location</MenuItem>

                  <MenuItem value="Madhya Pradesh"> Madhya Pradesh </MenuItem>
                  <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="Gorakhpur">Gorakhpur</MenuItem>
                  <MenuItem value="Punjab">Punjab</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra </MenuItem>
                  <MenuItem value="Pune">Pune </MenuItem>
                  <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <FormControl variant="outlined" fullWidth>
                <Select
                  className="selectItemBox"
                  value={specialization}
                  onChange={specializationfilter}
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
                  <MenuItem value="B.Tech (CSE)">B.Tech (CSE)</MenuItem>
                  <MenuItem value="B.Tech (with AI & ML)">
                    B.Tech (with AI & ML)
                  </MenuItem>
                  <MenuItem value="B.Tech (EE)">B.Tech (EE)</MenuItem>
                  <MenuItem value="B.Tech (Mech.)">B.Tech (Mech.)</MenuItem>
                  <MenuItem value="MBA">MBA</MenuItem>
                  <MenuItem value="Nursing">Nursing</MenuItem>
                  <MenuItem value="B.Pharma">B.Pharma</MenuItem>
                  <MenuItem value="M.Pharma">M.Pharma</MenuItem>
                  <MenuItem value="BCA">BCA</MenuItem>
                  <MenuItem value="MCA">MCA</MenuItem>
                  <MenuItem value="Diploma (CE)">Diploma (CE)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Button variant="containedPrimary" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
          <Box mt={4} className={classes.mainBox}>
            {Data?.map((data, i) => {
              return (
                <Box mb={2} >
                  <Paper elevation={1}>
                    <>
                      <Link to={data.url} style={{ textDecoration: "none" }}>
                        <Box className="flexControl" ml={-2} >
                          <Box className="imgBox">
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              style={{ width: "144px" }}
                            >
                              <img
                                src={data.img}
                                alt=""
                                width="100%"
                                style={{ width: "115px" }}
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
                              <Typography  >Address:</Typography>
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
                            {/* <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="body1">
                              Signup date:
                            </Typography>
                            <Box style={{ marginLeft: "8px" }}>
                              <Typography variant="body1" color="textSecondary">
                                {data.signupdate}
                              </Typography>
                            </Box>
                          </Box> */}
                            <Box className="coursesName" pt={1}>
                              <Box display="flex" flexWrap="wrap" alignItems="center">
                                {" "}
                                <Typography variant="h6" color="#262626">
                                  Available Courses :
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course1}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course2}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course3}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course4}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course5}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course6}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course7}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course8}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course9}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course10}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  {data.course11}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </>
                  </Paper>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Partners;
