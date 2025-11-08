


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
          fontSize:'10px'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
            marginLeft:'50px',
          marginRight:'50px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '15px',
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
          fontSize: '15px',
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
  
  const MediaContent2 = () => {
    const classes = useStyles();
  
  return (
    
   <>
    <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.headText} >
            <Typography className={classes.date} >Star Samachar, VIT Satna-19 Feb, 2023
</Typography>
        <Typography className={classes.Text1}>Satna Welcomes 'IndicChain Center of Excellence': A Cradle for Tech Innovators</Typography>
         <Typography className={classes.Text2} >
            
         Satna's VITS College, in anticipation of the growing need for technology, has prepared to cultivate a 'Technical Army' proficient in Artificial Intelligence, through collaboration with Mobiloitte Technologies Pvt. Ltd. The partnership was commemorated with the grand opening of the 'IndicChain Center of Excellence on Emerging Technologies,' attended by VITS College Chairman Sunil Senani, Mobiloitte Technologies Pvt. Ltd.'s Director Akash Gahlot, Marketing Head Gaurav Kathuria, Training and Placement Head Prof. Pramod Pandey, and the entire college staff. This center, a first of its kind in the state, promises to provide students aiming to pursue a career in technology with unparalleled opportunities. It is hailed as a future-forward training program by experts. Initially accommodating 60 students, the center aims to guide students to technical proficiency under the expertise of technology specialists, potentially catalyzing technical development in the region and opening new opportunities for students to evolve as savvy technical workers. Through the Center of Excellence, students will gain mastery over cutting-edge technologies like IoT, AI, Machine Learning, Blockchain, and Cloud Computing, with options for short-term and long-term courses tailored to their convenience. The initiative, which also featured a one-day workshop on IoT and Blockchain technologies and career options, has been met with enthusiasm from students, marking a positive step towards regional development and economic growth through enhanced incubation centers and startups.

         </Typography>
        
       
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
            <Typography   >
         <img className={classes.mediaImage} src="images/MediaImages/image1.jpg" alt="" width='50%'/>
         </Typography>
            </Grid>
        </Grid>
    
   
   </>
  )
  }
  
  export default MediaContent2