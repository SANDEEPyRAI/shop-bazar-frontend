import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@material-ui/core";

const Wishlist = () => {
  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        My Wishlist
      </Typography>
      <Grid container spacing={2} style={{ marginTop: 16 }}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Paper style={{ padding: 16, textAlign: "center" }}>
              <Typography>Product #{item}</Typography>
              <Button
                size="small"
                style={{
                  marginTop: 10,
                  background:
                    "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
                  color: "#fff",
                }}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Wishlist;
