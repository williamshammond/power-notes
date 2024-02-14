import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { UserProfile } from "../auth-components/UserProfile";
import { ProfileMenu } from "./ProfileMenu";

export const TopBar = React.memo(function TopBar() {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState(false);

    const handleLeftMenuOpen = React.useCallback(() => {
        setIsLeftMenuOpen(true);
    }, []);

    const handleLeftMenuClose = React.useCallback(() => {
        setIsLeftMenuOpen(false);
    }, []);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    aria-label="menu"
                    color="inherit"
                    onClick={handleLeftMenuOpen}
                    disableRipple={true}
                    edge="start"
                    size="large"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer variant={"persistent"} open={isLeftMenuOpen}>
                    Test text!
                    <Button onClick={handleLeftMenuClose}>Close</Button>
                </Drawer>
                <UserProfile />
                <ProfileMenu />
            </Toolbar>
        </AppBar>
    );
});
