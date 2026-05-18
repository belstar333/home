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

function featureCards(
    title: string,
    items: Array<{ title: string; desc: string; href?: string; imageSrc?: string; imageAlt?: string }>,
    variant?: "standard" | "image-cards"
): BlockData {
    return {
        type: "featureCards",
        data: { title, items, variant },
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

const productPageOverrides: Record<string, Page> = {
    "/product": page({
        id: "product_root_override",
        title: "제품",
        slug: "/product",
        description: "서비스 중단·데이터 손실·보안 사고에 대비하는 테크아이 제품 포트폴리오 — RoseHA와 Omniguard를 소개합니다.",
        sections: [
            section("s1", "header", subnavHeader("제품", ["제품"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "제품은 기능보다 먼저\n운영 목적이 분명해야\n현장에서 살아남습니다",
                    "테크아이는 제품을 카탈로그처럼 나열하지 않습니다. 고가용성, 복구, 접근 제어, 감사 대응처럼 실제 운영 과제에 맞춰 RoseHA와 Omniguard 제품군을 제안하고, 도입 이후 운영 구조까지 함께 설계합니다.",
                    "/images/v2/product/hero-laptop-code.jpg",
                    "엔터프라이즈 제품 라인업과 운영 환경 개요",
                    { label: "RoseHA 보기", href: "/product/roseha" },
                    { label: "Omniguard 보기", href: "/product/lsware" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("테크아이 제품 포트폴리오", [
                    {
                        title: "RoseHA",
                        desc: "실시간 복제, 장애 감지, 자동 전환, 시점 복구, 운영 콘솔까지 포함한 고가용성·복구 플랫폼입니다.",
                        href: "/product/roseha",
                        imageSrc: "/images/v2/product/card-roseha-twin-racks.jpg",
                        imageAlt: "RoseHA 이중화 구성 서버 랙",
                    },
                    {
                        title: "Omniguard",
                        desc: "권한 통제, 세션 제어, 보안 감사와 증적 관리를 통합해 운영 보안 수준을 높이는 보안 제품군입니다.",
                        href: "/product/lsware",
                        imageSrc: "/images/v2/product/card-omniguard-access.jpg",
                        imageAlt: "Omniguard 접근 제어 보안 장치",
                    },
                ], "image-cards")
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "제품 소개",
                    title: "좋은 제품은 화면보다 운영 목적이 더 먼저 설명됩니다",
                    body: "도입 전에는 기능표보다 어떤 문제를 해결할 것인지가 먼저 분명해야 합니다. 테크아이는 제품별 적용 범위, 검증 포인트, 운영 방식, 인수 기준을 함께 정리해 제품 도입이 실제 운영 개선으로 이어지게 만듭니다.",
                    imageSrc: "/images/product-console-ui.jpg",
                    imageAlt: "운영 콘솔과 제품 대시보드 화면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1692,
                    imageHeight: 1580,
                    caption: "운영 관점 / 제품 적합성, 통제 포인트, 도입 흐름",
                    points: [
                        "제품 기능보다 운영 목적과 적용 범위를 먼저 정리합니다.",
                        "PoC와 본 운영 전환 기준을 분리해 검증합니다.",
                        "운영팀이 실제 사용할 수 있는 인수 기준과 문서를 남깁니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("제품 도입 시 중요하게 보는 기준", [
                    "운영 과제와 직접 연결되는가",
                    "검증 기준과 본 운영 기준이 구분되는가",
                    "운영팀이 지속적으로 관리 가능한가",
                    "향후 확장과 통합에 무리가 없는가",
                ])
            ),
        ],
    }),
    "/product/roseha": page({
        id: "product_roseha_root_override",
        title: "RoseHA",
        slug: "/product/roseha",
        description: "서비스 중단과 데이터 손실을 막아야 한다면 — 실시간 복제·자동 전환·시점 복구를 하나로 묶은 HA 제품 RoseHA입니다.",
        sections: [
            section("s1", "header", subnavHeader("RoseHA", ["제품", "RoseHA"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "중요 서비스는\n장애가 없는 것보다\n복구가 예측 가능해야 합니다",
                    "RoseHA는 실시간 복제, 장애 감지, 자동 전환, 시점 복구, 운영 콘솔을 하나의 흐름으로 묶는 고가용성 제품군입니다. 테크아이는 단순 설치가 아니라 운영 환경에 맞는 DR·HA 체계로 RoseHA를 설계하고 적용합니다.",
                    "/images/hero-datacenter.jpg",
                    "미션크리티컬 서비스 고가용성을 위한 데이터센터 인프라",
                    { label: "실시간 복제 보기", href: "/product/roseha/replication" },
                    { label: "장애 감지·페일오버 보기", href: "/product/roseha/failover" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("RoseHA 주요 기능 축", [
                    {
                        title: "실시간 복제",
                        desc: "운영 데이터와 대기 시스템을 지속적으로 동기화해 장애 시 복구 시점을 앞당깁니다.",
                        href: "/product/roseha/replication",
                    },
                    {
                        title: "장애 감지·페일오버",
                        desc: "서비스와 시스템 상태를 감시하고 필요한 조건에서 자동 전환을 수행합니다.",
                        href: "/product/roseha/failover",
                    },
                    {
                        title: "시점 복구",
                        desc: "운영 사고나 데이터 훼손 시 원하는 시점으로 되돌릴 수 있는 복구 옵션을 제공합니다.",
                        href: "/product/roseha/point-in-time-recovery",
                    },
                    {
                        title: "운영 콘솔",
                        desc: "복제 상태, 장애 상황, 운영 지표를 한 화면에서 확인할 수 있는 관리 콘솔을 제공합니다.",
                        href: "/product/roseha/management-console",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "가용성 플랫폼",
                    title: "고가용성은 장애 감지부터 운영 화면까지 이어져야 완성됩니다",
                    body: "HA 제품은 단일 기능으로 설명되지 않습니다. 복제, 감지, 절체, 복구, 운영 가시성이 하나의 구조 안에서 연결되어야 운영팀이 실제로 믿고 사용할 수 있습니다. 테크아이는 RoseHA를 고객 환경에 맞는 서비스 연속성 체계로 설계합니다.",
                    imageSrc: "/images/product-roseha-ui.png",
                    imageAlt: "Rose HA/DR 제품 구성과 핵심 기능을 보여주는 마케팅 인포그래픽",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1400,
                    imageHeight: 900,
                    caption: "RoseHA / 복제 상태, 페일오버 제어, 복구 가시성",
                    points: [
                        "복제와 절체, 복구를 한 체계로 운영할 수 있습니다.",
                        "서비스 중요도에 맞춘 가용성 정책을 수립할 수 있습니다.",
                        "운영 콘솔을 통해 상태를 빠르게 파악하고 대응할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("RoseHA가 적합한 환경", [
                    "중단 시간이 곧 서비스 손실로 이어지는 핵심 시스템",
                    "수작업 복구나 비표준 절차에 의존하는 운영 환경",
                    "재해복구와 서비스 연속성 기준을 강화해야 하는 조직",
                    "장애 대응을 더 예측 가능한 체계로 전환하려는 환경",
                ])
            ),
        ],
    }),
    "/product/roseha/replication": page({
        id: "product_roseha_replication_override",
        title: "실시간 복제",
        slug: "/product/roseha/replication",
        description: "운영 시스템과 대기 시스템 간 실시간 데이터 복제를 통해 복구 시점 손실을 최소화합니다.",
        sections: [
            section("s1", "header", subnavHeader("실시간 복제", ["제품", "RoseHA", "실시간 복제"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "복제는 데이터를 옮기는 기능이 아니라\n복구 시점을 지키는 기준입니다",
                    "실시간 복제는 장애 이후 얼마나 최근 상태로 서비스를 복구할 수 있는지를 결정합니다. RoseHA는 운영 데이터와 대기 시스템을 지속적으로 동기화해 장애 발생 시 손실 범위를 줄이고 복구 준비 상태를 유지합니다.",
                    "/images/hero-datacenter.jpg",
                    "실시간 데이터 복제 대상 인프라가 구성된 데이터센터",
                    { label: "페일오버 보기", href: "/product/roseha/failover" },
                    { label: "시점 복구 보기", href: "/product/roseha/point-in-time-recovery" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("실시간 복제에서 중요한 항목", [
                    {
                        title: "동기화 일관성",
                        desc: "데이터를 빠르게 전송하는 것보다 운영 시점과 복구 시점이 일관되게 유지되는 것이 중요합니다.",
                    },
                    {
                        title: "복제 상태 가시성",
                        desc: "지연, 오류, 동기화 상태를 빠르게 확인할 수 있어야 실제 운영이 가능합니다.",
                    },
                    {
                        title: "운영 부담 최소화",
                        desc: "복제 체계가 복잡해질수록 장애 대응이 어려워지므로 운영자가 관리 가능한 수준으로 단순화해야 합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "복제 제어",
                    title: "실시간 복제는 보이지 않는 동안 더 안정적이어야 합니다",
                    body: "운영팀이 실시간 복제를 신뢰하려면 평소에는 조용하고 장애 순간에는 명확해야 합니다. RoseHA는 복제 상태와 지연 구간을 운영 관점에서 파악할 수 있게 구성되어 복구 준비 상태를 꾸준히 유지할 수 있습니다.",
                    imageSrc: "/images/product-roseha-ui.png",
                    imageAlt: "Rose HA/DR 제품 구성과 핵심 기능을 보여주는 마케팅 인포그래픽",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1400,
                    imageHeight: 900,
                    caption: "복제 / 동기화 상태, 지연 가시성, 복구 준비도",
                    points: [
                        "복제 상태와 지연 구간을 쉽게 파악할 수 있습니다.",
                        "RPO 목표를 더 안정적으로 관리할 수 있습니다.",
                        "복구 준비 상태를 일상 운영 안에서 유지할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 기대 효과", [
                    "장애 시 데이터 손실 범위를 최소화할 수 있습니다.",
                    "운영팀이 복제 상태를 더 명확히 확인할 수 있습니다.",
                    "복구 판단이 더 빠르고 예측 가능해집니다.",
                    "DR·HA 체계의 기반을 안정적으로 마련할 수 있습니다.",
                ])
            ),
        ],
    }),
    "/product/roseha/failover": page({
        id: "product_roseha_failover_override",
        title: "장애 감지·페일오버",
        slug: "/product/roseha/failover",
        description: "장애 감지와 자동 전환을 통해 서비스 중단 시간을 줄이는 RoseHA 페일오버 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("장애 감지·페일오버", ["제품", "RoseHA", "장애 감지·페일오버"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "자동 전환은 빠르기만 해서는 안 되고\n정확한 조건 위에서\n작동해야 합니다",
                    "장애 감지와 페일오버는 오탐과 미탐 모두가 리스크가 됩니다. RoseHA는 서비스 상태와 시스템 조건을 기준으로 자동 전환을 수행하고, 운영자가 판단할 수 있는 가시성을 함께 제공합니다.",
                    "/images/hero-cloud.jpg",
                    "장애 감지 이후 자동·수동 전환 조건을 설계하는 환경",
                    { label: "실시간 복제 보기", href: "/product/roseha/replication" },
                    { label: "운영 콘솔 보기", href: "/product/roseha/management-console" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("페일오버 설계의 핵심", [
                    {
                        title: "감지 조건",
                        desc: "프로세스, 네트워크, 스토리지, 서비스 상태 등 무엇을 기준으로 장애를 판단할지 명확해야 합니다.",
                    },
                    {
                        title: "전환 정책",
                        desc: "무조건 자동 전환하는 것이 아니라 서비스 특성과 리스크에 맞는 전환 조건을 세밀하게 설계해야 합니다.",
                    },
                    {
                        title: "운영 확인 포인트",
                        desc: "전환 결과와 상태를 운영자가 즉시 확인할 수 있어야 신뢰도 있는 운영이 가능합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "페일오버 정책",
                    title: "정교한 페일오버는 장애보다 운영 혼선을 먼저 줄입니다",
                    body: "자동 전환은 실패하지 않는 것만큼 불필요하게 작동하지 않는 것도 중요합니다. RoseHA는 서비스 중요도와 시스템 특성에 맞춰 전환 정책을 설계하고, 운영자가 그 상태를 빠르게 파악할 수 있도록 지원합니다.",
                    imageSrc: "/images/product-roseha-ui.png",
                    imageAlt: "Rose HA/DR 제품 구성과 핵심 기능을 보여주는 마케팅 인포그래픽",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1400,
                    imageHeight: 900,
                    caption: "페일오버 / 감지 규칙, 전환 정책, 운영자 가시성",
                    points: [
                        "서비스 특성에 맞는 감지 기준을 세밀하게 설정합니다.",
                        "오탐과 미탐 리스크를 줄이는 전환 정책을 구성합니다.",
                        "장애와 전환 상태를 콘솔에서 빠르게 확인할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 기대 효과", [
                    "중단 시간을 줄이고 전환 실패 리스크를 낮출 수 있습니다.",
                    "운영자의 장애 판단 부담을 줄일 수 있습니다.",
                    "표준화된 페일오버 정책으로 대응 품질이 일정해집니다.",
                    "복구와 재가동의 흐름을 더 예측 가능하게 만들 수 있습니다.",
                ])
            ),
        ],
    }),
    "/product/roseha/point-in-time-recovery": page({
        id: "product_roseha_pitr_override",
        title: "시점 복구",
        slug: "/product/roseha/point-in-time-recovery",
        description: "운영 사고와 데이터 훼손에 대비해 원하는 시점으로 복구할 수 있는 RoseHA 시점 복구 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("시점 복구", ["제품", "RoseHA", "시점 복구"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "장애보다 더 까다로운 사고는\n데이터가 잘못된 상태로\n정상 동작할 때입니다",
                    "시점 복구는 삭제, 오염, 잘못된 배치, 운영 실수처럼 시스템은 살아 있지만 데이터가 틀어진 상황에 대응하는 핵심 기능입니다. RoseHA는 원하는 시점으로 안전하게 되돌릴 수 있는 복구 옵션을 제공합니다.",
                    "/images/hero-cloud.jpg",
                    "특정 시점으로 복구하기 위한 데이터 보호 체계 환경",
                    { label: "실시간 복제 보기", href: "/product/roseha/replication" },
                    { label: "운영 콘솔 보기", href: "/product/roseha/management-console" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("시점 복구에서 핵심이 되는 기준", [
                    {
                        title: "복구 시점 선택",
                        desc: "문제가 발생한 순간과 정상 상태를 구분해 정확한 복구 시점을 선택할 수 있어야 합니다.",
                    },
                    {
                        title: "복구 영향 관리",
                        desc: "복구가 다른 서비스와 데이터에 미치는 영향을 고려해 더 안전한 복구 절차를 마련해야 합니다.",
                    },
                    {
                        title: "검증 가능성",
                        desc: "복구 이후 데이터 무결성과 서비스 상태를 확인할 수 있어야 운영 신뢰도가 높아집니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "시점 복구",
                    title: "시점 복구는 되돌릴 수 있다는 말보다 어떤 시점까지 돌아갈 수 있는지가 중요합니다",
                    body: "운영 사고는 항상 완전한 장애 형태로 오지 않습니다. 잘못된 데이터가 정상처럼 흘러가는 경우일수록 정확한 시점 복구가 필요합니다. RoseHA는 복구 가능한 시간 축을 확보하고, 운영팀이 복구 판단을 더 빠르게 할 수 있게 돕습니다.",
                    imageSrc: "/images/product-roseha-ui.png",
                    imageAlt: "Rose HA/DR 제품 구성과 핵심 기능을 보여주는 마케팅 인포그래픽",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1400,
                    imageHeight: 900,
                    caption: "복구 시점 / 롤백 범위, 검증 단계, 서비스 연속성",
                    points: [
                        "운영 사고에 대응할 수 있는 복구 시점 범위를 확보합니다.",
                        "복구 후 검증 포인트를 함께 설계해 안정성을 높입니다.",
                        "장애와 데이터 사고를 분리한 복구 체계를 만들 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("적용 효과", [
                    "운영 실수나 데이터 훼손 사고에 더 빠르게 대응할 수 있습니다.",
                    "복구 시점 선택 기준이 명확해져 의사결정 속도가 빨라집니다.",
                    "장애 복구와 데이터 복구를 구분해 더 정교한 대응이 가능해집니다.",
                    "복구 이후 검증 기준이 정리되어 운영 신뢰도가 높아집니다.",
                ])
            ),
        ],
    }),
    "/product/roseha/management-console": page({
        id: "product_roseha_console_override",
        title: "운영 콘솔",
        slug: "/product/roseha/management-console",
        description: "복제, 장애, 전환, 복구 상태를 한 화면에서 확인하는 RoseHA 운영 콘솔 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("운영 콘솔", ["제품", "RoseHA", "운영 콘솔"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "가용성 제품은\n기능보다 먼저\n운영 화면이 명확해야 합니다",
                    "복제와 전환 기능이 아무리 좋아도 운영자가 상태를 빠르게 읽지 못하면 실제 대응 속도는 느려집니다. RoseHA 운영 콘솔은 상태 확인, 이벤트 파악, 복구 판단을 한 화면에서 지원하도록 설계되었습니다.",
                    "/images/product-roseha-ui.png",
                    "Rose HA/DR 제품 인포그래픽",
                    { label: "실시간 복제 보기", href: "/product/roseha/replication" },
                    { label: "장애 감지·페일오버 보기", href: "/product/roseha/failover" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("운영 콘솔이 제공해야 하는 핵심 가치", [
                    {
                        title: "상태 가시성",
                        desc: "복제, 장애, 절체, 복구 상태를 한 화면에서 읽을 수 있어야 운영 판단이 빨라집니다.",
                    },
                    {
                        title: "이벤트 추적",
                        desc: "무슨 일이 언제 발생했는지 확인할 수 있어야 장애 대응과 보고가 쉬워집니다.",
                    },
                    {
                        title: "운영 단순화",
                        desc: "여러 도구를 오가며 확인하지 않아도 핵심 상태를 빠르게 판단할 수 있게 만듭니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "운영 콘솔",
                    title: "운영 콘솔은 상황을 설명하는 화면이 아니라 결정을 돕는 화면이어야 합니다",
                    body: "운영자는 복잡한 이벤트 목록보다 지금 무엇이 문제인지, 얼마나 위험한지, 무엇을 확인해야 하는지를 빠르게 알고 싶어 합니다. RoseHA 콘솔은 가용성 운영의 핵심 상태를 직관적으로 보여주도록 구성됩니다.",
                    imageSrc: "/images/product-roseha-ui.png",
                    imageAlt: "Rose HA/DR 제품 구성과 핵심 기능을 보여주는 마케팅 인포그래픽",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1400,
                    imageHeight: 900,
                    caption: "콘솔 / 상태 개요, 이벤트 추적, 운영 판단 지원",
                    points: [
                        "복제와 절체 상태를 한눈에 확인할 수 있습니다.",
                        "이벤트 흐름을 빠르게 추적할 수 있습니다.",
                        "운영자가 즉시 판단해야 할 항목이 더 선명해집니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("운영 측면의 장점", [
                    "장애 상황 판단 시간이 줄어듭니다.",
                    "복제와 절체 상태를 더 쉽게 공유할 수 있습니다.",
                    "보고와 RCA 작성에 필요한 정보 정리가 빨라집니다.",
                    "운영 체계가 사람 경험보다 화면 기준으로 정리됩니다.",
                ])
            ),
        ],
    }),
    "/product/lsware": page({
        id: "product_omniguard_root_override",
        title: "Omniguard",
        slug: "/product/lsware",
        description: "내부 계정 관리와 감사 대응이 부담이라면 — 권한 제어·세션 통제·증적 관리를 통합한 Omniguard 제품군입니다.",
        sections: [
            section("s1", "header", subnavHeader("Omniguard", ["제품", "Omniguard"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "보안 운영은\n장비 수보다 먼저\n통제 기준이 분명해야 합니다",
                    "Omniguard 제품군은 권한 통제, 세션 제어, 감사와 증적 관리를 한 흐름으로 묶어 운영 보안 수준을 높입니다. 테크아이는 고객 환경에 맞는 통제 기준과 운영 절차까지 함께 설계합니다.",
                    "/images/hero-security.jpg",
                    "Omniguard 보안 정책과 접근 통제를 관리하는 운영 환경",
                    { label: "UAC 보기", href: "/product/lsware/uac" },
                    { label: "SecuMS 보기", href: "/product/lsware/secums" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("Omniguard 제품 구성", [
                    {
                        title: "UAC",
                        desc: "특권 계정과 중요 시스템 접근을 더 엄격하고 일관되게 관리합니다.",
                        href: "/product/lsware/uac",
                    },
                    {
                        title: "UCC",
                        desc: "세션 연결과 작업 흐름을 통제해 원격 접근과 운영 행위를 더 안전하게 관리합니다.",
                        href: "/product/lsware/ucc",
                    },
                    {
                        title: "SecuMS",
                        desc: "로그, 감사, 증적을 한곳에 모아 보안 운영과 감사 대응을 더 체계화합니다.",
                        href: "/product/lsware/secums",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "보안 제품군",
                    title: "보안 제품은 통제 화면보다 운영 체계와 증적 흐름이 먼저 설명되어야 합니다",
                    body: "보안 통제는 기능이 많다고 강해지지 않습니다. 누가 어떤 권한으로 접근하고, 어떤 세션을 어떻게 통제하며, 어떤 로그를 남겨 감사에 대응하는지가 함께 이어져야 합니다. Omniguard는 그 흐름을 제품 중심으로 정리합니다.",
                    imageSrc: "/images/product-omniguard-ui.png",
                    imageAlt: "통합 모듈식 서버보안 솔루션 Omniguard 제품 소개 이미지",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1600,
                    imageHeight: 600,
                    caption: "Omniguard / 접근 통제, 세션 가시성, 감사 대응 운영",
                    points: [
                        "권한, 세션, 감사 흐름을 하나의 체계로 연결합니다.",
                        "보안 운영과 감사 대응을 함께 고려한 제품 구성입니다.",
                        "실제 운영 조직이 사용할 수 있는 통제 기준을 강화합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("적합한 운영 환경", [
                    "중요 시스템 접근 통제를 강화해야 하는 조직",
                    "원격 작업과 외부 협력 접근을 더 안전하게 관리해야 하는 환경",
                    "감사 대응과 증적 관리가 중요한 공공·금융·제조 환경",
                    "권한 관리와 로그 관리가 분산되어 보안 통제가 어려운 조직",
                ])
            ),
        ],
    }),
    "/product/lsware/uac": page({
        id: "product_omniguard_uac_override",
        title: "UAC",
        slug: "/product/lsware/uac",
        description: "특권 계정과 중요 시스템 접근을 더 엄격하고 체계적으로 관리하는 UAC 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("UAC", ["제품", "Omniguard", "UAC"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "중요 시스템 접근은\n누가 들어갔는지보다\n왜 허용됐는지가 더 중요합니다",
                    "UAC는 특권 계정과 중요 시스템 접근을 통제하는 기능입니다. 테크아이는 승인 기준, 권한 부여 방식, 로그 이력, 운영 절차를 함께 설계해 실제 통제가 작동하는 환경을 만듭니다.",
                    "/images/hero-security.jpg",
                    "UAC 권한 요청·승인·사용 이력을 관리하는 보안 운영 화면",
                    { label: "UCC 보기", href: "/product/lsware/ucc" },
                    { label: "SecuMS 보기", href: "/product/lsware/secums" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("UAC 핵심 포인트", [
                    {
                        title: "권한 최소화",
                        desc: "필요한 시점에 필요한 범위만 접근할 수 있도록 권한을 더 세밀하게 나눕니다.",
                    },
                    {
                        title: "승인과 이력",
                        desc: "누가 어떤 사유로 접근을 승인했고 실제로 어떤 작업이 있었는지 이력을 남깁니다.",
                    },
                    {
                        title: "운영 편의성",
                        desc: "통제가 강해질수록 운영이 불편해지지 않도록 승인 흐름과 정책 관리를 실무에 맞게 단순화합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "권한 통제",
                    title: "권한 통제는 막는 기능이 아니라 운영 기준을 분명하게 만드는 기능입니다",
                    body: "중요 시스템 접근은 모든 것을 차단하는 방식으로는 지속되지 않습니다. 테크아이는 필요할 때 필요한 권한만 허용하고, 그 과정이 이력으로 남는 구조를 통해 보안과 운영의 균형을 맞춥니다.",
                    imageSrc: "/images/product-omniguard-ui.png",
                    imageAlt: "통합 모듈식 서버보안 솔루션 Omniguard 제품 소개 이미지",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1600,
                    imageHeight: 600,
                    caption: "UAC / 권한 정책, 승인 이력, 통제된 접근",
                    points: [
                        "권한 부여와 회수를 더 세밀하게 관리할 수 있습니다.",
                        "접근 승인과 작업 이력이 명확하게 남습니다.",
                        "보안 통제와 운영 편의성을 함께 맞출 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 기대 효과", [
                    "특권 계정 오남용 리스크를 줄일 수 있습니다.",
                    "권한 변경과 승인 절차를 표준화할 수 있습니다.",
                    "감사 대응 시 접근 이력을 더 명확하게 제시할 수 있습니다.",
                    "중요 시스템 접근 통제가 사람 의존에서 체계 의존으로 바뀝니다.",
                ])
            ),
        ],
    }),
    "/product/lsware/ucc": page({
        id: "product_omniguard_ucc_override",
        title: "UCC",
        slug: "/product/lsware/ucc",
        description: "원격 접속과 세션 연결을 더 안전하게 제어하고 기록하는 UCC 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("UCC", ["제품", "Omniguard", "UCC"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "접속을 허용하는 순간부터\n세션 통제가 시작되어야\n보안이 작동합니다",
                    "UCC는 단순 접속 중계가 아니라 세션 제어와 기록을 통해 운영 행위를 더 안전하게 관리하는 기능입니다. 테크아이는 원격 작업과 외부 협력 접근이 많은 환경에 맞춰 세션 통제 체계를 설계합니다.",
                    "/images/hero-security.jpg",
                    "UCC 접속 경로와 세션 흐름을 통제하는 보안 운영 환경",
                    { label: "UAC 보기", href: "/product/lsware/uac" },
                    { label: "SecuMS 보기", href: "/product/lsware/secums" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("UCC 핵심 기능 포인트", [
                    {
                        title: "세션 제어",
                        desc: "누가 언제 어떤 세션으로 접속하는지 실시간으로 통제하고 관리할 수 있습니다.",
                    },
                    {
                        title: "작업 추적",
                        desc: "원격 작업 내용과 세션 기록을 남겨 사고 대응과 감사에 활용할 수 있습니다.",
                    },
                    {
                        title: "외부 협력 통제",
                        desc: "협력사와 외부 운영 인력이 접근할 때도 내부 기준에 맞는 통제가 가능하도록 지원합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "세션 관리",
                    title: "세션 관리가 분명해질수록 외부 접근 리스크가 줄어듭니다",
                    body: "보안 사고는 접속 자체보다 접속 후 행위 통제가 느슨할 때 커집니다. 테크아이는 UCC를 통해 세션 가시성과 작업 통제 수준을 높여 원격 운영 환경을 더 안전하게 만듭니다.",
                    imageSrc: "/images/product-omniguard-ui.png",
                    imageAlt: "통합 모듈식 서버보안 솔루션 Omniguard 제품 소개 이미지",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1600,
                    imageHeight: 600,
                    caption: "UCC / 세션 추적, 원격 제어, 외부 접근 거버넌스",
                    points: [
                        "원격 접속과 세션 상태를 더 명확히 볼 수 있습니다.",
                        "외부 협력 접근을 통제된 흐름으로 운영할 수 있습니다.",
                        "문제 발생 시 세션 이력과 작업 기록을 기반으로 대응할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 효과", [
                    "원격 접속과 외부 접근의 보안 수준을 높일 수 있습니다.",
                    "세션 단위 추적이 가능해 감사 대응이 쉬워집니다.",
                    "운영 편의성을 유지하면서 통제 수준을 높일 수 있습니다.",
                    "접속 이후 행위 관리까지 포함한 보안 체계를 구축할 수 있습니다.",
                ])
            ),
        ],
    }),
    "/product/lsware/secums": page({
        id: "product_omniguard_secums_override",
        title: "SecuMS",
        slug: "/product/lsware/secums",
        description: "보안 로그와 감사 증적을 통합 관리해 운영과 감사 대응을 체계화하는 SecuMS 기능을 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("SecuMS", ["제품", "Omniguard", "SecuMS"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "보안 운영의 신뢰는\n통제 기능보다 먼저\n증적 관리에서 결정됩니다",
                    "SecuMS는 보안 로그와 감사 증적을 한 체계로 관리해 운영과 감사 대응을 더 명확하게 만들어 줍니다. 테크아이는 수집 기준, 보존 정책, 보고 구조를 함께 설계해 실제로 활용 가능한 감사 체계를 제공합니다.",
                    "/images/security-control-room.jpg",
                    "SecuMS 보안 이벤트와 감사 증적을 통합 관리하는 관제 환경",
                    { label: "UAC 보기", href: "/product/lsware/uac" },
                    { label: "UCC 보기", href: "/product/lsware/ucc" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("SecuMS가 집중하는 영역", [
                    {
                        title: "로그 통합",
                        desc: "여러 보안 장비와 시스템의 로그를 모아 더 일관된 운영 시각을 제공합니다.",
                    },
                    {
                        title: "증적 구조화",
                        desc: "감사와 점검에 필요한 증적을 목적별로 정리해 급하게 자료를 수집하는 부담을 줄입니다.",
                    },
                    {
                        title: "운영 보고",
                        desc: "보안 운영 결과를 현업과 경영진이 이해할 수 있는 형태로 요약하고 전달할 수 있습니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "감사 증적",
                    title: "로그가 많다고 증적이 되는 것은 아닙니다",
                    body: "감사 대응에서 중요한 것은 로그 양이 아니라 설명 가능한 구조입니다. 테크아이는 SecuMS를 통해 어떤 로그를 어떤 기준으로 보존하고, 어떤 형태로 제시할지까지 체계화해 보안 운영의 신뢰도를 높입니다.",
                    imageSrc: "/images/product-omniguard-ui.png",
                    imageAlt: "통합 모듈식 서버보안 솔루션 Omniguard 제품 소개 이미지",
                    layout: "imageRight",
                    tone: "diagram",
                    imageWidth: 1600,
                    imageHeight: 600,
                    caption: "SecuMS / 감사 증적, 로그 거버넌스, 보고 명확성",
                    points: [
                        "보안 로그를 목적에 맞게 통합 관리할 수 있습니다.",
                        "감사 대응에 필요한 증적 구조를 표준화할 수 있습니다.",
                        "운영 결과를 보고와 개선 과제로 연결할 수 있습니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("주요 장점", [
                    "감사 대응 준비 시간이 크게 줄어듭니다.",
                    "보안 로그와 증적 관리의 일관성이 높아집니다.",
                    "운영 보고가 더 구조화되고 설명 가능해집니다.",
                    "보안 통제를 단발성 대응이 아니라 지속 운영 체계로 만들 수 있습니다.",
                ])
            ),
        ],
    }),
};

export default productPageOverrides;
