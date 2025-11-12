
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
  
  const MediaContent7 = () => {
    const classes = useStyles();
  
  return (
    
   <>
    <Grid container alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.headText} >
            <Typography className={classes.date} >Patrika Plus Reporter, VIT Satna-19 Feb, 2023

</Typography>
        <Typography className={classes.Text1}> VITS College Unveils IndicChain Center of Excellence for Emerging Technologies</Typography>
         <Typography className={classes.Text2} >
            
         Satna-based VITS College, in collaboration with Mobiloitte Technologies Pvt. Ltd., has inaugurated the IndicChain Center of Excellence for Emerging Technologies. Training and Placement Head, Prof. Pramod Pandey, emphasized the center's aim to provide state-of-the-art technology training and career opportunities in computer science and information technology to the youth. Director of Mobiloitte Technologies, Akash Gahlot, highlighted that the center will enable students to become proficient in cutting-edge technologies such as the Internet of Things, Artificial Intelligence, Machine Learning, Blockchain, and Cloud Computing. Marketing Head, Gaurav Kathuria, shared that students could choose from various technology courses and engage in live projects and industrial training for firsthand experience. The initiative, celebrated with an MOU signing by VITS Chairman Sunil Senani and Mobiloitte's Akash Gahlot, promises to eliminate the need for local youth to seek technology education elsewhere, offering guidance from industry experts right in Satna.

         </Typography>
        
       
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
            <Typography   >
         <img className={classes.mediaImage} src="images/MediaImages/image2.jpg" alt="" width='30%'/>
         </Typography>
            </Grid>
        </Grid>
    
   
   </>
  )
  }
  
  export default MediaContent7