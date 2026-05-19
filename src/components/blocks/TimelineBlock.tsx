import type { TimelineData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function TimelineBlock({ data }: { data: TimelineData }) {
    if (data.richItems && data.richItems.length > 0) {
        const years = data.richItems.map((it) => ({ year: it.year, hot: it.hot }));

        return (
            <section className={styles.richTimeline}>
                <div className={styles.richTimelineGrid}>
                    {/* 좌: sticky 연도 축 */}
                    <div className={styles.richTimelineAxis}>
                        <p className={styles.richTimelineAxisLabel}>SCRUB</p>
                        {years.map(({ year, hot }, i) => (
                            <div key={year} className={styles.richTimelineAxisItem}>
                                <div
                                    className={styles.richTimelineAxisDot}
                                    style={{
                                        background: hot ? "#1B5BCE" : i === years.length - 1 ? "#0E1726" : "#d1d5db",
                                    }}
                                />
                                <span
                                    className={styles.richTimelineAxisYear}
                                    style={{ color: hot ? "#1B5BCE" : "#0E1726" }}
                                >
                                    {year}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 우: 타임라인 카드 */}
                    <div className={styles.richTimelineCards}>
                        {data.richItems.map((item, i) => {
                            const accent = item.accent ?? "#1F2937";
                            return (
                                <div
                                    key={i}
                                    className={`${styles.richTimelineCard} ${item.hot ? styles.richTimelineCardHot : ""}`}
                                >
                                    <div className={styles.richTimelineNode} style={{ borderColor: accent }} />
                                    <div className={styles.richTimelineCardInner}>
                                        <div className={styles.richTimelineCardMeta}>
                                            <span className={styles.richTimelineCardYear} style={{ color: accent }}>
                                                {item.year}
                                            </span>
                                            {item.hot && (
                                                <span className={styles.richTimelineHotBadge}>TURNING POINT</span>
                                            )}
                                        </div>
                                        <h3 className={styles.richTimelineCardTitle}>{item.title}</h3>
                                        <p className={styles.richTimelineCardDesc}>{item.desc}</p>
                                        {item.tags && item.tags.length > 0 && (
                                            <div className={styles.richTimelineTags}>
                                                {item.tags.map((tag) => (
                                                    <span key={tag} className={styles.richTimelineTag}>{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    /* 기존 단순 타임라인 (하위 호환) */
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
