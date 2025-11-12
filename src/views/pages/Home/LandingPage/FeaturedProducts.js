import React, { useContext } from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CartContext } from "src/context/CartContext";

const products = [
  { id: 1, name: "Silk Dress A", price: "$45", img: "/images/category1.jpg" },
  { id: 2, name: "Cotton Dress B", price: "$35", img: "/images/category2.png" },
  {
    id: 3,
    name: "Festive Dress C",
    price: "$55",
    img: "/images/category3.png",
  },
  {
    id: 4,
    name: "Handcrafted Dress D",
    price: "$60",
    img: "/images/category.png",
  },
];

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 2),
    backgroundColor: "#FFFFFF",
    textAlign: "center",
  },
  sectionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing(4),
  },
  productCard: {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
  },
  productImg: {
    width: "100%",
    height: 250,
    objectFit: "cover",
  },
  productInfo: {
    padding: theme.spacing(2),
  },
  productName: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  productPrice: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  addToCartBtn: {
    cursor: "pointer",
    borderRadius: "50px",
    padding: "8px 25px",
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
    },
  },
}));

const FeaturedProducts = () => {
  const classes = useStyles();
  const { addToCart } = useContext(CartContext);
  const history = useHistory();

  const handleAddToCart = (product) => {
    addToCart(product);
    history.push("/cart");
  };

  return (
    <Box className={classes.section}>
      <Typography className={classes.sectionTitle}>
        Featured Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box className={classes.productCard}>
              <img
                src={product.img}
                alt={product.name}
                className={classes.productImg}
              />
              <Box className={classes.productInfo}>
                <Typography className={classes.productName}>
                  {product.name}
                </Typography>
                <Typography className={classes.productPrice}>
                  {product.price}
                </Typography>

                <Button
                  className={classes.addToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
