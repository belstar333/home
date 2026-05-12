import type { Metadata } from "next";
import SiteLayout from "./SiteLayout";

export const metadata: Metadata = {
    title: "(주)테크아이 - IT 인프라 전문 기업",
    description: "20년 공공·엔터프라이즈 수행 경험, HPE Gold Partner 테크아이. 서버·네트워크·스토리지 구축부터 DR·AI 인프라까지 운영 기준을 남기는 방식으로 설계합니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <SiteLayout>{children}</SiteLayout>;
}