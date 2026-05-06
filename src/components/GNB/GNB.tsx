"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { loadNav } from "@/lib/content/loadContent";
import { buildTree } from "@/lib/content/buildTree";
import styles from "./GNB.module.css";

const navNodes = loadNav();

const NAV_ITEMS = [
    { label: "서비스", href: "/service", category: "service" },
    { label: "솔루션", href: "/solution", category: "solution" },
    { label: "제품", href: "/product", category: "product" },
    { label: "회사 소개", href: "/about", category: "about" },
];

export default function GNB({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
    const pathname = usePathname();
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const activeCategory = pathname.split("/")[1] || "";

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenCategory(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const handleCategoryClick = (category: string, event: React.MouseEvent) => {
        event.preventDefault();
        setOpenCategory((prev) => (prev === category ? null : category));
    };

    const closeMenus = () => {
        setOpenCategory(null);
        setMobileOpen(false);
    };

    return (
        <header className={styles.gnb} ref={menuRef}>
            <div className={styles.gnbInner}>
                <Link href="/" className={styles.logo} onClick={closeMenus}>
                    <Image
                        src="/logos/techi-v2.png"
                        alt="테크아이"
                        width={120}
                        height={40}
                        className={styles.logoMark}
                    />
                    <span className={styles.logoText}></span>
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => {
                        setMobileOpen((prev) => !prev);
                        onToggleSidebar?.();
                    }}
                    aria-label="메뉴 열기"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}>
                    {NAV_ITEMS.map((item) => {
                        const isOpen = openCategory === item.category;
                        const tree = buildTree(navNodes, item.category);

                        return (
                            <div key={item.category} className={styles.navItem}>
                                <button
                                    className={[
                                        styles.navLink,
                                        activeCategory === item.category ? styles.active : "",
                                        isOpen ? styles.navLinkOpen : "",
                                    ].join(" ")}
                                    onClick={(event) => handleCategoryClick(item.category, event)}
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                >
                                    {item.label}
                                    <span
                                        className={`material-symbols-outlined ${styles.chevron} ${
                                            isOpen ? styles.chevronOpen : ""
                                        }`}
                                        aria-hidden="true"
                                    >
                                        expand_more
                                    </span>
                                </button>

                                {isOpen && tree.length > 0 && (
                                    <div className={styles.megaDropdown}>
                                        <div className={styles.megaInner}>
                                            <Link href={item.href} className={styles.megaHeader} onClick={closeMenus}>
                                                {item.label} 전체 보기
                                            </Link>
                                            <ul className={styles.megaGrid}>
                                                {tree[0]?.children.map((child) => (
                                                    <li key={child.id} className={styles.megaCol}>
                                                        <Link
                                                            href={child.slug}
                                                            className={styles.megaColTitle}
                                                            onClick={closeMenus}
                                                        >
                                                            {child.title}
                                                        </Link>
                                                        {child.children.length > 0 && (
                                                            <ul className={styles.megaSubList}>
                                                                {child.children.map((sub) => (
                                                                    <li key={sub.id}>
                                                                        <Link
                                                                            href={sub.slug}
                                                                            className={styles.megaSubLink}
                                                                            onClick={closeMenus}
                                                                        >
                                                                            {sub.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
