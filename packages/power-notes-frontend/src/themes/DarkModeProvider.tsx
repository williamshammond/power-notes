import React from "react";
import { DarkModeContext } from "./DarkModeContext";

interface DarkModeProviderProps extends React.PropsWithChildren {
    readonly initialDarkMode?: boolean;
}

export function DarkModeProvider({
    children,
    initialDarkMode = false,
}: DarkModeProviderProps) {
    const [isDarkMode, setIsDarkMode] = React.useState(initialDarkMode);

    const toggleDarkMode = React.useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
