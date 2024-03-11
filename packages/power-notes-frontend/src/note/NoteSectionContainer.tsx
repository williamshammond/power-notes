import { Box } from "@mui/material";
import React from "react";

export const NoteSectionContainer = React.memo(function NoteSectionContainerFn({
    children,
}: React.PropsWithChildren) {
    return <Box sx={{ minHeight: "50px" }}>{children}</Box>;
});
