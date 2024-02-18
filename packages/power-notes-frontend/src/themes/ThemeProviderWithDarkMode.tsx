import { Theme, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { useIsDarkMode } from "./DarkModeContext";
import { grey } from "@mui/material/colors";

interface ThemeProviderWithDarkModeProps {
    readonly children: React.ReactNode;
}

export function ThemeProviderWithDarkMode({
    children,
}: ThemeProviderWithDarkModeProps) {
    const isDarkMode = useIsDarkMode();

    const theme = React.useMemo(
        () => createDarkModeAwareTheme(isDarkMode),
        [isDarkMode]
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function createDarkModeAwareTheme(isDarkMode: boolean): Theme {
    return createTheme(
        isDarkMode == true
            ? {
                  palette: {
                      mode: isDarkMode ? "dark" : "light",
                      primary: {
                          main: "#121212",
                      },
                      secondary: {
                          main: "#fffb94",
                          dark: "#fffb94",
                      },
                      background: { default: "#121212" },
                      text: {
                          primary: "#fff",
                          secondary: grey[500],
                      },
                  },
              }
            : {
                  palette: {
                      mode: isDarkMode ? "dark" : "light",
                      primary: {
                          main: "#fffb94",
                      },
                      secondary: {
                          main: "#121212",
                      },
                      background: { default: "#fffefc" },
                      text: { primary: grey[900], secondary: grey[800] },
                  },
              }
    );
}