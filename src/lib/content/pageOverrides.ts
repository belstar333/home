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

function subnavHeader(title: string, breadcrumbs: string[]): BlockData {
    return {
        type: "subnavHeader",
        data: {
            eyebrow: "테크아이",
            title,
            breadcrumbs,
            cta: {
                label: "상담 요청",
                href: "/contact",
            },
        },
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

function featureCards(title: string, items: Array<{ title: string; desc: string; href?: string }>): BlockData {
    return {
        type: "featureCards",
        data: {
            title,
            items,
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

function benefits(title: string, items: string[]): BlockData {
    return {
        type: "benefits",
        data: {
            title,
            items,
        },
    };
}

function caseList(title: string, items: string[]): BlockData {
    return {
        type: "useCases",
        data: {
            title,
            items,
        },
    };
}

function infographic(title: string, steps: string[]): BlockData {
    return {
        type: "infographic",
        data: {
            title,
            steps,
        },
    };
}

function comparisonTable(title: string, columns: string[], rows: string[][]): BlockData {
    return {
        type: "comparisonTable",
        data: {
            title,
            columns,
            rows,
        },
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

function timeline(title: string, items: Array<{ year: string; text: string }>): BlockData {
    return {
        type: "timeline",
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
    "/service": page({
        id: "override_service",
        title: "서비스",
        slug: "/service",
        description: "서버, 네트워크, 스토리지, 컨설팅, 유지보수까지 실제 운영 환경에 필요한 IT 서비스를 안내합니다.",
        sections: [
            section("s1", "header", subnavHeader("서비스", ["서비스"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "기술 분야를 나누기보다 실제로 필요한 운영 환경을 만듭니다",
                    "TechI는 서버, 네트워크, 스토리지, 백업, 컨설팅, 유지보수를 따로 분리해서 보지 않습니다. 현재 환경에서 무엇이 먼저 필요한지 파악하고, 실제 운영팀이 감당할 수 있는 방식으로 구축과 보호, 지원 체계까지 연결합니다.",
                    "/images/consulting-review-photo.jpg",
                    "프로젝트 범위와 운영 기준을 검토하는 장면",
                    { label: "상담 문의하기", href: "/contact" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("필요한 기술보다, 지금 필요한 일이 무엇인지부터 보셔도 됩니다", [
                    {
                        title: "서버 인프라",
                        desc: "신규 구축, 교체, 증설, 가상화, 운영 기준 정리까지 서버 환경 전반을 다룹니다. 서비스 영향과 운영 인수까지 고려해 설계합니다.",
                        href: "/service/server",
                    },
                    {
                        title: "네트워크",
                        desc: "회선, 코어, 액세스, 방화벽, 무선, 이중화까지 연결 구조 전체를 다룹니다. 장애 영향 범위를 줄이고 운영 판단이 쉬운 구조를 목표로 합니다.",
                        href: "/service/network",
                    },
                    {
                        title: "스토리지 / 백업",
                        desc: "데이터를 저장하는 구조뿐 아니라 백업, 복구, 보존, 재해 대응 흐름까지 함께 설계합니다. 사고 시 가장 큰 차이를 만드는 영역입니다.",
                        href: "/service/storage-backup",
                    },
                    {
                        title: "컨설팅",
                        desc: "현재 환경을 진단하고 무엇부터 바꿔야 하는지, 어떤 순서로 가야 하는지 정리합니다. 보고서만이 아니라 실행 가능한 다음 단계까지 제안합니다.",
                        href: "/service/consulting",
                    },
                    {
                        title: "유지보수",
                        desc: "정기점검, 장애 대응, 보고 체계, 운영 지원까지 실제 운영이 흔들리지 않도록 돕습니다. 문제가 커지기 전에 보는 구조를 만듭니다.",
                        href: "/service/maintenance",
                    },
                ])
            ),
            section(
                "s4",
                "benefits",
                benefits("결국 중요한 건, 기술보다 운영이 얼마나 편해지는가입니다", [
                    "장애 원인 파악 시간이 줄어듭니다. 구조와 기준이 정리되면 어디서부터 봐야 할지 빨라집니다.",
                    "백업이 ‘하고 있다’에서 ‘복구할 수 있다’로 바뀝니다. 실제 복구 기준과 점검 방식이 함께 있어야 안심할 수 있습니다.",
                    "장비가 늘어나도 운영이 덜 흔들립니다. 표준 구조와 점검 기준이 있으면 확장 시 품질 차이가 줄어듭니다.",
                    "담당자 경험에만 의존하지 않게 됩니다. 문서, 보고, 대응 기준이 정리되면 운영이 더 안정됩니다.",
                    "구축 이후에도 다음 단계가 더 잘 보입니다. 단발성 프로젝트가 아니라 이어지는 운영 흐름이 만들어집니다.",
                ])
            ),
            section(
                "s5",
                "useCases",
                caseList("지금 상황에 맞춰 어디부터 보면 되는지 빠르게 안내드립니다", [
                    "신규 구축, 장비 교체, 가상화 확장을 준비 중이라면 서버 인프라를 먼저 보시면 됩니다.",
                    "네트워크 장애, 속도 이슈, 지점 확장 문제가 반복된다면 네트워크 구조를 먼저 점검해야 합니다.",
                    "백업 점검, 복구 체계, DR 준비가 필요하다면 스토리지/백업 영역이 우선입니다.",
                    "무엇부터 해야 할지 정리가 안 된다면 컨설팅부터 시작하는 편이 가장 현실적입니다.",
                    "지속적인 지원, 정기점검, 장애 대응이 필요하다면 유지보수 구조를 먼저 보는 것이 좋습니다.",
                ])
            ),
            section(
                "s6",
                "timeline",
                timeline("보통 이런 순서로 함께 진행합니다", [
                    { year: "01", text: "현재 환경 확인: 현재 구성, 운영 이슈, 목표 시점, 제약 조건을 먼저 확인합니다." },
                    { year: "02", text: "우선순위 정리: 무엇이 급한지, 무엇이 중요한지, 무엇부터 바꿔야 하는지 정리합니다." },
                    { year: "03", text: "설계 및 제안: 구성안, 범위, 검토 항목, 예상 일정과 함께 현실적인 방향을 제안합니다." },
                    { year: "04", text: "구축 또는 적용: 필요한 경우 설치, 변경, 정책 반영, 연결 작업을 진행합니다." },
                    { year: "05", text: "검증 및 인수: 점검 기준, 테스트 결과, 운영 인수 항목까지 정리합니다." },
                    { year: "06", text: "운영 지원: 정기점검, 장애 대응, 보고 체계로 운영이 흔들리지 않게 이어갑니다." },
                ])
            ),
            section(
                "s7",
                "contact",
                contactForm(
                    "서비스 상담 요청",
                    "서버, 네트워크, 백업, 유지보수 중 무엇이 먼저인지 아직 애매해도 괜찮습니다. 현재 상황과 고민을 알려주시면 어디부터 보는 것이 맞는지 같이 정리해드리겠습니다."
                )
            ),
        ],
    }),
    "/solution": page({
        id: "override_solution",
        title: "AI 솔루션",
        slug: "/solution",
        description: "회의, 코드, 지식 검색, 추론, 시각화까지 실제 업무 흐름에 연결되는 AI 솔루션을 제안합니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "AI를 얹는 것이 아니라 업무 속도를 다시 설계합니다",
                    "회의 기록, 코드 검토, 사내 지식 검색, 로컬 LLM, 추론 API, 시각화까지 현업이 매일 반복하는 흐름 중심으로 실제 운영 가능한 AI 도입 방식을 제안합니다.",
                    "/images/solution-data-workshop.jpg",
                    "AI 도입 구조를 함께 검토하는 협업 워크숍 장면",
                    { label: "RAG 보기", href: "/solution/rag" },
                    { label: "도입 상담", href: "/contact" }
                )
            ),
            section(
                "s2",
                "media",
                mediaFeature({
                    eyebrow: "업무 적용 흐름",
                    title: "회의와 문서를 바로 실행 가능한 다음 단계로 넘기는 구조",
                    body: "AI는 요약만 잘해도 충분하지 않습니다. 회의 메모, 결정 사항, 담당자 액션, 후속 일정이 팀의 실제 운영 도구로 이어질 때 비로소 생산성이 생깁니다.",
                    imageSrc: "/images/solution-meeting-ui.jpg",
                    imageAlt: "회의 내용이 구조화된 AI 업무 화면",
                    layout: "imageRight",
                    caption: "회의 흐름 / 요약, 액션 아이템, 후속 처리",
                    points: [
                        "회의 결과를 사람 중심 메모가 아니라 실행 항목 기준으로 구조화합니다.",
                        "조직별 승인 흐름과 협업 도구 연계를 함께 고려합니다.",
                        "단일 기능이 아니라 업무 전체 흐름에서 도입 범위를 설계합니다.",
                    ],
                })
            ),
            section(
                "s3",
                "cards",
                featureCards("AI 솔루션 메뉴", [
                    { title: "회의 자동화", desc: "회의록, 결정 사항, 액션 아이템을 구조화합니다.", href: "/solution/meeting" },
                    { title: "코드 분석", desc: "리뷰 기준과 변경 리스크를 자동으로 정리합니다.", href: "/solution/code-analysis" },
                    { title: "Agent Orchestration", desc: "여러 단계 작업을 하나의 흐름으로 엮습니다.", href: "/solution/agent-orchestration" },
                    { title: "Local LLM", desc: "사내망과 전용 인프라에 맞는 LLM 운영 구조를 만듭니다.", href: "/solution/local-llm" },
                    { title: "AI 추론", desc: "서비스형 API와 내부 추론 환경을 안정적으로 운영합니다.", href: "/solution/ai-inference" },
                    { title: "RAG · 시각화", desc: "사내 지식 검색과 운영 대시보드를 함께 고도화합니다.", href: "/solution/rag" },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "지식 레이어",
                    title: "사내 지식은 검색 속도보다 근거가 남는 응답이 중요합니다",
                    body: "문서 저장소가 많아도 실제 현업은 근거가 보이는 답변을 원합니다. TechI는 출처, 권한, 검색 결과 품질을 함께 설계해 RAG가 업무에 신뢰를 얻도록 만듭니다.",
                    imageSrc: "/images/solution-knowledge-ui.jpg",
                    imageAlt: "근거 문서와 함께 응답을 제공하는 지식 검색 화면",
                    layout: "imageLeft",
                    caption: "지식 검색 / 출처 기반 응답, 권한 기반 검색",
                    points: [
                        "검색 결과에 출처와 근거를 함께 남깁니다.",
                        "권한에 따라 보이는 문서 범위를 달리 설계합니다.",
                        "도입 후에는 콘텐츠 품질과 검색 로그까지 운영 지표로 관리합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("이런 조직에서 효과가 큽니다", [
                    "회의와 문서 업무가 많아 반복 정리에 시간을 많이 쓰는 조직",
                    "사내 지식이 흩어져 있어 검색과 답변 품질 편차가 큰 조직",
                    "보안과 운영 기준 때문에 외부형 AI 도입이 어려운 조직",
                    "파일럿이 아니라 실제 운영 환경까지 고려한 AI 도입이 필요한 조직",
                ])
            ),
            section("s6", "contact", contactForm("AI 도입 상담")),
        ],
    }),
    "/solution/meeting": page({
        id: "override_solution_meeting",
        title: "회의 자동화",
        slug: "/solution/meeting",
        description: "회의 내용을 실행 가능한 액션과 후속 흐름으로 정리하는 AI 회의 자동화 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("회의 자동화", ["솔루션", "회의 자동화"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "회의 내용을 남기는 수준이 아니라 실행으로 이어지게 만듭니다",
                    "회의록이 쌓이기만 하고 후속 액션이 흐려지는 조직에 적합합니다. TechI는 요약, 담당자 구분, 일정 반영, 공유 흐름까지 포함한 회의 자동화 체계를 설계합니다.",
                    "/images/solution-meeting-room.jpg",
                    "회의 자동화 도입 범위를 논의하는 협업 회의실 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "회의 자동화가 실제 업무에 남으려면 흐름이 함께 바뀌어야 합니다",
                    "많은 조직이 회의 요약 기능 자체에는 만족하지만, 실제 업무 변화는 거의 얻지 못합니다.\n핵심은 회의 결과가 태스크, 담당자, 일정, 공유 기준까지 연결되도록 설계하는 것입니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "회의 처리 흐름",
                    title: "결정 사항과 액션 아이템이 명확히 보이는 업무 화면",
                    body: "단순 요약이 아니라 어떤 결론이 났고, 누가 언제까지 무엇을 처리해야 하는지까지 분리해 보여주면 회의 후 공백 시간이 줄어듭니다.",
                    imageSrc: "/images/solution-meeting-ui.jpg",
                    imageAlt: "회의록 요약과 액션 아이템이 정리된 화면",
                    layout: "imageRight",
                    caption: "회의 요약 / 결정사항, 담당자, 기한",
                    points: [
                        "회의 목적에 따라 요약 형식을 다르게 설계합니다.",
                        "팀별 템플릿과 승인 흐름을 반영할 수 있습니다.",
                        "메신저, 메일, PM 도구 연계 구조를 함께 검토합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("구성 포인트", [
                    { title: "액션 중심 정리", desc: "결정, 담당자, 일정, 후속 항목을 분리해 기록합니다." },
                    { title: "팀별 템플릿", desc: "영업, 개발, 운영, 경영회의처럼 회의 성격별 형식을 다르게 설계합니다." },
                    { title: "공유 흐름 연계", desc: "메일, 메신저, 협업 도구와 연결해 회의 후속 처리를 줄입니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "회의 후 담당자 확인과 일정 재정리에 쓰는 시간을 줄일 수 있습니다.",
                    "회의 품질이 사람 역량에 따라 크게 흔들리지 않습니다.",
                    "회의 이력과 결정 근거가 누적되어 지식 자산으로 남습니다.",
                    "관리자는 회의 수보다 실행률과 후속 완료율을 더 쉽게 확인할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("회의 자동화 상담")),
        ],
    }),
    "/solution/code-analysis": page({
        id: "override_solution_code_analysis",
        title: "코드 분석",
        slug: "/solution/code-analysis",
        description: "코드 변경 리스크와 리뷰 포인트를 빠르게 구조화하는 AI 코드 분석 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("코드 분석", ["솔루션", "코드 분석"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "리뷰 속도보다 중요한 것은 변경 리스크를 더 빨리 드러내는 일입니다",
                    "코드 분석 솔루션은 단순 자동 리뷰가 아니라 팀의 리뷰 기준을 구조화하고, 위험 변경을 빠르게 구분해 검토 밀도를 높이는 방향으로 설계해야 합니다.",
                    "/images/hero-code.jpg",
                    "개발 코드와 화면이 함께 보이는 이미지",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "코드 분석은 개발자를 대체하는 것이 아니라 검토의 밀도를 높이는 역할이어야 합니다",
                    "대규모 저장소일수록 리뷰어는 모든 변경을 같은 집중도로 볼 수 없습니다.\nTechI는 규칙 기반 검토와 LLM 분석을 섞어 팀이 중요하게 보는 품질 기준부터 먼저 잡습니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "리뷰 콘솔",
                    title: "변경 맥락과 잠재 리스크를 함께 읽는 분석 화면",
                    body: "변경 파일만 보는 것이 아니라 영향 범위, 공통 규칙 위반, 취약 가능성, 운영 영향까지 함께 보여주는 구조가 리뷰 효율을 크게 높입니다.",
                    imageSrc: "/images/solution-code-review.jpg",
                    imageAlt: "코드 리뷰 기준과 변경 내용을 함께 검토하는 개발 팀",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 7890,
                    imageHeight: 5263,
                    caption: "코드 리뷰 / 변경 리스크, 규칙 점검, 배포 우려",
                    points: [
                        "팀별 코드 규칙과 체크 포인트를 반영할 수 있습니다.",
                        "운영 영향이 큰 변경을 우선적으로 드러낼 수 있습니다.",
                        "PR 설명과 리뷰 로그를 품질 지표로 연결할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("주요 적용 포인트", [
                    { title: "사전 검토 자동화", desc: "PR 생성 직후 리뷰어가 보기 전에 기본 리스크를 분류합니다." },
                    { title: "규칙 기반 분석", desc: "팀의 코딩 규칙, 보안 규칙, 운영 규칙을 함께 반영합니다." },
                    { title: "품질 로그 축적", desc: "반복 이슈와 자주 발생하는 리뷰 항목을 데이터로 남깁니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "리뷰어의 집중 시간을 중요한 변경에 더 많이 배분할 수 있습니다.",
                    "반복적인 코드 품질 이슈를 사전에 줄일 수 있습니다.",
                    "신규 인력도 팀의 리뷰 기준을 빠르게 따라올 수 있습니다.",
                    "릴리즈 전 운영 리스크를 더 일찍 발견할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("코드 분석 상담")),
        ],
    }),
    "/solution/agent-orchestration": page({
        id: "override_solution_agent_orchestration",
        title: "Agent Orchestration",
        slug: "/solution/agent-orchestration",
        description: "여러 단계의 AI 작업을 승인 포인트와 운영 로그까지 포함해 설계하는 오케스트레이션 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("Agent Orchestration", ["솔루션", "Agent Orchestration"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "한 번의 답변보다 여러 단계 작업을 안정적으로 이어주는 구조가 필요합니다",
                    "검색, 판단, 생성, 승인, 전달이 섞인 업무에서는 단일 챗봇보다 단계형 에이전트 흐름이 더 적합합니다. TechI는 이 구조를 운영 가능한 수준으로 설계합니다.",
                    "/images/solution-monitoring-room.jpg",
                    "여러 단계의 AI 작업 흐름을 점검하는 운영 환경",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "오케스트레이션의 핵심은 AI를 많이 붙이는 것이 아니라 승인 구조를 명확히 만드는 일입니다",
                    "실무에서는 검색, 요약, 판단, 작성이 한 번에 끝나지 않습니다.\n에이전트별 역할 분리와 사람 승인 포인트를 정확히 설계해야 자동화가 과신으로 흘러가지 않습니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "다단계 흐름",
                    title: "작업 단계와 검토 포인트가 분리된 운영 화면",
                    body: "에이전트 오케스트레이션은 단순 자동 실행보다 어떤 단계에서 어떤 데이터와 도구를 쓰는지, 어느 지점에서 사람이 개입하는지가 명확해야 안정적입니다.",
                    imageSrc: "/images/solution-ai-inference-ui.jpg",
                    imageAlt: "AI 작업 단계와 상태가 정리된 화면",
                    layout: "imageRight",
                    caption: "에이전트 흐름 / 작업 라우팅, 승인, 상태 추적",
                    points: [
                        "단계별 역할 분리와 도구 연결 정책을 함께 설계합니다.",
                        "중요 결과물에는 사람 승인 포인트를 둘 수 있습니다.",
                        "실행 이력과 실패 로그를 운영 지표로 남길 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("설계 포인트", [
                    { title: "단계별 역할 분리", desc: "검색, 판단, 생성, 전달 단계를 독립적으로 다룹니다." },
                    { title: "승인 포인트 설계", desc: "자동화 구간과 사람이 확인할 구간을 명확히 나눕니다." },
                    { title: "운영 로그 추적", desc: "실패 원인과 품질 편차를 추적할 수 있게 만듭니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "복합 업무를 한 번의 질문과 답으로 무리하게 처리하지 않게 됩니다.",
                    "승인 구조가 명확해져 현업의 불신을 줄일 수 있습니다.",
                    "실행 로그가 남아 품질 개선이 반복 가능한 형태가 됩니다.",
                    "도구와 시스템이 늘어나도 구조적으로 확장할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("Agent Orchestration 상담")),
        ],
    }),
    "/solution/local-llm": page({
        id: "override_solution_local_llm",
        title: "Local LLM",
        slug: "/solution/local-llm",
        description: "사내망과 전용 인프라에서 운영 가능한 Local LLM 환경을 설계하는 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("Local LLM", ["솔루션", "Local LLM"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "외부 의존 없이 내부 정책에 맞는 LLM 운영 환경을 만듭니다",
                    "보안, 데이터 반출, 응답 속도, 비용 예측성 때문에 외부형 모델이 맞지 않는 조직에는 Local LLM이 더 적합합니다. TechI는 인프라부터 운영 정책까지 함께 설계합니다.",
                    "/images/server-virtualization-photo.jpg",
                    "사내 LLM 운영 환경과 인프라 구성을 점검하는 서버룸 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "Local LLM은 모델 선택보다 운영 기준이 먼저 필요합니다",
                    "모델 크기, GPU 자원, 사용자 수, 보안 정책, 로그 기준이 맞지 않으면 도입 초기에는 좋아 보여도 장기 운영에서 곧 병목이 생깁니다.\nTechI는 인프라와 운영 기준을 함께 설계해 지속 가능한 LLM 환경을 만듭니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "추론 스택",
                    title: "사내 인프라에 맞는 추론 운영 구조를 먼저 설계합니다",
                    body: "모델을 배포하는 것보다 더 중요한 것은 누가 어떤 데이터를 어디까지 사용할 수 있는지, 어떤 자원으로 어떤 응답 수준을 유지할 수 있는지 정리하는 일입니다.",
                    imageSrc: "/images/server-photo-racks.jpg",
                    imageAlt: "사내 추론 환경에 사용할 서버 랙과 인프라 구성을 보여주는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "Local LLM / 모델 정책, 자원, 관측 가능성",
                    points: [
                        "사내망, GPU, 사용자 수에 맞는 운영 구조를 제안합니다.",
                        "권한과 로그 기준을 함께 설계해 통제가 가능해야 합니다.",
                        "PoC와 운영 환경의 간극을 줄이는 구성이 중요합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 설계 항목", [
                    { title: "모델 운영 기준", desc: "모델 크기, 응답 품질, 사용량 기준을 함께 정리합니다." },
                    { title: "인프라 용량 계획", desc: "GPU, 스토리지, 네트워크 요구를 운영 단위로 환산합니다." },
                    { title: "권한·로그 정책", desc: "사내 정책에 맞는 접근 통제와 로그 보존 기준을 포함합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "데이터 반출 우려 없이 내부 지식을 활용할 수 있습니다.",
                    "모델 사용량과 운영 비용을 더 예측 가능하게 관리할 수 있습니다.",
                    "사내 정책에 맞는 접근 통제와 감사 대응이 가능해집니다.",
                    "장기적으로 업무형 AI 서비스를 확장하기 쉬운 기반을 갖게 됩니다.",
                ])
            ),
            section("s7", "contact", contactForm("Local LLM 상담")),
        ],
    }),
    "/solution/ai-inference": page({
        id: "override_solution_ai_inference",
        title: "AI 추론",
        slug: "/solution/ai-inference",
        description: "안정적인 응답 성능과 운영 기준을 갖춘 AI 추론 환경을 설계하는 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("AI 추론", ["솔루션", "AI 추론"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "모델 연결이 아니라 서비스 품질을 보장하는 추론 체계가 필요합니다",
                    "추론 환경은 응답 속도, 장애 복구, 버전 관리, 사용량 모니터링이 함께 잡혀야 실제 서비스에 넣을 수 있습니다. TechI는 운영 기준을 포함한 AI 추론 환경을 설계합니다.",
                    "/images/solution-monitoring-room.jpg",
                    "AI 추론 서비스 상태를 모니터링하는 운영 환경",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "AI 추론 환경은 모델 성능만 좋아서는 충분하지 않습니다",
                    "예상보다 많은 요청이 들어오거나 모델 버전이 늘어나면 추론 환경은 곧 운영 시스템이 됩니다.\n요청 라우팅, 캐시, 롤백, 사용량 추적 같은 운영 항목을 초기에 함께 설계해야 서비스 품질을 유지할 수 있습니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "서빙 제어",
                    title: "응답 상태와 모델 운영이 함께 보이는 구조",
                    body: "단순 API 연결을 넘어 요청량 변화, 에러 비율, 모델 전환, 추론 지연을 함께 읽을 수 있어야 운영팀이 서비스를 안정적으로 관리할 수 있습니다.",
                    imageSrc: "/images/solution-ai-inference-ui.jpg",
                    imageAlt: "추론 운영 상태를 확인하는 화면",
                    layout: "imageRight",
                    caption: "추론 운영 / 지연, 모델 버전, 폴백",
                    points: [
                        "모델 버전과 라우팅 정책을 운영 기준으로 정리합니다.",
                        "트래픽 변화에 대응할 수 있는 용량 계획을 함께 세웁니다.",
                        "장애 시 롤백과 우회 흐름을 준비합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("운영 설계 포인트", [
                    { title: "요청 라우팅", desc: "서비스별 요청 특성에 맞춰 모델과 경로를 구분합니다." },
                    { title: "버전 관리", desc: "모델 변경 시 검증과 롤백 기준을 함께 설계합니다." },
                    { title: "관측 가능성", desc: "지연, 실패, 비용, 사용량을 함께 추적합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "AI 기능을 서비스 환경에 더 안정적으로 넣을 수 있습니다.",
                    "응답 속도와 장애 대응 기준이 명확해집니다.",
                    "모델 버전이 늘어나도 운영 복잡도를 통제할 수 있습니다.",
                    "비용과 성능을 데이터 기반으로 조정할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("AI 추론 상담")),
        ],
    }),
    "/solution/data-visualization": page({
        id: "override_solution_data_visualization",
        title: "데이터 시각화",
        slug: "/solution/data-visualization",
        description: "운영과 의사결정에 직접 연결되는 데이터 시각화 대시보드를 설계하는 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("데이터 시각화", ["솔루션", "데이터 시각화"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "좋은 대시보드는 예쁘게 보이는 화면이 아니라 같은 판단을 만드는 화면입니다",
                    "운영 대시보드, AI 품질 지표, 프로젝트 현황판처럼 여러 화면이 존재해도 결국 중요한 것은 팀이 같은 숫자와 같은 기준으로 판단하는 구조입니다.",
                    "/images/solution-data-workshop.jpg",
                    "데이터 화면과 지표 구조를 함께 검토하는 워크숍 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "시각화는 그래프 종류보다 어떤 의사결정을 지원하는지가 먼저 정해져야 합니다",
                    "대시보드는 숫자를 모으는 화면이 아니라 상태를 빠르게 읽고 조치할 기준을 제공해야 합니다.\nTechI는 운영팀, 실무팀, 의사결정자가 각각 필요한 시점과 화면을 구분해 설계합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "대시보드 레이어",
                    title: "운영 지표와 의사결정 지표가 분리된 화면 구성",
                    body: "실시간 상태를 봐야 하는 화면과 주간·월간 흐름을 보는 화면은 목적이 다릅니다. 같은 데이터라도 누가 무엇을 결정할지 기준으로 나누면 가독성과 활용도가 크게 올라갑니다.",
                    imageSrc: "/images/product-console-ui.jpg",
                    imageAlt: "지표와 상태를 정리한 대시보드 화면",
                    layout: "imageLeft",
                    caption: "시각화 / KPI, 추세, 액션 기반 대시보드",
                    points: [
                        "운영 화면과 보고 화면을 구분해 설계합니다.",
                        "숫자보다 행동 기준이 보이는 지표를 우선 배치합니다.",
                        "데이터 해석 편차를 줄이는 용어와 구조를 맞춥니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("주요 구성 요소", [
                    { title: "실시간 상태 보드", desc: "즉시 조치가 필요한 지표를 먼저 보여줍니다." },
                    { title: "추세 분석 화면", desc: "주간·월간 패턴과 이상 신호를 읽게 합니다." },
                    { title: "보고용 요약 지표", desc: "경영진과 관리자용 관점으로 별도 구성할 수 있습니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "같은 데이터를 두고 해석이 갈리는 일을 줄일 수 있습니다.",
                    "운영 현황과 보고 자료를 별도로 다시 만드는 시간이 줄어듭니다.",
                    "AI 품질, 인프라 상태, 업무 성과를 한 흐름에서 읽을 수 있습니다.",
                    "가시성이 좋아져 문제 발견과 판단 속도가 빨라집니다.",
                ])
            ),
            section("s7", "contact", contactForm("데이터 시각화 상담")),
        ],
    }),
    "/solution/rag": page({
        id: "override_solution_rag",
        title: "RAG",
        slug: "/solution/rag",
        description: "사내 문서와 지식을 근거 있는 응답으로 바꾸는 RAG 솔루션입니다.",
        sections: [
            section("s1", "header", subnavHeader("RAG", ["솔루션", "RAG"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "사내 문서를 찾는 수준이 아니라 근거와 함께 답하게 만들어야 합니다",
                    "RAG는 검색 엔진을 한 번 더 만드는 일이 아닙니다. 권한, 출처, 문서 품질, 운영 로그를 포함해 팀이 신뢰할 수 있는 응답 구조를 만드는 것이 핵심입니다.",
                    "/images/hero-code.jpg",
                    "문서와 검색 흐름을 상징하는 이미지",
                    { label: "도입 상담", href: "/contact" },
                    { label: "AI 솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "RAG는 답변 품질보다 먼저 문서 구조와 권한 구조를 정리해야 성공합니다",
                    "자료가 많이 쌓여 있어도 문서 품질과 접근 권한이 정리되어 있지 않으면 RAG는 금방 신뢰를 잃습니다.\nTechI는 검색과 생성보다 먼저 데이터 구조와 출처 신뢰도를 정리합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "근거 기반 응답",
                    title: "출처와 권한을 함께 읽는 지식 검색 화면",
                    body: "어떤 문서를 기반으로 답했는지, 최신 문서인지, 사용자가 볼 수 있는 자료인지가 함께 표시되어야 현업은 RAG를 실제 업무에 사용하기 시작합니다.",
                    imageSrc: "/images/solution-knowledge-ui.jpg",
                    imageAlt: "출처와 함께 답변을 제공하는 지식 검색 화면",
                    layout: "imageRight",
                    caption: "RAG / 출처 표기, 문서 품질, 권한 통제",
                    points: [
                        "문서 출처와 최신성 기준을 함께 설계합니다.",
                        "권한에 맞는 검색 결과만 응답에 사용되도록 구성합니다.",
                        "검색 실패와 품질 편차 로그를 운영 지표로 남깁니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 구성 요소", [
                    { title: "문서 연결", desc: "파일 저장소, 위키, 정책 문서를 연결할 수 있습니다." },
                    { title: "근거 표기", desc: "응답 출처와 문서 단위를 함께 보여줍니다." },
                    { title: "권한 필터링", desc: "사용자별 접근 권한을 검색 단계에서 반영합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "문서 검색과 답변 작성에 쓰는 시간을 크게 줄일 수 있습니다.",
                    "답변 근거가 남아 현업 신뢰도가 높아집니다.",
                    "지식이 개인에게 묶이지 않고 조직 자산으로 쌓입니다.",
                    "도입 후에도 검색 품질을 운영 데이터로 개선할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("RAG 상담")),
        ],
    }),
    "/product": page({
        id: "override_product",
        title: "제품",
        slug: "/product",
        description: "고가용성, 재해복구, 접근 통제, 감사 대응에 특화된 TechI 제품 포트폴리오를 소개합니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "운영 현장에서 바로 설명되는 제품만 제안합니다",
                    "제품 소개는 기능 나열보다 도입 후 운영 방식이 먼저 보여야 합니다. TechI는 RoseHA와 Omniguard를 실제 운영 시나리오와 인수 기준 중심으로 설명합니다.",
                    "/images/hero-datacenter.jpg",
                    "엔터프라이즈 제품이 적용될 핵심 인프라 환경",
                    { label: "RoseHA 보기", href: "/product/roseha" },
                    { label: "보안 제품 보기", href: "/product/lsware" }
                )
            ),
            section(
                "s2",
                "cards",
                featureCards("제품 포트폴리오", [
                    { title: "RoseHA", desc: "실시간 복제, 자동 전환, 시점 복구를 포함한 고가용성 제품군", href: "/product/roseha" },
                    { title: "Omniguard", desc: "권한, 접속, 감사 대응을 관리하는 보안 통제 제품군", href: "/product/lsware" },
                    { title: "PoC 설계", desc: "기능 검증과 운영 전환 검토를 분리한 파일럿 접근", href: "/contact" },
                    { title: "운영 연계", desc: "정책, 문서, 점검 기준까지 포함한 도입 지원", href: "/contact" },
                ])
            ),
            section(
                "s3",
                "media",
                mediaFeature({
                    eyebrow: "제품 소개",
                    title: "운영 화면과 정책 구조까지 함께 보여야 제품 신뢰도가 생깁니다",
                    body: "제품 기능은 데모에서 보일 수 있습니다. 하지만 실제 운영팀이 신뢰하는 것은 정책 화면, 상태 확인 방식, 장애 시 대응 흐름이 어떻게 정리되는지입니다.",
                    imageSrc: "/images/product-console-ui.jpg",
                    imageAlt: "제품 운영 화면과 정책 구성이 담긴 콘솔 이미지",
                    layout: "imageRight",
                    caption: "제품 콘솔 / 정책, 상태, 운영 가시성",
                    points: [
                        "운영 콘솔의 가독성과 상태 확인 흐름을 함께 검토합니다.",
                        "기능 검증과 본 운영 정책을 분리해 접근합니다.",
                        "도입 후 운영팀이 사용할 문서와 기준까지 제안합니다.",
                    ],
                })
            ),
            section(
                "s4",
                "comparisonTable",
                comparisonTable(
                    "제품 적용 관점 비교",
                    ["구분", "RoseHA", "Omniguard"],
                    [
                        ["핵심 과제", "다운타임 최소화와 데이터 보호", "접근 통제와 감사 대응"],
                        ["주요 대상", "DB, 업무계, 핵심 애플리케이션", "서버 계정, 권한, 접속 기록"],
                        ["운영 포인트", "복제, 전환, 복구 리허설", "정책 적용, 로그, 증적 관리"],
                        ["도입 방식", "PoC 후 운영 전환 기준 설계", "정책 분석 후 단계별 적용"],
                    ]
                )
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 환경에서 주로 검토합니다", [
                    "핵심 서비스의 무중단 또는 저중단 운영이 필수인 조직",
                    "재해복구와 자동 전환 체계를 제품 중심으로 고도화하려는 조직",
                    "서버 계정 통제와 감사 대응을 운영 절차에 맞게 정리하려는 조직",
                    "PoC 이후 실제 운영 기준까지 포함한 제품 도입이 필요한 조직",
                ])
            ),
            section(
                "s6",
                "faq",
                faq("자주 받는 질문", [
                    {
                        q: "제품만 도입하면 운영 체계도 바로 완성되나요?",
                        a: "제품은 핵심 수단일 뿐입니다. 정책, 운영 기준, 검증 절차가 함께 설계되어야 실제 효과를 얻을 수 있습니다.",
                    },
                    {
                        q: "PoC와 본 운영은 어떻게 다르게 접근하나요?",
                        a: "PoC는 기능 검증, 본 운영은 정책·권한·인수 기준 검토까지 포함합니다. 두 단계를 명확히 나눠야 실패 확률이 줄어듭니다.",
                    },
                    {
                        q: "기존 인프라와의 연동 범위도 함께 검토하나요?",
                        a: "예. 대상 시스템, 네트워크, 운영 조직, 장애 대응 흐름까지 함께 살펴 실제 적용 범위를 제안합니다.",
                    },
                ])
            ),
            section("s7", "contact", contactForm("제품 도입 상담")),
        ],
    }),
    "/product/roseha": page({
        id: "override_product_roseha",
        title: "RoseHA",
        slug: "/product/roseha",
        description: "실시간 복제와 자동 전환, 시점 복구를 포함한 고가용성·재해복구 제품 RoseHA를 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("RoseHA", ["제품", "RoseHA"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "핵심 서비스의 다운타임과 데이터 손실을 함께 줄이는 구조를 만듭니다",
                    "RoseHA는 실시간 복제, 자동 전환, 시점 복구, 운영 콘솔을 하나의 흐름으로 묶어 미션크리티컬 서비스의 지속성을 높이는 고가용성 플랫폼입니다.",
                    "/images/server-photo-racks.jpg",
                    "고가용성 구성을 검토하는 데이터센터 서버 랙",
                    { label: "복제 보기", href: "/product/roseha/replication" },
                    { label: "자동 전환 보기", href: "/product/roseha/failover" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("RoseHA 구성 요소", [
                    { title: "Replication", desc: "실시간 또는 정책 기반 데이터 복제를 설계합니다.", href: "/product/roseha/replication" },
                    { title: "Failover", desc: "이상 감지 이후 자동·수동 전환 흐름을 구성합니다.", href: "/product/roseha/failover" },
                    { title: "Point-in-Time Recovery", desc: "사고 시점 이전으로 복구 가능한 체계를 마련합니다.", href: "/product/roseha/point-in-time-recovery" },
                    { title: "Management Console", desc: "상태 확인과 운영 제어를 한 화면에서 관리합니다.", href: "/product/roseha/management-console" },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "운영 가시성",
                    title: "상태 확인과 제어가 한 화면에서 이어지는 운영 구조",
                    body: "가용성 제품은 장애 시에만 보는 솔루션이 아닙니다. 평소 상태 확인, 복제 지연 체크, 전환 준비 상태 검토가 쉬워야 운영팀이 실제로 신뢰할 수 있습니다.",
                    imageSrc: "/images/server-photo-inspection.jpg",
                    imageAlt: "엔지니어가 복제 상태와 장비 구성을 점검하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1068,
                    caption: "RoseHA 콘솔 / 복제, 전환, 복구 가시성",
                    points: [
                        "평상시 상태 확인과 비상시 전환 흐름이 이어집니다.",
                        "운영자가 봐야 할 상태와 경고를 구조적으로 구분합니다.",
                        "검증 기록과 리허설 결과를 운영 이력으로 남길 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "infographic",
                infographic("RoseHA 운영 흐름", [
                    "복제 정책과 대상 시스템을 정의합니다.",
                    "이상 감지와 전환 기준을 설정합니다.",
                    "전환·복구 리허설을 정기적으로 수행합니다.",
                    "운영 콘솔과 기록 체계로 상태를 관리합니다.",
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("도입 후 기대 변화", [
                    "핵심 서비스의 중단 시간과 데이터 손실 가능성을 함께 줄일 수 있습니다.",
                    "재해복구 절차가 문서가 아니라 실제 운영 체계로 바뀝니다.",
                    "전환 리허설과 복구 검증이 정기 운영 항목으로 자리잡습니다.",
                    "운영팀이 가용성 상태를 더 빠르게 읽고 대응할 수 있습니다.",
                ])
            ),
            section(
                "s7",
                "useCases",
                caseList("주요 적용 환경", [
                    "DB, ERP, MES, 그룹웨어처럼 중단 영향이 큰 서비스",
                    "본사-DR센터 구조에서 복제와 전환 체계를 함께 운영해야 하는 환경",
                    "스토리지 기반 복제만으로는 운영 통제가 어려운 환경",
                    "시점 복구와 운영 이력까지 함께 관리해야 하는 환경",
                ])
            ),
            section(
                "s8",
                "faq",
                faq("자주 받는 질문", [
                    {
                        q: "RoseHA는 어떤 시스템에 우선 적용하는 것이 좋나요?",
                        a: "다운타임 비용이 큰 핵심 서비스부터 시작하는 것이 일반적입니다. 업무 중요도와 복구 목표를 함께 검토해 우선순위를 정합니다.",
                    },
                    {
                        q: "자동 전환은 언제나 정답인가요?",
                        a: "아닙니다. 서비스 특성과 운영 정책에 따라 자동·수동 전환 기준을 다르게 설계하는 편이 더 안전할 수 있습니다.",
                    },
                    {
                        q: "정기 리허설과 운영 기록도 함께 설계하나요?",
                        a: "예. 실제 가용성 체계는 리허설과 기록이 있어야 유지됩니다. 검증 절차와 보고 방식까지 함께 제안합니다.",
                    },
                ])
            ),
            section("s9", "contact", contactForm("RoseHA 도입 상담")),
        ],
    }),
    "/product/roseha/replication": page({
        id: "override_product_roseha_replication",
        title: "Replication",
        slug: "/product/roseha/replication",
        description: "핵심 시스템의 데이터 일관성과 복제 지연을 관리하는 RoseHA Replication 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("Replication", ["제품", "RoseHA", "Replication"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "복제는 백업이 아니라 서비스 연속성을 위한 실시간 준비 구조입니다",
                    "Replication은 단순한 데이터 복사가 아니라 복제 지연, 일관성, 운영 검증 기준을 함께 관리해야 의미가 있습니다. RoseHA는 이 흐름을 서비스 운영 관점에서 설계합니다.",
                    "/images/hero-datacenter.jpg",
                    "복제 대상 인프라가 구성된 데이터센터 이미지",
                    { label: "도입 상담", href: "/contact" },
                    { label: "RoseHA 전체 보기", href: "/product/roseha" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "복제는 잘 돌아가는 것처럼 보이는 시간이 길수록 더 세밀한 검증이 필요합니다",
                    "실시간 복제 체계는 평상시에는 문제가 없어 보여도 실제 사고 시점에 복제 지연과 일관성 이슈가 드러날 수 있습니다.\n그래서 운영팀이 평소에 어떤 상태를 점검해야 하는지까지 함께 설계해야 합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "복제 상태",
                    title: "복제 대상과 상태를 구조적으로 확인하는 운영 관점",
                    body: "대상 시스템, 지연 상태, 예외 이벤트, 검증 기록이 함께 보여야 복제 체계가 단순 설정이 아니라 살아 있는 운영 항목이 됩니다.",
                    imageSrc: "/images/server-photo-racks.jpg",
                    imageAlt: "서버 랙과 스토리지 구성이 보이는 인프라 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "복제 기반 / 대상 시스템, 지연, 일관성 점검",
                    points: [
                        "복제 단위와 중요 데이터 구간을 함께 구분합니다.",
                        "복제 지연과 예외 상태를 운영 기준으로 관리합니다.",
                        "정기 검증을 통해 사고 시점의 불확실성을 줄입니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("설계 포인트", [
                    { title: "복제 단위 정의", desc: "어떤 시스템과 데이터가 우선 보호 대상인지 정리합니다." },
                    { title: "지연 허용 범위", desc: "복제 지연이 허용 가능한 수준인지 업무 기준으로 검토합니다." },
                    { title: "일관성 검증", desc: "사고 시점 복구 가능성을 정기적으로 확인합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "중요 데이터의 보호 우선순위를 더 명확히 운영할 수 있습니다.",
                    "복제 상태를 평소에도 신뢰 가능한 지표로 관리할 수 있습니다.",
                    "장애 시점에 복제 불확실성으로 인한 리스크를 줄일 수 있습니다.",
                    "가용성 체계의 기초가 더 탄탄해집니다.",
                ])
            ),
            section("s7", "contact", contactForm("Replication 상담")),
        ],
    }),
    "/product/roseha/failover": page({
        id: "override_product_roseha_failover",
        title: "Failover",
        slug: "/product/roseha/failover",
        description: "이상 감지와 전환 기준을 운영 절차로 설계하는 RoseHA Failover 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("Failover", ["제품", "RoseHA", "Failover"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "자동 전환은 빠른 것보다 정확한 조건이 먼저 설계되어야 합니다",
                    "Failover는 장애를 감지했다고 바로 실행하는 기능이 아닙니다. 서비스 영향, 데이터 상태, 운영 승인 기준을 함께 고려한 전환 정책이 먼저 필요합니다.",
                    "/images/solution-monitoring-room.jpg",
                    "전환 조건과 서비스 상태를 함께 확인하는 운영 환경",
                    { label: "도입 상담", href: "/contact" },
                    { label: "RoseHA 전체 보기", href: "/product/roseha" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "전환이 빠르기만 하고 잘못 전환되면 더 큰 운영 리스크가 생길 수 있습니다",
                    "Failover는 장애 탐지, 상태 판단, 전환 조건, 운영팀 개입 시점을 함께 설계해야 제대로 작동합니다.\nTechI는 서비스 특성과 운영 정책에 맞는 자동·수동 전환 기준을 함께 제안합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "전환 정책",
                    title: "전환 조건과 운영 개입 기준이 명확한 구조",
                    body: "어떤 상황에서 자동 전환을 허용하고, 어떤 경우에는 운영 승인 후 수동으로 전환할지 기준을 명확히 해야 장애 대응 품질이 흔들리지 않습니다.",
                    imageSrc: "/images/server-photo-install.jpg",
                    imageAlt: "고가용성 장비와 연결 상태를 확인하는 현장 이미지",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "페일오버 정책 / 조건, 승인, 실행",
                    points: [
                        "이상 감지 이벤트와 실제 전환 조건을 분리합니다.",
                        "운영팀 승인 구간을 서비스별로 다르게 둘 수 있습니다.",
                        "전환 후 검증과 복귀 절차까지 함께 설계합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("운영 설계 항목", [
                    { title: "탐지 기준", desc: "장애 감지 이벤트와 전환 조건을 구분합니다." },
                    { title: "승인 정책", desc: "서비스 중요도에 따라 자동·수동 기준을 다르게 가져갑니다." },
                    { title: "복귀 절차", desc: "전환 이후 정상화와 복귀 과정도 운영 기준에 포함합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "장애 상황에서 판단 지연과 혼선을 줄일 수 있습니다.",
                    "자동 전환에 대한 운영팀 불안을 크게 낮출 수 있습니다.",
                    "전환 이후 검증과 복귀 절차까지 표준화할 수 있습니다.",
                    "실서비스 중단 시간을 보다 안정적으로 관리할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("Failover 상담")),
        ],
    }),
    "/product/roseha/point-in-time-recovery": page({
        id: "override_product_roseha_pitr",
        title: "Point-in-Time Recovery",
        slug: "/product/roseha/point-in-time-recovery",
        description: "사고 발생 이전 특정 시점으로 복구 가능한 체계를 제공하는 RoseHA 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("Point-in-Time Recovery", ["제품", "RoseHA", "Point-in-Time Recovery"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "복구는 최신 사본보다 정확한 시점을 찾을 수 있어야 성공합니다",
                    "랜섬웨어, 논리 오류, 운영 실수처럼 특정 시점 이전으로 되돌려야 하는 사고에서는 Point-in-Time Recovery가 핵심입니다. TechI는 시점 선택 기준과 검증 방식까지 함께 설계합니다.",
                    "/images/server-photo-inspection.jpg",
                    "복구 준비 상태를 확인하는 핵심 인프라 점검 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "RoseHA 전체 보기", href: "/product/roseha" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "시점 복구는 기능이 아니라 운영 판단 체계입니다",
                    "문제는 복구 기능이 있느냐보다 어느 시점까지 되돌릴 수 있는지, 무엇을 먼저 검증해야 하는지가 명확한지에 달려 있습니다.\n그래서 복구 시나리오와 운영팀 판단 기준이 함께 정리되어야 합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "복구 가시성",
                    title: "복구 시점과 검증 흐름이 보이는 운영 구조",
                    body: "복구 가능한 시점을 알고 있어도 어떤 데이터를 먼저 검증할지 정리되어 있지 않으면 실제 복구는 늦어집니다. 시점 관리와 검증 기준을 함께 제안합니다.",
                    imageSrc: "/images/office-desk-operator.jpg",
                    imageAlt: "복구 시점과 검증 순서를 검토하는 운영 담당자",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 2705,
                    imageHeight: 3500,
                    caption: "PITR / 복구 시점, 검증, 롤백 준비도",
                    points: [
                        "사고 유형별 복구 시점 판단 기준을 정리합니다.",
                        "복구 후 확인해야 할 데이터 검증 항목을 함께 구성합니다.",
                        "실패 시 재시도와 재전환 가능성도 고려합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("검토 항목", [
                    { title: "복구 시점 선택", desc: "업무 영향과 데이터 상태를 함께 보고 시점을 판단합니다." },
                    { title: "검증 순서", desc: "복구 후 어떤 항목을 먼저 확인할지 기준을 잡습니다." },
                    { title: "재시도 기준", desc: "복구 실패나 추가 손상 가능성에 대비한 절차를 만듭니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "논리 오류나 랜섬웨어 사고에 더 유연하게 대응할 수 있습니다.",
                    "복구 시점 판단을 사람 경험에만 의존하지 않게 됩니다.",
                    "복구 후 데이터 검증 시간이 단축됩니다.",
                    "백업과 고가용성 체계를 함께 운영하는 기반이 생깁니다.",
                ])
            ),
            section("s7", "contact", contactForm("Point-in-Time Recovery 상담")),
        ],
    }),
    "/product/roseha/management-console": page({
        id: "override_product_roseha_management_console",
        title: "Management Console",
        slug: "/product/roseha/management-console",
        description: "복제 상태와 전환 준비도를 한 화면에서 확인하는 RoseHA Management Console 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("Management Console", ["제품", "RoseHA", "Management Console"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "가용성 제품은 운영자가 평소에 쉽게 읽을 수 있어야 비상시에 믿고 씁니다",
                    "운영 콘솔은 장애 시에만 보는 화면이 아닙니다. 평소 상태 확인, 경고 해석, 전환 준비도 검토가 쉬워야 실제 운영 체계로 자리잡습니다.",
                    "/images/hero-code.jpg",
                    "상태 화면과 운영 콘솔을 함께 확인하는 작업 환경",
                    { label: "도입 상담", href: "/contact" },
                    { label: "RoseHA 전체 보기", href: "/product/roseha" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "좋은 콘솔은 기능이 많기보다 상태가 빨리 읽혀야 합니다",
                    "관리 화면이 복잡하면 실제 장애 상황에서 오히려 판단을 늦춥니다.\nTechI는 운영팀이 자주 보는 상태, 경고, 검증 이력을 중심으로 콘솔 구조를 설명합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "콘솔 경험",
                    title: "복제와 전환 준비도를 빠르게 확인하는 화면 구성",
                    body: "운영 콘솔은 일상 점검과 비상 대응을 동시에 지원해야 합니다. 현재 상태, 지연, 경고, 최근 검증 결과가 한 흐름으로 읽혀야 현장 활용성이 높습니다.",
                    imageSrc: "/images/product-console-ui.jpg",
                    imageAlt: "복제 및 전환 상태를 보여주는 콘솔 화면",
                    layout: "imageLeft",
                    caption: "콘솔 / 상태, 전환 준비도, 감사 추적",
                    points: [
                        "운영자가 가장 자주 확인하는 상태를 전면에 배치합니다.",
                        "경고 해석과 조치 흐름이 명확한 구조를 지향합니다.",
                        "검증 이력과 운영 로그를 함께 남길 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 가치", [
                    { title: "일상 점검성", desc: "평소 운영에서도 자주 사용하는 화면이어야 합니다." },
                    { title: "비상 대응성", desc: "장애 시 빠르게 판단할 수 있는 정보 구조가 필요합니다." },
                    { title: "감사 추적성", desc: "상태 확인과 조치 이력이 함께 남아야 합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "운영팀이 상태를 더 빠르게 읽고 조치할 수 있습니다.",
                    "장애 대응 시 화면 이해에 드는 시간을 줄일 수 있습니다.",
                    "리허설, 검증, 운영 로그를 하나의 흐름에서 관리할 수 있습니다.",
                    "제품 도입 이후 실제 활용률이 높아집니다.",
                ])
            ),
            section("s7", "contact", contactForm("Management Console 상담")),
        ],
    }),
    "/product/lsware": page({
        id: "override_product_lsware",
        title: "Omniguard",
        slug: "/product/lsware",
        description: "권한, 접속, 감사 대응을 위한 Omniguard 보안 통제 제품군을 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("Omniguard", ["제품", "Omniguard"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "권한 통제는 정책 문서보다 운영 흐름 안에서 자연스럽게 동작해야 합니다",
                    "Omniguard는 서버 계정, 권한, 세션, 감사 로그를 개별 기능으로 나누지 않고 운영팀과 보안팀이 함께 사용할 수 있는 통제 구조로 정리합니다.",
                    "/images/security-control-room.jpg",
                    "보안 운영 환경과 접근 통제 상태를 확인하는 장면",
                    { label: "UAC 보기", href: "/product/lsware/uac" },
                    { label: "SecuMS 보기", href: "/product/lsware/secums" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("Omniguard 구성 요소", [
                    { title: "UAC", desc: "계정과 권한을 통제하고 이력을 남깁니다.", href: "/product/lsware/uac" },
                    { title: "UCC", desc: "접속 경로와 세션 사용 흐름을 통제합니다.", href: "/product/lsware/ucc" },
                    { title: "SecuMS", desc: "보안 이벤트와 감사 대응에 필요한 정보를 통합 관리합니다.", href: "/product/lsware/secums" },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "보안 거버넌스",
                    title: "권한과 접속, 로그가 하나의 통제 흐름으로 보이는 구조",
                    body: "보안 제품은 기능이 많을수록 좋은 것이 아니라 운영팀이 실제로 관리 가능한 구조여야 합니다. 정책 적용, 사용 이력, 증적 관리가 한 흐름으로 이어지도록 구성합니다.",
                    imageSrc: "/images/dark-console-operator.jpg",
                    imageAlt: "정책 화면과 로그를 함께 검토하는 보안 운영자",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 2832,
                    imageHeight: 4256,
                    caption: "보안 운영 / 정책, 접근, 감사 증적",
                    points: [
                        "권한 정책과 접속 정책을 한 체계로 관리합니다.",
                        "감사 대응에 필요한 로그와 증적을 함께 정리합니다.",
                        "운영팀이 실제로 쓸 수 있는 화면과 절차를 중시합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "infographic",
                infographic("Omniguard 운영 흐름", [
                    "권한 정책과 대상 시스템을 정의합니다.",
                    "접속·행위 기준을 적용합니다.",
                    "로그와 증적을 수집해 상태를 확인합니다.",
                    "감사 대응과 정기 점검 체계로 연결합니다.",
                ])
            ),
            section(
                "s6",
                "useCases",
                caseList("주요 적용 환경", [
                    "중요 서버 계정과 권한 사용 이력을 체계적으로 남겨야 하는 환경",
                    "감사 대응과 보안 운영을 별개가 아니라 하나의 흐름으로 관리해야 하는 환경",
                    "외주, 협력사, 운영 인력이 함께 접속하는 복합 환경",
                    "보안 정책 적용과 운영 편의성의 균형이 중요한 환경",
                ])
            ),
            section(
                "s7",
                "faq",
                faq("자주 받는 질문", [
                    {
                        q: "보안 정책을 강하게 걸면 운영이 더 불편해지지 않나요?",
                        a: "그래서 운영 흐름에 맞는 정책 설계가 중요합니다. Omniguard는 통제 강도와 현장 사용성을 함께 검토해 적용 범위를 잡습니다.",
                    },
                    {
                        q: "감사 대응까지 제품으로 바로 해결되나요?",
                        a: "제품은 핵심 기반입니다. 실제 대응 품질은 로그 보존 방식, 보고 체계, 운영 절차가 함께 설계되어야 올라갑니다.",
                    },
                    {
                        q: "기존 계정 체계와도 연동 검토가 가능한가요?",
                        a: "예. 현재 인증 체계, 계정 구조, 접속 방식까지 함께 살펴 실제 적용 범위를 제안합니다.",
                    },
                ])
            ),
            section("s8", "contact", contactForm("Omniguard 도입 상담")),
        ],
    }),
    "/product/lsware/uac": page({
        id: "override_product_lsware_uac",
        title: "UAC",
        slug: "/product/lsware/uac",
        description: "계정과 권한을 통제하고 이력을 남기는 Omniguard UAC 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("UAC", ["제품", "Omniguard", "UAC"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "권한 통제는 계정을 모으는 것이 아니라 사용 흐름을 관리하는 일입니다",
                    "UAC는 중요 계정의 생성, 승인, 사용, 이력 확인을 하나의 흐름으로 다룹니다. 보안팀과 운영팀이 함께 쓸 수 있는 구조가 중요합니다.",
                    "/images/contact-consultation-desk.jpg",
                    "권한 통제 절차와 운영 기준을 협의하는 미팅 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "Omniguard 전체 보기", href: "/product/lsware" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "UAC의 핵심은 계정 보관이 아니라 권한 사용 흐름의 가시화입니다",
                    "누가 어떤 이유로 어떤 계정을 사용했는지 바로 확인할 수 있어야 운영 편의성과 보안 통제가 함께 올라갑니다.\nTechI는 정책과 실제 사용 절차가 어긋나지 않도록 적용 범위를 정리합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "권한 통제",
                    title: "권한 요청과 사용 이력이 연결되는 관리 화면",
                    body: "권한 통제는 정책 문서보다 운영 흐름에서 자연스럽게 동작해야 합니다. 요청, 승인, 사용, 점검, 증적이 하나의 구조로 이어져야 현장에서 정착합니다.",
                    imageSrc: "/images/contact-laptop-work.jpg",
                    imageAlt: "권한 요청 흐름과 사용 이력을 검토하는 운영 담당자",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 3342,
                    imageHeight: 5939,
                    caption: "UAC / 요청, 승인, 사용 이력",
                    points: [
                        "계정 사용 이력을 빠르게 확인할 수 있습니다.",
                        "승인과 점검 흐름을 조직 기준에 맞게 설계합니다.",
                        "감사 대응용 기록 체계와 함께 운영할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 기능 관점", [
                    { title: "계정 수집", desc: "중요 계정과 대상 시스템을 구조적으로 정리합니다." },
                    { title: "승인 흐름", desc: "권한 요청과 승인 절차를 운영 기준에 맞춥니다." },
                    { title: "행위 이력", desc: "누가 언제 무엇을 했는지 빠르게 추적할 수 있습니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "계정 사용 이력을 더 투명하게 관리할 수 있습니다.",
                    "운영 편의성과 통제 강도를 균형 있게 맞출 수 있습니다.",
                    "감사 대응 자료 준비 시간이 크게 줄어듭니다.",
                    "중요 계정 남용 리스크를 줄일 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("UAC 상담")),
        ],
    }),
    "/product/lsware/ucc": page({
        id: "override_product_lsware_ucc",
        title: "UCC",
        slug: "/product/lsware/ucc",
        description: "접속 경로와 세션 흐름을 관리하는 Omniguard UCC 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("UCC", ["제품", "Omniguard", "UCC"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "접속은 허용 여부보다 어떤 경로로 어떻게 기록되느냐가 더 중요합니다",
                    "UCC는 운영 인력과 협력사의 접속 흐름을 정리하고, 세션 기준과 기록 체계를 만들어 접속 통제를 운영 현실에 맞게 적용할 수 있게 합니다.",
                    "/images/hero-network.jpg",
                    "접속 경로와 네트워크 통제 구조를 상징하는 이미지",
                    { label: "도입 상담", href: "/contact" },
                    { label: "Omniguard 전체 보기", href: "/product/lsware" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "접속 통제는 막는 정책이 아니라 통과 경로를 명확히 만드는 설계입니다",
                    "현장에서는 접속이 완전히 차단되는 것보다 승인된 경로로만 들어오도록 만드는 방식이 더 현실적일 수 있습니다.\nTechI는 운영 편의성과 감사 추적성을 함께 고려해 접속 흐름을 설계합니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "접속 경로",
                    title: "접속 경로와 세션 흐름을 읽는 통제 구조",
                    body: "누가 어떤 경로로 어떤 시스템에 접근했는지를 빠르게 확인할 수 있어야 보안팀과 운영팀 모두 부담이 줄어듭니다.",
                    imageSrc: "/images/office-desk-operator.jpg",
                    imageAlt: "접속 기록과 세션 상태를 검토하는 운영 담당자",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 2705,
                    imageHeight: 3500,
                    caption: "UCC / 경로 통제, 세션 추적, 감사 가시성",
                    points: [
                        "운영 인력과 협력사 접속 경로를 구분할 수 있습니다.",
                        "세션 정책과 기록 기준을 함께 설계합니다.",
                        "접속 통제를 운영 절차와 어긋나지 않게 적용합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 기능 관점", [
                    { title: "접속 경로 관리", desc: "승인된 접속 경로를 기준으로 통제 구조를 만듭니다." },
                    { title: "세션 정책", desc: "세션 생성, 종료, 점검 기준을 함께 정리합니다." },
                    { title: "감사 추적", desc: "누가 어떤 접속을 했는지 빠르게 확인할 수 있습니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "무분별한 접속 경로를 줄이고 정책 기반 통제가 가능해집니다.",
                    "외부 인력 접속에 대한 가시성이 높아집니다.",
                    "보안과 운영의 충돌을 줄이면서 기록 품질을 높일 수 있습니다.",
                    "감사 시 접속 관련 증적을 더 빠르게 준비할 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("UCC 상담")),
        ],
    }),
    "/product/lsware/secums": page({
        id: "override_product_lsware_secums",
        title: "SecuMS",
        slug: "/product/lsware/secums",
        description: "보안 이벤트와 운영 증적을 통합적으로 확인하는 Omniguard SecuMS 기능입니다.",
        sections: [
            section("s1", "header", subnavHeader("SecuMS", ["제품", "Omniguard", "SecuMS"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "감사 대응은 로그 수집보다 필요한 증적을 빨리 꺼낼 수 있어야 합니다",
                    "SecuMS는 보안 이벤트와 운영 이력을 함께 읽어 감사 대응 속도를 높이고, 반복 이슈를 운영 개선으로 이어지게 만드는 통합 보안 관리 기능입니다.",
                    "/images/dark-console-operator.jpg",
                    "보안 이벤트와 증적 흐름을 확인하는 운영 장면",
                    { label: "도입 상담", href: "/contact" },
                    { label: "Omniguard 전체 보기", href: "/product/lsware" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "감사 대응 품질은 로그 양보다 정리 방식에 달려 있습니다",
                    "로그가 많아도 어떤 이벤트를 어떤 근거로 찾아야 하는지 정리되어 있지 않으면 실제 대응 시간은 줄지 않습니다.\nSecuMS는 운영 기준에 맞는 보안 정보 정리 체계를 만드는 데 초점을 둡니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "보안 증적",
                    title: "보안 이벤트와 운영 이력을 함께 읽는 화면 구조",
                    body: "감사 대응은 보안팀만의 과제가 아닙니다. 운영팀과 보안팀이 같은 이벤트를 같은 기준으로 확인할 수 있어야 실제 대응 품질이 올라갑니다.",
                    imageSrc: "/images/security-control-room.jpg",
                    imageAlt: "보안 이벤트와 운영 상태를 함께 확인하는 통제 환경",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 7008,
                    imageHeight: 4672,
                    caption: "SecuMS / 이벤트, 증적, 운영 추적",
                    points: [
                        "이벤트와 증적을 한 흐름으로 정리합니다.",
                        "반복 이슈를 개선 과제로 이어지게 만듭니다.",
                        "감사 대응 자료 준비 시간을 줄이는 데 초점을 둡니다.",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("핵심 기능 관점", [
                    { title: "이벤트 통합", desc: "주요 보안 이벤트를 일관된 기준으로 정리합니다." },
                    { title: "증적 관리", desc: "감사 대응에 필요한 근거 자료를 빠르게 꺼낼 수 있습니다." },
                    { title: "운영 연계", desc: "이벤트를 운영 개선 과제와 함께 관리합니다." },
                ])
            ),
            section(
                "s6",
                "benefits",
                benefits("적용 후 기대 변화", [
                    "감사 대응 준비 시간이 줄어듭니다.",
                    "보안 이벤트 해석 편차를 줄일 수 있습니다.",
                    "운영팀과 보안팀이 같은 기준으로 상태를 볼 수 있습니다.",
                    "반복되는 보안 이슈를 구조적으로 줄일 수 있습니다.",
                ])
            ),
            section("s7", "contact", contactForm("SecuMS 상담")),
        ],
    }),
    "/about": page({
        id: "override_about",
        title: "회사 소개",
        slug: "/about",
        description: "20년 업력과 250억+ 규모, HPE Gold Partner 기반으로 AI와 데이터를 연결하는 TechI를 소개합니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "AI와 데이터를 연결하는 최적의 인프라 아키텍트",
                    "테크아이는 2004년 설립 이후 공공 및 엔터프라이즈 인프라를 설계해 왔습니다. 2025 회사소개서 기준 20년 업력, 2023년 매출 250억+, IT 전문 인력 23명과 2개 지사, HPE Gold Partner 기반으로 AI 시대의 물리적 기반을 설계합니다.",
                    "/images/about-team-strategy.jpg",
                    "기술 방향과 운영 기준을 논의하는 팀 미팅",
                    { label: "비전 · 미션 보기", href: "/about/vision-mission" },
                    { label: "상담 문의", href: "/contact" }
                )
            ),
            section(
                "s2",
                "content",
                richText(
                    "생성형 AI 시대일수록 물리 인프라의 설계력이 더 중요합니다",
                    "인공지능과 생성형 모델이 산업을 재편하는 시기일수록, 강력하고 안전한 물리적 인프라는 더 중요해집니다.\nTechI는 단순한 시스템 구축을 넘어 AI가 주도하는 미래를 가장 안정적으로 지탱하는 물리적 뼈대를 설계하고, 그 위에 운영·보안·데이터 활용 구조를 함께 올리는 회사를 지향합니다."
                )
            ),
            section(
                "s3",
                "media",
                mediaFeature({
                    eyebrow: "업무 방식",
                    title: "하드웨어 인프라 위에 AI·데이터 확장을 연결하는 방식",
                    body: "TechI는 Compute & Physical Layer, Management & Security Layer, Application & AI Layer를 따로 보지 않습니다. HCI, GPU, 대규모 스토리지 같은 물리 기반 위에 HA·DR·백업·클라우드 운영을 정리하고, 그 위에 스마트 관제·빅데이터 분석·AI STT/TTS 같은 업무 계층을 연결하는 구조를 지향합니다.",
                    imageSrc: "/images/consulting-review-photo.jpg",
                    imageAlt: "현장 구조와 운영 기준을 함께 검토하는 엔지니어링 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1068,
                    caption: "풀스택 인프라 / 물리, 관리, AI 응용 레이어",
                    points: [
                        "Compute & Physical: HCI, NVIDIA GPU, Intel 기반 대규모 스토리지",
                        "Management & Security: HA, DR, 엔터프라이즈 백업, 클라우드 매니지먼트",
                        "Application & AI: 스마트 관제, 빅데이터 분석, AI STT/TTS, 엔젤케어 솔루션",
                    ],
                })
            ),
            section(
                "s4",
                "cards",
                featureCards("핵심 현황", [
                    { title: "업력 20년", desc: "2004년 설립 이후 공공 및 엔터프라이즈 인프라 구축에서 신뢰를 쌓아 왔습니다." },
                    { title: "매출 250억+", desc: "2023년 매출액 기준 250억+ 규모와 안정적 재무구조를 기반으로 성장하고 있습니다." },
                    { title: "23명 · 2개 지사", desc: "IT 전문 인력 23명과 대전 본사·서울 지사를 통해 신속한 기술 대응 체계를 갖추고 있습니다." },
                    { title: "HPE Gold Partner", desc: "2004년부터 이어진 HPE 파트너십과 BBB0 기업신용등급으로 검증된 안정성을 보유하고 있습니다." },
                ])
            ),
            section(
                "s5",
                "timeline",
                timeline("TechI가 걸어온 확장", [
                    { year: "2004-2009", text: "테크아이 설립과 HPE(당시 HP) 파트너십 체결, 사내 부설연구소 설립으로 기술 내재화를 시작했습니다." },
                    { year: "2010-2019", text: "정보통신공사업 자격 획득과 함께 법무부, 대법원, GS그룹 등 대형 엔터프라이즈 전국 통합 유지보수망을 완성했습니다." },
                    { year: "2020-Present", text: "국방과학연구소 170+ Pflops AI 데이터센터와 국가 위성 지상체 인프라를 구축하며 초고도 컴퓨팅 아키텍트로 확장했습니다." },
                ])
            ),
            section("s6", "contact", contactForm("TechI와 상담하기")),
        ],
    }),
    "/about/vision-mission": page({
        id: "override_about_vision",
        title: "비전 · 미션",
        slug: "/about/vision-mission",
        description: "AI 시대를 지탱하는 물리적 인프라와 신뢰 구조를 설계하는 TechI의 비전과 미션입니다.",
        sections: [
            section("s1", "header", subnavHeader("비전 · 미션", ["회사 소개", "비전 · 미션"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "지속 가능한 미래를 위한 굳건한 약속",
                    "TechI는 AI와 생성형 모델이 산업을 재편하는 시대에, 그 변화를 가장 안정적으로 지탱하는 물리적 인프라와 운영 구조를 설계하는 회사를 지향합니다. 단순 구축을 넘어 AI 신뢰·리스크·보안 관리(TRiSM)의 핵심 기반까지 함께 고려합니다.",
                    "/images/hero-engineering.jpg",
                    "비전과 실행 기준을 논의하는 기술 협업 장면",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "상담 문의", href: "/contact" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "AI가 주도하는 미래를 가장 안정적으로 지탱하는 물리적 뼈대",
                    "TechI의 비전은 AI와 데이터가 올라갈 수 있는 강력하고 안전한 기반을 설계하는 것입니다.\n미션은 단순 시스템 구축을 넘어서, 고객 환경에 맞는 물리 인프라·운영·보안 구조를 설계하고 실제 운영 가능한 상태로 인계하는 데 있습니다."
                )
            ),
            section(
                "s4",
                "cards",
                featureCards("비전 · 미션 · 원칙", [
                    { title: "비전", desc: "AI와 데이터를 연결하는 최적의 인프라 아키텍트가 된다." },
                    { title: "미션", desc: "AI 시대를 지탱할 물리 인프라와 관리 구조를 안정적으로 설계하고 구축한다." },
                    { title: "원칙", desc: "기술 스펙보다 운영 가능성, 보안성, 검증 가능성을 우선한다." },
                    { title: "프레임워크", desc: "Gartner가 제시한 AI TRiSM 관점까지 고려해 신뢰 가능한 기반을 만든다." },
                ])
            ),
            section(
                "s5",
                "benefits",
                benefits("TechI가 약속하는 기준", [
                    "AI 도입을 소프트웨어만의 과제가 아니라 물리 인프라와 운영 기준의 문제로 함께 봅니다.",
                    "구축 이후에도 실제 운영팀이 사용할 수 있는 문서와 기준을 남깁니다.",
                    "고가용성, DR, 백업, 보안, 관리 체계를 AI 확장과 분리하지 않고 설계합니다.",
                    "신뢰와 리스크, 보안 관리 관점까지 포함한 장기 구조를 제안합니다.",
                ])
            ),
            section("s6", "contact", contactForm("비전 · 미션 관련 문의")),
        ],
    }),
    "/about/history": page({
        id: "override_about_history",
        title: "회사 연혁",
        slug: "/about/history",
        description: "2004년 설립 이후 공공·엔터프라이즈 인프라에서 AI 데이터센터까지 확장한 TechI의 연혁입니다.",
        sections: [
            section("s1", "header", subnavHeader("회사 연혁", ["회사 소개", "회사 연혁"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "진화하는 인프라, 20년의 압도적 모멘텀",
                    "TechI의 연혁은 단순히 사업 영역을 넓힌 기록이 아니라, 공공과 엔터프라이즈 인프라에서 AI·우주·초고도 컴퓨팅 영역으로 책임 범위를 확장해 온 과정입니다.",
                    "/images/about-office-building.jpg",
                    "회사의 성장과 확장을 상징하는 오피스 빌딩 전경",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "상담 문의", href: "/contact" }
                )
            ),
            section(
                "s3",
                "timeline",
                timeline("확장 과정", [
                    { year: "2004-2009", text: "테크아이 설립, HPE(당시 HP) 파트너십 체결, 사내 부설연구소 설립으로 기술 내재화를 시작했습니다." },
                    { year: "2010-2019", text: "정보통신공사업 자격을 확보하고 법무부, 대법원, GS그룹 등 대형 엔터프라이즈 전국 통합 유지보수망을 완성했습니다." },
                    { year: "2020-Present", text: "국방과학연구소 170+ Pflops AI 데이터센터와 국가 위성 지상체 대규모 인프라 구축을 수행하며 초고도 컴퓨팅 아키텍트로 도약했습니다." },
                ])
            ),
            section(
                "s4",
                "content",
                richText(
                    "단순 SI를 넘어 초고밀도 인프라 설계 역량으로 확장했습니다",
                    "최근 TechI는 국방과학연구소 딥러닝용 고밀도 GPU 클러스터, 국토지리정보원 위성 지상체, 관제 데이터망 아키텍처 등 국가 최상위 수준의 초고밀도 인프라 설계 역량을 수행하며 회사의 정체성을 더 분명하게 만들고 있습니다."
                )
            ),
            section(
                "s5",
                "cards",
                featureCards("대표 전환점", [
                    { title: "Foundation", desc: "설립과 동시에 HPE 파트너십, 연구소 기반 기술 내재화를 시작했습니다." },
                    { title: "Enterprise Expansion", desc: "공공과 대형 엔터프라이즈 유지보수·구축 역량을 전국 단위로 확장했습니다." },
                    { title: "AI & Space Era", desc: "AI 데이터센터와 국가 위성 지상체 등 초고성능 인프라 영역으로 도약했습니다." },
                ])
            ),
            section("s6", "contact", contactForm("회사 연혁 관련 문의")),
        ],
    }),
    "/about/partners": page({
        id: "override_about_partners",
        title: "협업 구조",
        slug: "/about/partners",
        description: "국가 중요 기관과 엔터프라이즈가 선택한 TechI의 파트너십과 주요 고객 구성을 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("협업 구조", ["회사 소개", "협업 구조"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "국가 중요 기관과 엔터프라이즈가 선택한 파트너",
                    "TechI는 HPE Gold Partner를 기반으로 Intel, IBM 등 핵심 기술 생태계와 협업하며, 공공·국가기관과 엔터프라이즈 고객의 물리 인프라와 운영 체계를 장기적으로 지원해 왔습니다.",
                    "/images/hero-network.jpg",
                    "연결 구조와 협업을 상징하는 네트워크 이미지",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "상담 문의", href: "/contact" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "파트너십은 제품 판매가 아니라 장기 운영 신뢰로 완성됩니다",
                    "TechI가 구축해 온 파트너십은 단기 납품 관계가 아니라 장기 운영 품질 위에 쌓인 관계입니다.\n코어 테크 파트너와의 협업, 공공·국가기관 레퍼런스, 엔터프라이즈 운영 경험이 함께 있어야 대규모 인프라 프로젝트에서 신뢰를 얻을 수 있다고 봅니다."
                )
            ),
            section(
                "s4",
                "cards",
                featureCards("Core Tech Partners", [
                    { title: "HPE Gold Partner", desc: "2004년부터 이어진 최상위 파트너십 기반으로 엔터프라이즈 인프라를 설계합니다." },
                    { title: "Intel", desc: "고성능 컴퓨팅, 스토리지, 서버 아키텍처에 필요한 핵심 생태계를 함께 구성합니다." },
                    { title: "IBM", desc: "대형 엔터프라이즈 환경에서 필요한 플랫폼 및 운영 경험을 함께 축적해 왔습니다." },
                    { title: "IRS Delivery Network", desc: "전국 19개 센터망 기반 전담 엔지니어 체계로 운영 대응력을 보강합니다." },
                ])
            ),
            section(
                "s5",
                "cards",
                featureCards("대표 고객군", [
                    { title: "Defense & Government", desc: "국방과학연구소, 대한민국 공군, 국토지리정보원, 국토안전관리원" },
                    { title: "Judicial & Public", desc: "대법원, 법무부 등 국가 핵심 기관의 인프라와 운영 체계를 수행해 왔습니다." },
                    { title: "Enterprise", desc: "GS리테일, GS네트웍스, 파르나스호텔, 대교" },
                    { title: "Manufacturing", desc: "앰코테크놀로지코리아 등 대규모 생산·운영 환경을 지원합니다." },
                ])
            ),
            section("s6", "contact", contactForm("협업 구조 관련 문의")),
        ],
    }),
    "/about/location": page({
        id: "override_about_location",
        title: "오시는 길",
        slug: "/about/location",
        description: "대전 본사와 서울 지사 기준의 TechI 방문 및 미팅 정보를 안내합니다.",
        sections: [
            section("s1", "header", subnavHeader("오시는 길", ["회사 소개", "오시는 길"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "대전 본사와 서울 지사에서 프로젝트 미팅을 진행합니다",
                    "TechI는 대전 본사와 서울 지사를 기준으로 방문 상담과 프로젝트 미팅을 운영합니다. 미팅은 단순 소개보다 현재 환경과 검토 범위를 빠르게 구조화하는 방식으로 진행합니다.",
                    "/images/about-office-lobby.jpg",
                    "방문 상담과 미팅을 위한 오피스 로비 공간",
                    { label: "문의하기", href: "/contact" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s3",
                "content",
                richText(
                    "오프라인 미팅도 검토 범위가 정리돼 있어야 밀도가 올라갑니다",
                    "방문 상담이든 온라인 미팅이든 현재 인프라 환경, 주요 과제, 기대 일정이 정리되어 있으면 첫 미팅의 품질이 크게 달라집니다.\nTechI는 초기 미팅 단계에서 필요한 자료와 확인 항목을 미리 안내해 보다 실질적인 논의가 이뤄지도록 돕습니다."
                )
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "미팅 설정",
                    title: "본사와 서울 지사 기준으로 현장 미팅을 운영합니다",
                    body: "프로젝트 성격에 따라 대전 본사 또는 서울 지사에서 미팅을 진행할 수 있습니다. 방문 전 현재 구조와 검토 과제를 공유해 주시면 더욱 밀도 있는 상담이 가능합니다.",
                    imageSrc: "/images/about-office-building.jpg",
                    imageAlt: "방문 상담을 위한 오피스 위치와 외부 전경",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 3024,
                    imageHeight: 4032,
                    caption: "사무소 안내 / 본사, 서울 지사, 프로젝트 미팅 설정",
                    points: [
                        "본사(HQ): 대전광역시 서구 둔산대로 117번길 25",
                        "서울 지사: 서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터",
                        "대표전화: 042-471-9430 / 웹사이트: www.techi.co.kr",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("사무소 안내", [
                    { title: "본사(HQ)", desc: "대전광역시 서구 둔산대로 117번길 25" },
                    { title: "서울 지사", desc: "서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터" },
                    { title: "대표전화", desc: "042-471-9430" },
                    { title: "웹사이트", desc: "www.techi.co.kr" },
                ])
            ),
            section("s6", "contact", contactForm("방문 상담 예약")),
        ],
    }),
    "/contact": page({
        id: "override_contact",
        title: "문의하기",
        slug: "/contact",
        description: "대전 본사와 서울 지사 기준으로 프로젝트 상담과 초기 진단 범위를 정리하는 TechI 문의 페이지입니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "문의는 단순 접수가 아니라 첫 진단 범위를 정리하는 단계입니다",
                    "현재 환경, 목표, 일정, 검토 범위를 남겨주시면 TechI가 대전 본사와 서울 지사 기준으로 적합한 미팅 방식과 우선 검토 항목을 빠르게 정리해 드립니다.",
                    "/images/hero-engineering.jpg",
                    "상담과 프로젝트 검토를 상징하는 협업 장면",
                    { label: "서비스 보기", href: "/service" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s2",
                "content",
                richText(
                    "좋은 첫 상담은 질문이 적은 상담이 아니라 핵심이 빨리 보이는 상담입니다",
                    "TechI는 단순 소개보다 현재 인프라 환경, 목표, 조직 제약, 일정, 검토 범위를 빠르게 구조화하는 방식으로 첫 상담을 진행합니다.\n그래야 이후 제안도 더 정확하고 불필요한 반복을 줄일 수 있습니다."
                )
            ),
            section(
                "s3",
                "media",
                mediaFeature({
                    eyebrow: "상담 흐름",
                    title: "프로젝트 초기 범위를 빠르게 읽는 상담 방식",
                    body: "구축, 개선, 보안, AI 도입처럼 주제가 달라도 핵심은 같습니다. 현재 상태와 목표를 같은 프레임으로 정리해야 다음 단계가 선명해집니다. 필요 시 대전 본사 또는 서울 지사 미팅으로 연결해 보다 상세한 검토를 이어갈 수 있습니다.",
                    imageSrc: "/images/contact-laptop-work.jpg",
                    imageAlt: "상담 내용을 정리하며 프로젝트 범위를 검토하는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 3342,
                    imageHeight: 5939,
                    caption: "상담 흐름 / 환경 파악, 범위 정의, 다음 단계",
                    points: [
                        "본사(HQ): 대전광역시 서구 둔산대로 117번길 25",
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
