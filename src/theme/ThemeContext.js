import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  setPrimaryColor: () => {},
});

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#1976d2");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
      setPrimaryColor: (color) => setPrimaryColor(color),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode, primary: { main: primaryColor } },
      }),
    [mode, primaryColor]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
