import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const SERVICE_LINKS = [
    { label: "서버 인프라", href: "/service/server" },
    { label: "네트워크", href: "/service/network" },
    { label: "스토리지·백업", href: "/service/storage-backup" },
    { label: "컨설팅", href: "/service/consulting" },
    { label: "유지보수", href: "/service/maintenance" },
];

const COMPANY_LINKS = [
    { label: "AI 솔루션", href: "/solution" },
    { label: "제품", href: "/product" },
    { label: "비전·미션", href: "/about/vision-mission" },
    { label: "회사 연혁", href: "/about/history" },
    { label: "파트너사", href: "/about/partners" },
    { label: "오시는 길", href: "/about/location" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.brandLogoLink}>
                        <Image
                            src="/logos/techi-v2.png"
                            alt="테크아이"
                            width={110}
                            height={36}
                            className={styles.brandLogoImg}
                        />
                    </Link>
                    <p className={styles.brandDesc}>
                        서버, 네트워크, 스토리지, 컨설팅, 유지보수를 운영 기준 하나로 연결하는
                        IT 인프라 전문 기업입니다.
                    </p>
                    <Link href="/contact" className={styles.brandCta}>
                        상담 문의하기
                    </Link>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>서비스</h4>
                    <ul className={styles.linkList}>
                        {SERVICE_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>회사 소개</h4>
                    <ul className={styles.linkList}>
                        {COMPANY_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>연락처</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                            <a href="mailto:info@techi.co.kr" className={styles.footerLink}>
                                info@techi.co.kr
                            </a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">call</span>
                            <a href="tel:+82424719430" className={styles.footerLink}>
                                042-471-9430
                            </a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                            <Link href="/about/location" className={styles.footerLink}>
                                대전광역시 서구 둔산대로 117번길 25
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p className={styles.copyright}>© {currentYear} (주)테크아이. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <Link href="/contact" className={styles.bottomLink}>문의하기</Link>
                    <Link href="/about/location" className={styles.bottomLink}>오시는 길</Link>
                </div>
            </div>
        </footer>
    );
}
