import { Typography } from "@mui/material";
import { CenteredAndDynamicWidthContent } from "../core/components/CenteredAndDynamicWidthContent";

export function JournalHome() {
    return (
        <CenteredAndDynamicWidthContent
            centeredContent={<Typography variant="h3">Journal Home</Typography>}
            dynamicContent={
                <Typography variant="body1">
                    Actual journal page content will go here
                </Typography>
            }
        />
    );
}
