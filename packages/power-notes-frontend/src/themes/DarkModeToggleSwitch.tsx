import { Switch } from "@mui/material";
import { useDarkModeContext } from "./DarkModeContext";

export function DarkModeToggleSwitch() {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    return (
        <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="secondary"
        />
    );
}
