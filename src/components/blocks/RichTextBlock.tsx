import type { RichTextData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function RichTextBlock({ data }: { data: RichTextData }) {
    return (
        <section className={styles.richText}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.richBody}>
                {data.body.split("\n").map((p, i) => (
                    <p key={i} className={styles.richParagraph}>{p}</p>
                ))}
            </div>
        </section>
    );
}
