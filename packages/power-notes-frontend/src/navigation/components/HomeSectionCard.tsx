import { Link } from "react-router-dom";
import styles from "../../../styles/HomeSectionCard.module.scss";

interface Props {
    readonly sectionTitle: string;
    readonly path: string;
}

export function HomeSectionCard({ path, sectionTitle }: Props) {
    return (
        <Link to={path}>
            <div className={styles.cardContainer}>{sectionTitle}</div>
        </Link>
    );
}
