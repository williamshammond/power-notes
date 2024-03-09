import { Box } from "@mui/material";
import React from "react";

interface Props {
    content: string;
}

export const TextSection = React.memo(function TextSectionFn({
    content,
}: Props) {
    return <Box>Text content: {content}</Box>;
});
