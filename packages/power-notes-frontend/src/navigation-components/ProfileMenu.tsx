import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { LoginButton } from "../auth-components/LoginButton";
import LogoutButton from "../auth-components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfile } from "../auth-components/UserProfile";

interface Props {
    className?: string;
}

export const ProfileMenu = React.memo(function ProfileMenu({
    className,
}: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        },
        []
    );

    const handleMenuClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    const { isAuthenticated } = useAuth0();

    return (
        <div className={className}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
            >
                {/* TODO(whammond): Add user profile picture here once accessible from BE.*/}
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {isAuthenticated ? (
                    <React.Fragment>
                        <UserProfile />
                        <MenuItem onClick={handleMenuClose}>
                            <LogoutButton />
                        </MenuItem>
                    </React.Fragment>
                ) : (
                    <MenuItem onClick={handleMenuClose}>
                        <LoginButton />
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
});
