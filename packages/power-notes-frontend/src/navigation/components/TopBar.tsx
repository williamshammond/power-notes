import styles from "+styles/TopBar.module.scss";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { ProfileMenu } from "./ProfileMenu";

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
                    color="primary"
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
