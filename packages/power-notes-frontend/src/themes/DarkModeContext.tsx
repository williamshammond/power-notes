import React from "react";

interface DarkModeContextValue {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = React.createContext<DarkModeContextValue>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export function useDarkModeCotext() {
    return React.useContext(DarkModeContext);
}

export function useIsDarkMode() {
    const { isDarkMode } = React.useContext(DarkModeContext);
    return isDarkMode;
}

export function useToggleDarkMode() {
    const { isDarkMode } = React.useContext(DarkModeContext);
    return isDarkMode;
}
