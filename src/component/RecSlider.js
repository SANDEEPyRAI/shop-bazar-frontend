import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    paddingBottom: "1rem",
  },
  card: {
    backgroundColor: "white",
    width: 100,
    borderRadius: "12px",
    margin: theme.spacing(1), // Add space between cards
    overflow: "visible",
    padding: "3rem 2rem", // Adjust padding here
  },
  cardHeader: {
    width: '250px',
    height: '230px',
    margin: '10px',
    overflow: 'visible', // Allow overflow to show outside
    position: 'relative', // Position for the zoom effect
  },
  prevNextButton: {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    cursor: "pointer",
    color: "#000000",
    border: "none",
    outline: "none",
    padding: "10px",
    borderRadius: "50%",
    filter:
      "invert(3%) sepia(7%) saturate(7029%) hue-rotate(94deg) brightness(86%) contrast(93%)", // Move filter here
  },

  imageContainer: {
    overflow: 'visible',
    '&:hover img': {
      transform: 'scale(1.5)', // Zoom effect on hover
    },
  },
  
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease', // Smooth transition for the zoom effect
    position:'relative'
  },
  headText: {
    color: 'black',
    position: 'absolute',
    top: '100%',
    left: '10px',
    zIndex: 1, // Ensure text is above the image
  },
  date:{
    color:'black',
    position:'absolute',
    top:'90%',
    left:'10px',
    zIndex:1

  }
}));

function RecSlider() {
  const classes = useStyles();

  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow classes={classes} />,
    nextArrow: <NextArrow classes={classes} />,
    responsive: [
      {
        breakpoint: 1024, // tablet/desktop breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // phone breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function PrevArrow({ onClick }) {
    return (
      <div
        className={`${classes.prevNextButton}  slick-prev`}
        onClick={onClick}
      >
        Prev
      </div>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <div
        className={`${classes.prevNextButton} slick-arrow slick-next`}
        onClick={onClick}
      >
        Next
      </div>
    );
  }

  return (
   <card>
     <div className={classes.root}>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div className={classes.card} key={index}>
            <div className={`${classes.cardHeader} ${classes.imageContainer}`}>
              <img className={classes.image} src={d.img} alt="" />
              <div className={classes.headText}>{d.headText}</div>
              <div className={classes.date}>{d.date}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </card>
  );
}

const data = [
  {
    img: 'images/MediaImages/image1.jpg',
    headText: 'I want to put the text1',
    date:"1/27/2024"
  },
  {
    img: 'images/MediaImages/image2.jpg',
    headText: 'I want to put the text2'
  },
  {
    img:  'images/MediaImages/image3.jpg',
    headText: 'I want to put the text3'
  },
  {
    img: 'images/MediaImages/image4.jpg',
    headText: 'I want to put the text4'
  },
  {
    img: 'images/MediaImages/image5.jpg',
    headText: 'I want to put the text5'
  },
  {
    img: 'images/MediaImages/image6.jpg',
    headText: 'I want to put the text6'
  },
  {
    img: 'images/MediaImages/image7.jpg',
    headText: 'I want to put the text7'
  },
  {
    img: 'images/MediaImages/image8.jpg',
    headText: 'I want to put the text8'
  },
];

export default RecSlider;
