import { Box } from "@mui/material";
import React from "react";

interface Props {
    content: string;
}

export const MediaSection = React.memo(function MediaSectionFn({
    content,
}: Props) {
    return <Box>Media content: {content}</Box>;
});
