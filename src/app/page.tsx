import { Box, Stack, Typography } from "@mui/material";
import ThemeSwitcher from "@/src/mui/ThemeSwitcher";

export default function Home() {
  return (
    <Stack gap={3}>
      <Typography variant={"h3"}>Welcome to their place</Typography>
      <Box>
        <ThemeSwitcher />
      </Box>
    </Stack>
  );
}
