import Link from "next/link";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
    { label: "IT 인프라 서비스", href: "/service" },
    { label: "AI 솔루션", href: "/solution" },
    { label: "제품", href: "/product" },
    { label: "회사 소개", href: "/about" },
];

const COMPANY_LINKS = [
    { label: "비전 · 미션", href: "/about/vision-mission" },
    { label: "회사 연혁", href: "/about/history" },
    { label: "오시는 길", href: "/about/location" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.brand}>
                    <div className={styles.brandLogo}>(주)테크아이</div>
                    <p className={styles.brandDesc}>
                        AI와 데이터를 연결하는 최적의 인프라 아키텍트로서, 공공과 엔터프라이즈 환경의 물리적
                        인프라와 운영 구조를 설계합니다.
                    </p>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        {QUICK_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Company</h4>
                    <ul className={styles.linkList}>
                        {COMPANY_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Contact</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">
                                mail
                            </span>
                            <a href="mailto:info@techi.co.kr" className={styles.footerLink}>
                                info@techi.co.kr
                            </a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">
                                call
                            </span>
                            <a href="tel:+82424719430" className={styles.footerLink}>
                                042-471-9430
                            </a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">
                                location_on
                            </span>
                            <Link href="/about/location" className={styles.footerLink}>
                                대전광역시 서구 둔산대로 117번길 25
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p className={styles.copyright}>© {currentYear} TechI. All rights reserved.</p>
                <div className={styles.socials}>
                    <Link href="/contact" className={styles.socialIcon} aria-label="문의하기">
                        <span className="material-symbols-outlined">forum</span>
                    </Link>
                    <Link href="/about/location" className={styles.socialIcon} aria-label="오시는 길">
                        <span className="material-symbols-outlined">location_on</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
