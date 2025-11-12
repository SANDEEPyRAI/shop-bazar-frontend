import React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  makeStyles,
  Button,
  Hidden
} from '@material-ui/core';

const processData = [
  {
    img1: 'images/recruitment/cv.png',
    heading: 'CV Submission',
    subHeading: '  Submit your resume on hr@buyucoin.com for further process.'
  },
  {
    img1: 'images/recruitment/contact.png',
    heading: 'Phone Screening',
    subHeading:
      'After your resume seclected we will contact your regarding your interview.'
  },
  {
    img1: 'images/recruitment/assesment.png',
    heading: 'Skill Assesment',
    subHeading: ' A pannel will assess your skills.'
  },
  {
    img1: 'images/recruitment/interview.png',
    heading: 'Final Interview',
    subHeading: ' You are one step away, from the big thing..'
  }
];

const useStyles = makeStyles(theme => ({
  RecruitmentBox: {
    padding: '25px 0px 106px',
    '& .textHead': {
      '& h1': {
        marginBottom: '55px',
        textAlign: 'center',
        '& span': {
          color: theme.palette.primary.main
        }
      }
    },
    '& .processBox': {
      backgroundColor: theme.palette.background.secondary,
      height: '100%',
      minHeight: '258px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '236px',
      "@media(max-width:960px)":{
        maxWidth: '100%',
      },
      '& p': {
        width: '100%',
        maxWidth: '158px'
      },
      '& h4': {
        margin: '10px 0px 6px'
      }
    }
  }
}));

const RecruitmentProcess = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.RecruitmentBox}>
        <Container maxWidth="lg">
          <Box className="textHead">
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ fontWeight: '700' }}
            >
              Learn Our Recruitment <span>Process</span>
            </Typography>
            <Box>
              <Grid container spacing={2}>
                {processData?.map((data, i) => (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Process data={data} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default RecruitmentProcess;

const Process = ({ data }) => {
  return (
    <Box className="processBox">
      <Box>
        <img src={data.img1} alt="" width="100%" style={{ maxWidth: '50px' }} />
        <Typography variant="h4" color="textPrimary">
          {data.heading}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {data.subHeading}
        </Typography>
      </Box>
    </Box>
  );
};
