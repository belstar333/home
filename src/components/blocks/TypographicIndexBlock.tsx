import Image from "next/image";
import Link from "next/link";
import type { TypographicIndexData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function TypographicIndexBlock({ data }: { data: TypographicIndexData }) {
    const accent = data.accent ?? "#1E4A8C";

    return (
        <>
            <section className={styles.typIndexHero}>
                <div className={styles.typIndexHeroGrid}>
                    {data.verticalLabel && (
                        <div className={styles.typIndexVerticalLabel} style={{ color: accent }}>
                            {data.verticalLabel}
                        </div>
                    )}
                    <div>
                        <p className={styles.typIndexEyebrow} style={{ color: accent }}>
                            {data.eyebrow}
                        </p>
                        <h1 className={styles.typIndexH1}>
                            {data.h1Italic
                                ? data.h1.split(data.h1Italic).map((part, i, arr) =>
                                      i < arr.length - 1 ? (
                                          <>
                                              {part}
                                              <em key={i} className={styles.typIndexItalic} style={{ color: accent }}>
                                                  {data.h1Italic}
                                              </em>
                                          </>
                                      ) : (
                                          part
                                      )
                                  )
                                : data.h1}
                        </h1>
                        <p className={styles.typIndexSub}>{data.sub}</p>
                    </div>
                </div>
            </section>

            <section className={styles.typIndex}>
                <div className={styles.typIndexHeader}>
                    <span>INDEX</span>
                    <span>{data.items.length} SOLUTIONS</span>
                    <span>2026</span>
                </div>
                {data.items.map((item) => (
                    <Link key={item.n} href={item.href} className={styles.typIndexRow}>
                        <div className={styles.typIndexRowNum} style={{ color: item.tone }}>
                            {item.n}
                        </div>
                        <div className={styles.typIndexRowMain}>
                            <h2 className={styles.typIndexRowTitle}>{item.title}</h2>
                            <span className={styles.typIndexRowMeta}>{item.meta}</span>
                        </div>
                        <div className={styles.typIndexRowPreview}>
                            {item.imageSrc && (
                                <div className={styles.typIndexRowPreviewInner}>
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.imageAlt ?? item.title}
                                        fill
                                        sizes="400px"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.typIndexRowArrow}>→</div>
                    </Link>
                ))}
                <div className={styles.typIndexHint}>⌄ HOVER · 펼쳐서 미리보기</div>
            </section>

            {data.criteriaItems && data.criteriaItems.length > 0 && (
                <section className={styles.darkCriteria}>
                    <div className={styles.darkCriteriaHead}>
                        <p className={styles.darkCriteriaEyebrow}>도입 전 검토 항목</p>
                        <h2 className={styles.darkCriteriaTitle}>{data.criteriaTitle}</h2>
                    </div>
                    <div className={styles.darkCriteriaGrid}>
                        {data.criteriaItems.map((item, i) => (
                            <div key={i} className={styles.darkCriteriaItem}>
                                <div className={styles.darkCriteriaNum}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h3 className={styles.darkCriteriaItemTitle}>{item.title}</h3>
                                <p className={styles.darkCriteriaItemDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
