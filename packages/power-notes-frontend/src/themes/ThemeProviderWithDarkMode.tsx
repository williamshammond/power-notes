import { Theme, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

interface ThemeProviderWithDarkModeProps {
    readonly children: React.ReactNode;
    readonly isDarkMode: boolean;
}

export function ThemeProviderWithDarkMode({
    children,
    isDarkMode,
}: ThemeProviderWithDarkModeProps) {
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
