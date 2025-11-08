

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
  
  const MediaContent3 = () => {
    const classes = useStyles();
  
  return (
    
   <>
    <Grid container alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.headText} >
            <Typography className={classes.date} >February 19, 2023</Typography>
        <Typography className={classes.Text1}>VITS College Collaborates to Open New Centre of Excellence: Shaping the Future of Technology Education for Youth</Typography>
         <Typography className={classes.Text2} >
            
         The state has been gifted with the IndicChain Centre of Excellence on Emerging Technologies. An MOU was signed between VITS College and Mobiloitte Technologies Private Limited, as reported by Jagran Satna. The grand inauguration of the Indic Chain Centre of Excellence on Emerging Technologies was held at VITS College, in collaboration with Chits College and Mobiloitte Technologies Private Limited. Training and Placement Head, Prof. Pramod Pandey, mentioned that the main purpose of establishing this excellence center is to provide training facilities and career opportunities in the field of Computer Science and Information Technology to the youth in the state. Akash Gehlot, Director of Mobiloitte Technologies Private Limited, said that through the Centre of Excellence, students would be able to become proficient in cutting-edge technology. Furthermore, students will be able to receive training on topics like the Internet of Things, Artificial Intelligence, Machine Learning, Blockchain, and Cloud Computing. Gaurav Kathuria, Marketing Head of Mobiloitte Technologies Private Limited, stated that students could choose from various technology and course options according to their convenience, and benefit from live projects and industrial training.
             
         </Typography>
        
       
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
            <Typography   >
         <img className={classes.mediaImage} src="images/MediaImages/image5.jpg" alt="" width='40%'/>
         </Typography>
            </Grid>
        </Grid>
    
   
   </>
  )
  }
  
  export default MediaContent3
  