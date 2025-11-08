
import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Page from "src/component/Page";
import { useLocation } from "react-router-dom";
import RecSlider from "../../../../component/RecSlider";
import MediaContent from "./MediaContent";

const newsData = [
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
  {
    headText:
      "  In publishing and graphic design, Lorem ipsum is a place holdern, Lorem ipsum is a content.",
    date: " Nov 1, 2023",
  },
];

const useStyles = makeStyles((theme) => ({
  mainMediaBox: {
    // padding: "60px 24px",
    "& .internationalBox": {
      "& h1": {
        fontSize: "50px",
        maxWidth: "385px",
        marginBottom: "50px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "35px",
          maxWidth: "100%",
          lineHeight: "40px",
        },
      },
      "& h2": {
        // margin: '50px 0px 20px',
        width: "100%",
        maxWidth: "384px",
        fontSize: "30px",
        lineHeight: "38px",
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
      "& p": {
        marginTop: "30px",
        width: "100%",
        maxWidth: "488px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
    },
    "& .newsBox": {
      borderTop: `1px solid ${theme.palette.divider}`,
      // borderBottom: `1px solid ${theme.palette.divider}`,
      padding: "45px 0px",
      // '&:not(:first-child)': {
      //     borderTop: 'none'
      // },
      "& h3": {
        marginBottom: "20px",
        fontSize: "25px",
        fontWeight: 500,
      },
      "& h5": {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  },
  image:{
      position:'relative'
  },
  btua:{
     position:'absolute',
     top:'35%',
     left:'90px',
     color:'white',
     fontSize:'38px',
    //  fontSize:'50px'
    [theme.breakpoints.up('xs')]: {
      top:'26%',
      left:'33px',
      color:'white',
      fontSize:'20px',
      
    },
    [theme.breakpoints.up('sm')]: {
      top:'35%',
      left:'90px',
      color:'white',
      fontSize:'38px',
    },
    [theme.breakpoints.up('md')]: {
      top:'35%',
      left:'90px',
      color:'white',
      fontSize:'38px',
    },
    [theme.breakpoints.up('lg')]: {
      top:'35%',
      width:'100%',
      left:'90px',
      color:'white',
      fontSize:'38px',
    },
    [theme.breakpoints.up('xl')]: {
      top:'35%',
      left:'90px',
      color:'white',
      fontSize:'38px',
    },




  },
    
bannerimage: {
  position: 'relative',
  width: '100%',
},
overlay: {
  position: 'relative',
  width: '100%',

 
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
  left:'5%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
  color: 'white',
  padding: '20px',
  maxWidth: '80%',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]:{
    left:'1%',
    top:'30%'
  },
  
},
about: {
  fontSize: '46px',
  
  [theme.breakpoints.down('xl')]: {
    fontSize: '42px',
    
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '38px',

  },
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',

  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
   
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '15px',
   
  },
},
}));

const Media = () => {
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Box className={classes.mainMediaBox}>
        <Container maxWidth={"xl"}>
          <Box className="internationalBox">
            <Typography variant="h1">GyanBatua Media </Typography>
            <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
               
               
               
               <div className={classes.bannerimage}>
    <div className={classes.overlay}>
        <img src="images/Media1.jpg" alt='About Us Image' className={classes.backgroundImage} />
        <div className={classes.content}>
            <Typography className={classes.about}> GyanBatua in the News{" "}</Typography>
            
        </div>
    </div>
</div>

                
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
               
                <Typography variant="body2" color="textPrimary">
                  Stay updated with the latest buzz surrounding GyanBatua!
                  Explore news articles, press releases, and media coverage
                  highlighting our innovative platform's impact on the world of
                  education, skills development, and career opportunities.
                </Typography>
                
              </Grid>
          
            </Grid>
          </Box>
         
          <Box mt={5}>
            <MediaContent/>
          </Box>
        </Container>
      </Box>
   
    </>     
  );
};
export default Media;
const NewsBox = ({ data, isFirst }) => {
  return (
    <Box className={`newsBox ${isFirst ? "firstNewsBox" : "otherNewsBox"}`}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Typography variant="h3">{data.headText}</Typography>
          <Typography variant="h5" color="textSecondary">
            {data.date}
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h3">{data.headText}</Typography>
          <Typography variant="h5" color="textSecondary">
            {data.date}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

