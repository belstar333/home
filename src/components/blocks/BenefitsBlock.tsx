import type { BenefitsData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function BenefitsBlock({ data }: { data: BenefitsData }) {
    const isChecklist = data.variant === "checklist";
    return (
        <section className={styles.benefits}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.benefitGrid}>
                {data.items.map((item, index) => {
                    const icon = data.icons?.[index];
                    const hasIcon = isChecklist || !!icon;
                    return (
                        <div key={`${item}-${index}`} className={`${styles.benefitCard}${hasIcon ? ` ${styles.benefitCardCheck}` : ""}`}>
                            {isChecklist
                                ? <span className={`material-symbols-outlined ${styles.benefitCheckIcon}`} aria-hidden="true">check_circle</span>
                                : icon
                                    ? <span className={`material-symbols-outlined ${styles.benefitCheckIcon}`} aria-hidden="true">{icon}</span>
                                    : <div className={styles.benefitIcon}>{String(index + 1).padStart(2, "0")}</div>
                            }
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
