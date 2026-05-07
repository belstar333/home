"use client";
import Image from "next/image";
import Link from "next/link";
import type { HeroData } from "@/lib/content/types";
import type { PagePresentation } from "@/lib/content/servicePresentation";
import { isContactHref } from "@/lib/content/isContactHref";
import styles from "./blocks.module.css";

export default function HeroBlock({
    data,
    presentation,
}: {
    data: HeroData;
    presentation?: PagePresentation | null;
}) {
    const primaryCta = data.ctaPrimary && !isContactHref(data.ctaPrimary.href) ? data.ctaPrimary : null;
    const secondaryCta = data.ctaSecondary && !isContactHref(data.ctaSecondary.href) ? data.ctaSecondary : null;

    return (
        <section className={styles.hero}>
            {data.imageSrc && (
                <Image
                    src={data.imageSrc}
                    alt={data.imageAlt ?? data.h1}
                    fill
                    sizes="(max-width: 768px) 100vw, 1180px"
                    className={styles.heroBgImage}
                />
            )}
            <div className={styles.heroOverlay} />
            <div className={styles.heroShell}>
                <div className={styles.heroContent}>
                    {presentation?.heroLabel && <p className={styles.heroKicker}>{presentation.heroLabel}</p>}
                    <h1 className={styles.heroH1}>{data.h1}</h1>
                    <p className={styles.heroSub}>{data.sub}</p>
                    {presentation?.trustPoints && presentation.trustPoints.length > 0 && (
                        <ul className={styles.heroHighlights}>
                            {presentation.trustPoints.map((point, index) => (
                                <li key={point} className={styles.heroHighlightItem}>
                                    <span className={styles.heroHighlightIndex}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className={styles.heroHighlightText}>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {(primaryCta || secondaryCta) && (
                        <div className={styles.heroCtas}>
                            {primaryCta && (
                                <Link href={primaryCta.href} className={styles.ctaPrimary}>
                                    {primaryCta.label}
                                </Link>
                            )}
                            {secondaryCta && (
                                <Link href={secondaryCta.href} className={styles.ctaSecondary}>
                                    {secondaryCta.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
                {(presentation?.proofTitle || presentation?.proofLabel || (presentation?.deliverables?.length ?? 0) > 0) && (
                    <aside className={styles.heroProof}>
                        {presentation?.proofLabel && (
                            <span className={styles.heroProofLabel}>{presentation.proofLabel}</span>
                        )}
                        {presentation?.proofTitle && (
                            <h2 className={styles.heroProofTitle}>{presentation.proofTitle}</h2>
                        )}
                        {presentation?.proofBody && (
                            <p className={styles.heroProofBody}>{presentation.proofBody}</p>
                        )}
                        {presentation?.deliverables && presentation.deliverables.length > 0 && (
                            <ul className={styles.heroProofList}>
                                {presentation.deliverables.map((item, index) => (
                                    <li key={item} className={styles.heroProofItem}>
                                        <span className={styles.heroProofIndex}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </aside>
                )}
            </div>
        </section>
    );
}
