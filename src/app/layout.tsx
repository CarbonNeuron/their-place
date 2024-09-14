import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/mui/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { CssBaseline } from "@mui/material";
import NavBar from "@/src/mui/NavBar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Their Place",
  description: "A place for them, and for us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <InitColorSchemeScript attribute="class" />
            <CssBaseline />
            <NavBar>
              <main>{children}</main>
            </NavBar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
