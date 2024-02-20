import { Typography } from "@mui/material";
import { CenteredAndDynamicWidthContent } from "../navigation/components/CenteredAndDynamicWidthContent";

export function TodoHome() {
    return (
        <CenteredAndDynamicWidthContent
            centeredContent={<Typography variant="h3">Todo Home</Typography>}
            dynamicContent={
                <Typography variant="body1">
                    Actual Todo page content will go here
                </Typography>
            }
        />
    );
}
