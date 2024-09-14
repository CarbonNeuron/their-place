import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import type { ReactNode } from "react";
import HideOnScroll from "@/src/mui/HideOnScroll";
import ThemeSwitcher from "@/src/mui/ThemeSwitcher";

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <Box>
      <HideOnScroll>
        <AppBar position="sticky" enableColorOnDark={true} sx={{ mb: 1 }}>
          <Toolbar disableGutters>
            <HomeIcon sx={{ display: { xs: "none", md: "flex" }, ml: 2 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mx: 0.5,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link sx={{ userSelect: "none" }} href="/">
                Their Place
              </Link>
            </Typography>
            <Box sx={{ ml: "auto" }} />
            <ThemeSwitcher />
            <Box sx={{ mr: 2 }} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {children}
    </Box>
  );
}
