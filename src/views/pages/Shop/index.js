// Shop.js
import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";

// Dummy Product Data
const products = [
  {
    id: 1,
    name: "Dark Indigo Jeggings",
    price: 53,
    oldPrice: 74.95,
    description: "Maternity Full Panel Favorite Ankle Jeggings",
    rating: 3.3,
    reviews: 25,
    colors: ["#1a1f71", "#681E65", "#C19A6B"],
    sizes: ["25", "26", "27", "28", "30"],
    images: [
      "/images/category1.jpg",
      "/images/category2.png",
      "/images/category3.png",
      "/images/category.png",
    ],
  },
  {
    id: 2,
    name: "Classic Blue Denim Jacket",
    price: 79,
    oldPrice: 99,
    description: "Stylish and comfortable denim jacket for everyday wear.",
    rating: 4.2,
    reviews: 18,
    colors: ["#1E3A8A", "#000000", "#F1F1F1"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/denim1.jpg", "/images/denim2.jpg", "/images/denim3.jpg"],
  },
  {
    id: 3,
    name: "Dark Indigo Jeggings",
    price: 53,
    oldPrice: 74.95,
    description: "Maternity Full Panel Favorite Ankle Jeggings",
    rating: 3.3,
    reviews: 25,
    colors: ["#1a1f71", "#681E65", "#C19A6B"],
    sizes: ["25", "26", "27", "28", "30"],
    images: [
      "/images/category1.jpg",
      "/images/category2.png",
      "/images/category3.png",
      "/images/category.png",
    ],
  },
  {
    id: 4,
    name: "Dark Indigo Jeggings",
    price: 53,
    oldPrice: 74.95,
    description: "Maternity Full Panel Favorite Ankle Jeggings",
    rating: 3.3,
    reviews: 25,
    colors: ["#1a1f71", "#681E65", "#C19A6B"],
    sizes: ["25", "26", "27", "28", "30"],
    images: [
      "/images/category1.jpg",
      "/images/category2.png",
      "/images/category3.png",
      "/images/category.png",
    ],
  },
];

const Shop = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Shop All Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
