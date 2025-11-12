import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const categories = ["All", "Silk", "Cotton", "Velvet", "Handmade", "Festive"];

const FilterSidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("All");

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = (category) => {
    if (category) setSelected(category);
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      style={{
        background: "linear-gradient(145deg, #4D164F, #681E65)",
        borderRadius: 12,
        padding: "8px 12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <Typography
        variant="body1"
        style={{
          color: "#FFD700",
          fontWeight: 600,
          marginRight: 16,
        }}
      >
        Category:
      </Typography>

      {/* Dropdown Button */}
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon style={{ color: "#FFD700" }} />}
        style={{
          background: "linear-gradient(135deg, #C19A6B, #D4AF37)",
          color: "#fff",
          fontWeight: 500,
          borderRadius: 50,
          textTransform: "capitalize",
          padding: "6px 20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        {selected}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {categories.map((cat) => (
          <MenuItem
            key={cat}
            onClick={() => handleClose(cat)}
            style={{
              background: selected === cat ? "#FFD70033" : "#fff",
              color: selected === cat ? "#4D164F" : "#222",
              fontWeight: selected === cat ? 600 : 400,
            }}
          >
            {cat}
          </MenuItem>
        ))}
      </Menu>

      {/* Optional: Chips for quick categories */}
      <Divider
        orientation="vertical"
        flexItem
        style={{ background: "#FFD70044", margin: "0 12px" }}
      />
      <Box display="flex" flexWrap="wrap" style={{ gap: "8px" }}>
        {categories
          .filter((c) => c !== selected)
          .map((c) => (
            <Button
              key={c}
              onClick={() => setSelected(c)}
              style={{
                background: "linear-gradient(145deg, #681E65, #4D164F)",
                color: "#FFD700",
                borderRadius: 50,
                textTransform: "capitalize",
                padding: "4px 16px",
                fontSize: 12,
                fontWeight: 500,
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              {c}
            </Button>
          ))}
      </Box>
    </Box>
  );
};

export default FilterSidebar;
