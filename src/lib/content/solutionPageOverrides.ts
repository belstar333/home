import type { BlockData, Page, Section } from "./types";

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

function imageGallery(config: {
    eyebrow?: string;
    title: string;
    body?: string;
    items: Array<{
        imageSrc: string;
        imageAlt: string;
        caption: string;
        imageWidth?: number;
        imageHeight?: number;
    }>;
}): BlockData {
    return {
        type: "imageGallery",
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

const solutionPageOverrides: Record<string, Page> = {
    "/solution": page({
        id: "solution_root_override",
        title: "AI 솔루션",
        slug: "/solution",
        description: "회의, 코드, 검색, 추론, 시각화 업무에 실제로 연결되는 엔터프라이즈 AI 솔루션을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("AI 솔루션", ["솔루션"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "AI를 기능으로 붙이는 것이 아니라\n실제 업무 흐름으로\n연결합니다",
                    "TechI의 AI 솔루션은 데모 중심 화면이 아니라 회의, 문서, 코드, 검색, 추론, 운영 업무에 실제로 연결되는 구조를 목표로 합니다. 데이터 위치, 권한, 운영 기준까지 함께 설계해 조직 안에서 지속 가능한 AI 도입을 지원합니다.",
                    "/images/solution-agent-control-room.jpg",
                    "AI 운영 환경과 분석 화면을 상징하는 이미지",
                    { label: "AI 회의 시스템 보기", href: "/solution/meeting" },
                    { label: "엔터프라이즈 RAG 보기", href: "/solution/rag" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("도입 전에 먼저 정리하는 세 가지 기준", [
                    {
                        title: "어떤 업무를 줄일 것인가",
                        desc: "기능을 늘리는 접근보다 회의 정리, 코드 검토, 검색 응답 같은 반복 업무를 먼저 정리합니다.",
                    },
                    {
                        title: "어떤 데이터에 연결할 것인가",
                        desc: "사내 문서, 코드 저장소, 업무 시스템, 운영 데이터 등 실제 업무에 필요한 정보원을 분명히 합니다.",
                    },
                    {
                        title: "누가 어떻게 운영할 것인가",
                        desc: "권한, 로그, 배포, 모델 운영 방식까지 정리해 PoC 이후에도 계속 사용할 수 있는 체계를 만듭니다.",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "솔루션 포트폴리오",
                    title: "업무 흐름별 AI 솔루션 영역",
                    body: "회의 자동화, 코드 분석, 오케스트레이션, 로컬 LLM, 추론 엔진, 데이터 시각화, RAG까지 각각의 과제를 분리해 실제 업무에 맞는 방식으로 설계합니다.",
                    items: [
                        {
                            imageSrc: "/images/solution-meeting-ui.jpg",
                            imageAlt: "회의 내용을 정리하는 AI 회의 UI",
                            caption: "회의 자동화: 회의록 정리, 안건 추적, 후속 업무 생성",
                            imageWidth: 1325,
                            imageHeight: 1668,
                        },
                        {
                            imageSrc: "/images/solution-code-review.jpg",
                            imageAlt: "코드 분석 화면",
                            caption: "코드 분석: 리스크 탐지, 변경 리뷰, 품질 점검",
                            imageWidth: 7890,
                            imageHeight: 5263,
                        },
                        {
                            imageSrc: "/images/solution-knowledge-ui.jpg",
                            imageAlt: "문서 기반 검색과 답변 UI",
                            caption: "엔터프라이즈 RAG: 내부 문서 검색, 근거 제시, 권한 기반 응답",
                            imageWidth: 1692,
                            imageHeight: 1580,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("TechI AI 솔루션의 방향", [
                    "업무에 붙지 않는 실험형 AI보다 운영 가능한 AI를 우선합니다.",
                    "모델 선택보다 데이터 연결과 권한 구조를 먼저 설계합니다.",
                    "화면 시연이 아니라 현업이 계속 사용할 수 있는 배포와 운영 기준을 남깁니다.",
                    "단일 기능 도입이 아니라 확장 가능한 AI 아키텍처로 이어지게 만듭니다.",
                ])
            ),
        ],
    }),
    "/solution/meeting": page({
        id: "solution_meeting_override",
        title: "AI 회의 시스템",
        slug: "/solution/meeting",
        description: "회의 기록, 요약, 액션아이템 정리를 자동화하는 AI 회의 시스템을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("AI 회의 시스템", ["솔루션", "AI 회의 시스템"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "회의가 끝난 뒤\n정리 업무가 다시 시작되지 않도록\n자동화합니다",
                    "회의 시스템은 녹취보다 정리 품질이 중요합니다. TechI는 회의 내용 요약, 핵심 결정사항 정리, 후속 액션 생성, 공유 포맷 정리를 하나의 흐름으로 연결해 실제 협업 효율을 높입니다.",
                    "/images/solution-meeting-room.jpg",
                    "회의실과 협업 장면을 보여주는 이미지",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("회의 자동화가 실제로 도움이 되려면", [
                    {
                        title: "핵심 요약 정확도",
                        desc: "발언 전체가 아니라 의사결정, 쟁점, 후속 조치 중심으로 정리되어야 현업에서 다시 읽게 됩니다.",
                    },
                    {
                        title: "업무 연계",
                        desc: "회의록 생성으로 끝나는 것이 아니라 액션아이템과 담당자, 일정 정보까지 연결되어야 실제 업무가 줄어듭니다.",
                    },
                    {
                        title: "공유 포맷 표준화",
                        desc: "팀과 조직마다 다른 회의 문화에 맞춰 출력 형식과 요약 기준을 조정해 재사용성을 높입니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "회의 자동화 흐름",
                    title: "좋은 회의 AI는 내용을 적는 것이 아니라 후속 조치를 앞당깁니다",
                    body: "회의 자동화는 요약 품질이 핵심입니다. 누가 무엇을 결정했고 어떤 후속 업무가 생겼는지 바로 보이도록 정리되어야 합니다. TechI는 회의 화면과 업무 연결 구조를 함께 설계해 실무에 바로 사용할 수 있는 회의 AI를 만듭니다.",
                    imageSrc: "/images/solution-meeting-ui.jpg",
                    imageAlt: "AI 회의 시스템 화면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1325,
                    imageHeight: 1668,
                    caption: "회의 AI / 요약, 액션 추출, 공유 포맷",
                    points: [
                        "회의 요약과 후속 액션을 동시에 정리합니다.",
                        "조직별 회의 포맷에 맞춰 출력 구조를 맞춥니다.",
                        "회의 기록이 협업 시스템과 자연스럽게 이어지도록 설계합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 기대 효과", [
                    "회의 후 정리와 공유에 쓰던 시간이 크게 줄어듭니다.",
                    "결정사항과 액션아이템 누락이 줄어 협업 품질이 높아집니다.",
                    "회의 기록이 자산으로 쌓여 검색과 회고에 활용할 수 있습니다.",
                    "반복 회의 업무를 표준화해 조직별 편차를 줄일 수 있습니다.",
                ])
            ),
        ],
    }),
    "/solution/code-analysis": page({
        id: "solution_code_analysis_override",
        title: "AI 코드 분석기",
        slug: "/solution/code-analysis",
        description: "코드 변경 리스크, 품질 이슈, 구조적 문제를 빠르게 파악하는 AI 코드 분석 솔루션을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("AI 코드 분석기", ["솔루션", "AI 코드 분석기"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "코드 리뷰가 느린 이유는\n읽을 내용이 많아서가 아니라\n판단 기준이 분산되어 있기 때문입니다",
                    "AI 코드 분석기는 단순 요약 도구가 아니라 변경 위험을 빠르게 드러내는 보조 체계여야 합니다. TechI는 코드 구조, 변경 범위, 영향 분석, 품질 기준을 함께 반영해 실무 리뷰 속도를 높입니다.",
                    "/images/hero-code.jpg",
                    "코드 분석과 엔지니어링 화면을 상징하는 이미지",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("실무형 코드 분석기의 핵심", [
                    {
                        title: "리스크 우선순위화",
                        desc: "모든 변경을 같은 무게로 다루지 않고 장애 가능성, 보안 영향, 구조 변경 범위를 중심으로 정렬합니다.",
                    },
                    {
                        title: "검토 포인트 추출",
                        desc: "사람이 반드시 봐야 하는 부분을 먼저 추려 리뷰 시간을 더 가치 있는 판단에 쓰게 만듭니다.",
                    },
                    {
                        title: "팀 기준 반영",
                        desc: "조직별 코드 스타일과 품질 기준, 리뷰 문화에 맞춰 분석 결과가 다르게 보이도록 설계할 수 있습니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "코드 분석",
                    title: "분석 결과는 많을수록 좋은 것이 아니라 더 빨리 판단하게 만들어야 합니다",
                    body: "개발 조직에서 필요한 것은 요약된 설명이 아니라 어디를 먼저 봐야 하는지에 대한 신호입니다. TechI는 코드 변경점을 실무 검토 흐름에 맞게 정리해 리뷰와 배포 판단을 더 빠르게 할 수 있게 만듭니다.",
                    imageSrc: "/images/solution-code-review.jpg",
                    imageAlt: "코드 리뷰와 분석 장면 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 7890,
                    imageHeight: 5263,
                    caption: "코드 AI / 리스크 탐지, 리뷰 포인트, 품질 분석",
                    points: [
                        "변경 리스크를 우선순위화해 보여줍니다.",
                        "실제 리뷰 포인트만 빠르게 추려줍니다.",
                        "팀별 품질 기준을 반영한 분석 구조로 확장할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 활용 효과", [
                    "리뷰 사이클이 짧아지고 변경 검토 품질이 일정해집니다.",
                    "대규모 변경이나 신규 인력 투입 시 코드 파악 속도가 빨라집니다.",
                    "보안·품질 리스크를 더 이른 단계에서 발견할 수 있습니다.",
                    "코드 리뷰가 사람 경험만이 아니라 구조화된 기준을 갖게 됩니다.",
                ])
            ),
        ],
    }),
    "/solution/agent-orchestration": page({
        id: "solution_agent_orchestration_override",
        title: "에이전트 오케스트레이션",
        slug: "/solution/agent-orchestration",
        description: "복수의 AI 에이전트와 도구를 업무 흐름에 맞게 연결하는 에이전트 오케스트레이션 솔루션을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("에이전트 오케스트레이션", ["솔루션", "에이전트 오케스트레이션"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "여러 AI를 붙이는 것보다\n업무 순서에 맞게 조율하는 것이\n더 중요합니다",
                    "에이전트 오케스트레이션은 도구를 많이 연결하는 기술이 아니라, 어떤 요청을 어떤 순서로 처리하고 누가 최종 확인하는지 정리하는 구조입니다. TechI는 에이전트 흐름을 운영 가능한 업무 체계로 구성합니다.",
                    "/images/solution-agent-control-room.jpg",
                    "여러 AI 워크플로와 운영 화면을 상징하는 이미지",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("오케스트레이션 설계 포인트", [
                    {
                        title: "역할 분리",
                        desc: "검색, 요약, 판단, 실행, 검토 역할을 나눠 각 에이전트가 어떤 책임을 가지는지 명확히 합니다.",
                    },
                    {
                        title: "검토와 승인",
                        desc: "중요 작업은 사람 승인 단계를 남기고, 자동 실행은 범위를 제한해 리스크를 낮춥니다.",
                    },
                    {
                        title: "로그와 추적",
                        desc: "어떤 입력과 도구 호출로 결과가 만들어졌는지 추적 가능해야 운영과 개선이 가능합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "오케스트레이션",
                    title: "에이전트는 많아질수록 역할이 더 선명해야 합니다",
                    body: "업무 자동화에서 중요한 것은 복잡한 에이전트 구성이 아니라 예측 가능한 흐름입니다. TechI는 검색, 분석, 실행, 검토 단계를 명확히 나누고 운영 기준과 로그 체계를 함께 설계해 실제 업무에 쓸 수 있는 오케스트레이션을 구현합니다.",
                    imageSrc: "/images/solution-monitoring-room.jpg",
                    imageAlt: "오케스트레이션과 운영을 상징하는 모니터링 룸 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 5464,
                    imageHeight: 8192,
                    caption: "에이전트 흐름 / 역할 분리, 승인 게이트, 추적 실행",
                    points: [
                        "에이전트별 역할과 책임을 분리합니다.",
                        "중요 작업에는 승인과 검토 단계를 남깁니다.",
                        "로그와 실행 이력을 남겨 운영과 품질 개선에 활용합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("적용 효과", [
                    "단일 챗봇보다 복잡한 업무를 더 일관된 흐름으로 자동화할 수 있습니다.",
                    "승인과 로그 기준이 있어 운영 리스크를 낮출 수 있습니다.",
                    "반복 업무를 역할 단위로 분리해 확장과 유지보수가 쉬워집니다.",
                    "여러 시스템을 연결하더라도 추적 가능한 운영 체계를 유지할 수 있습니다.",
                ])
            ),
        ],
    }),
    "/solution/local-llm": page({
        id: "solution_local_llm_override",
        title: "로컬 LLM",
        slug: "/solution/local-llm",
        description: "보안과 데이터 통제를 중시하는 조직을 위한 로컬 LLM 인프라와 운영 체계를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("로컬 LLM", ["솔루션", "로컬 LLM"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "민감한 데이터를 다룰수록\n모델 성능보다 먼저\n통제 구조가 필요합니다",
                    "로컬 LLM은 단순히 사내 설치형 모델이 아니라 데이터 경로, 권한, 운영 비용, 추론 자원까지 고려한 인프라 설계가 필요합니다. TechI는 보안과 운영 현실을 함께 반영한 로컬 LLM 환경을 제안합니다.",
                    "/images/hero-cloud.jpg",
                    "사내 AI 인프라와 클라우드 구조를 상징하는 이미지",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("로컬 LLM 설계에서 먼저 보는 항목", [
                    {
                        title: "데이터 반입·반출 통제",
                        desc: "어떤 데이터가 모델에 들어가고 어떤 결과가 외부로 나갈 수 있는지 경계를 분명히 해야 합니다.",
                    },
                    {
                        title: "추론 자원 계획",
                        desc: "GPU, 저장소, 캐시, 네트워크를 함께 고려해 실제 수요에 맞는 추론 인프라를 설계합니다.",
                    },
                    {
                        title: "운영 방식",
                        desc: "모델 버전 관리, 모니터링, 로그, 장애 대응까지 운영팀이 관리 가능한 수준으로 구조를 단순화합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "사내 AI 스택",
                    title: "로컬 LLM은 모델보다 운영 구조에서 성패가 갈립니다",
                    body: "민감한 데이터 환경에서는 모델 선택만으로 프로젝트가 끝나지 않습니다. 어떤 데이터가 들어오고, 누가 접근하며, 추론 자원이 어떻게 소모되는지까지 운영 체계로 묶여야 안정적인 사내 AI가 됩니다.",
                    imageSrc: "/images/hero-datacenter.jpg",
                    imageAlt: "로컬 AI 인프라를 상징하는 데이터센터 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 6016,
                    imageHeight: 4016,
                    caption: "사내 LLM / 데이터 경계, 추론 용량, 운영 거버넌스",
                    points: [
                        "데이터 경계와 접근 권한을 우선 설계합니다.",
                        "실사용량 기준의 추론 인프라 구조를 잡습니다.",
                        "운영팀이 감당 가능한 배포·모니터링 체계를 만듭니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 시 기대할 수 있는 변화", [
                    "민감 정보 환경에서도 더 높은 통제 수준으로 AI를 도입할 수 있습니다.",
                    "외부 API 의존을 줄이고 사내 운영 기준에 맞는 AI 체계를 확보할 수 있습니다.",
                    "모델 운영과 인프라 운영을 분리해 지속 가능성을 높일 수 있습니다.",
                    "향후 RAG, 추론, 업무 자동화로 확장 가능한 기반을 마련할 수 있습니다.",
                ])
            ),
        ],
    }),
    "/solution/ai-inference": page({
        id: "solution_ai_inference_override",
        title: "AI 추론 엔진",
        slug: "/solution/ai-inference",
        description: "응답 성능, 처리량, 안정성을 고려한 엔터프라이즈 AI 추론 엔진 구축 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("AI 추론 엔진", ["솔루션", "AI 추론 엔진"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "AI 응답 품질은\n모델보다 먼저\n추론 구조에서 결정됩니다",
                    "AI 추론 엔진은 빠른 응답과 안정적인 처리량, 비용 효율을 동시에 고려해야 합니다. TechI는 모델 호출 구조, 캐시, 워크로드 분산, 운영 모니터링까지 함께 설계해 엔터프라이즈 환경에 맞는 추론 체계를 구축합니다.",
                    "/images/solution-ai-inference-ui.jpg",
                    "AI 추론과 운영 지표 화면",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("추론 엔진 설계 핵심 요소", [
                    {
                        title: "응답 시간과 처리량",
                        desc: "피크 시간대 부하와 동시 요청 수를 반영해 추론 경로를 설계하고 병목을 줄입니다.",
                    },
                    {
                        title: "모델 호출 전략",
                        desc: "단일 모델 의존보다 요청 유형별 경량·고성능 모델 분기를 설계해 비용과 성능을 균형 있게 맞춥니다.",
                    },
                    {
                        title: "운영 가시성",
                        desc: "지연 시간, 실패율, 토큰 사용량, 캐시 적중률 등을 운영 지표로 관리해야 지속적인 최적화가 가능합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "추론 운영",
                    title: "추론 엔진은 AI 기능보다 운영 품질이 먼저 평가받습니다",
                    body: "사용자는 응답 속도와 안정성으로 시스템을 판단합니다. TechI는 모델 성능뿐 아니라 요청 분산, 캐시, 장애 대응, 관제 구조를 함께 설계해 기업 환경에서 쓸 수 있는 추론 엔진을 제공합니다.",
                    imageSrc: "/images/solution-ai-inference-ui.jpg",
                    imageAlt: "AI 추론 엔진 운영 UI",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 2294,
                    imageHeight: 1632,
                    caption: "추론 엔진 / 지연 제어, 워크로드 분산, 관측 지표",
                    points: [
                        "요청 유형별 추론 경로를 설계합니다.",
                        "지연 시간과 처리량을 운영 지표로 관리합니다.",
                        "캐시와 장애 대응 체계를 함께 포함합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 효과", [
                    "응답 지연과 품질 편차를 줄여 사용자 경험이 안정됩니다.",
                    "모델 호출 비용과 인프라 비용을 더 합리적으로 제어할 수 있습니다.",
                    "트래픽 증가 시에도 확장 가능한 구조를 만들 수 있습니다.",
                    "운영팀이 AI 서비스를 일반 서비스처럼 관제할 수 있게 됩니다.",
                ])
            ),
        ],
    }),
    "/solution/data-visualization": page({
        id: "solution_data_visualization_override",
        title: "데이터 시각화",
        slug: "/solution/data-visualization",
        description: "운영 데이터와 의사결정 지표를 한 화면에서 빠르게 읽을 수 있도록 정리하는 데이터 시각화 솔루션을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("데이터 시각화", ["솔루션", "데이터 시각화"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "좋은 대시보드는\n정보를 더 많이 보여주는 것이 아니라\n판단을 더 빨리 만들게 합니다",
                    "데이터 시각화는 그래프를 그리는 작업이 아니라 무엇을 보고 결정할지 정의하는 작업입니다. TechI는 운영 지표, 경영 지표, 현업 지표를 목적에 맞게 재구성해 한눈에 읽히는 시각화 체계를 설계합니다.",
                    "/images/solution-data-workshop.jpg",
                    "데이터 워크숍과 분석 협업 장면",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("시각화 설계의 세 가지 질문", [
                    {
                        title: "누가 보는가",
                        desc: "운영자, 관리자, 경영진이 같은 데이터를 보더라도 필요한 화면 구조와 강조 지표는 다릅니다.",
                    },
                    {
                        title: "무엇을 결정하는가",
                        desc: "경고, 투자, 성능 조정, 인력 배치 등 실제 의사결정과 연결되지 않는 시각화는 오래 남지 않습니다.",
                    },
                    {
                        title: "언제 갱신되는가",
                        desc: "실시간인지 일간 보고인지에 따라 데이터 구조, 질의 성능, 화면 밀도가 달라져야 합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "의사결정 대시보드",
                    title: "시각화는 보기 좋은 화면보다 운영 판단을 앞당겨야 합니다",
                    body: "많은 대시보드가 데이터를 예쁘게 보여주는 데 그칩니다. TechI는 사용자의 역할과 의사결정 순간을 중심으로 지표 구조를 설계해 더 적은 화면으로 더 빠른 판단이 가능하게 만듭니다.",
                    imageSrc: "/images/solution-knowledge-ui.jpg",
                    imageAlt: "운영 데이터와 지표가 정리된 대시보드 화면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1692,
                    imageHeight: 1580,
                    caption: "시각화 / 역할별 KPI, 실행형 대시보드, 운영 가독성",
                    points: [
                        "역할별로 필요한 지표와 시각화 밀도를 다르게 설계합니다.",
                        "운영과 보고 목적을 분리해 화면 책임을 명확히 합니다.",
                        "의사결정이 필요한 지점을 더 빠르게 드러내는 구조를 만듭니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("기대 효과", [
                    "운영팀과 관리자가 같은 데이터로 더 빠르게 소통할 수 있습니다.",
                    "불필요한 리포트 작업을 줄이고 실시간 판단이 쉬워집니다.",
                    "지표를 역할별로 분리해 회의와 보고 효율이 높아집니다.",
                    "AI 분석 결과를 더 신뢰도 있게 시각적으로 전달할 수 있습니다.",
                ])
            ),
        ],
    }),
    "/solution/rag": page({
        id: "solution_rag_override",
        title: "엔터프라이즈 RAG",
        slug: "/solution/rag",
        description: "권한과 근거를 함께 관리하는 엔터프라이즈 문서 검색 및 답변 시스템을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("엔터프라이즈 RAG", ["솔루션", "엔터프라이즈 RAG"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "사내 문서 검색은\n정답보다 먼저\n근거와 권한이 중요합니다",
                    "엔터프라이즈 RAG는 문서를 많이 읽는 것보다 누가 어떤 문서에 접근할 수 있고 어떤 근거를 제시하는지가 중요합니다. TechI는 검색 품질, 권한 제어, 출처 제시를 함께 설계해 조직이 신뢰할 수 있는 문서 기반 AI를 구현합니다.",
                    "/images/solution-knowledge-ui.jpg",
                    "내부 문서 기반 검색과 답변 UI",
                    { label: "도입 문의하기", href: "/contact" },
                    { label: "솔루션 전체 보기", href: "/solution" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("엔터프라이즈 RAG에서 핵심이 되는 기준", [
                    {
                        title: "권한 기반 검색",
                        desc: "사용자와 조직 권한에 따라 볼 수 있는 문서만 조회되어야 내부 활용이 가능해집니다.",
                    },
                    {
                        title: "출처와 인용",
                        desc: "답변만 보여주는 것이 아니라 어떤 문서를 근거로 요약했는지 명확히 표시해야 신뢰가 생깁니다.",
                    },
                    {
                        title: "지속적 갱신",
                        desc: "문서 색인, 메타데이터, 운영 정책이 계속 갱신되어야 검색 품질이 유지됩니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "지식 검색",
                    title: "좋은 RAG는 답변을 잘하는 시스템이 아니라 잘못 답하지 않는 시스템입니다",
                    body: "기업 환경에서 문서 검색 AI는 정확도만큼 권한 통제와 근거 제시가 중요합니다. TechI는 검색 인덱스, 메타데이터, 권한 구조, 응답 포맷을 함께 설계해 실제 조직이 신뢰할 수 있는 RAG 환경을 만듭니다.",
                    imageSrc: "/images/solution-knowledge-ui.jpg",
                    imageAlt: "엔터프라이즈 문서 검색과 답변 UI",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1692,
                    imageHeight: 1580,
                    caption: "엔터프라이즈 RAG / 권한 기반 검색, 출처 추적, 근거 기반 답변",
                    points: [
                        "권한 기반 검색 결과만 노출되도록 구성합니다.",
                        "답변의 근거 문서를 명확히 제시합니다.",
                        "색인 품질과 문서 갱신 주기를 운영 체계에 포함합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 도입 효과", [
                    "내부 지식 검색 시간이 줄고 답변 활용 신뢰도가 높아집니다.",
                    "문서 기반 문의와 반복 질의를 더 빠르게 처리할 수 있습니다.",
                    "권한 통제가 반영된 형태로 사내 지식을 활용할 수 있습니다.",
                    "향후 로컬 LLM이나 업무 에이전트와 연결하기 쉬운 기반이 됩니다.",
                ])
            ),
        ],
    }),
};

export default solutionPageOverrides;
