import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
                <p className={styles.body}>
                    주소가 변경됐거나 삭제된 페이지입니다.<br />
                    아래 링크에서 원하시는 내용을 찾아보세요.
                </p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.ctaPrimary}>홈으로 돌아가기</Link>
                    <Link href="/service" className={styles.ctaSecondary}>서비스 보기</Link>
                    <Link href="/contact" className={styles.ctaSecondary}>상담 문의</Link>
                </div>
            </div>
        </div>
    );
}
