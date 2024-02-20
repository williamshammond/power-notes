import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { DarkModeToggleSwitch } from "../../themes/DarkModeToggleSwitch";
import { ProfileMenu } from "./ProfileMenu";
import { Link } from "react-router-dom";

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
            <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                    sx={{
                        color: theme.palette.secondary.main,
                        "&:hover": { color: theme.palette.primary.dark },
                    }}
                >
                    <Typography variant="h5">Power Notes</Typography>
                </Box>
            </Link>
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                <DarkModeToggleSwitch />
                <ProfileMenu />
            </Box>
        </React.Fragment>
    );
});
