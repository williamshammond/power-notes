import { ChevronRight, Inbox, Mail } from "@mui/icons-material";
import {
    AppBar,
    AppBarProps,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    styled,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../navigation/components/TopBar";

// NOTE (whammond): Heavily sourced from MUI's Drawer documentation @ https://mui.com/material-ui/react-drawer/

interface AppBarStyleProps extends AppBarProps {
    isMinimized: boolean;
}

const DRAWER_WIDTH = 240;

const MainContentContainer = styled("main", {
    shouldForwardProp: (prop) => prop !== "isMinimized",
})<{
    isMinimized?: boolean;
}>(({ theme, isMinimized }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    ...(isMinimized && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "isMinimized",
})<AppBarStyleProps>(({ isMinimized, theme }) => ({
    ransition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isMinimized && {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: `${DRAWER_WIDTH}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export function Page() {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState(false);

    const handleLeftMenuOpen = React.useCallback(() => {
        setIsLeftMenuOpen(true);
    }, []);

    const handleLeftMenuClose = React.useCallback(() => {
        setIsLeftMenuOpen(false);
    }, []);

    return (
        <React.Fragment>
            <Box sx={{ display: "flex" }}>
                <AppBarStyled isMinimized={isLeftMenuOpen} position="static">
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
                        width: `${DRAWER_WIDTH}px`,
                        flexShrink: 0,
                        // TODO (whammond): Understand the functionality of this styling on the paper class better for drawer width functionality
                        "& .MuiDrawer-paper": {
                            width: DRAWER_WIDTH,
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleLeftMenuClose}>
                            <ChevronRight />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map(
                            (text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItem>
                                            {index % 2 === 0 ? (
                                                <Inbox />
                                            ) : (
                                                <Mail />
                                            )}
                                        </ListItem>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItem>
                                        {index % 2 === 0 ? <Inbox /> : <Mail />}
                                    </ListItem>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
            <MainContentContainer isMinimized={isLeftMenuOpen}>
                <Outlet />
            </MainContentContainer>
        </React.Fragment>
    );
}
