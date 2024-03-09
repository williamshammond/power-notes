import { styled } from "@mui/material";
import { LEFT_MENU_WIDTH_PX } from "../constants";
import { WithSx } from "../types/WithSx";
import { useIsLeftMenuOpen } from "../../navigation/LeftMenuContext";

interface FullDynamicWidthContentWrapperProps
    extends React.PropsWithChildren,
        WithSx {}

export const FullDynamicWidthContentWrapper = ({
    children,
    sx = [],
}: FullDynamicWidthContentWrapperProps) => {
    const isMinimized = useIsLeftMenuOpen();

    return (
        <FullDynamicWidthContentWrapperInternal
            sx={[...(Array.isArray(sx) ? sx : [sx])]}
            isMinimized={isMinimized}
        >
            {children}
        </FullDynamicWidthContentWrapperInternal>
    );
};

const FullDynamicWidthContentWrapperInternal = styled("main", {
    shouldForwardProp: (prop) => prop !== "isMinimized",
})<{
    isMinimized?: boolean;
}>(({ theme, isMinimized }) => ({
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isMinimized && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${LEFT_MENU_WIDTH_PX}px`,
    }),
}));
