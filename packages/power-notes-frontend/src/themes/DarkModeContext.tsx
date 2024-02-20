import React from "react";

interface DarkModeContextValue {
    readonly isDarkMode: boolean;
    readonly toggleDarkMode: () => void;
}

export const DarkModeContext = React.createContext<DarkModeContextValue>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export function useDarkModeContext() {
    return React.useContext(DarkModeContext);
}

export function useIsDarkMode() {
    const { isDarkMode } = React.useContext(DarkModeContext);
    return isDarkMode;
}

export function useToggleDarkMode() {
    const { toggleDarkMode } = React.useContext(DarkModeContext);
    return toggleDarkMode;
}
