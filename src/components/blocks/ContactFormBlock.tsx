"use client";

import React, { useState } from "react";
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
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const checklist = presentation?.contactPoints ?? defaultChecklist;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!privacyChecked) return;
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
                    문의가 접수되었습니다. 보통 1영업일 이내에 회신드립니다.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <label className={styles.formLabel} htmlFor="cf-name">이름 <span className={styles.formRequired}>*</span></label>
                            <input id="cf-name" type="text" required className={styles.formInput} />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.formLabel} htmlFor="cf-company">회사명</label>
                            <input id="cf-company" type="text" className={styles.formInput} />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <label className={styles.formLabel} htmlFor="cf-email">이메일 <span className={styles.formRequired}>*</span></label>
                            <input id="cf-email" type="email" required className={styles.formInput} />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.formLabel} htmlFor="cf-tel">연락처 <span className={styles.formRequired}>*</span></label>
                            <input id="cf-tel" type="tel" required className={styles.formInput} />
                        </div>
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.formLabel} htmlFor="cf-message">
                            상담 내용 <span className={styles.formRequired}>*</span>
                        </label>
                        <textarea
                            id="cf-message"
                            placeholder="현재 환경, 목표, 일정, 검토 중인 내용을 적어주세요."
                            required
                            className={styles.formTextarea}
                            rows={5}
                        />
                    </div>
                    <label className={styles.privacyLabel}>
                        <input
                            type="checkbox"
                            className={styles.privacyCheckbox}
                            checked={privacyChecked}
                            onChange={(e) => setPrivacyChecked(e.target.checked)}
                            required
                        />
                        <span>
                            <strong>개인정보 수집 및 이용에 동의합니다.</strong>{" "}
                            수집 항목: 이름, 이메일, 연락처, 회사명. 이용 목적: 상담 답변 및 프로젝트 검토. 보유 기간: 상담 종료 후 1년.{" "}
                            <span className={styles.formRequired}>*</span>
                        </span>
                    </label>
                    <p className={styles.formSla}>보통 1영업일 이내에 회신드립니다.</p>
                    <button type="submit" className={styles.formSubmit} disabled={!privacyChecked}>
                        상담 신청하기
                    </button>
                </form>
            )}
        </section>
    );
}
