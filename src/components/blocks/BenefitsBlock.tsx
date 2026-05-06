import type { BenefitsData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function BenefitsBlock({ data }: { data: BenefitsData }) {
    return (
        <section className={styles.benefits}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.benefitGrid}>
                {data.items.map((item, index) => (
                    <div key={`${item}-${index}`} className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>{String(index + 1).padStart(2, "0")}</div>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
