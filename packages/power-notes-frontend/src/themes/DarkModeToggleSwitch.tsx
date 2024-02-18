import { Box, Switch, SxProps, Theme } from "@mui/material";
import { useDarkModeContext } from "./DarkModeContext";

interface Props {
    sx?: SxProps<Theme>;
}

export function DarkModeToggleSwitch({ sx }: Props) {
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
