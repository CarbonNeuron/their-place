import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import type { ReactNode } from "react";
import HideOnScroll from "@/src/mui/HideOnScroll";
import ThemeSwitcher from "@/src/mui/ThemeSwitcher";

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <Box>
      <HideOnScroll>
        <AppBar position="sticky" enableColorOnDark={true}>
          <Toolbar disableGutters>
            <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mx: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mx: 1,
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {children}
    </Box>
  );
}
