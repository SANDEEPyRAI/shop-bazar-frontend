import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiTableCell: {
      root: {
        borderBottom: "transparent",
      },
      head: {
        background: "#FFF8E7", // soft background for tables
      },
    },

    MuiFormLabel: {
      root: { color: "#3E2723" },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#3E2723",
        },
      },
    },

    MuiOutlinedInput: {
      root: {
        background: "#FFF",
        borderRadius: "5px",
        height: "50px",
      },
      input: {
        padding: "15.5px 14px",
        "&::placeholder": {
          color: "#8D6E63",
          fontFamily: "Roboto Condensed",
          fontSize: "14px",
        },
      },
      notchedOutline: {
        borderColor: "#D7CCC8",
      },
    },

    MuiButton: {
      containedPrimary: {
        color: "#fff",
        height: "50px",
        fontSize: "16px",
        background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
        border: "none",
        fontWeight: 500,
        lineHeight: "normal",
        fontFamily: "Roboto Condensed",
        borderRadius: "50px",
        "&:hover": {
          background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
          boxShadow: "0 0 10px rgba(212,175,55,0.4)",
        },
      },
    },
  },
};

const themeOptions = {
  typography: {
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
  },
  palette: {
    type: "light",
    background: {
      default: "#FFF8E7",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#C19A6B", // Royal Gold
      dark: "#8B5E3C", // Deep gold brown
      light: "#F4E3B2", // Light cream gold
      contrastText: "#fff",
    },
    secondary: {
      main: "#6D4C41", // warm brown
    },
    text: {
      primary: "#3E2723", // dark brown for readable content
      secondary: "#5D4037",
    },
    success: {
      main: "#81C784",
    },
    error: {
      main: "#E57373",
    },
    warning: {
      main: "#FFB300",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themeOptions));
  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }
  return theme;
};

export default createTheme;
