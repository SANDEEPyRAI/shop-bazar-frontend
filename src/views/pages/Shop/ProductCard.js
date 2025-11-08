import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { withRouter } from "react-router-dom"; // <-- v4

const ProductCard = ({ product, history }) => {
  const handleClick = () => {
    history.push({
      pathname: `/shop/product/${product.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      state: { product },
    });
  };

  return (
    <Card
      style={{
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "transform 0.3s",
        cursor: "pointer",
      }}
      onClick={handleClick} // navigate on card click
    >
      <CardMedia
        component="img"
        height="240"
        image={product.images[0]}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: 6 }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h6" color="primary">
          ₹{product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            console.log("Add to Cart:", product.name);
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

// Wrap withRouter to get history prop
export default withRouter(ProductCard);
