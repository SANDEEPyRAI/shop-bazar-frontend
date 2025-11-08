import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
    },
  },
  slide: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: theme.spacing(2),
    maxWidth: "700px",
  },
  title: {
    ...theme.typography.h1,
    color: "#FFD700",
    textShadow: "0 0 10px rgba(0,0,0,0.8)",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },
  subtitle: {
    ...theme.typography.body1,
    color: "#fff",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  button: {
    borderRadius: "50px",
    padding: "12px 35px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
      boxShadow: "0 0 15px rgba(212,175,55,0.5)",
    },
  },
}));

const slides = [
  {
    id: 1,
    title: "Divine Collection",
    subtitle: "Grace your Laddu Gopal Ji with divine elegance and beauty",
    img: "/images/category2.png",
    cta: "Shop Now",
    path: "/shop",
  },
  {
    id: 2,
    title: "Festive Vibes",
    subtitle: "Celebrate each festival with colorful handmade dresses",
    img: "/images/category3.png",
    cta: "Explore More",
    path: "/",
  },
  {
    id: 3,
    title: "Exclusive Premium Designs",
    subtitle: "Every dress tells a story of devotion & craftsmanship",
    img: "/images/category.png",
    cta: "Discover",
    path: "/",
  },
];

const HeroCarousel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              className={classes.slide}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <Box className={classes.overlay} />
              <Box className={classes.content}>
                <Typography className={classes.title}>{slide.title}</Typography>
                <Typography className={classes.subtitle}>
                  {slide.subtitle}
                </Typography>
                <Button
                  component={Link}
                  to={slide.path}
                  className={classes.button}
                >
                  {slide.cta}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
