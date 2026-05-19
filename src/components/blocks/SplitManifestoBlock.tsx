import Image from "next/image";
import Link from "next/link";
import type { SplitManifestoData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function SplitManifestoBlock({ data }: { data: SplitManifestoData }) {
    const accent = data.accent ?? "#1F2937";

    return (
        <section className={styles.splitManifesto}>
            {/* 좌: 텍스트 */}
            <div className={styles.splitManifestoText}>
                <p className={styles.splitManifestoEyebrow} style={{ color: accent }}>
                    {data.eyebrow}
                </p>
                <h1 className={styles.splitManifestoH1}>
                    {data.h1Italic
                        ? data.h1.split(data.h1Italic).map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                  <>
                                      {part}
                                      <em key={i} className={styles.splitManifestoItalic} style={{ color: accent }}>
                                          {data.h1Italic}
                                      </em>
                                  </>
                              ) : (
                                  part
                              )
                          )
                        : data.h1}
                </h1>
                <p className={styles.splitManifestoDesc}>{data.description}</p>
                {(data.ctaPrimary || data.ctaSecondary) && (
                    <div className={styles.splitManifestoActions}>
                        {data.ctaPrimary && (
                            <Link
                                href={data.ctaPrimary.href}
                                className={styles.splitManifestoBtnPrimary}
                                style={{ background: accent, borderColor: accent }}
                            >
                                {data.ctaPrimary.label}
                            </Link>
                        )}
                        {data.ctaSecondary && (
                            <Link
                                href={data.ctaSecondary.href}
                                className={styles.splitManifestoBtnSecondary}
                                style={{ color: accent, borderColor: accent }}
                            >
                                {data.ctaSecondary.label}
                            </Link>
                        )}
                    </div>
                )}
            </div>

            {/* 우: 풀블리드 사진 */}
            <div className={styles.splitManifestoPhoto}>
                <Image
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority
                />
                {(data.imageCaption || data.imageCaptionSub) && (
                    <div className={styles.splitManifestoCaption}>
                        {data.imageCaptionSub && (
                            <span className={styles.splitManifestoCaptionSub}>{data.imageCaptionSub}</span>
                        )}
                        {data.imageCaption && (
                            <span className={styles.splitManifestoCaptionMain}>{data.imageCaption}</span>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
