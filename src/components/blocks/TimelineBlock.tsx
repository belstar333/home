import type { TimelineData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function TimelineBlock({ data }: { data: TimelineData }) {
    return (
        <section className={styles.timeline}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.timelineTrack}>
                {data.items.map((item, i) => (
                    <div key={i} className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineContent}>
                            <span className={styles.timelineYear}>{item.year}</span>
                            <p className={styles.timelineText}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
