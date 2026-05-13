import type { BlockData, Page, Section } from "./types";

const consultationNote =
    "현재 환경과 목표를 남겨주시면 첫 미팅에서 검토할 범위와 다음 단계를 빠르게 정리해드립니다.";

function section(id: string, type: string, ...blocks: BlockData[]): Section {
    return { id, type, blocks };
}

function page(config: {
    id: string;
    title: string;
    slug: string;
    description: string;
    sections: Section[];
}): Page {
    return {
        id: config.id,
        title: config.title,
        slug: config.slug,
        seo: {
            title: `${config.title} | 테크아이`,
            description: config.description,
        },
        sections: config.sections,
    };
}

function heroBlock(
    h1: string,
    sub: string,
    imageSrc: string,
    imageAlt: string,
    ctaPrimary?: { label: string; href: string },
    ctaSecondary?: { label: string; href: string }
): BlockData {
    return {
        type: "hero",
        data: {
            h1,
            sub,
            ctaPrimary,
            ctaSecondary,
            imageSrc,
            imageAlt,
        },
    };
}

function richText(title: string, body: string): BlockData {
    return {
        type: "richText",
        data: {
            title,
            body,
        },
    };
}

function mediaFeature(config: {
    eyebrow?: string;
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
    points?: string[];
    layout?: "imageLeft" | "imageRight";
    tone?: "diagram" | "photo";
    imageWidth?: number;
    imageHeight?: number;
    caption?: string;
}): BlockData {
    return {
        type: "mediaFeature",
        data: config,
    };
}

function faq(title: string, items: Array<{ q: string; a: string }>): BlockData {
    return {
        type: "faq",
        data: {
            title,
            items,
        },
    };
}

function contactForm(title: string, note: string = consultationNote): BlockData {
    return {
        type: "contactForm",
        data: {
            title,
            note,
            anchor: "contact",
        },
    };
}

const pageOverrides: Record<string, Page> = {
    "/contact": page({
        id: "override_contact",
        title: "문의하기",
        slug: "/contact",
        description: "대전 본사와 서울 지사 기준으로 프로젝트 상담과 초기 진단 범위를 정리하는 테크아이 문의 페이지입니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "문의는 단순 접수가 아니라 첫 진단 범위를 정리하는 단계입니다",
                    "현재 환경, 목표, 일정, 검토 범위를 남겨주시면 테크아이가 대전 본사와 서울 지사 기준으로 적합한 미팅 방식과 우선 검토 항목을 빠르게 정리해 드립니다.",
                    "/images/hero-engineering.jpg",
                    "인프라 프로젝트 범위와 우선 검토 항목을 논의하는 엔지니어 협업 장면",
                    { label: "서비스 보기", href: "/service" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s2",
                "content",
                richText(
                    "좋은 첫 상담은 질문이 적은 상담이 아니라 핵심이 빨리 보이는 상담입니다",
                    "테크아이는 단순 소개보다 현재 인프라 환경, 목표, 조직 제약, 일정, 검토 범위를 빠르게 구조화하는 방식으로 첫 상담을 진행합니다.\n그래야 이후 제안도 더 정확하고 불필요한 반복을 줄일 수 있습니다."
                )
            ),
            section(
                "s3",
                "media",
                mediaFeature({
                    eyebrow: "상담 흐름",
                    title: "프로젝트 초기 범위를 빠르게 읽는 상담 방식",
                    body: "구축, 개선, 보안, AI 도입처럼 주제가 달라도 핵심은 같습니다. 현재 상태와 목표를 같은 프레임으로 정리해야 다음 단계가 선명해집니다. 필요 시 대전 본사 또는 서울 지사 미팅으로 연결해 보다 상세한 검토를 이어갈 수 있습니다.",
                    imageSrc: "/images/contact-consultation-desk.jpg",
                    imageAlt: "엔지니어와 담당자가 프로젝트 범위를 함께 검토하는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "상담 흐름 / 환경 파악, 범위 정의, 다음 단계",
                    points: [
                        "본사(HQ): 대전광역시 서구 둔산대로117번길 25",
                        "서울 지사: 서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터",
                        "대표전화: 042-471-9430 / 웹사이트: www.techi.co.kr",
                    ],
                })
            ),
            section("s4", "contact", contactForm("상담 정보 남기기", "현재 환경, 목표, 일정, 검토 범위를 남겨주시면 첫 미팅에서 필요한 검토 항목을 빠르게 정리해드립니다.")),
            section(
                "s5",
                "faq",
                faq("문의 전 확인하시면 좋습니다", [
                    {
                        q: "초기 상담에서는 어떤 내용을 주로 확인하나요?",
                        a: "현재 환경, 주요 과제, 목표 일정, 검토 범위, 영향 우려 구간을 먼저 확인합니다.",
                    },
                    {
                        q: "온라인 미팅도 가능한가요?",
                        a: "예. 온라인과 오프라인 모두 가능합니다. 필요한 자료를 미리 공유해 주시면 더 효율적으로 진행할 수 있습니다.",
                    },
                    {
                        q: "방문 상담은 어디에서 진행하나요?",
                        a: "프로젝트 성격과 고객 위치에 따라 대전 본사 또는 서울 지사에서 진행할 수 있으며, 필요 시 온라인 미팅으로도 대응합니다.",
                    },
                ])
            ),
        ],
    }),
};

export default pageOverrides;
