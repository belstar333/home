import { loadNav } from "@/lib/content/loadContent";
import { buildTree, getCategoryFromSlug } from "@/lib/content/buildTree";
import SectionNav from "@/components/SectionNav/SectionNav";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./subpageLayout.module.css";

export default async function SubpageLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const slugPath = "/" + (slug ?? []).join("/");

    const category = getCategoryFromSlug(slugPath);
    const navNodes = loadNav();
    const tree = buildTree(navNodes, category);

    // Show sectionBar for root category pages that have children (e.g. /service),
    // or any depth-2+ subpage.
    const isRootWithNav = slug.length === 1 && tree.some((n) => n.slug === slugPath && n.children.length > 0);

    if (!isRootWithNav && slug.length < 2) {
        return (
            <div className={styles.containerFull}>
                {children}
            </div>
        );
    }

    return (
        <>
            <div className={styles.sectionBar}>
                <div className={styles.sectionBarInner}>
                    <Breadcrumb slug={slug} tree={tree} />
                    <SectionNav tree={tree} />
                </div>
            </div>
            <div className={styles.containerFull}>
                {children}
            </div>
        </>
    );
}
