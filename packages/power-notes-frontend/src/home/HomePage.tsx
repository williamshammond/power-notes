import styles from "+styles/HomePage.module.scss";
import { Box, Typography, useTheme } from "@mui/material";
import { HomeSectionCard } from "../navigation/components/HomeSectionCard";

interface SectionInformation {
    readonly title: string;
    readonly path: string;
}

const sections: readonly SectionInformation[] = [
    { title: "Note", path: "note" },
    { title: "Todo List", path: "todo" },
    { title: "Journal", path: "journal" },
];

export function HomePage() {
    const theme = useTheme();
    return (
        <Box sx={{ color: theme.palette.text.primary }}>
            <Typography>Home Page</Typography>
            <div className={styles.cardContainer}>
                {sections.map((section) => (
                    <HomeSectionCard
                        key={section.title}
                        sectionTitle={section.title}
                        path={section.path}
                    />
                ))}
            </div>
        </Box>
    );
}
