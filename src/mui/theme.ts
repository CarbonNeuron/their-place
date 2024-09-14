"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: { dark: true, light: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
