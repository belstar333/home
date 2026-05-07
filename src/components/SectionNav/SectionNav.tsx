"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TreeNode } from "@/lib/content/types";
import styles from "./SectionNav.module.css";

type NavContext =
    | { mode: "children"; overviewSlug: string; children: TreeNode[] }
    | { mode: "siblings"; siblings: TreeNode[] }
    | null;

function findContext(tree: TreeNode[], currentSlug: string): NavContext {
    // depth-3: current page is a leaf — show siblings
    for (const topNode of tree) {
        for (const level2 of topNode.children) {
            if (level2.children.some((n) => n.slug === currentSlug)) {
                return { mode: "siblings", siblings: level2.children };
            }
        }
    }
    // depth-2: current page is a category — show its children
    for (const topNode of tree) {
        const level2 = topNode.children.find((n) => n.slug === currentSlug);
        if (level2 && level2.children.length > 0) {
            return { mode: "children", overviewSlug: currentSlug, children: level2.children };
        }
    }
    // depth-1: current page is a root node — show its children
    for (const topNode of tree) {
        if (topNode.slug === currentSlug && topNode.children.length > 0) {
            return { mode: "children", overviewSlug: currentSlug, children: topNode.children };
        }
    }
    return null;
}

export default function SectionNav({ tree }: { tree: TreeNode[] }) {
    const pathname = usePathname();
    const context = findContext(tree, pathname);

    if (!context) return null;

    if (context.mode === "children") {
        return (
            <div className={styles.navScroll}>
                <nav className={styles.nav} aria-label="서비스 항목 선택">
                    <ul className={styles.siblingList} role="list">
                        <li>
                            <Link
                                href={context.overviewSlug}
                                className={`${styles.siblingLink} ${styles.active}`}
                                aria-current="page"
                            >
                                전체
                            </Link>
                        </li>
                        {context.children.map((child) => (
                            <li key={child.id}>
                                <Link href={child.slug} className={styles.siblingLink}>
                                    {child.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }

    return (
        <div className={styles.navScroll}>
            <nav className={styles.nav} aria-label="같은 카테고리 내 페이지 이동">
                <ul className={styles.siblingList} role="list">
                    {context.siblings.map((sibling) => (
                        <li key={sibling.id}>
                            <Link
                                href={sibling.slug}
                                className={`${styles.siblingLink} ${pathname === sibling.slug ? styles.active : ""}`}
                                aria-current={pathname === sibling.slug ? "page" : undefined}
                            >
                                {sibling.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
