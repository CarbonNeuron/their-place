"use client";
import { createTheme } from "@mui/material/styles";
import { deepPurple, lightGreen } from "@mui/material/colors";
import { LinkBehavior } from "@/src/mui/LinkBehaviour";
import { LinkProps } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        color: "inherit",
        underline: "none",
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: deepPurple,
        secondary: lightGreen,
      },
    },
    light: {
      palette: {
        primary: deepPurple,
        secondary: lightGreen,
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
