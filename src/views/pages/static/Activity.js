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
import ActivityTable from "./ActivityTable";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuListFilter } from "react-icons/lu";
import Badge from "@material-ui/core/Badge";
import { RxCross2 } from "react-icons/rx";

const useStyles = makeStyles((theme) => ({
  trendingContainer: {
    padding: "40px",
    // background: "#fff",
    "& .saless": {
      color: "rgba(38, 38, 38, 1)",
    },
    "& .topTrending": {
      padding: " 0px 45px 0px 45px",
      gap: "4em",
      "& .alignCenter": {
        gap: "15px",
        "& h6": {
          fontWeight: 500,
          color: "rgba(38, 38, 38, 1)",
        },
        "& .iconFilter": {
          background: "#ECECEC",
          fontSize: "x-large",
          padding: "20px",
          borderRadius: "10px",
        },
      },
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
  },

  headdTop: {
    padding: " 0px 45px 0px 45px",
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    fontSize: "60px",
    color: "rgba(38, 38, 38, 1)",
    lineHeight: "70.31px",
  },
}));

const buttonLabels = ["1d", "7d", "30d", "60d", "90d"];

export default function Trending() {
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const [activeButton, setActiveButton] = useState(0);
  const [selectedPage, setSelectedPage] = useState("");
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
      <Box className={classes.headdTop}>Activity</Box>

      <div className="topTrending displayStart">
        <Box className="alignCenter">
          <Typography variant="h6">Filter:</Typography>
          <Badge badgeContent={1} color="primary" className="iconFilter">
            <LuListFilter />
          </Badge>
        </Box>
        <Box className="alignCenter" style={{ background: "rgba(198, 198, 198, 0.17)", padding: "14px", borderRadius: "10px" }}>
          <Typography variant="body2" className="saless">Sales</Typography>
          <RxCross2 />
        </Box>
      </div>
      <Box mt={4.5} >
        <ActivityTable />
      </Box>
    </div>
  );
}
