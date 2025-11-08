


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

const MediaContent1 = () => {
  const classes = useStyles();

return (
  
 <>
  <Grid container >
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.headText} >
          <Typography className={classes.date} >February 17, 2023</Typography>
      <Typography className={classes.Text1}>Center of Excellence Unveiled at RSMT, Varanasi to Elevate IT Education and Employment</Typography>
       <Typography className={classes.Text2} >
          
       Varanasi's Rajarshi School of Management and Technology launched a 'Center of Excellence' to train students for the IT industry, announced by Dr. Chand Prakash Singh and Anand Shrivastava. Mobiloitte Technology's Aakash Gehlot and Gaurav Kathuria discussed emerging IT technologies with students, highlighting the center's role in enhancing job prospects by equipping them with current IT skills. Sakshi Singh and Ayushi Singh were recognized for their achievements in BCA at Kashi Vidyapith. The event, attended by institute director Prof. Aman Gupta and other dignitaries, aimed to bolster RSMT students' employability in IT. Anshika Shrivastava led the program, with Anand Mohan Pandey thanking attendees.
           
       </Typography>
      
     
      </Grid>
      </Grid>
      
      <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}  align="center" >
          <Typography   >
       <img className={classes.mediaImage} src="images/MediaImages/image3.jpg" alt="" width='50%'/>
       </Typography>
          </Grid>
      </Grid>
  
 
 </>
)
}

export default MediaContent1