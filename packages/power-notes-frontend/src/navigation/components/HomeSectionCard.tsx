import { Link } from "react-router-dom";
import styles from "+styles/HomeSectionCard.module.scss";
import { Box } from "@mui/material";

interface Props {
    readonly sectionTitle: string;
    readonly path: string;
}

export function HomeSectionCard({ path, sectionTitle }: Props) {
    return (
        <Box>
            <Link to={path}>
                <div className={styles.cardContainer}>{sectionTitle}</div>
            </Link>
        </Box>
    );
}
