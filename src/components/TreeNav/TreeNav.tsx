"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import type { TreeNode } from "@/lib/content/types";
import styles from "./TreeNav.module.css";

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
    const pathname = usePathname();
    const isActive = pathname === node.slug;
    const hasChildren = node.children.length > 0;
    const isExpanded = pathname.startsWith(node.slug);
    const [open, setOpen] = useState(isExpanded);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const items = document.querySelectorAll(
                    '[role="treeitem"] > div > a, [role="treeitem"] > div > button'
                );
                const elements = Array.from(items);
                const currentIndex = elements.indexOf(e.currentTarget);
                const nextIndex = e.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;
                if (nextIndex >= 0 && nextIndex < elements.length) {
                    (elements[nextIndex] as HTMLElement).focus();
                }
            }

            if (e.key === "Enter" && hasChildren) {
                setOpen(!open);
            }
        },
        [hasChildren, open]
    );

    return (
        <li
            role="treeitem"
            aria-expanded={hasChildren ? open : undefined}
            aria-selected={isActive}
            className={`${styles.treeItem} ${level === 0 ? styles.topLevel : ""}`}
        >
            <div className={styles.itemRow}>
                <Link
                    href={node.slug}
                    className={`${styles.nodeLink} ${isActive ? styles.active : ""}`}
                    onKeyDown={handleKeyDown}
                >
                    {node.title}
                </Link>
                {hasChildren && (
                    <button
                        type="button"
                        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "하위 메뉴 닫기" : "하위 메뉴 열기"}
                        tabIndex={-1}
                    >
                        +
                    </button>
                )}
            </div>
            {hasChildren && open && (
                <ul role="group" className={styles.subTree}>
                    {node.children.map((child) => (
                        <TreeItem key={child.id} node={child} level={level + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function TreeNav({ tree, category }: { tree: TreeNode[]; category: string }) {
    const categoryLabels: Record<string, string> = {
        service: "서비스",
        product: "제품",
        about: "회사 소개",
        contact: "문의",
    };

    return (
        <nav className={styles.treeNav} aria-label="카테고리 메뉴">
            <span className={styles.treeHeader}>{categoryLabels[category] || category}</span>
            <ul role="tree" className={styles.tree}>
                {tree.map((node) => (
                    <TreeItem key={node.id} node={node} />
                ))}
            </ul>
        </nav>
    );
}
