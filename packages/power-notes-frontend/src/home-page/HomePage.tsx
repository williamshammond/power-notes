import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import styles from "../../styles/HomePage.module.scss";
import { HomeSectionCard } from "../navigation-components/HomeSectionCard";
import { TopBar } from "../navigation-components/TopBar";

interface SectionInformation {
    readonly title: string;
    readonly path: string;
}

const sections: readonly SectionInformation[] = [
    { title: "Note", path: "note" },
    { title: "Todo List", path: "todoList" },
    { title: "Journal", path: "journal" },
];

export function HomePage() {
    return (
        <div>
            <AppBar position="static">
                {" "}
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <div>Test!</div>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            <TopBar />
            <h1>Home Page</h1>
            <div className={styles.cardContainer}>
                {sections.map((section) => (
                    <HomeSectionCard
                        key={section.title}
                        sectionTitle={section.title}
                        path={section.path}
                    />
                ))}
            </div>
        </div>
    );
}
