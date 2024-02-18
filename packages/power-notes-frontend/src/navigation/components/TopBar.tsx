import { Menu } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import { DarkModeToggleSwitch } from "../../themes/DarkModeToggleSwitch";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
    readonly handleLeftMenuOpen: () => void;
    readonly isLeftMenuOpen: boolean;
}

export const TopBar = React.memo(function TopBar({
    handleLeftMenuOpen,
    isLeftMenuOpen,
}: Props) {
    const theme = useTheme();

    return (
        <React.Fragment>
            {!isLeftMenuOpen && (
                <IconButton
                    aria-label="menu"
                    onClick={handleLeftMenuOpen}
                    disableRipple={true}
                    edge="start"
                    size="large"
                    sx={{
                        mr: 2,
                        color: theme.palette.secondary.main,
                    }}
                >
                    <Menu />
                </IconButton>
            )}
            <Box sx={{ color: theme.palette.secondary.main }}>Power Notes</Box>
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                <DarkModeToggleSwitch />
                <ProfileMenu />
            </Box>
        </React.Fragment>
    );
});
