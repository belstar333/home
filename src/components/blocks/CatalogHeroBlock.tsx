import Image from "next/image";
import type { CatalogHeroData } from "@/lib/content/types";
import styles from "./blocks.module.css";

function renderH1(h1: string, italicWords: string[], accent: string) {
    if (!italicWords.length) return h1;
    const escaped = italicWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(`(${escaped.join("|")})`, "g");
    const parts = h1.split(regex);
    return parts.map((part, i) => {
        if (italicWords.includes(part)) {
            return (
                <em key={i} style={{ color: accent, fontStyle: "italic" }}>
                    {part}
                </em>
            );
        }
        return <span key={i}>{part}</span>;
    });
}

export default function CatalogHeroBlock({ data }: { data: CatalogHeroData }) {
    const accent = data.accent ?? "#0B6E4F";
    return (
        <section className={styles.catalogHero}>
            <div className={styles.catalogHeroGrid}>
                <div className={styles.catalogHeroText}>
                    <p className={styles.catalogHeroEyebrow} style={{ color: accent }}>
                        {data.eyebrow}
                    </p>
                    <h1 className={styles.catalogHeroH1}>
                        {renderH1(data.h1, data.h1ItalicWords ?? [], accent)}
                    </h1>
                    <p className={styles.catalogHeroSub}>{data.sub}</p>
                </div>
                <div className={styles.catalogHeroPhoto}>
                    <Image
                        src={data.imageSrc}
                        alt={data.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 42vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
