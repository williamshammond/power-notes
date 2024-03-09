import { Box } from "@mui/material";
import React from "react";

interface Props {
    content: string;
}

export const TodoSection = React.memo(function TodoSectionFn({
    content,
}: Props) {
    return <Box>Todo content: {content}</Box>;
});
