import Image from "next/image";
import type { ImageGalleryData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function ImageGalleryBlock({ data }: { data: ImageGalleryData }) {
    return (
        <section className={styles.imageGallery}>
            <div className={styles.imageGalleryHeader}>
                {data.eyebrow && <p className={styles.imageGalleryEyebrow}>{data.eyebrow}</p>}
                <h3 className={styles.sectionTitle}>{data.title}</h3>
                {data.body && <p className={styles.imageGalleryBody}>{data.body}</p>}
            </div>
            <div className={styles.imageGalleryGrid}>
                {data.items.map((item, index) => (
                    <figure
                        key={`${item.imageSrc}-${index}`}
                        className={`${styles.imageGalleryItem} ${index === 0 ? styles.imageGalleryItemFeature : ""}`}
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            width={item.imageWidth ?? 1600}
                            height={item.imageHeight ?? 1068}
                            sizes={index === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 28vw"}
                            className={styles.imageGalleryImage}
                        />
                        <figcaption className={styles.imageGalleryCaption}>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
