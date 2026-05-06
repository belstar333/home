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
            title: `${config.title} | TechI`,
            description: config.description,
        },
        sections: config.sections,
    };
}

function subnavHeader(title: string, breadcrumbs: string[]): BlockData {
    return {
        type: "subnavHeader",
        data: {
            eyebrow: "TechI",
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

function timeline(title: string, items: Array<{ year: string; text: string }>): BlockData {
    return {
        type: "timeline",
        data: {
            title,
            items,
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

function contactForm(title: string, note: string): BlockData {
    return {
        type: "contactForm",
        data: {
            title,
            note,
            anchor: "contact",
        },
    };
}

const companyPageOverrides: Record<string, Page> = {
    "/about": page({
        id: "company_about_root",
        title: "회사 소개",
        slug: "/about",
        description:
            "기술을 공급하는 데서 끝나지 않고 운영 가능한 결과를 만드는 TechI의 일하는 방식과 신뢰 기반을 소개합니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "기술을 공급하는 회사보다 운영 가능한 결과를 만드는 회사를 지향합니다",
                    "TechI는 서버, 네트워크, 데이터 보호, 운영 지원, 업무형 AI까지 각 기술을 따로 나누기보다 고객 환경이 실제로 안정적으로 돌아가게 만드는 데 집중해 왔습니다. 구축 이후의 운영, 인수, 대응까지 이어지는 구조를 만드는 것이 저희가 일하는 방식입니다.",
                    "/images/about-team-strategy.jpg",
                    "TechI 엔지니어가 프로젝트 방향과 구조를 검토하는 장면",
                    { label: "회사 연혁 보기", href: "/about/history" },
                    { label: "상담 문의하기", href: "/contact" }
                )
            ),
            section(
                "s2",
                "cards",
                featureCards("기술보다 먼저 보는 기준이 있습니다", [
                    {
                        title: "보기 좋은 제안보다 실제 운영 가능성",
                        desc: "문서가 멋있어 보여도 운영이 어려우면 좋은 결과라고 보기 어렵습니다. 설치 이후 누가 어떻게 운영할지까지 먼저 생각합니다.",
                    },
                    {
                        title: "장비 납품보다 인수 이후의 안정성",
                        desc: "도입 순간보다 그 다음이 더 중요합니다. 실제 담당자가 바로 사용할 수 있는 구조와 기준이 남아야 프로젝트가 완성됩니다.",
                    },
                    {
                        title: "기술 스펙보다 고객 환경에 맞는 선택",
                        desc: "성능이 높다고 항상 좋은 선택은 아닙니다. 예산, 일정, 운영 인력, 확장 가능성까지 함께 보고 현실적인 방향을 제안합니다.",
                    },
                    {
                        title: "일회성 구축보다 계속 관리 가능한 구조",
                        desc: "프로젝트는 끝날 수 있지만 운영은 계속됩니다. 점검 기준, 보고 방식, 대응 흐름까지 함께 남기는 것을 중요하게 생각합니다.",
                    },
                ])
            ),
            section(
                "s3",
                "cards",
                featureCards("한 가지 기술만 다뤄온 회사가 아니라 실제 운영 환경을 다뤄온 팀입니다", [
                    {
                        title: "20년 이상의 프로젝트 경험",
                        desc: "2004년 설립 이후 공공과 엔터프라이즈 인프라 프로젝트를 지속적으로 수행해 왔습니다.",
                    },
                    {
                        title: "공공 · 엔터프라이즈 · 제조 · 유통 환경 경험",
                        desc: "안정성과 연속성이 중요한 현장에서 요구되는 기준을 실제 프로젝트를 통해 쌓아왔습니다.",
                    },
                    {
                        title: "23명 · 2개 지사 기반의 실행 체계",
                        desc: "전문 인력과 대전·서울 거점을 중심으로 설계, 검토, 운영 지원을 연결합니다.",
                    },
                    {
                        title: "HPE Gold Partner와 확장 가능한 기술 기반",
                        desc: "장기 파트너십과 검증된 공급 안정성을 바탕으로 현실적인 제안을 구성합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "How We Work",
                    title: "저희는 주로 이런 장면 속에서 일합니다",
                    body: "무엇을 도입할지보다 현재 환경에서 무엇이 먼저 필요한지 정리하는 일, 설치 이후 운영이 흔들리지 않게 만드는 일이 저희 업무의 중심입니다.",
                    items: [
                        {
                            imageSrc: "/images/technical-design-review.jpg",
                            imageAlt: "엔지니어가 설계 자료를 검토하는 장면",
                            caption: "설계와 범위를 함께 검토하는 회의. 무엇을 넣을지보다 무엇이 먼저 필요한지부터 정리합니다.",
                            imageWidth: 6000,
                            imageHeight: 4000,
                        },
                        {
                            imageSrc: "/images/server-photo-install.jpg",
                            imageAlt: "현장 설치 작업이 진행되는 장면",
                            caption: "현장 설치와 점검 과정. 랙 배치, 배선, 연결 상태처럼 실제 운영에 영향을 주는 부분을 꼼꼼히 봅니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/dark-console-operator.jpg",
                            imageAlt: "운영 화면을 점검하는 콘솔 환경",
                            caption: "운영 화면과 상태 확인. 구축 이후에도 담당자가 빠르게 판단할 수 있어야 한다고 생각합니다.",
                            imageWidth: 1600,
                            imageHeight: 1066,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Why Clients Choose TechI",
                    title: "결국 이런 이유로 저희를 찾게 됩니다",
                    body: "한 영역만 보는 것이 아니라 전체 운영 환경 안에서 문제를 보고, 실제 설치와 변경, 점검, 인수 과정을 거친 경험을 바탕으로 현실적인 방향을 제안합니다. 도입 순간보다 운영 이후가 더 중요하다는 전제를 놓지 않는 것도 저희가 자주 선택되는 이유 중 하나입니다.",
                    imageSrc: "/images/consulting-review-photo.jpg",
                    imageAlt: "프로젝트 문서를 함께 검토하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1068,
                    caption: "Delivery Mindset / scope review, real-world fit, operational continuity",
                    points: [
                        "기술 범위가 넓어서 전체 운영 환경 안에서 문제를 볼 수 있습니다",
                        "현장 경험이 있어 설치, 변경, 점검, 인수 과정의 현실을 압니다",
                        "운영까지 생각해서 제안하기 때문에 이후 단계가 더 분명해집니다",
                    ],
                })
            ),
            section(
                "s6",
                "timeline",
                timeline("TechI가 걸어온 흐름", [
                    { year: "2004-2009", text: "회사 설립, HPE 파트너십 체결, 기업부설연구소 설립으로 엔지니어링 기반을 마련했습니다." },
                    { year: "2010-2019", text: "공공·엔터프라이즈 구축과 유지보수 범위를 넓히며 현장 실행력을 축적했습니다." },
                    { year: "2020-Present", text: "AI 데이터센터, 위성 지상체, 고밀도 GPU 클러스터 등 초고성능 인프라 영역으로 확장했습니다." },
                ])
            ),
            section(
                "s7",
                "contact",
                contactForm(
                    "회사 및 프로젝트 상담",
                    "새로운 구축이 필요한지, 기존 환경을 정리해야 하는지, 아니면 운영과 지원 체계를 먼저 손봐야 하는지 아직 애매해도 괜찮습니다. 현재 고민을 알려주시면 가장 현실적인 다음 단계를 함께 정리해드리겠습니다."
                )
            ),
        ],
    }),
    "/about/vision-mission": page({
        id: "company_about_vision",
        title: "비전 · 미션",
        slug: "/about/vision-mission",
        description:
            "AI 시대를 지탱하는 물리적 인프라와 운영 구조를 설계하는 TechI의 비전과 미션을 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("비전 · 미션", ["회사 소개", "비전 · 미션"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "AI 시대를 지탱하는 물리적 기반을 설계합니다",
                    "TechI의 비전은 AI와 데이터가 멈추지 않고 흐를 수 있는 안정적인 물리 기반을 설계하는 것입니다. 성능만이 아니라 안정성, 보안성, 복구 가능성, 운영 지속성을 함께 보는 구조를 제안합니다.",
                    "/images/hero-engineering.jpg",
                    "엔지니어가 설계 원칙과 운영 기준을 검토하는 장면",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "회사 연혁 보기", href: "/about/history" }
                )
            ),
            section(
                "s3",
                "gallery",
                imageGallery({
                    eyebrow: "Design Context",
                    title: "비전은 결국 어떤 인프라를 보느냐에서 시작됩니다",
                    items: [
                        {
                            imageSrc: "/images/technical-design-review.jpg",
                            imageAlt: "엔지니어가 설계 문서를 검토하는 장면",
                            caption: "기술 방향과 운영 기준을 함께 검토하는 설계 문화",
                            imageWidth: 6000,
                            imageHeight: 4000,
                        },
                        {
                            imageSrc: "/images/hero-network.jpg",
                            imageAlt: "네트워크 인프라 전경",
                            caption: "AI 시대에도 중심은 안정적인 물리 기반과 연결 구조입니다.",
                            imageWidth: 2400,
                            imageHeight: 1600,
                        },
                        {
                            imageSrc: "/images/server-photo-racks.jpg",
                            imageAlt: "서버 랙과 인프라 장비 전경",
                            caption: "운영 지속성은 실제 장비 환경 위에서 완성됩니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s4",
                "cards",
                featureCards("Core Principles", [
                    { title: "Vision", desc: "AI와 데이터를 연결하는 최적의 인프라 아키텍트가 된다." },
                    { title: "Mission", desc: "AI 시대를 지탱할 물리 인프라와 운영 구조를 안정적으로 설계한다." },
                    { title: "Principle", desc: "성능보다 먼저 운영 가능성, 보안성, 복구 가능성을 본다." },
                ])
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Design Principle",
                    title: "좋은 인프라는 결국 현장에서 오래 버티는 인프라입니다",
                    body: "TechI는 AI 인프라를 단순한 고성능 장비 구성으로 보지 않습니다. AI TRiSM 관점의 보안과 거버넌스, 이중화, 백업, 운영 문서와 점검 기준까지 포함해 장기 운영 구조를 설계합니다.",
                    imageSrc: "/images/hero-datacenter.jpg",
                    imageAlt: "고밀도 데이터센터 인프라 전경",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 2000,
                    imageHeight: 1333,
                    caption: "AI Infrastructure / resilience, governance, continuity",
                    points: [
                        "AI 워크로드를 위한 고밀도 물리 인프라 설계",
                        "보안·거버넌스·복구 기준을 기본 구조에 포함",
                        "도입 이후에도 유지되는 운영 문서와 점검 체계",
                    ],
                })
            ),
            section(
                "s6",
                "benefits",
                benefits("TechI가 설계에서 지키는 기준", [
                    "도입 시점의 성능보다 장기 운영의 지속성을 먼저 검토합니다.",
                    "백업, DR, 접근 통제, 운영 기준을 별도 과제가 아닌 기본 요소로 포함합니다.",
                    "프로젝트 종료 후에도 남는 문서와 검증 기준을 deliverable로 봅니다.",
                ])
            ),
        ],
    }),
    "/about/history": page({
        id: "company_about_history",
        title: "회사 연혁",
        slug: "/about/history",
        description:
            "2004년 설립 이후 공공과 엔터프라이즈 인프라에서 AI 데이터센터까지 확장해 온 TechI의 성장 흐름입니다.",
        sections: [
            section("s1", "header", subnavHeader("회사 연혁", ["회사 소개", "회사 연혁"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "2004년의 엔지니어링 DNA가 고밀도 AI 인프라까지 이어졌습니다",
                    "TechI의 연혁은 매출 성장보다 수행 범위의 확장에 가깝습니다. 엔터프라이즈 인프라 구축에서 출발해, 현재는 AI 데이터센터와 고밀도 GPU 클러스터까지 설계하는 조직으로 진화했습니다.",
                    "/images/about-office-building.jpg",
                    "회사 외관과 조직의 성장을 상징하는 이미지",
                    { label: "협업 구조 보기", href: "/about/partners" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s3",
                "gallery",
                imageGallery({
                    eyebrow: "Scale of Work",
                    title: "성장 과정은 결국 다뤄본 인프라 규모로 보입니다",
                    items: [
                        {
                            imageSrc: "/images/server-photo-install.jpg",
                            imageAlt: "서버 설치 작업이 진행되는 현장 이미지",
                            caption: "구축 현장에서 장비가 실제로 올라가는 경험이 현재의 기술 범위를 만들었습니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/server-photo-racks.jpg",
                            imageAlt: "랙 기반 서버 인프라 이미지",
                            caption: "대규모 서버·스토리지 환경에 대한 현장 이해",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/server-photo-inspection.jpg",
                            imageAlt: "엔지니어가 인프라 점검을 수행하는 장면",
                            caption: "구축 이후 점검과 운영 기준까지 이어지는 수행 방식",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s4",
                "timeline",
                timeline("Timeline", [
                    { year: "2004-2009", text: "TechI 설립, HPE 파트너십 체결, 기업부설연구소 설립으로 기초 체계를 만들었습니다." },
                    { year: "2010-2019", text: "공공·엔터프라이즈 구축과 유지보수 범위를 넓히며 현장 역량을 쌓았습니다." },
                    { year: "2020-Present", text: "AI 데이터센터, 위성 지상체, 고밀도 GPU 클러스터 등 초고성능 인프라로 수행 수준을 끌어올렸습니다." },
                ])
            ),
            section(
                "s5",
                "cards",
                featureCards("대표 이정표", [
                    { title: "Foundation", desc: "초기부터 HPE 기반 엔터프라이즈 인프라 설계 역량을 축적했습니다." },
                    { title: "Expansion", desc: "공공·사법·유통·제조 등 다양한 고객군으로 수행 범위를 넓혔습니다." },
                    { title: "AI Era", desc: "AI 데이터센터와 고밀도 GPU 인프라까지 대응 가능한 수준으로 확장했습니다." },
                ])
            ),
            section(
                "s6",
                "media",
                mediaFeature({
                    eyebrow: "Signature References",
                    title: "대규모 공공 인프라 경험이 현재의 기술 신뢰를 만들었습니다",
                    body: "TechI는 소규모 범용 구축을 반복한 조직이 아니라, 물리 규모와 운영 난이도가 높은 공공 프로젝트를 통해 기술 체계를 끌어올려 왔습니다. 그래서 현재 엔터프라이즈와 AI 인프라 영역에서도 신뢰를 얻고 있습니다.",
                    imageSrc: "/images/hero-datacenter.jpg",
                    imageAlt: "고밀도 데이터센터 랙 구성이 보이는 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 2000,
                    imageHeight: 1333,
                    caption: "Key References / AI datacenter, satellite ground system, mission critical infrastructure",
                    points: [
                        "국방과학연구소: 170+ Pflops 급 딥러닝용 고밀도 GPU 클러스터 구축",
                        "국토지리정보원: 425 위성 지상체 및 국토위성센터 인프라 도입·운영",
                        "공군 우주기상정보처리기, 국토안전관리원 관제센터 등 국가 중요 시스템 수행",
                    ],
                })
            ),
        ],
    }),
    "/about/partners": page({
        id: "company_about_partners",
        title: "협업 구조",
        slug: "/about/partners",
        description:
            "HPE Gold Partner를 중심으로 한 기술 파트너십과 공공·엔터프라이즈 고객 레퍼런스를 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("협업 구조", ["회사 소개", "협업 구조"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "국가 중요 기관과 엔터프라이즈가 반복해서 선택한 파트너",
                    "TechI는 HPE Gold Partner를 중심으로 Intel, IBM 등 핵심 파트너와 협업하며, 공공·사법·국방·유통·제조까지 다양한 고객군의 인프라 프로젝트를 수행해 왔습니다. 이 조합이 공급 안정성과 현장 실행력을 동시에 만듭니다.",
                    "/images/dark-console-operator.jpg",
                    "운영 화면을 점검하는 콘솔 환경 이미지",
                    { label: "오시는 길 보기", href: "/about/location" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s3",
                "gallery",
                imageGallery({
                    eyebrow: "Delivery Scenes",
                    title: "파트너십은 실제 수행 장면에서 신뢰로 바뀝니다",
                    items: [
                        {
                            imageSrc: "/images/security-control-room.jpg",
                            imageAlt: "보안 관제와 운영 상황을 모니터링하는 공간",
                            caption: "파트너십은 공급이 아니라 실제 운영 장면에서 신뢰로 증명됩니다.",
                            imageWidth: 2400,
                            imageHeight: 1600,
                        },
                        {
                            imageSrc: "/images/consulting-review-photo.jpg",
                            imageAlt: "프로젝트 문서를 함께 검토하는 장면",
                            caption: "벤더와 고객 요구를 함께 조율하는 검토 과정",
                            imageWidth: 1600,
                            imageHeight: 1068,
                        },
                        {
                            imageSrc: "/images/office-desk-operator.jpg",
                            imageAlt: "데스크 환경에서 운영 자료를 검토하는 장면",
                            caption: "실행 조직이 바로 이어받을 수 있는 운영 기준 정리",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s4",
                "cards",
                featureCards("Core Tech Partners", [
                    { title: "HPE Gold Partner", desc: "장기 파트너십을 기반으로 엔터프라이즈 인프라를 설계합니다." },
                    { title: "Intel", desc: "고성능 컴퓨팅과 대규모 스토리지 구성에 필요한 핵심 플랫폼을 연계합니다." },
                    { title: "IBM", desc: "미션 크리티컬 환경에 필요한 시스템 구성 경험을 함께 축적해 왔습니다." },
                    { title: "IRS Delivery Network", desc: "전국 19개 센터망 기반의 유지보수와 현장 대응 체계를 운영합니다." },
                ])
            ),
            section(
                "s5",
                "cards",
                featureCards("Representative Customers", [
                    { title: "Defense & Government", desc: "국방과학연구소, 대한민국 공군, 국토지리정보원, 국토안전관리원" },
                    { title: "Judicial & Public", desc: "대법원, 법무부 등 높은 안정성과 보안성이 필요한 공공 환경" },
                    { title: "Enterprise", desc: "GS리테일, GS네트웍스, 파르나스호텔, 대교 등 대규모 업무 환경" },
                    { title: "Manufacturing", desc: "앰코테크놀로지코리아 등 지속적 생산 운영이 중요한 제조 환경" },
                ])
            ),
            section(
                "s6",
                "media",
                mediaFeature({
                    eyebrow: "Why It Matters",
                    title: "벤더 파트너십과 현장 지원 체계를 함께 갖춘 구조",
                    body: "좋은 파트너십은 단순 공급 계약이 아니라 고객 환경에 맞는 기술 선택과 운영 지원이 함께 이어질 때 의미가 있습니다. TechI는 파트너 생태계와 현장 지원 조직을 결합해 실제 운영 단계까지 대응할 수 있는 구조를 갖추고 있습니다.",
                    imageSrc: "/images/technical-design-review.jpg",
                    imageAlt: "기술 설계와 검토 자료를 함께 보는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "Partner Ecosystem / vendor alliance, field support, service continuity",
                    points: [
                        "핵심 벤더 파트너십 기반의 안정적 공급과 설계",
                        "공공과 엔터프라이즈를 모두 경험한 현장 실행력",
                        "운영 단계까지 이어지는 지원 체계와 장기 협업 구조",
                    ],
                })
            ),
        ],
    }),
    "/about/location": page({
        id: "company_about_location",
        title: "오시는 길",
        slug: "/about/location",
        description:
            "대전 본사와 서울 지사 위치, 대표 연락처, 프로젝트 미팅 방식 등 방문 정보를 안내합니다.",
        sections: [
            section("s1", "header", subnavHeader("오시는 길", ["회사 소개", "오시는 길"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "대전 본사와 서울 지사에서 프로젝트 미팅을 진행합니다",
                    "TechI는 대전 본사와 서울 지사를 거점으로 방문 미팅과 기술 워크숍을 운영합니다. 첫 미팅은 단순 소개가 아니라 현재 환경과 검토 범위를 빠르게 정리하는 자리로 진행합니다.",
                    "/images/about-office-lobby.jpg",
                    "회사 로비와 방문 미팅 공간 이미지",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "협업 구조 보기", href: "/about/partners" }
                )
            ),
            section(
                "s3",
                "gallery",
                imageGallery({
                    eyebrow: "Meeting Environment",
                    title: "미팅 신뢰도는 공간과 진행 방식에서도 만들어집니다",
                    items: [
                        {
                            imageSrc: "/images/contact-consultation-desk.jpg",
                            imageAlt: "상담 데스크에서 자료를 검토하는 이미지",
                            caption: "첫 미팅에서 바로 범위와 우선순위를 정리하는 intake 방식",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/about-office-lobby.jpg",
                            imageAlt: "회사 로비와 미팅 공간 이미지",
                            caption: "대전 본사와 서울 지사에서 프로젝트 미팅을 진행합니다.",
                            imageWidth: 3024,
                            imageHeight: 4032,
                        },
                        {
                            imageSrc: "/images/contact-laptop-work.jpg",
                            imageAlt: "미팅 자료를 노트북으로 정리하는 이미지",
                            caption: "사전 공유 자료가 있으면 첫 미팅에서 더 빠르게 방향을 잡을 수 있습니다.",
                            imageWidth: 3342,
                            imageHeight: 5939,
                        },
                    ],
                })
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "Office Information",
                    title: "프로젝트 성격에 맞춰 본사, 지사, 온라인 미팅을 조율합니다",
                    body: "프로젝트 범위와 참석자 구성에 따라 대전 본사, 서울 지사, 온라인 미팅 중 가장 적합한 방식으로 일정을 조율합니다. 사전 공유 자료가 있으면 첫 미팅에서 더 빠르게 범위를 정리할 수 있습니다.",
                    imageSrc: "/images/about-office-building.jpg",
                    imageAlt: "회사 건물 외관 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 3024,
                    imageHeight: 4032,
                    caption: "HQ & Branch / meeting coordination, project intake, scope review",
                    points: [
                        "본사(HQ): 대전광역시 서구 둔산대로 117번길 25",
                        "서울 지사: 서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터",
                        "대표전화 042-471-9430 / 웹사이트 www.techi.co.kr",
                    ],
                })
            ),
            section(
                "s5",
                "cards",
                featureCards("Office & Contact", [
                    { title: "대전 본사", desc: "대전광역시 서구 둔산대로 117번길 25" },
                    { title: "서울 지사", desc: "서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터" },
                    { title: "대표전화", desc: "042-471-9430" },
                    { title: "웹사이트", desc: "www.techi.co.kr" },
                ])
            ),
            section(
                "s6",
                "faq",
                faq("미팅 전에 확인하면 좋은 내용", [
                    {
                        q: "첫 미팅은 어떻게 진행되나요?",
                        a: "현재 환경, 주요 과제, 검토 범위, 목표 일정 중심으로 빠르게 범위를 정리하는 방식으로 진행합니다.",
                    },
                    {
                        q: "온라인 미팅도 가능한가요?",
                        a: "가능합니다. 프로젝트 성격에 따라 본사, 지사, 온라인 중 가장 적합한 방식으로 조율합니다.",
                    },
                    {
                        q: "무엇을 미리 준비하면 좋나요?",
                        a: "현재 시스템 개요, 주요 이슈, 검토 목표 정도만 있어도 첫 미팅에서 충분히 범위를 잡을 수 있습니다.",
                    },
                ])
            ),
        ],
    }),
    "/contact": page({
        id: "company_contact",
        title: "문의하기",
        slug: "/contact",
        description:
            "대전 본사와 서울 지사를 기반으로 프로젝트 범위와 초기 검토 항목을 정리하는 TechI 상담 페이지입니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "프로젝트 상담을 위한 기본 정보를 남겨주세요",
                    "상담은 단순 문의 접수가 아니라 현재 환경, 목표, 일정, 검토 범위를 빠르게 구조화하는 첫 단계입니다. 남겨주신 정보를 바탕으로 가장 적합한 미팅 방식과 초기 검토 범위를 안내드립니다.",
                    "/images/contact-consultation-desk.jpg",
                    "상담 데스크에서 프로젝트 자료를 검토하는 이미지",
                    { label: "서비스 보기", href: "/service" },
                    { label: "회사 소개 보기", href: "/about" }
                )
            ),
            section(
                "s2",
                "media",
                mediaFeature({
                    eyebrow: "Consultation Intake",
                    title: "첫 상담에서 바로 검토 범위를 정리할 수 있도록 준비합니다",
                    body: "구축, 증설, 보안, AI 도입, 운영 개선처럼 과제의 종류가 달라도 상담의 핵심은 같습니다. 현재 환경과 목표, 검토 범위가 정리되어 있으면 첫 미팅에서 필요한 점검 항목과 다음 단계가 더 명확해집니다.",
                    imageSrc: "/images/contact-laptop-work.jpg",
                    imageAlt: "노트북으로 상담 내용을 정리하는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 3342,
                    imageHeight: 5939,
                    caption: "Consultation / environment review, scope definition, next step",
                    points: [
                        "본사(HQ): 대전광역시 서구 둔산대로 117번길 25",
                        "서울 지사: 서울특별시 강동구 고덕비즈밸리로 26, 강동 U1센터",
                        "대표전화 042-471-9430 / 웹사이트 www.techi.co.kr",
                    ],
                })
            ),
            section(
                "s3",
                "contact",
                contactForm(
                    "상담 정보 남기기",
                    "현재 환경, 목표, 일정, 검토 범위를 남겨주시면 첫 미팅에서 필요한 검토 항목을 빠르게 정리해드립니다."
                )
            ),
            section(
                "s4",
                "faq",
                faq("상담 전에 자주 확인하는 내용", [
                    {
                        q: "첫 상담에서는 무엇을 확인하나요?",
                        a: "현재 운영 환경, 주요 과제, 검토 범위, 목표 일정, 내부 의사결정 구조를 우선 확인합니다.",
                    },
                    {
                        q: "온라인 미팅도 가능한가요?",
                        a: "가능합니다. 대전 본사, 서울 지사, 온라인 미팅 중 프로젝트 성격에 맞는 방식으로 조율합니다.",
                    },
                    {
                        q: "어떤 자료를 미리 준비하면 좋나요?",
                        a: "현재 시스템 개요, 구성도, 주요 이슈, 일정 관련 메모 정도면 충분합니다.",
                    },
                ])
            ),
        ],
    }),
};

export default companyPageOverrides;
