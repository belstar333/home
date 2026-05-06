import type { ComparisonTableData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function ComparisonTableBlock({ data }: { data: ComparisonTableData }) {
    return (
        <section className={styles.compTable}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {data.columns.map((col, i) => (
                                <th key={i}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => (
                                    <td key={j}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
