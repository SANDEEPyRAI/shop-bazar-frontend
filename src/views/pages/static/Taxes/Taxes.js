import React from "react";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    "& .HeaderBox": {
      background: "url(images/Taxes/Taxes.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "250px",
      width: "100%",
      "& .TextBox": {
        // [theme.breakpoints.up('xs')]:{
        // textAlign:'center'
        // },
       
        [theme.breakpoints.up('lg')]:{
          marginLeft:'4rem',
        },
        

        "& .TextBox1": {
          fontSize: '40px',
          fontFamily: 'Roboto Condensed',
          color: '#FFFFFF',
          fontWeight: '700',
          lineHeight: '46.88px',
          [theme.breakpoints.down('xs')]: {
          fontSize:'30px'
            },

        },
        "& .TextBox2": {
          fontFamily: 'Roboto Condensed',
          color: '#bfbfbf',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '20px',
          [theme.breakpoints.down('xs')]: {
          // paddingRight:'49px',
          fontSize:'12px'
          },
        },
        
        "& h2": {
          fontWeight: 700,
          marginBottom: "8px",
          maxWidth: "431px",
          color: "#FFFFFF",

        },
        "& .MuiTypography-body2": {
          fontWeight: 500,
          marginBottom: "8px",
          maxWidth: "431px",
          color: "rgba(255, 255, 255, 0.75)",
        },
        "& .subText": {
          marginBottom: "8px",
          color: ' #999999',
          fontFamily: 'Roboto Condensed',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '22px',
          
        },
        "& button": {
          maxWidth: "150px",
          width: "100%",
          height: "45px",
          background: '#0856CC',
          borderRadius: '5px',
          padding: '13px, 44px, 13px, 44px',
          gap: '10px',
          marginTop: "10px",
          [theme.breakpoints.up('xs')]:{
            width:'45%',
          },
        },
        " & button": {
          fontFamily: 'Roboto Condensed',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '18.75px',
          color: 'white',

        }
      },
      "& .ImgBox": {
        maxWidth: "277px",
        maxHeight: "186px",
        width: "100%",
        height: "100%",
     
        [theme.breakpoints.down('xs')]: {
          marginLeft: theme.spacing(1), 
        },
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3), 
        },
        [theme.breakpoints.up('md')]: {
          marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
          marginLeft: '11rem', 
        },
      
      
        "& .img": {
          width: "100%",
          height: "100%",
        },
      },
    },
    "& .common1": {
      // marginLeft: '4rem'
      [theme.breakpoints.up('lg')]:{
        marginLeft:'4rem'
      },
    },
    "& .common2": {
      marginBottom: '10px',
      fontFamily: 'Roboto Condensed',
      fontSize: '40px',
      fontWeight: '500',
      lineHeight: '68px',
     
      // [theme.breakpoints.up('lg')]:{
      //    lineHeight: '88px',
      // // },
      // [theme.breakpoints.up('md')]:{
      //   lineHeight: '40px',
      // },
      [theme.breakpoints.up('sm')]:{
        lineHeight: '40px',

      },
      [theme.breakpoints.down('xs')]: {
       fontSize:'23px',
       textAlign:'center',
      },
     
    },
    "& .common3": {
      fontFamily: 'Roboto Condensed',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
      color: '#636880',
      marginTop:'24px'
     
      // [theme.breakpoints.down('xs')]: {
      // marginRight:'45px',
      
      // },

    },
    "& .GridTextBox": {
      "& .MuiTypography-body2": {
        lineHeight: "22px",
        color: "#636880",
        marginTop: "10px",

      },
    },
    "& .GridImgBox": {
      width: "100%",
      maxWidth: "330px",
      height: "100%",
      maxHeight: "297px",
      marginLeft: '9rem',
      "& .GridImgOne": {
        height: "100%",
        width: "100%",
        marginLeft: '-3rem'
      },
    },
    "& .common4": {
      paddingBottom: '2rem',
      left: '829px',
      top: '834px',
      fontFamily: 'Roboto Condensed',
      fontSize: '40px',
      fontWeight: '500',
      lineHeight: '38px',
      color: '#262626',
      [theme.breakpoints.down('xs')]:{
        textAlign:'center',
        fontSize: '26px',
      },
    },
    "& .common5": {
      top: '937px',
      left: '76px',
      fontFamily: 'Roboto Condensed',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '400',
      color: '#636880'
    },
    "& .transaction": {
      fontFamily: 'Roboto Condensed',
      fontSize: '40px',
      fontWeight: '500',
      lineHeight: '38px',
      [theme.breakpoints.down('xs')]:{
        fontSize:'30px',
        marginLeft:'39px',
       
      },
      [theme.breakpoints.up('xs')]:{
        fontSize:'30px',
        // marginLeft:'80px',
       
      },
      [theme.breakpoints.up('sm')]:{
        fontSize:'30px',
        // marginLeft:'80px',
       
      }
    },

    "& .CustomizeBox": {
      "& .GridImgBox": {
        width: "100%",
        maxWidth: "336px",
        height: "100%",
        maxHeight: "336px",
        "& .GridImgOne": {
          height: "100%",
          width: "100%",
        },
      },
    },
    "& .content": {
      fontFamily: 'Roboto Condensed',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
      color: '#636880',
      paddingBottom: '10px',
    },
    "& .FooterBox": {
      gap: "25px",
      textAlign: "justify",
      "& .MuiTypography-body2": {
        color: "#636880",
        lineHeight: "22px",
      },
      "& h2": {
        fontWeight: 500,
      },
    },
  

    // mainText: {
    //   direction : "row",
    //   [theme.breakpoints.down('xs')]: {
    //     direction : "column",
    //   },
    // }

  },
}));
const Taxes = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox} >
      <Box className="HeaderBox displayCenter">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box className="TextBox" pt={1}>
                <Typography className="TextBox1" >Taxes and Fees</Typography>
                <Typography className="TextBox2" >
                  Visual form of a document or a typeface without relying on meaningful content.
                </Typography>
                <Typography > <Button className="button" ><span >Get Started</span></Button></Typography>

              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className="displayColumnCenter"
            >
              <Box className="ImgBox">
                <img src="images/Taxes/TaxesBoxImg.png" className="img" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box mt={3}>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12} className="alignCenter">
              <Box className="common1" >
                <Typography className="common2" >
                  Goods and Services Tax (GST)
                </Typography>
                <Typography className="common3" >
                  As per the Goods and Services Tax (GST) regulations in India, GyanBatua is required to
                  collect and remit GST on certain transactions conducted on our platform. GST is a
                  consumption-based tax levied on the supply of goods and services across India.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} className="displayCenter">
              <Box className="GridImgBox " >
                <img
                  src="images/Taxes/TaxesGridImg.png"
                  className="GridImgOne"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} className="CustomizeBox">
          <Grid container className={classes.mainText}>
            <Grid item lg={6} md={6} sm={6} xs={12} className="displayCenter">
              <Box className="GridImgBox " style={{ marginLeft: '5rem' }}>
                <img
                  src="images/Taxes/TaxesGridImg2.png"
                  className="GridImgOne"
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} className="alignCenter">
              <Box className="GridTextBox">
                <Typography className="common4" >
                  Invoicing and Compliance
                </Typography>
                <Typography className="common5">
                  GyanBatua issues GST-compliant invoices for all eligible transactions, detailing the
                  applicable GST amount separately. Users are responsible for providing accurate billing
                  information to ensure compliance with GST regulations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} pb={3} className="FooterBox displayColumnStart">
          <Box>
            <Typography className="transaction" >
              Transaction Fees
            </Typography>
          </Box>
          <Box>
            <Typography className="content" >
              The GST rates applicable to transactions on GyanBatua may vary depending on the
              nature of the service and the location of the user. Currently, the standard GST rate in
              India is 18%. GST shall be charges as applicable at the time of payment.
            </Typography>
            <Typography className="content" >
              In addition to GST, GyanBatua may charge transaction fees or service charges on
              certain transactions conducted on our platform. These fees are intended to cover the
              costs of processing payments, maintaining the platform, and providing support
              services.
            </Typography>
            <Typography className="content">
              The transaction fees charged by GyanBatua may vary depending on the type and value
              of the transaction. Users will be notified of any applicable fees before completing a
              transaction, and the fee amount will be clearly indicated on the checkout page.
            </Typography>
            <Typography className="content">
              Users can make payments for GyanBatua services using various payment methods,
              including credit/debit cards, net banking, digital wallets, and other electronic payment
              options. Each payment method may have its own associated fees, which will be
              disclosed at the time of payment.
            </Typography>
            <Typography className="content">
              GyanBatua's refund policy may vary depending on the nature of the transaction and the
              terms and conditions of the service purchased. Users are encouraged to review the
              refund policy carefully before making a purchase, as certain transactions may be
              non-refundable or subject to specific conditions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Taxes;
