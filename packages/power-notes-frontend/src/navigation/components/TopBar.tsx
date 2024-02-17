import styles from "+styles/TopBar.module.scss";
import { IconButton } from "@mui/material";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { Menu } from "@mui/icons-material";

interface Props {
    readonly handleLeftMenuOpen: () => void;
    readonly isLeftMenuOpen: boolean;
}

export const TopBar = React.memo(function TopBar({
    handleLeftMenuOpen,
    isLeftMenuOpen,
}: Props) {
    return (
        <React.Fragment>
            {!isLeftMenuOpen && (
                <IconButton
                    aria-label="menu"
                    color="inherit"
                    onClick={handleLeftMenuOpen}
                    disableRipple={true}
                    edge="start"
                    size="large"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
            )}
            <ProfileMenu className={styles.profileMenu} />
        </React.Fragment>
    );
});
