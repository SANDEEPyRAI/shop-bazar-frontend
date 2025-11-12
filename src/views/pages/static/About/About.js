


import React, { useContext, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Grid
} from '@material-ui/core';
import Page from 'src/component/Page';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  mainAboutBox: {

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0px',
    overflow: 'hidden',
    position: 'relative',
    // backgroundColor: '#292E36',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
     
    },
    '& .textBox': {
      textAlign: 'center',
      color: 'black',
      zIndex: '1',
      '& h1': {
        fontSize: '60px',
        marginBottom: '16px',
        fontWeight:700,
        [theme.breakpoints.down('sm')]: {
          fontSize: '35px'
        }
      },
      "& .subTypo":{
        fontSize:"30px",
        fontWeight:500,
      },
    }
  },
  GyanBatuaDesc: {
    padding: '10px 0px',
    '& h1': {
      fontSize: '90px',
      marginBottom: '16px',
      textAlign: 'center',
      width: '100%',
      maxWidth: '555px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '45px',
        maxWidth: '100%'
      },
      '@media(max-width:461px)': {
        fontSize: '35px'
      }
    },
    '& p': {
      color: theme.palette.secondary.main,
      marginBottom: '16px',
      fontSize:"18px",
      width:"100%",
      [theme.breakpoints.down('lg')]:{
        maxWidth:"635px",
      },
      [theme.breakpoints.down('md')]:{
        maxWidth:"800px",
      },
    
    },
    '& img': {
      maxWidth: '108px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  whyGyanGrid:{
   " & .text1":{

      [theme.breakpoints.down('lg')]:{
        fontSize:'20px'
      },
      [theme.breakpoints.down('xs')]:{
        fontSize:'12px'
      }
   }
  },
  gridControl: {
    display: 'flex',
    justifyContent: 'end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    "& .aboutGyan":{
      paddingRight:"100px",
      "@media(max-width:960px)":{
        paddingRight:"0px",
      }
    },
   "& .textbtua":{
    
    [theme.breakpoints.down('xl')]: {
      lineHeight: '95px',
    },
      [theme.breakpoints.down('lg')]: {
        lineHeight:'99px'
      },
      [theme.breakpoints.down('xs')]: {
        lineHeight:'10px'
      },
      
    }
  },
  text2:{
    [theme.breakpoints.down('lg')]:{
      fontSize:'20px'
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:'12px'
    }
  },
  aboutGyanGrid:{
    "@media(max-width:960px)":{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }
  },
  visionBox: {
    backgroundColor: theme.palette.background.grayWhite,
    padding: '70px 0px',
    '& h1': {
      margin: '24px 0px',
      '& span': {
        color: theme.palette.primary.main
      }
    },
    '& h4': {
      width: '100%',
      maxWidth: '427px',
      fontSize: '20px',
      fontWeight: 400,
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%'
      },
    },
  },
  mainFeatureBox: {
    padding: '60px 0px',
    '& .textBoxes': {
      '& h1': {
        fontSize: '60px',
        marginBottom: '16px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          fontSize: '35px'
        }
      },
      '& h4': {
        fontSize: '20px',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: '20px'
      }
    }
  },

  


  
bannerimage: {
  position: 'relative',
  width: '100%',
},
overlay: {
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, rgba(27, 29, 31, 0.85) 1.04%, rgba(51, 53, 56, 0.6) 50%, rgba(41, 46, 54, 0.9) 100%)',
},
backgroundImage: {
  width: '100%',
  height: 'auto',
  display: 'block',
  zIndex: -1,
},
content: {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
  color: 'white',
  padding: '20px',
  maxWidth: '80%',
  margin: '0 auto',
},
about: {
  fontSize: '46px',
  lineHeight: '66px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '42px',
    lineHeight: '62px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '60px',
    lineHeight: '65px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    lineHeight: '77px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: '50px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '21px',
    lineHeight: '26px',
  },
},
subTypo: {
  fontSize: '22px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '25px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '23px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '7px',
  },
},

}));

const About = () => {
  const classes = useStyles();
  let url1 = '/static/Gyan-Batua-Logo2.png';
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Box className={classes.mainAboutBox}>
        <Box className="textBox">
     

<div className={classes.bannerimage}>
    <div className={classes.overlay}>
        <img src='images/ResourcesImg/aboutusimg.png' alt='About Us Image' className={classes.backgroundImage} />
        <div className={classes.content}>
            <Typography className={classes.about}>About Us</Typography>
            <Typography className={classes.subTypo}>
                Your Gateway to Lifelong Learning, Career Advancement, and Dynamic Live Resumes
            </Typography>
        </div>
    </div>
</div>

        </Box>
      </Box>
      <Box className={classes.GyanBatuaDesc}>
        <Container maxWidth={false}>
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.gridControl}
            >
              <Box className='aboutGyan' mt={6}>
                {/* <Typography variant="h1" >
                  About<br /> <br />GyanBatua
                </Typography> */}
                <Typography className="textbtua" variant='h1' >
                About <span>GyanBtua</span>
                </Typography>
                <Box pt={3}>
                  <img
                    src="images/batuaLogo.png"
                    alt=""
                    width="100%"
                    
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.whyGyanGrid}>
              <Typography className='text1' >
              Welcome to GyanBatua, your gateway to a world of learning, growth, and opportunity. At
GyanBatua, we're passionate about empowering individuals to unlock their full potential,
acquire new skills, and thrive in the digital age. Gyan Batua is a premier LRMS
(Learning-RecordsManagement-Platform) designed to adeptly bridge the divide
between the acquisition and application of digital skills. By integrating advanced
Blockchain and Artificial Intelligence technologies, we've established a robust platform
that efficiently aligns skill seekers with relevant opportunities on a global scale.

              </Typography>
              <Typography className='text1' >
              GyanBatua is more than just a learning platform; it's a community-driven hub for skill
enthusiasts, educators, employers, and learners alike. With a diverse range of courses,
certifications, and learning resources, GyanBatua caters to learners of all ages and
backgrounds, from students and professionals to freelancers and entrepreneurs.
              </Typography>
              <Typography className='text1'>
              With a commitment to innovation, accessibility, and inclusivity, we've created a dynamic
platform that redefines the way people learn, connect, and succeed. At GyanBatua, we
believe that learning should be personalized, engaging, and accessible to all. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box >
      <Box className={classes.visionBox}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <img
                  src="images/vision.png"
                  alt=""
                  width="100%"
                  style={{ maxWidth: '105px' }}
                />
                <Typography variant="h1" >
                Our  <span>Mission</span>
                </Typography>
                <Typography
                className={classes.text2}
                 
                >
                 Empowering Skills, Unlocking Opportunities: Our mission at GyanBatua is to empower
individuals to harness their skills and expertise, envisioning the ultimate knowledge
wallet, and unlocking boundless global opportunities. We are committed to bridging the
gap between skills and opportunities, connecting learners with a diverse range of
educational resources, career pathways, and professional development opportunities.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <img
                  src="images/mission.png"
                  alt=""
                  width="100%"
                  style={{ maxWidth: '80px' }}
                />
                <Typography variant="h1" >
                Our <span>Vision</span>
                </Typography>
                <Typography
                className={classes.text2}
                  
                >
                  Transforming Learning, Enriching Lives: Our vision for GyanBatua is to be the leading
platform for lifelong learning and skill development, transforming the way individuals
acquire knowledge, showcase their talents, and pursue their passions. We envision a
world where every learner has access to personalized learning experiences, real-world
skills, and meaningful opportunities for growth and success.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
      
      </Box>
     
    </>
  );
};
export default About;
