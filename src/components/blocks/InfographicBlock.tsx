import type { InfographicData } from "@/lib/content/types";
import styles from "./blocks.module.css";

function splitStep(step: string) {
    const separatorIndex = step.indexOf(":");
    if (separatorIndex === -1) {
        return { title: step, body: "" };
    }

    return {
        title: step.slice(0, separatorIndex).trim(),
        body: step.slice(separatorIndex + 1).trim(),
    };
}

export default function InfographicBlock({ data }: { data: InfographicData }) {
    return (
        <section className={styles.infographic}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.processFlow}>
                {data.steps.map((step, index) => {
                    const parts = splitStep(step);
                    return (
                        <div key={`${parts.title}-${index}`} className={styles.processStep}>
                            <div className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepLabel}>{parts.title}</div>
                                {parts.body && <p className={styles.stepBody}>{parts.body}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
