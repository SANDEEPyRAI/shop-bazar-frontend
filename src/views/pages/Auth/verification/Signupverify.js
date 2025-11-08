import React, { useState } from 'react';
import { Box,Typography, makeStyles, Button, } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainBox: {
        padding: "12px 80px 39px 80px",
        boxShadow: "2px 2px 45px rgba(0, 0, 0, 0.05)",
        background:"#fff",
        "@media (max-width: 600px)":{
            paddingTop: '20px',
            padding: "0px 20px 39px 20px",
          },
        "& .logBox": {
            width: "100%",
            maxWidth: "402px",
            "@media (max-width: 600px)": {
                padding: "0px 20px 39px 20px",
              },
        },
        "& .subBox": {
            gap: "16px",
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
        "& .paraTypo": {
            color: "#636880",
            textAlign: "center",
            fontWeight: 400,
            width:"100%",
            maxWidth:"349px"
        },
        "& .btnContinue": {
            height: "50px",
            width:"100%",
            maxWidth:"245px"
        },
        "& .image": {
            mixBlendMode: "hard-light"
        }
    },
}))
const Loginverify = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Box className='logBox'>
                <Box className='displayColumnCenter'>
                <img src="/images/emailVerified.png" alt="" className='image' />
                </Box>
                <Box className='subBox displayColumnCenter'>
                    <Typography variant='h5'>EMAIL VERIFIED</Typography>
                    <Typography className='paraTypo' variant='body2'>Live Resume of a talented individual. This unique QR code is their Skills' Matchmaking Wallet. You now have access to their up-to-date qualifications and achievements.
                    </Typography>
                </Box>
                <Box mt={4} className='displayColumnCenter' >
                    <Button className='btnContinue' variant='containedPrimary' fullWidth type="submit"> Login Now </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default Loginverify
