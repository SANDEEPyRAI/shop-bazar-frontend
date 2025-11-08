import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Select,
  MenuItem,
  ButtonGroup,
  Box,
} from "@material-ui/core";
import RankingTable from "./RankingTable";
import { RiArrowDropDownLine } from "react-icons/ri";
import { menuProps } from "src/utils";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  trendingContainer: {
    "& .selectTag": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    padding: "40px",
    "& .topTrending": {
      padding: "0px 25px 0px 25px !important",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "start",
      },
      paddingTop: "30px",
      "& h3": {
        fontSize: "30px",
      },
    },
    "& .rightSideTrending": {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "start",
        marginTop: "30px",
      },
      " & .MuiButton-root": {
        fontSize: "18px",
      },
      "& .MuiButton-root.Mui-selected": {
        backgroundColor: "white",
        borderRadius: "10px",
        color: "#262626",
      },
      "& .MuiButtonGroup-root": {
        background: "rgba(198, 198, 198, 0.17)",
        padding: "3px",
        borderRadius: "10px",
        "& .MuiButton-outlined": {
          border: "none",
        },
      },
      "& .viewbtnContainer": {
        "& .viewBtn": {
          background: "rgba(198, 198, 198, 0.17)",
          color: "#262626",
          fontSize: "16px",
          fontWeight: 400,
          height: "50px",
          width: "92px",
        },
      },
    },
    "& .paidSelect": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-input": {
        padding: "15.5px 14px",
        fontSize: "16px",
      },
      "& .MuiOutlinedInput-root": {
        width: "114px",
      },
      "& .MuiSelect-select": {
        background: "rgba(198, 198, 198, 0.17)",
        border: "none",
        borderRadius: "10px",
      },
    },
  },
  selectHeader: {
    "& .MuiInputBase-input": {
      color: "#636880",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none !important",
    },
    "& .MuiSelect-select": {
      border: "none",
      backgroundColor: "#C6C6C62B",
      borderRadius: "10px",
      width: "114px",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
    },
  },
  topButtons: {
    padding: "10px 24px 10px 24px",
    display: "flex",
    gap: "20px",
    paddingBottom: "24px",
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.1)",
  },
  activeButton: {
    background: "#fff",
    color: "#000",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 500,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "111px",
  },
  inActiveButton: {
    background: "#fff",
    color: "#707070",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 500,
    width: "100%",
    maxWidth: "111px",
  },
  headdTop: {
    padding: "0px 25px 0px 25px",
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    fontSize: "60px",
    lineHeight: "70.31px",
    color: theme.palette.secondary.main,
  },
}));

const buttonLabels = ["1d", "7d", "30d", "60d", "90d"];

export default function Trending() {
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const [activeButton, setActiveButton] = useState(0);
  const [selectedPage, setSelectedPage] = useState("");
  const [selectedChain, setSelectedChain] = useState("");
  const [activeButtons, setActiveButtons] = useState("trending");
  const handleactiveButtonClick = (buttonType) => {
    setActiveButtons(buttonType);
  };
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const handleChange = (event) => {
    setSelectedPage(event.target.value);
  };
  const marketPlaceRoute = window.location.pathname === "/skill-marketplace";

  return (
    <div
      className={classes.trendingContainer}
      style={{ backgroundColor: marketPlaceRoute ? "transparent" : "#fff" }}
    >
      <Box className={classes.headdTop}>Ranking Stats</Box>

      <Box
        className={classes.topButtons}
        mt={3}
        style={{ padding: "10px 24px" }}
      >
        <Box style={{ backgroundColor: 'rgba(198, 198, 198, 0.17)', borderRadius: "10px", padding: "5px" }}>

          <Button
            style={{
              backgroundColor: activeButtons === "trending" ? "white" : "transparent",
              width: "113px",
              fontSize: "18px",
              color: activeButtons === "trending" ? "#262626" : "#707070",
              height: "44px",
              padding: activeButtons === "trending" ? "5px" : "0px",
              border: "none",
              borderRadius: activeButtons === "trending" ? "10px" : "0px",
              boxShadow: activeButtons === "trending" ? "0px 4px 10px rgba(0, 0, 0, 0.15)" : "none",
            }}
            className={`${activeButtons === "trending" ? classes.activeButton : classes.inActiveButton}`}
            onClick={() => handleactiveButtonClick("trending")}
          >
            Trending
          </Button>
          <Button
            style={{
              backgroundColor: activeButtons === "top" ? "white" : "transparent",
              width: "76px",
              fontSize: "18px",
              color: activeButtons === "top" ? "#262626" : "#707070",
              height: "44px",
              padding: activeButtons === "top" ? "5px" : "0px",
              border: "none",
              borderRadius: activeButtons === "top" ? "10px" : "0px",
              boxShadow: activeButtons === "top" ? "0px 4px 10px rgba(0, 0, 0, 0.15)" : "none",
            }}
            className={`${activeButtons === "top" ? classes.activeButton : classes.inActiveButton}`}
            onClick={() => handleactiveButtonClick("top")}
            disabled
          >
            Top
          </Button>
        </Box>
      </Box>

      <div className="topTrending displaySpacebetween">
        <Box mt={3}>
          <Select
            className={`${classes.selectHeader} selectTag`}
            value={selectedPage}
            displayEmpty
            variant="outlined"
            inputProps={{ "aria-label": "Without label" }}
            style={{ marginRight: "20px" }}
            onChange={(e) => {
              setSelectedPage(e.target.value);
            }}
            IconComponent={ExpandMoreIcon}
            MenuProps={menuProps}
          >
            <MenuItem value="" disabled>
              All Categories
            </MenuItem>

            <MenuItem>Categories</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
            <MenuItem value="Electrical Engineering">
              Electrical Engineering
            </MenuItem>
            <MenuItem value="Legal Services">Legal Services</MenuItem>
            <MenuItem value="Management">Management</MenuItem>
            <MenuItem value="Sport and Fitness">Sport and Fitness</MenuItem>
            <MenuItem value="Memberships">Memberships</MenuItem>
            <MenuItem value="Courses">Courses</MenuItem>
            <MenuItem value="Memberships">Memberships</MenuItem>
          </Select>
          <Select
            className={`${classes.selectHeader} selectTag`}
            value={selectedChain}
            displayEmpty
            variant="outlined"
            onChange={(e) => {
              setSelectedChain(e.target.value);
            }}
            inputProps={{ "aria-label": "Without label" }}
            style={{ marginRight: "20px" }}
            IconComponent={ExpandMoreIcon}
            MenuProps={menuProps}
          >
            <MenuItem value="" disabled>
              All Chains
            </MenuItem>

            <MenuItem>Chain-1</MenuItem>
            <MenuItem>Chain-2</MenuItem>
          </Select>
        </Box>

        <Box className="displayStart rightSideTrending" gridGap={17}>
          <ButtonGroup className="buttonfilter">
            {buttonLabels.map((label, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={activeButton === index ? "Mui-selected" : ""}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </div>
      <Box mt={4.5}>
        <RankingTable />
      </Box>
    </div>
  );
}
