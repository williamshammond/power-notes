import { Box, Switch } from "@mui/material";
import { WithSx } from "../core/types/WithSx";
import { useDarkModeContext } from "./DarkModeContext";

export function DarkModeToggleSwitch({ sx }: WithSx) {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    return (
        <Box sx={sx}>
            <Switch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                color="secondary"
            />
        </Box>
    );
}
