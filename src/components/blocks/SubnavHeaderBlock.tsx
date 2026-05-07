import Link from "next/link";
import type { SubnavHeaderData } from "@/lib/content/types";
import { isContactHref } from "@/lib/content/isContactHref";
import styles from "./blocks.module.css";

export default function SubnavHeaderBlock({ data }: { data: SubnavHeaderData }) {
    const cta = data.cta && !isContactHref(data.cta.href) ? data.cta : null;

    return (
        <div className={styles.subnavHeader}>
            <div className={styles.subnavLeft}>
                <h2 className={styles.subnavTitle}>{data.title}</h2>
            </div>
            {cta && (
                <div className={styles.subnavRight}>
                    <Link href={cta.href} className={styles.subnavCta}>
                        {cta.label}
                    </Link>
                </div>
            )}
        </div>
    );
}
