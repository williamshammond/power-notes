import styles from "+styles/HomePage.module.scss";
import { Box, useTheme } from "@mui/material";
import { HomeSectionCard } from "../navigation/components/HomeSectionCard";
import { CenteredContent } from "../navigation/components/CenteredContent";

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
        <CenteredContent>
            <Box sx={{ color: theme.palette.text.primary }}>
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
        </CenteredContent>
    );
}
