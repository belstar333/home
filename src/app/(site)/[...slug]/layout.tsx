import { loadNav } from "@/lib/content/loadContent";
import { buildTree, getCategoryFromSlug } from "@/lib/content/buildTree";
import TreeNav from "@/components/TreeNav/TreeNav";
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

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <TreeNav tree={tree} category={category} />
            </aside>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    );
}
