import styles from "../../styles/TopBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import React from "react";
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
            <Toolbar className={styles.toolBar}>
                <Drawer variant={"persistent"} open={isLeftMenuOpen}>
                    Test text!
                    <Button onClick={handleLeftMenuClose}>Close</Button>
                </Drawer>
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

                <ProfileMenu className={styles.profileMenu} />
            </Toolbar>
        </AppBar>
    );
});
