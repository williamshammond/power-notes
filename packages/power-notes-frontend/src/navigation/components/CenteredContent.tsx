import { Box, useTheme } from "@mui/material";
import { LEFT_MENU_WIDTH } from "../../constants";
import { useIsLeftMenuOpen } from "../LeftMenuContext";

interface Props {
    children: React.ReactNode;
}

export function CenteredContent({ children }: Props) {
    const isLeftMenuOpen = useIsLeftMenuOpen();
    const theme = useTheme();

    return (
        <Box
            sx={{
                ml: isLeftMenuOpen ? "0px" : `${LEFT_MENU_WIDTH}px`,
                transition: theme.transitions.create(["ml"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            }}
        >
            {children}
        </Box>
    );
}
