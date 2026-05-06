import type { Metadata } from "next";
import SiteLayout from "./SiteLayout";

export const metadata: Metadata = {
    title: "(주)테크아이 - IT 인프라 전문 기업",
    description: "서버, 네트워크, 스토리지, DR, 보안까지 — IT 인프라 전문 기업 테크아이",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <SiteLayout>{children}</SiteLayout>;
}
