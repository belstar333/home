import type { UseCasesData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function UseCasesBlock({ data }: { data: UseCasesData }) {
    return (
        <section className={styles.useCases}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <ul className={styles.useCaseList}>
                {data.items.map((item, index) => (
                    <li key={`${item}-${index}`} className={styles.useCaseItem}>
                        <span className={styles.useCaseNumber}>{String(index + 1).padStart(2, "0")}</span>
                        <span className={styles.useCaseText}>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
