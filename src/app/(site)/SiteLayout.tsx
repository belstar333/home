"use client";
import { usePathname } from "next/navigation";
import GNB from "@/components/GNB/GNB";
import Footer from "@/components/Footer/Footer";
import styles from "./layout.module.css";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            <GNB key={pathname} />
            <main className={`${styles.content} ${isHome ? styles.contentHome : ""}`}>
                {children}
            </main>
            <Footer />
        </>
    );
}
