import Link from "next/link";
import styles from "./ServiceCtaBanner.module.css";

export default function ServiceCtaBanner({ pageTitle }: { pageTitle?: string }) {
    const titleLine = pageTitle ? `${pageTitle} 도입을 검토 중이라면` : "인프라 개선을 검토 중이라면";

    return (
        <section className={styles.banner}>
            <div className={styles.bannerInner}>
                <div className={styles.bannerCopy}>
                    <p className={styles.bannerLabel}>상담 문의</p>
                    <h2 className={styles.bannerTitle}>
                        {titleLine}
                        <br />먼저 현재 환경을 함께 확인합니다.
                    </h2>
                    <p className={styles.bannerBody}>
                        정해진 솔루션을 제안하기보다 현재 구조와 운영 환경을 먼저 파악합니다.
                        진단 결과에 따라 필요한 범위와 순서를 함께 정리해 드립니다.
                    </p>
                </div>
                <div className={styles.bannerActions}>
                    <Link href="/contact" className={styles.ctaPrimary}>
                        상담 신청
                    </Link>
                    <Link href="/service/consulting/assessment" className={styles.ctaSecondary}>
                        인프라 진단 먼저 보기
                    </Link>
                </div>
            </div>
        </section>
    );
}
