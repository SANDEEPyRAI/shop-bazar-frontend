import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Input,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { removeToken, getToken } from "../utils/auth";
import { useContext, useState } from "react";
import { ColorModeContext } from "../theme/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = () => {
  const navigate = useNavigate();
  const token = getToken();
  const colorMode = useContext(ColorModeContext);
  const [customColor, setCustomColor] = useState("#1976d2");

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Shop Bazar
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {document.body.dataset.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <Input
            type="color"
            value={customColor}
            onChange={(e) => {
              setCustomColor(e.target.value);
              colorMode.setPrimaryColor(e.target.value);
            }}
            sx={{ width: 40, height: 40, padding: 0 }}
          />

          {!token && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          )}

          {token && (
            <>
              <Button color="inherit" component={Link} to="/admin">
                Admin
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
