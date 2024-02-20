import { styled } from "@mui/material";
import { LEFT_MENU_WIDTH } from "../constants";
import { WithSx } from "../types/WithSx";

interface DynamicWidthContentWrapperProps
    extends React.PropsWithChildren,
        WithSx {
    readonly isMinimized: boolean;
}

export const DynamicWidthContentWrapper = ({
    children,
    isMinimized = false,
    sx = [],
}: DynamicWidthContentWrapperProps) => {
    return (
        <DynamicWidthContentWrapperInternal
            sx={[...(Array.isArray(sx) ? sx : [sx])]}
            isMinimized={isMinimized}
        >
            {children}
        </DynamicWidthContentWrapperInternal>
    );
};

const DynamicWidthContentWrapperInternal = styled("main", {
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
    marginLeft: `-${LEFT_MENU_WIDTH}px`,
    ...(isMinimized && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
