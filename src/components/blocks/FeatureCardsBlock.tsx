import Image from "next/image";
import Link from "next/link";
import type { FeatureCardsData } from "@/lib/content/types";
import { isContactHref } from "@/lib/content/isContactHref";
import styles from "./blocks.module.css";

function makeBadgeLabel(index: number) {
    return String(index + 1).padStart(2, "0");
}

export default function FeatureCardsBlock({ data }: { data: FeatureCardsData }) {
    if (data.variant === "badges") {
        return (
            <section className={styles.featureCards}>
                <h3 className={styles.sectionTitle}>{data.title}</h3>
                <div className={styles.badgeRow}>
                    {data.items.map((item, index) => (
                        <span key={`${item.title}-${index}`} className={styles.complianceBadge}>
                            {item.title}
                        </span>
                    ))}
                </div>
            </section>
        );
    }

    if (data.variant === "before-after") {
        return (
            <section className={styles.featureCards}>
                <h3 className={styles.sectionTitle}>{data.title}</h3>
                <div className={styles.beforeAfterGrid}>
                    {data.items.map((item, index) => (
                        <div key={`${item.title}-${index}`} className={styles.beforeAfterCard}>
                            <p className={styles.beforeAfterBefore}>{item.title}</p>
                            <span className={styles.beforeAfterArrow} aria-hidden="true">→</span>
                            <p className={styles.beforeAfterAfter}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (data.variant === "image-cards") {
        return (
            <section className={styles.featureCards}>
                {data.eyebrow && <p className={styles.featureCardsEyebrow}>{data.eyebrow}</p>}
                <h3 className={styles.sectionTitle}>{data.title}</h3>
                <div className={styles.imageCardGrid}>
                    {data.items.map((item, index) => {
                        const href = item.href && !isContactHref(item.href) ? item.href : undefined;
                        const isWide = index === data.items.length - 1 && data.items.length % 2 !== 0;
                        const cardClass = `${styles.imageCard}${isWide ? ` ${styles.imageCardWide}` : ""}`;
                        const content = (
                            <>
                                <div className={styles.imageCardImageWrap}>
                                    {item.imageSrc && (
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt ?? item.title}
                                            fill
                                            sizes={isWide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                            className={styles.imageCardImg}
                                        />
                                    )}
                                </div>
                                <div className={styles.imageCardBody}>
                                    <span className={styles.imageCardNumber}>{makeBadgeLabel(index)}</span>
                                    <h4 className={styles.imageCardTitle}>{item.title}</h4>
                                    <p className={styles.imageCardDesc}>{item.desc}</p>
                                    {href && <span className={styles.imageCardCta}>자세히 보기</span>}
                                </div>
                            </>
                        );

                        if (href) {
                            return (
                                <Link key={`${item.title}-${index}`} href={href} className={cardClass}>
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <div key={`${item.title}-${index}`} className={cardClass}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    return (
        <section className={styles.featureCards}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.cardGrid}>
                {data.items.map((item, index) => {
                    const href = item.href && !isContactHref(item.href) ? item.href : undefined;
                    const content = (
                        <>
                            <div className={styles.cardIcon}>
                                {item.icon
                                    ? <span className={`material-symbols-outlined ${styles.cardIconSymbol}`}>{item.icon}</span>
                                    : makeBadgeLabel(index)}
                            </div>
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
