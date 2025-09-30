import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

const ProductCard = ({ name, image, description, price, discountPrice }) => {
  const discount =
    price && discountPrice
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0;

  return (
    <Card
      sx={{
        maxWidth: 280,
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={image || "https://via.placeholder.com/280x180"}
        alt={name}
        sx={{ objectFit: "cover", bgcolor: "#f9f9f9" }}
      />

      {/* Product Info */}
      <CardContent>
        {/* Title */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
        )}

        {/* Price & Discount */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          {discountPrice && (
            <Typography variant="h6" color="primary">
              ₹{discountPrice}
            </Typography>
          )}
          {price && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ₹{price}
            </Typography>
          )}
          {discount > 0 && (
            <Typography variant="body2" color="success.main" fontWeight={600}>
              {discount}% off
            </Typography>
          )}
        </Box>

        {/* Add to Cart */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#ff9900",
            "&:hover": { bgcolor: "#e68a00" },
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
