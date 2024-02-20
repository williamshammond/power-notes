import { Box, SxProps, Theme, useTheme } from "@mui/material";

interface CenteredContentWrapper extends React.PropsWithChildren {
    readonly sx?: SxProps<Theme>;
}

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
