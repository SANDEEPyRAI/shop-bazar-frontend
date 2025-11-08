
import {
    Box,
    Grid,
    Typography,
    makeStyles,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  
  
  const useStyles = makeStyles((theme) => ({
    mediaItem: {
      marginBottom: "2rem",
    },
    date:{
        // fontSize:'18px',
        marginTop:'20px',
        marginLeft:'20px',
       
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '20px',
        textAlign:'center'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '30px'
      },
  
    },
    Text1:{
     
        marginTop:'20px',
     
        [theme.breakpoints.between('xs', 'sm')]: {
          marginLeft:'50px',
          marginRight:'50px',
          fontSize:'15px'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '18px',
            marginLeft:'50px',
          marginRight:'50px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '22px',
            marginLeft:'50px',
          marginRight:'50px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '25px',
            marginLeft:'100px',
          marginRight:'100px',
          color:'black'
          },
    },
    Text2:{
        fontSize:'15px',
        marginTop:'20px',
        // marginLeft:'4rem ',
        // marginRight:'4rem'
        textAlign:'justify',
        // width:'800px'
        [theme.breakpoints.between('xs', 'sm')]: {
        marginLeft:'50px',
        marginRight:'50px',
        fontSize:'10px'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: '15px',
          marginLeft:'50px',
        marginRight:'50px',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '16px',
          marginLeft:'50px',
        marginRight:'50px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '15px',
          marginLeft:'100px',
        marginRight:'100px',
        },
    },
    mediaImage:{
        marginTop:'20px',
        // marginLeft:'40px',
        [theme.breakpoints.down('xs')]: {
          width:'90%'
       },
       [theme.breakpoints.down('md')]: {
        width:'90%'
     },
  
    },
    main:{
        // display:'flex',
        // justifyContent:'center'
        // marginLeft:'250px'
    },
    headText:{
      textAlign:'center',
      [theme.breakpoints.down('xs')]: {
        fontSize:'10px'
     },
  
  
    }
  
  }));
  
  const MediaContent9 = () => {
    const classes = useStyles();
  
  return (
    
   <>
    <Grid container alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.headText} >
            <Typography className={classes.date} >Patrika Plus Reporter, VIT Satna-19 Feb, 2023

</Typography>
        <Typography className={classes.Text1}>Technological Renaissance: VITS College and Mobiloitte Technologies Unveil IndicChain Center
of Excellence</Typography>
         <Typography className={classes.Text2} >
            
         The state welcomes the IndicChain Center of Excellence on Emerging Technologies, a collaborative
effort between VITS College and Mobiloitte Technologies Pvt. Ltd., marked by an MOU signing in
Satna. This initiative aims to provide advanced training in computer science and information
technology, thereby creating career opportunities for the youth. The Center of Excellence will offer
students proficiency in cutting-edge technologies such as IoT, AI, Machine Learning, Blockchain, and
Cloud Computing, as explained by Mobiloitte Technologies Pvt. Ltd.s Director, Akash Gahlot.
Students can choose from a variety of short-term and long-term courses, benefiting from live
projects and industrial training. This venture, as per VITS College Chairman Sunil Senani, represents a
significant gift to the youths of the Vindhya region, eliminating their need to venture outside for
learning the latest technologies. The excellence center is poised to play a pivotal role in the technical
advancement of the region, fostering new opportunities through industry-institute partnerships.

         </Typography>
        
       
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
            <Typography   >
         <img className={classes.mediaImage} src="images/MediaImages/image10.jpg" alt="" width='30%'/>
         </Typography>
            </Grid>
        </Grid>
    
   
   </>
  )
  }
  
  export default MediaContent9