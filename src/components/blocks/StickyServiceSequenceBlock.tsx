import Image from "next/image";
import Link from "next/link";
import type { StickyServiceSequenceData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function StickyServiceSequenceBlock({ data }: { data: StickyServiceSequenceData }) {
    const total = String(data.items.length).padStart(2, "0");
    return (
        <div className={styles.stickySequence}>
            {data.items.map((item) => (
                <section
                    key={item.n}
                    className={styles.stickySequenceItem}
                    style={{ background: item.toneBg }}
                >
                    <div className={styles.stickySequenceGrid}>
                        <div className={styles.stickySequenceMeta}>
                            <div className={styles.stickySequenceNum} style={{ color: item.tone }}>
                                {item.n} · {item.n}/{total}
                            </div>
                            <h2 className={styles.stickySequenceTitle}>{item.title}</h2>
                            <div className={styles.stickySequenceSub} style={{ color: item.tone }}>
                                {item.sub}
                            </div>
                            <p className={styles.stickySequenceDesc}>{item.desc}</p>
                            <ul className={styles.stickySequencePoints}>
                                {item.points.map((pt) => (
                                    <li key={pt} className={styles.stickySequencePoint}>
                                        <span style={{ color: item.tone }}>›</span> {pt}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={item.href}
                                className={styles.stickySequenceCta}
                                style={{ background: item.tone }}
                            >
                                자세히 보기 →
                            </Link>
                        </div>
                        <div className={styles.stickySequencePhoto}>
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                sizes="(max-width: 900px) 100vw, 56vw"
                                style={{ objectFit: "cover" }}
                            />
                            {item.imageCaption && (
                                <div className={styles.stickySequencePhotoCaption}>
                                    <div className={styles.stickySequencePhotoCaptionLabel}>FIELD CAPTION</div>
                                    <div className={styles.stickySequencePhotoCaptionText}>{item.imageCaption}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
