import Image from "next/image";
import type { MediaFeatureData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function MediaFeatureBlock({ data }: { data: MediaFeatureData }) {
    const tone = data.tone ?? "diagram";
    const usesIntrinsicSize = Boolean(data.imageWidth && data.imageHeight);

    return (
        <section
            className={styles.mediaFeature}
            data-layout={data.layout === "imageLeft" ? "image-left" : "image-right"}
            data-tone={tone}
        >
            <div className={styles.mediaFeatureCopy}>
                {data.eyebrow && <p className={styles.mediaFeatureEyebrow}>{data.eyebrow}</p>}
                <h3 className={styles.sectionTitle}>{data.title}</h3>
                <p className={styles.mediaFeatureBody}>{data.body}</p>
                {data.points && data.points.length > 0 && (
                    <ul className={styles.mediaFeaturePoints}>
                        {data.points.map((point, index) => (
                            <li key={`${point}-${index}`} className={styles.mediaFeaturePoint}>
                                <span className={styles.mediaFeaturePointIndex}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <figure className={styles.mediaFeatureFigure}>
                <div className={styles.mediaFeatureImageWrap} data-tone={tone}>
                    {usesIntrinsicSize ? (
                        <Image
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            width={data.imageWidth}
                            height={data.imageHeight}
                            sizes="(max-width: 900px) 100vw, 58vw"
                            className={`${styles.mediaFeatureImage} ${styles.mediaFeatureImageStatic}`}
                        />
                    ) : (
                        <Image
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            className={styles.mediaFeatureImage}
                        />
                    )}
                    {data.caption && tone === "photo" && (
                        <figcaption className={styles.mediaFeatureCaptionOverlay}>{data.caption}</figcaption>
                    )}
                </div>
                {data.caption && tone !== "photo" && (
                    <figcaption className={styles.mediaFeatureCaption}>{data.caption}</figcaption>
                )}
            </figure>
        </section>
    );
}
