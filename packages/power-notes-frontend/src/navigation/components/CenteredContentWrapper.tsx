import { Box, useTheme } from "@mui/material";

interface CenteredContentWrapper extends React.PropsWithChildren {}

export const CenteredContentWrapper = ({
    children,
}: CenteredContentWrapper) => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
            {children}
        </Box>
    );
};
