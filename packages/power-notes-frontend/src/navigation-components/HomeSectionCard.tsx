import styles from '../../styles/HomeSectionCard.module.scss'

interface Props {
    sectionTitle: string
}

export function HomeSectionCard({ sectionTitle }: Props) {
    return <div className={styles.cardContainer}>{sectionTitle}</div>
}
