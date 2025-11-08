


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
            <Typography className={classes.date} >Feb 19, 2023,City Repoter, VIT, Satna 
</Typography>
        <Typography className={classes.Text1}> Empowering Regional Youth: VITS College and Mobiloitte Technologies Forge Partnership for Technological Excellence</Typography>
         <Typography className={classes.Text2} >
            
         Chairman Sunil Senani discusses Mobiloitte Technologies during an MOU event between VITS College and Mobiloitte Technologies. The grand inauguration of the Indic Chain Center Technology was held at VITS College in collaboration with Mobiloitte Technologies Pvt. Ltd. and VITS College. The center aims to provide training and career opportunities in computer science and information technology to the youth of the region. Mobiloitte Technologies Pvt. Ltd.'s Director, Akash Gahlot, mentioned that the Center of Excellence will enable students to master cutting-edge technologies, including Internet of Things, Artificial Intelligence, Machine Learning, Blockchain, and Cloud Computing. Gaurav Kathuria highlighted that students could enroll in short-term and long-term courses on various technologies. The MOU was signed by VITS Institute's Chairman Sunil Senani and Director Akash Gahlot, marking it as a significant initiative for the youth in the Vindhya region, eliminating the need to go elsewhere for learning the latest technologies. A one-day workshop was also organized for the students on this occasion, attended by faculty heads, professors, and students of the VITS College family.
         </Typography>
        
       
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
            <Typography   >
         <img className={classes.mediaImage} src="images/MediaImages/image7.jpg" alt="" width='30%'/>
         </Typography>
            </Grid>
        </Grid>
    
   
   </>
  )
  }
  
  export default MediaContent7