import { Theme, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { useIsDarkMode } from "./DarkModeContext";
import { grey } from "@mui/material/colors";

interface ThemeProviderWithDarkModeProps extends React.PropsWithChildren {}

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
                      common: {
                          black: "#000",
                          white: "#fff",
                      },
                      mode: isDarkMode ? "dark" : "light",
                      primary: {
                          main: "#121212",
                          dark: "#000000",
                      },
                      secondary: {
                          main: "#fffb94",
                          light: "#fcfabd",
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
                      common: {
                          black: "#000",
                          white: "#fff",
                      },
                      mode: isDarkMode ? "dark" : "light",
                      primary: {
                          main: "#fffb94",
                          dark: "#ded954",
                      },
                      secondary: {
                          main: "#121212",
                          light: "#242424",
                      },
                      background: { default: "#fffefc" },
                      text: { primary: grey[900], secondary: grey[800] },
                  },
              }
    );
}
