import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Sample category data
const categories = [
  { id: 1, name: "Silk Dresses", img: "/images/category1.jpg" },
  { id: 2, name: "Cotton Dresses", img: "/images/category2.png" },
  { id: 3, name: "Festive Dresses", img: "/images/category3.png" },
  { id: 4, name: "Handcrafted Dresses", img: "/images/category.png" },
];

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 2),
    backgroundColor: "#FFF8E7",
    textAlign: "center",
  },
  sectionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing(4),
  },
  categoryCard: {
    borderRadius: "15px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  },
  categoryImg: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  categoryName: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "rgba(193,154,107,0.85)", // translucent royal gold
    color: "#fff",
    padding: theme.spacing(1),
    fontWeight: 600,
    fontFamily: theme.typography.h5.fontFamily,
  },
}));

const FeaturedCategories = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Typography className={classes.sectionTitle}>
        Explore Categories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={3} key={cat.id}>
            <Box className={classes.categoryCard}>
              <img
                src={cat.img ? cat.img : "/images/category1.jpg"}
                alt={cat.name}
                className={classes.categoryImg}
              />
              <Box className={classes.categoryName}>{cat.name}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCategories;
