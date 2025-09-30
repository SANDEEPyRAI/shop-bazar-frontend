import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import API from "../api/api";
import CategoryCard from "../components/CategoryCard";

const AdminPanel = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const fetchCategories = () => {
    API.get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    try {
      await API.post("/api/categories", { name });
      setName("");
      fetchCategories();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add category");
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={3}>
        Admin Panel - Add Category
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddCategory}>
          Add
        </Button>
      </Box>

      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <CategoryCard name={cat.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminPanel;
