import { Grid, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import API from "../api/api";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={3}>
        Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <CategoryCard
              name={cat.name}
              image={cat.image}
              description={cat.description}
              price={cat.price}
              discountPrice={cat.discountPrice}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
