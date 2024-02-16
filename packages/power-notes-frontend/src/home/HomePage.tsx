import styles from "+styles/HomePage.module.scss";
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
    return (
        <div>
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
