import React, { useState } from "react";
import { useLocation, useParams, withRouter } from "react-router-dom";
import { Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(4) },
  thumbnail: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(1),
    cursor: "pointer",
    borderRadius: 8,
    border: "2px solid transparent",
    "&:hover": { borderColor: "#FFD700" },
  },
  selectedThumb: { borderColor: "#FFD700" },
  mainImage: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  },
  addToCart: {
    background: "linear-gradient(145deg, #C19A6B, #D4AF37)",
    color: "#fff",
    borderRadius: 50,
    padding: "12px 40px",
    fontWeight: 600,
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "linear-gradient(145deg, #B8860B, #FFD700)",
    },
  },
  buyNow: {
    background: "#681E65",
    color: "#fff",
    borderRadius: 50,
    padding: "12px 40px",
    fontWeight: 600,
    "&:hover": { background: "#450A3B" },
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    marginRight: theme.spacing(1),
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  selectedColor: { border: "2px solid #FFD700" },
  sizeBox: {
    display: "inline-block",
    padding: "6px 12px",
    margin: "4px",
    border: "1px solid #ccc",
    borderRadius: 4,
    cursor: "pointer",
  },
  selectedSize: {
    background: "#681E65",
    color: "#fff",
    border: "1px solid #FFD700",
  },
}));

const ProductDetail = ({ history }) => {
  const classes = useStyles();
  const { slug } = useParams();
  const { state } = useLocation();
  const product = state?.product;

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  if (!product) {
    return (
      <Box className={classes.root}>
        <Typography variant="h5">Product not found.</Typography>
      </Box>
    );
  }

  const handleAddToCart = () => {
    console.log("Add to cart:", product.name, selectedSize);
    // ✅ Navigate to /cart page with product data
    history.push({
      pathname: "/cart",
      state: { product, selectedSize, selectedColor },
    });
  };

  const handleBuyNow = () => {
    console.log("Buy now:", product.name, selectedSize);
    // ✅ Navigate to /cart or /checkout (your choice)
    history.push({
      pathname: "/checkout", // or "/checkout"
      state: { product, selectedSize, selectedColor, buyNow: true },
    });
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        {/* Left Thumbnails */}
        <Grid item xs={2} sm={1}>
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name}
              className={`${classes.thumbnail} ${
                img === selectedImage ? classes.selectedThumb : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </Grid>

        {/* Main Image */}
        <Grid item xs={10} sm={5}>
          <img
            src={selectedImage}
            alt={product.name}
            className={classes.mainImage}
          />
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: 8 }}>
            {product.name}
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <Typography
              variant="h6"
              style={{ color: "#C19A6B", marginRight: 8 }}
            >
              ₹{product.price}
            </Typography>
            <Typography
              variant="body2"
              style={{ textDecoration: "line-through", color: "#888" }}
            >
              ₹{product.oldPrice}
            </Typography>
          </Box>

          {/* Ratings */}
          <Box display="flex" alignItems="center" mb={2}>
            {[...Array(5)].map((_, i) =>
              i < Math.round(product.rating) ? (
                <Star key={i} style={{ color: "#FFD700" }} />
              ) : (
                <StarBorder key={i} style={{ color: "#ccc" }} />
              )
            )}
            <Typography variant="body2" style={{ marginLeft: 8 }}>
              ({product.reviews} Reviews)
            </Typography>
          </Box>

          {/* Colors */}
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body2" style={{ marginRight: 8 }}>
              Color:
            </Typography>
            {product.colors.map((color, idx) => (
              <Box
                key={idx}
                className={`${classes.colorCircle} ${
                  color === selectedColor ? classes.selectedColor : ""
                }`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </Box>

          {/* Sizes */}
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body2" style={{ marginRight: 8 }}>
              Size:
            </Typography>
            {product.sizes.map((size) => (
              <Box
                key={size}
                className={`${classes.sizeBox} ${
                  size === selectedSize ? classes.selectedSize : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Box>
            ))}
          </Box>

          {/* Buttons */}
          <Box mb={4}>
            <Button className={classes.addToCart} onClick={handleAddToCart}>
              ADD TO BAG
            </Button>
            <Button className={classes.buyNow} onClick={handleBuyNow}>
              BUY NOW
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withRouter(ProductDetail);
