import Link from "next/link";
import type { FeatureCardsData } from "@/lib/content/types";
import { isContactHref } from "@/lib/content/isContactHref";
import styles from "./blocks.module.css";

function makeBadgeLabel(index: number) {
    return String(index + 1).padStart(2, "0");
}

export default function FeatureCardsBlock({ data }: { data: FeatureCardsData }) {
    return (
        <section className={styles.featureCards}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.cardGrid}>
                {data.items.map((item, index) => {
                    const href = item.href && !isContactHref(item.href) ? item.href : undefined;
                    const content = (
                        <>
                            <div className={styles.cardIcon}>{makeBadgeLabel(index)}</div>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            {href && <span className={styles.cardArrow}>자세히 보기</span>}
                        </>
                    );

                    if (href) {
                        return (
                            <Link key={`${item.title}-${index}`} href={href} className={styles.card}>
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <div key={`${item.title}-${index}`} className={styles.card}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
