"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TreeNode } from "@/lib/content/types";
import styles from "./SectionNav.module.css";

type NavContext = {
    row1: { overviewSlug: string; tabs: TreeNode[]; activeSlug: string | null };
    row2: { overviewSlug: string; tabs: TreeNode[]; activeSlug: string | null } | null;
} | null;

function findContext(tree: TreeNode[], currentSlug: string): NavContext {
    for (const topNode of tree) {
        // depth-1: on the root category page itself (e.g. /service)
        if (topNode.slug === currentSlug && topNode.children.length > 0) {
            return {
                row1: { overviewSlug: topNode.slug, tabs: topNode.children, activeSlug: null },
                row2: null,
            };
        }
        for (const level2 of topNode.children) {
            // depth-2: on a category page — show parent tabs; row2 only if children exist
            if (level2.slug === currentSlug) {
                return {
                    row1: { overviewSlug: topNode.slug, tabs: topNode.children, activeSlug: level2.slug },
                    row2: level2.children.length > 0
                        ? { overviewSlug: level2.slug, tabs: level2.children, activeSlug: null }
                        : null,
                };
            }
            // depth-3: on a leaf page (e.g. /service/server/build)
            for (const level3 of level2.children) {
                if (level3.slug === currentSlug) {
                    return {
                        row1: { overviewSlug: topNode.slug, tabs: topNode.children, activeSlug: level2.slug },
                        row2: { overviewSlug: level2.slug, tabs: level2.children, activeSlug: level3.slug },
                    };
                }
            }
        }
    }
    return null;
}

export default function SectionNav({ tree }: { tree: TreeNode[] }) {
    const pathname = usePathname();
    const context = findContext(tree, pathname);

    if (!context) return null;

    const { row1, row2 } = context;

    return (
        <div className={styles.twoRowNav}>
            {/* Row 1: top-level category tabs */}
            <div className={styles.navScroll}>
                <nav className={styles.nav} aria-label="서비스 카테고리 선택">
                    <ul className={styles.siblingList} role="list">
                        <li>
                            <Link
                                href={row1.overviewSlug}
                                className={`${styles.siblingLink} ${row1.activeSlug === null ? styles.active : ""}`}
                                aria-current={row1.activeSlug === null ? "page" : undefined}
                            >
                                전체
                            </Link>
                        </li>
                        {row1.tabs.map((tab) => (
                            <li key={tab.id}>
                                <Link
                                    href={tab.slug}
                                    className={`${styles.siblingLink} ${row1.activeSlug === tab.slug ? styles.active : ""}`}
                                    aria-current={row1.activeSlug === tab.slug ? "page" : undefined}
                                >
                                    {tab.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Row 2: sub-category tabs */}
            {row2 && (
                <div className={styles.subNavScroll}>
                    <nav className={styles.subNav} aria-label="세부 항목 선택">
                        <ul className={styles.subNavList} role="list">
                            <li>
                                <Link
                                    href={row2.overviewSlug}
                                    className={`${styles.subNavLink} ${row2.activeSlug === null ? styles.subNavActive : ""}`}
                                    aria-current={row2.activeSlug === null ? "page" : undefined}
                                >
                                    전체
                                </Link>
                            </li>
                            {row2.tabs.map((tab) => (
                                <li key={tab.id}>
                                    <Link
                                        href={tab.slug}
                                        className={`${styles.subNavLink} ${row2.activeSlug === tab.slug ? styles.subNavActive : ""}`}
                                        aria-current={row2.activeSlug === tab.slug ? "page" : undefined}
                                    >
                                        {tab.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
