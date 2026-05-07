import Link from "next/link";
import type { TreeNode } from "@/lib/content/types";
import styles from "./Breadcrumb.module.css";

function findTitle(tree: TreeNode[], targetSlug: string): string | null {
    for (const node of tree) {
        if (node.slug === targetSlug) return node.title;
        for (const child of node.children) {
            if (child.slug === targetSlug) return child.title;
            for (const grandchild of child.children) {
                if (grandchild.slug === targetSlug) return grandchild.title;
            }
        }
    }
    return null;
}

interface BreadcrumbItem {
    title: string;
    href: string;
    current: boolean;
}

export default function Breadcrumb({ slug, tree }: { slug: string[]; tree: TreeNode[] }) {
    const items: BreadcrumbItem[] = [{ title: "홈", href: "/", current: false }];

    let cumPath = "";
    for (let i = 0; i < slug.length; i++) {
        cumPath += "/" + slug[i];
        const title = findTitle(tree, cumPath) ?? slug[i];
        items.push({ title, href: cumPath, current: i === slug.length - 1 });
    }

    return (
        <nav
            className={styles.breadcrumb}
            aria-label="현재 위치"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            <ol className={styles.list}>
                {items.map((item, i) => (
                    <li
                        key={item.href}
                        className={styles.item}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        {item.current ? (
                            <span className={styles.current} aria-current="page" itemProp="name">
                                {item.title}
                            </span>
                        ) : (
                            <>
                                <Link href={item.href} className={styles.link} itemProp="item">
                                    <span itemProp="name">{item.title}</span>
                                </Link>
                                <span className={styles.sep} aria-hidden="true">›</span>
                            </>
                        )}
                        <meta itemProp="position" content={String(i + 1)} />
                    </li>
                ))}
            </ol>
        </nav>
    );
}
