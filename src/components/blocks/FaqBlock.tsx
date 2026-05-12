"use client";

import { useState } from "react";
import type { FaqData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function FaqBlock({ data }: { data: FaqData }) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className={styles.faq}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.faqList}>
                {data.items.map((item, index) => (
                    <div
                        key={`${item.q}-${index}`}
                        className={`${styles.faqItem} ${openIdx === index ? styles.faqOpen : ""}`}
                    >
                        <button
                            type="button"
                            className={styles.faqQuestion}
                            onClick={() => setOpenIdx(openIdx === index ? null : index)}
                            aria-expanded={openIdx === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span>{item.q}</span>
                            <span className={`material-symbols-outlined ${styles.faqToggle}`} aria-hidden="true">
                                {openIdx === index ? "expand_less" : "expand_more"}
                            </span>
                        </button>
                        <div
                            className={`${styles.faqAnswer} ${openIdx === index ? styles.faqAnswerOpen : ""}`}
                            id={`faq-answer-${index}`}
                        >
                            <div>{item.a}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
