import { Box, useTheme } from "@mui/material";
import { WithSx } from "../types/WithSx";
import { LEFT_MENU_WIDTH_PX } from "../constants";

interface CenteredDynamicWidthContentWrapperProps
    extends React.PropsWithChildren,
        WithSx {
    readonly isMinimized: boolean;
}

export const CenteredDynamicWidthContentWrapper = ({
    children,
    isMinimized,
    sx = [],
}: CenteredDynamicWidthContentWrapperProps) => {
    const theme = useTheme();

    return (
        <Box
            sx={[
                {
                    backgroundColor: theme.palette.background.default,
                    ml: isMinimized ? `${LEFT_MENU_WIDTH_PX}px` : "0",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Box>
    );
};
