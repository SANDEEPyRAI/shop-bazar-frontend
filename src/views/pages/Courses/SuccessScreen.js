import ButtonCircularProgress from 'src/component/ButtonCircularProgress';
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

import { apiConfig } from "src/apiconfig/ApiConfig";
const useStyles = makeStyles(theme => ({
  mainBody: {
    display: 'flex',

    alignItems: 'center',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    '& h2': {
      paddingBottom: '20px',
      textTransform: 'uppercase',
      fontSize: '25px',
      whiteSpace: 'pre',
      textOverflow: 'ellipsis',
      width: '307px',
      overflow: 'hidden'
    },
    '& h4': {
      paddingBottom: '20px',
      textTransform: 'uppercase',
      fontSize: '16px',
      whiteSpace: 'pre',
      textOverflow: 'ellipsis',
      width: '307px',
      overflow: 'hidden'
    }
  },
  mainSection: {
    height: '100%',
    width: '100%',
    border: '1px solid #f2f2f2',
    minHeight: '200px',
    borderRadius: '20px',
    padding: '10px',
    background: theme.palette.background.white,
    '& img': {
      objectFit: 'cover',
      borderRadius: '20px'
    }
  },

  check: {
    margin: '0px auto',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    background: '#fff',
    textAlign: 'center',
    position: 'absolute',
    right: '6px'
  },
  checkIcon: {
    marginTop: '10px',
    lineHeight: '50px',
    fontSize: '30px'
  }
}));

export default function SuccessScreen() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [staus, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const viewTransactionHandler = async id => {
    try {
      setIsLoading(true);
      const res = await Axios({
        method: 'GET',
        url: apiConfig.getTransactionId,
        params: {
          id: id
        }
      });
      if (res) {
        setStatus(res.data.result);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const razorpayPaymentLinkId = searchParams.get('razorpay_payment_link_id');

    if (razorpayPaymentLinkId) {
      viewTransactionHandler(razorpayPaymentLinkId);
    }
  }, [location]);

  return (
    <Box style={{marginTop:"2rem"}}>
    <Container maxWidth="md" fullWidth className={classes.mainBody}>
      <Box style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
        {isLoading ? (
          <ButtonCircularProgress />
        ) : (
          <Grid container className={classes.mainSection}>
            <Grid item xs={12}>
              <Box className={classes.check}>
                <Check
                  style={
                    staus?.transactionStatus === 'PAID'
                      ? { color: 'rgb(37 183 31)' }
                      : { color: '#fff' }
                  }
                  className={classes.checkIcon}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box p={2}>
                {/* <Typography variant="h2" color="textPrimary">
                  {staus?.courseId?.courseName}
                </Typography> */}
                {/* <img
                  src={staus?.courseId?.thumbnail}
                  width="100%"
                  height="200px"
                  /> */}
                <img
                  src="images/payment.png"
                  style={{ width: 'auto', maxWidth: '300px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box>
                <Box width="100%">
                  <Box className={classes.mainBody}>
                    <Box pt={2} pb={2}>
                      <Typography variant="h2" color="textPrimary">
                        Payment Status : {staus?.transactionStatus}
                      </Typography>
                      <Typography variant="h4" color="textPrimary">
                        Amount : Rs.
                        {staus?.amount}
                        {/* <span className="crossed-text">
                          <span className="text">{staus?.amount}</span>
                        </span>{' '}
                        &nbsp;
                        <span className="cut-text">Rs. 0</span> */}
                      </Typography>
                      <Typography variant="h4" color="textPrimary">
                        Receipt Id : {staus?.receiptId}
                      </Typography>
                      <Typography variant="h4" color="textPrimary">
                        Reference Id : {staus?.reference_id}
                      </Typography>
                      <Typography variant="h4" color="textPrimary">
                        Date : {moment(staus?.updatedAt).format('lll')}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          history.push({
                            pathname: '/subscription',

                          })
                        }
                      >
                        Go Back To Profile
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
    </Box>
  );
}
