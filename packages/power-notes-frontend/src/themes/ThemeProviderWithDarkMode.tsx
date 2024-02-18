import { Theme, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { useIsDarkMode } from "./DarkModeContext";

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
    return createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
            primary: {
                main: "#fffb94",
            },
            secondary: {
                main: "#dc004e",
            },
        },
    });
}
