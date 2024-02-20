import { Box, useTheme } from "@mui/material";
import { WithSx } from "../types/WithSx";

interface CenteredContentWrapper extends React.PropsWithChildren, WithSx {}

export const CenteredContentWrapper = ({
    children,
    sx = [],
}: CenteredContentWrapper) => {
    const theme = useTheme();

    return (
        <Box
            sx={[
                { backgroundColor: theme.palette.background.default },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Box>
    );
};
