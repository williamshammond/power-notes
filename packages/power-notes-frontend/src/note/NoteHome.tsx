import { Typography } from "@mui/material";
import { CenteredAndDynamicWidthContent } from "../navigation/components/CenteredAndDynamicWidthContent";

export function NoteHome() {
    return (
        <CenteredAndDynamicWidthContent
            centeredContent={<Typography variant="h3">Note Home</Typography>}
            dynamicContent={
                <Typography variant="body1">
                    Actual Note page content will go here
                </Typography>
            }
        />
    );
}
