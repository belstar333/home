"use client";

import { useState, type FormEvent } from "react";
import type { ContactFormData } from "@/lib/content/types";
import type { PagePresentation } from "@/lib/content/servicePresentation";
import styles from "./blocks.module.css";

const defaultChecklist = [
    "현재 환경과 핵심 과제를 먼저 정리합니다.",
    "목표 시점과 운영 제약 조건을 함께 확인합니다.",
    "구축 범위와 검증 방식, 인수 기준을 구체화합니다.",
];

export default function ContactFormBlock({
    data,
    presentation,
    pageTitle,
}: {
    data: ContactFormData;
    presentation?: PagePresentation | null;
    pageTitle?: string;
}) {
    const [submitted, setSubmitted] = useState(false);
    const checklist = presentation?.contactPoints ?? defaultChecklist;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3200);
    };

    return (
        <section className={styles.contactForm} id={data.anchor}>
            <div className={styles.contactIntro}>
                <div className={styles.contactIntroMain}>
                    <h3 className={styles.sectionTitle}>{data.title}</h3>
                    <p className={styles.contactNote}>{data.note}</p>
                </div>
                <aside className={styles.contactAside}>
                    <span className={styles.contactBadge}>Consultation Checklist</span>
                    <h4 className={styles.contactAsideTitle}>
                        {pageTitle ? `${pageTitle} 검토 항목` : "상담 전에 함께 확인하는 항목"}
                    </h4>
                    <ul className={styles.contactChecklist}>
                        {checklist.map((item, index) => (
                            <li key={`${item}-${index}`} className={styles.contactChecklistItem}>
                                <span className={styles.contactChecklistIndex}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className={styles.contactPromise}>
                        사전 정보가 정리될수록 제안 범위, 예상 일정, 필요한 검토 항목을 더 명확하게 안내할 수 있습니다.
                    </p>
                </aside>
            </div>
            {submitted ? (
                <div className={styles.contactSuccess}>
                    문의 작성 예시가 확인되었습니다. 실제 운영 시에는 이메일 또는 CRM 연동으로 바로 접수되도록 연결할 수 있습니다.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                        <input type="text" placeholder="이름 *" required className={styles.formInput} />
                        <input type="text" placeholder="회사명" className={styles.formInput} />
                    </div>
                    <div className={styles.formRow}>
                        <input type="email" placeholder="이메일 *" required className={styles.formInput} />
                        <input type="tel" placeholder="연락처 *" required className={styles.formInput} />
                    </div>
                    <textarea
                        placeholder="현재 환경, 목표, 일정, 검토 중인 내용을 적어주세요. *"
                        required
                        className={styles.formTextarea}
                        rows={5}
                    />
                    <button type="submit" className={styles.formSubmit}>
                        상담 내용 작성
                    </button>
                </form>
            )}
        </section>
    );
}
