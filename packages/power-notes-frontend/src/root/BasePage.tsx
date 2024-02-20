import { ChevronRight } from "@mui/icons-material";
import {
    AppBar,
    AppBarProps,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    styled,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { LEFT_MENU_WIDTH } from "../constants";
import { LeftMenuContextProvider } from "../navigation/LeftMenuContextProvider";
import { LeftMenu } from "../navigation/components/LeftMenu";
import { TopBar } from "../navigation/components/TopBar";

// NOTE (whammond): Heavily sourced from MUI's Drawer documentation @ https://mui.com/material-ui/react-drawer/

interface AppBarStyleProps extends AppBarProps {
    isMinimized: boolean;
}

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "isMinimized",
})<AppBarStyleProps>(({ isMinimized, theme }) => ({
    overflow: "hidden",
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isMinimized && {
        width: `calc(100% - ${LEFT_MENU_WIDTH}px)`,
        marginLeft: `${LEFT_MENU_WIDTH}px`,
        overflow: "hidden",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeaderStyled = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export function BasePage() {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState(false);

    const handleLeftMenuOpen = React.useCallback(() => {
        setIsLeftMenuOpen(true);
    }, []);

    const handleLeftMenuClose = React.useCallback(() => {
        setIsLeftMenuOpen(false);
    }, []);

    return (
        <LeftMenuContextProvider isLeftMenuOpen={isLeftMenuOpen}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <AppBarStyled
                        isMinimized={isLeftMenuOpen}
                        position="static"
                    >
                        <Toolbar>
                            <TopBar
                                handleLeftMenuOpen={handleLeftMenuOpen}
                                isLeftMenuOpen={isLeftMenuOpen}
                            />
                        </Toolbar>
                    </AppBarStyled>
                    <Drawer
                        anchor="left"
                        open={isLeftMenuOpen}
                        variant={"persistent"}
                        sx={{
                            width: `${LEFT_MENU_WIDTH}px`,
                            flexShrink: 0,
                            // TODO (whammond): Understand the functionality of this styling on the paper class better for drawer width functionality
                            "& .MuiDrawer-paper": {
                                width: LEFT_MENU_WIDTH,
                                boxSizing: "border-box",
                            },
                        }}
                    >
                        <DrawerHeaderStyled>
                            <IconButton onClick={handleLeftMenuClose}>
                                <ChevronRight />
                            </IconButton>
                        </DrawerHeaderStyled>
                        <LeftMenu content="hello world" />
                    </Drawer>
                </Box>
                <Outlet />
            </Box>
        </LeftMenuContextProvider>
    );
}
