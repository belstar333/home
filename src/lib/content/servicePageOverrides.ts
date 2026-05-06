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

function caseList(title: string, items: string[]): BlockData {
    return {
        type: "useCases",
        data: {
            title,
            items,
        },
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

const servicePageOverrides: Record<string, Page> = {
    "/service": page({
        id: "service_root_overview",
        title: "서비스",
        slug: "/service",
        description:
            "TechI는 서버, 네트워크, 데이터 보호, 컨설팅, 유지보수를 운영 기준으로 다시 묶는 전략형 서비스 포트폴리오를 제공합니다.",
        sections: [
            section(
                "s1",
                "hero",
                heroBlock(
                    "환경마다 다른 인프라 과제를\n운영 기준으로 다시 묶습니다",
                    "TechI의 서비스는 서버, 네트워크, 데이터 보호, 컨설팅, 유지보수를 개별 구매 항목처럼 나누지 않습니다. 현재 환경과 운영 조직을 기준으로, 실제로 오래 운영되는 구조를 만드는 서비스 체계로 제안합니다.",
                    "/images/about-team-strategy.jpg",
                    "프로젝트 방향과 서비스 범위를 논의하는 전략 회의",
                    { label: "회사 소개 보기", href: "/about" },
                    { label: "솔루션 보기", href: "/solution" }
                )
            ),
            section(
                "s2",
                "cards",
                featureCards("전문 서비스 영역", [
                    {
                        title: "서버 인프라",
                        desc: "신규 구축, 교체, 가상화, 운영 기준 정리까지 서버 환경 전체를 설계합니다.",
                        href: "/service/server",
                    },
                    {
                        title: "네트워크",
                        desc: "회선, 세그먼트, 보안 정책, 무선, 이중화를 포함한 연결 구조를 다룹니다.",
                        href: "/service/network",
                    },
                    {
                        title: "스토리지 · 백업",
                        desc: "저장, 백업, 복구, DR을 하나의 데이터 보호 체계로 정리합니다.",
                        href: "/service/storage-backup",
                    },
                    {
                        title: "컨설팅",
                        desc: "현황 분석, 진단, 로드맵, 보안·컴플라이언스 검토를 실행 계획으로 연결합니다.",
                        href: "/service/consulting",
                    },
                    {
                        title: "유지보수",
                        desc: "SLA, 정기점검, 장애 대응, RCA를 포함한 장기 운영 지원 구조를 만듭니다.",
                        href: "/service/maintenance",
                    },
                ])
            ),
            section(
                "s3",
                "gallery",
                imageGallery({
                    eyebrow: "Field Scenes",
                    title: "서비스는 소개 문구보다 실제 프로젝트 장면이 더 정확하게 설명합니다",
                    body: "설계 회의, 장비 설치, 연결 검토 같은 장면은 TechI가 어디까지 개입하고 무엇을 기준으로 정리하는지 가장 직접적으로 보여줍니다.",
                    items: [
                        {
                            imageSrc: "/images/technical-design-review.jpg",
                            imageAlt: "기술 설계 자료를 검토하는 장면",
                            caption: "서비스 범위는 보통 설계 문서와 운영 기준을 함께 맞추는 자리에서 정리됩니다.",
                            imageWidth: 6000,
                            imageHeight: 4000,
                        },
                        {
                            imageSrc: "/images/server-photo-install.jpg",
                            imageAlt: "서버 장비 설치 현장",
                            caption: "구축은 납품이 아니라 설치 이후 상태를 기준으로 검증해야 의미가 있습니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/network-fiber-photo.jpg",
                            imageAlt: "네트워크 광케이블과 연결 환경",
                            caption: "연결 품질과 보호 체계는 결국 실제 운영 환경 안에서 함께 봐야 합니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "Strategic Service Portfolio",
                    title: "기술 영역을 나열하지 않고 운영 흐름 안에서 서비스를 다시 묶습니다",
                    body: "서버, 네트워크, 데이터 보호, 운영 지원은 따로 움직이지 않습니다. 현황 진단부터 설계, 구축, 전환, 운영 인수까지 한 흐름으로 연결돼야 프로젝트 이후에도 품질이 유지됩니다.",
                    imageSrc: "/images/consulting-review-photo.jpg",
                    imageAlt: "프로젝트 문서를 함께 검토하는 회의 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1068,
                    caption: "Service structure / diagnose, design, build, handover, operation",
                    points: [
                        "현재 환경과 운영 제약을 먼저 구조화합니다.",
                        "기술 선택보다 전환 이후 운영 상태를 먼저 검토합니다.",
                        "검증 항목과 인수 문서가 남는 구조로 프로젝트를 마무리합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("TechI가 서비스 초기에 먼저 정리하는 항목", [
                    "현재 구조에서 반복적으로 문제를 만드는 병목 구간과 운영 리스크",
                    "중단 허용 범위, 복구 목표, 보안 요구, 운영 인력 수준 같은 현실 조건",
                    "즉시 조치가 필요한 과제와 중장기적으로 분리해야 할 과제",
                    "구축 완료보다 운영 안정화와 인수 품질을 기준으로 한 완료 조건",
                ])
            ),
        ],
    }),
    "/service/server": page({
        id: "service_server_overview_override",
        title: "서버 인프라",
        slug: "/service/server",
        description:
            "TechI는 구축, 증설, 가상화, 모니터링을 분리하지 않고 서버 운영 체계 전체를 기준으로 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("서버 인프라", ["서비스", "서버 인프라"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "서버 인프라는 설치보다\n전환 이후의 운영 상태가\n더 중요합니다",
                    "TechI는 신규 구축, 교체, 증설, 가상화, 모니터링을 각각 따로 보지 않습니다. 서버가 실제 서비스 환경 안에서 어떤 역할을 하고, 전환 이후 어떻게 운영될지를 기준으로 전체 구조를 다시 설계합니다.",
                    "/images/hero-datacenter.jpg",
                    "고밀도 서버 인프라와 데이터센터 전경",
                    { label: "구축·증설 보기", href: "/service/server/build" },
                    { label: "가상화/클러스터 보기", href: "/service/server/virtualization" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("서버 인프라 세부 서비스", [
                    {
                        title: "구축/증설",
                        desc: "사양 선정, 배치, 전환, 검증, 인수 기준까지 포함해 서버 교체와 확장을 수행합니다.",
                        href: "/service/server/build",
                    },
                    {
                        title: "가상화/클러스터",
                        desc: "자원 풀, HA 정책, 확장 전략, 운영 표준까지 함께 고려한 플랫폼 구조를 제안합니다.",
                        href: "/service/server/virtualization",
                    },
                    {
                        title: "운영/모니터링",
                        desc: "관제 화면보다 알림 기준, 에스컬레이션, 런북, RCA가 먼저 보이는 체계를 만듭니다.",
                        href: "/service/server/ops-monitoring",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "Server Project Scenes",
                    title: "실제 서버 프로젝트는 이런 장면에서 차이가 납니다",
                    body: "랙 구성, 설치, 점검, 인수 문서 검토는 모두 별개 작업이 아니라 한 운영 흐름의 일부입니다.",
                    items: [
                        {
                            imageSrc: "/images/server-photo-install.jpg",
                            imageAlt: "서버 장비를 설치하는 현장",
                            caption: "물리 설치는 시작일 뿐이고, 이후의 전환과 검증이 더 중요합니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/server-photo-inspection.jpg",
                            imageAlt: "엔지니어가 서버 상태를 점검하는 장면",
                            caption: "점검 기준이 있어야 증설 이후에도 운영 편차가 커지지 않습니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/server-photo-racks.jpg",
                            imageAlt: "랙 기반 서버 인프라 환경",
                            caption: "역할 분리와 배치 기준은 장비 수보다 운영 상태를 더 크게 좌우합니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Technical Field Expertise",
                    title: "성능보다 먼저 보는 것은 역할 분리와 전환 기준입니다",
                    body: "서버 인프라는 스펙표보다 역할 정의, 자원 배치, 전환 순서, 검증 항목이 먼저 정리돼야 안정적입니다. TechI는 구축 이후 운영팀이 바로 이어받을 수 있는 상태를 목표로 프로젝트를 설계합니다.",
                    imageSrc: "/images/technical-design-review.jpg",
                    imageAlt: "아키텍처 설계 자료를 검토하는 기술 회의",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "Server engineering / role design, transition planning, operation handover",
                    points: [
                        "업무 역할별 서버군과 자원 배치 기준을 먼저 나눕니다.",
                        "전환 일정, 검증 포인트, 롤백 조건을 같은 문서 안에서 정리합니다.",
                        "가상화, 모니터링, 백업 연계를 포함해 운영팀 인수 상태까지 맞춥니다.",
                    ],
                })
            ),
            section(
                "s6",
                "useCases",
                caseList("이런 서버 환경에서 주로 검토합니다", [
                    "노후 장비 교체와 무중단 전환 조건을 함께 검토해야 하는 환경",
                    "GPU · HPC 등 고밀도 자원 증설과 냉각 · 전력 · 랙 구성이 함께 중요한 환경",
                    "가상화 통합 이후 표준 운영 체계와 장애 대응 기준이 필요한 환경",
                    "서버, 백업, DR까지 하나의 운영 흐름으로 다시 정리해야 하는 환경",
                ])
            ),
        ],
    }),
    "/service/network": page({
        id: "service_network_overview_override",
        title: "네트워크",
        slug: "/service/network",
        description:
            "TechI는 네트워크를 연결 장비가 아니라 경계, 정책, 이중화, 운영 기준을 포함한 서비스 기반으로 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("네트워크", ["서비스", "네트워크"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "네트워크는 연결보다\n경계와 운영 기준이\n먼저 설계되어야 합니다",
                    "TechI는 코어, 액세스, 무선, 방화벽, 대외 연결을 따로 보지 않습니다. 트래픽 흐름과 운영 책임 구간을 기준으로, 장애가 발생했을 때 어디를 봐야 하는지 바로 읽히는 네트워크 구조를 설계합니다.",
                    "/images/hero-network.jpg",
                    "네트워크 장비와 연결 구조를 상징하는 이미지",
                    { label: "설계/구축 보기", href: "/service/network/design-build" },
                    { label: "보안(방화벽/정책) 보기", href: "/service/network/security" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("네트워크 세부 서비스", [
                    {
                        title: "설계/구축",
                        desc: "토폴로지, 장비 배치, 회선 구성, 전환 계획, 현장 검증까지 포함한 구축 서비스를 제공합니다.",
                        href: "/service/network/design-build",
                    },
                    {
                        title: "보안(방화벽/정책)",
                        desc: "세그먼트, 접근 정책, 방화벽 룰, 대외 연결 구조를 운영 기준과 함께 정리합니다.",
                        href: "/service/network/security",
                    },
                    {
                        title: "무선/고가용",
                        desc: "무선 품질, 로밍, 이중화, 장애 분리 기준을 포함한 가용성 중심 구성을 설계합니다.",
                        href: "/service/network/ha-wireless",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "Network Delivery Scenes",
                    title: "네트워크 프로젝트는 연결도만으로 설명되지 않습니다",
                    body: "케이블링, 구간 설계, 보안 통제, 운영 화면까지 함께 봐야 실제 운영 품질이 읽힙니다.",
                    items: [
                        {
                            imageSrc: "/images/network-fiber-photo.jpg",
                            imageAlt: "광케이블과 네트워크 연결 환경",
                            caption: "연결 품질은 실제 구간 구조와 물리 계층까지 함께 정리돼야 확보됩니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/hero-network.jpg",
                            imageAlt: "네트워크 인프라를 상징하는 장비 이미지",
                            caption: "토폴로지 설계는 장비 리스트보다 장애 구간 분리가 먼저 읽혀야 합니다.",
                            imageWidth: 2400,
                            imageHeight: 1600,
                        },
                        {
                            imageSrc: "/images/security-control-room.jpg",
                            imageAlt: "보안 관제와 운영 상황을 확인하는 공간",
                            caption: "정책과 통제는 운영 화면과 대응 체계 안에서 설명돼야 설득력이 생깁니다.",
                            imageWidth: 2400,
                            imageHeight: 1600,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Reliable Network Infrastructure",
                    title: "장애가 났을 때 어느 구간이 문제인지 바로 읽혀야 합니다",
                    body: "좋은 네트워크는 평상시 빠른 것만으로 충분하지 않습니다. 장애가 발생했을 때 영향 범위, 우회 경로, 정책 충돌, 책임 구간이 빠르게 파악돼야 실제 운영 품질이 유지됩니다.",
                    imageSrc: "/images/technical-design-review.jpg",
                    imageAlt: "네트워크와 운영 구조를 설계 자료로 검토하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "Network design / topology, security policy, HA, operation clarity",
                    points: [
                        "코어, 액세스, 무선, 대외 연결을 한 운영 구조 안에서 정리합니다.",
                        "세그먼트, 방화벽 정책, 접근 범위를 문서와 변경 기준으로 남깁니다.",
                        "무선과 이중화 구조까지 포함해 장애 분리와 서비스 연속성을 설계합니다.",
                    ],
                })
            ),
            section(
                "s6",
                "useCases",
                caseList("이런 네트워크 과제를 주로 맡습니다", [
                    "증설이 반복되면서 토폴로지와 책임 구간이 복잡해진 환경",
                    "방화벽 룰과 네트워크 정책이 누적되어 정리가 필요한 환경",
                    "무선 품질, 로밍, 음영 구간, 고가용 구성이 함께 중요한 환경",
                    "회선, 보안, 이중화를 동시에 재정비해야 하는 대형 업무 환경",
                ])
            ),
        ],
    }),
    "/service/storage-backup": page({
        id: "service_storage_overview_override",
        title: "스토리지/백업",
        slug: "/service/storage-backup",
        description:
            "TechI는 스토리지, 백업, 복구, DR을 개별 제품이 아니라 하나의 데이터 보호 체계로 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("스토리지/백업", ["서비스", "스토리지/백업"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "데이터 보호는 저장보다\n복구 가능성이 먼저\n확인되어야 합니다",
                    "TechI는 스토리지, 백업, 복구, DR을 따로 제안하지 않습니다. 데이터 중요도와 복구 목표를 기준으로, 장애가 발생했을 때 실제로 어느 순서로 복구할지까지 포함한 보호 구조를 설계합니다.",
                    "/images/server-photo-racks.jpg",
                    "스토리지와 서버 랙 환경",
                    { label: "스토리지 구축 보기", href: "/service/storage-backup/storage" },
                    { label: "백업/복구 보기", href: "/service/storage-backup/backup-restore" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("데이터 보호 세부 서비스", [
                    {
                        title: "스토리지 구축",
                        desc: "워크로드 특성과 성장 계획에 맞춘 저장 구조, 성능, 가용성, 용량 계획을 설계합니다.",
                        href: "/service/storage-backup/storage",
                    },
                    {
                        title: "백업/복구",
                        desc: "정책, 보존 주기, 복구 시나리오, 복구 검증 체계를 함께 정리합니다.",
                        href: "/service/storage-backup/backup-restore",
                    },
                    {
                        title: "DR/BCP",
                        desc: "서비스 연속성을 기준으로 RPO/RTO, 전환 절차, 리허설 범위까지 포함해 설계합니다.",
                        href: "/service/storage-backup/dr-bcp",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "Protection Workflow",
                    title: "데이터 보호는 장비보다 복구 흐름으로 설명되는 편이 더 정확합니다",
                    body: "스토리지 운영, 백업 검토, 장애 시 복구 판단은 모두 한 흐름 안에서 연결되어야 합니다.",
                    items: [
                        {
                            imageSrc: "/images/server-photo-racks.jpg",
                            imageAlt: "스토리지와 랙 환경",
                            caption: "저장 구조는 현재 부하와 향후 확장 계획을 함께 보고 설계해야 합니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/server-photo-inspection.jpg",
                            imageAlt: "엔지니어가 장비 상태를 점검하는 장면",
                            caption: "보호 체계는 실제 점검과 검증 이력이 남을 때 비로소 의미가 생깁니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/dark-console-operator.jpg",
                            imageAlt: "운영 화면과 로그를 점검하는 콘솔 환경",
                            caption: "장애 시 어떤 데이터를 어떤 순서로 복구할지 운영 관점에서 정리해야 합니다.",
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
                    eyebrow: "Comprehensive Data Protection",
                    title: "스토리지, 백업, DR은 하나의 보호 흐름으로 설계해야 합니다",
                    body: "용량만 늘리는 방식으로는 보호 체계가 완성되지 않습니다. 저장 정책, 백업 주기, 복구 목표, DR 전환 절차가 연결돼 있어야 장애 상황에서도 복구 시간을 예측할 수 있습니다.",
                    imageSrc: "/images/technical-design-review.jpg",
                    imageAlt: "데이터 보호 구조를 설계 자료와 함께 검토하는 장면",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "Data protection / storage, backup, recovery, DR continuity",
                    points: [
                        "데이터 중요도와 서비스 우선순위부터 먼저 구분합니다.",
                        "RPO/RTO, 보존 정책, 복구 리허설 범위를 한 구조 안에서 정리합니다.",
                        "스토리지 운영 기준과 백업/복구 문서를 함께 남겨 실운영까지 연결합니다.",
                    ],
                })
            ),
            section(
                "s6",
                "benefits",
                benefits("TechI가 데이터 보호 프로젝트에서 먼저 보는 항목", [
                    "어떤 데이터를 먼저 복구해야 서비스 영향이 가장 작아지는지에 대한 우선순위",
                    "백업 보관 여부가 아니라 실제 복구 가능 시간과 검증 이력이 있는지 여부",
                    "스토리지 성능과 증설 계획이 백업/복구 정책과 충돌하지 않는 구조인지 여부",
                    "DR 전환이 문서로만 존재하는지, 실제 리허설과 역할 정의가 있는지 여부",
                ])
            ),
        ],
    }),
    "/service/consulting": page({
        id: "service_consulting_overview_override",
        title: "컨설팅",
        slug: "/service/consulting",
        description:
            "TechI의 컨설팅은 현황 분석에서 멈추지 않고 실행 가능한 로드맵과 우선순위를 남기는 데 집중합니다.",
        sections: [
            section("s1", "header", subnavHeader("컨설팅", ["서비스", "컨설팅"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "진단은 보고서보다\n다음 실행 단계가\n남아야 의미가 있습니다",
                    "TechI의 컨설팅은 현황을 설명하는 보고서로 끝나지 않습니다. 현재 리스크를 기술 과제와 운영 과제로 다시 나누고, 우선순위와 일정, 예산, 조직 제약까지 반영한 다음 단계의 기준을 정리합니다.",
                    "/images/about-team-strategy.jpg",
                    "프로젝트 방향과 우선순위를 논의하는 팀 미팅",
                    { label: "인프라 진단 보기", href: "/service/consulting/assessment" },
                    { label: "아키텍처/로드맵 보기", href: "/service/consulting/architecture-roadmap" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("컨설팅 세부 서비스", [
                    {
                        title: "인프라 진단",
                        desc: "현재 구조, 병목, 리스크를 파악해 개선 우선순위를 도출합니다.",
                        href: "/service/consulting/assessment",
                    },
                    {
                        title: "아키텍처/로드맵",
                        desc: "To-Be 구조와 단계별 투자·실행 계획을 현실적인 순서로 정리합니다.",
                        href: "/service/consulting/architecture-roadmap",
                    },
                    {
                        title: "보안/컴플라이언스",
                        desc: "보안 정책, 감사 대응, 운영 통제 관점에서 필요한 구조와 과제를 정리합니다.",
                        href: "/service/consulting/security-compliance",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "Consulting Scenes",
                    title: "좋은 컨설팅은 발표 자료보다 문제를 다시 정렬하는 장면에서 드러납니다",
                    body: "현장 진단, 문서 검토, 방향성 회의는 모두 현재 환경을 어떻게 실행 계획으로 바꾸는지와 연결됩니다.",
                    items: [
                        {
                            imageSrc: "/images/about-team-strategy.jpg",
                            imageAlt: "팀 단위로 방향성을 논의하는 회의 장면",
                            caption: "우선순위 정리는 대부분 기술 이슈와 운영 이슈를 다시 나누는 데서 시작합니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/consulting-review-photo.jpg",
                            imageAlt: "문서를 함께 검토하는 장면",
                            caption: "현황 분석은 발표 자료보다 실행 가능한 과제로 이어질 때 가치가 있습니다.",
                            imageWidth: 1600,
                            imageHeight: 1068,
                        },
                        {
                            imageSrc: "/images/technical-design-review.jpg",
                            imageAlt: "설계 자료와 구조를 검토하는 엔지니어",
                            caption: "To-Be 구조는 기술 스펙보다 예산과 일정, 운영 조직에 맞아야 합니다.",
                            imageWidth: 6000,
                            imageHeight: 4000,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Strategic IT Consulting",
                    title: "현재 리스크를 실행 가능한 과제로 다시 정렬합니다",
                    body: "좋은 진단은 문제를 많이 적어내는 것이 아니라, 무엇을 지금 바꾸고 무엇을 나중으로 미뤄야 하는지 명확하게 정리하는 것입니다. TechI는 기술 구조와 운영 제약을 함께 보며 실행 가능한 로드맵을 제시합니다.",
                    imageSrc: "/images/technical-design-review.jpg",
                    imageAlt: "기술 로드맵과 현재 구조를 함께 검토하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "Consulting workflow / assess, prioritize, roadmap, governance",
                    points: [
                        "현재 문제를 기술 과제와 운영 과제로 구분합니다.",
                        "즉시 조치 과제와 중장기 투자 과제를 분리해 우선순위를 정합니다.",
                        "예산, 일정, 조직 제약을 반영한 현실적인 To-Be 계획을 만듭니다.",
                    ],
                })
            ),
            section(
                "s6",
                "benefits",
                benefits("컨설팅 이후 남아야 하는 결과", [
                    "지금 당장 손봐야 할 핵심 리스크와 장기 과제를 구분한 우선순위 지도",
                    "기술 구조, 예산, 일정, 조직 제약을 함께 반영한 단계별 로드맵",
                    "운영팀과 의사결정 조직이 같은 기준으로 볼 수 있는 문서와 판단 기준",
                    "보안·컴플라이언스 요구까지 포함해 실제 프로젝트로 이어질 수 있는 다음 단계",
                ])
            ),
        ],
    }),
    "/service/maintenance": page({
        id: "service_maintenance_overview_override",
        title: "유지보수",
        slug: "/service/maintenance",
        description:
            "TechI는 SLA, 정기점검, 장애대응, RCA를 분리하지 않고 재발을 줄이는 운영 체계로 유지보수를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("유지보수", ["서비스", "유지보수"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "운영 지원은 대응 속도보다\n재발을 줄이는 체계가\n먼저 갖춰져야 합니다",
                    "TechI의 유지보수는 단순 접수형 대응에 머물지 않습니다. 지원 범위, SLA, 정기점검, 장애 대응, RCA, 권고안을 하나의 운영 구조로 묶어 반복 이슈를 줄이는 방향으로 설계합니다.",
                    "/images/server-ops-photo.jpg",
                    "운영 환경을 모니터링하는 장면",
                    { label: "SLA/지원체계 보기", href: "/service/maintenance/sla-support" },
                    { label: "정기점검 보기", href: "/service/maintenance/health-check" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("운영 지원 세부 서비스", [
                    {
                        title: "SLA/지원체계",
                        desc: "대상 자산, 지원 시간, 응답 기준, 에스컬레이션 구조를 명확히 정의합니다.",
                        href: "/service/maintenance/sla-support",
                    },
                    {
                        title: "정기점검",
                        desc: "정기 점검을 통해 누적 이슈, 용량 변화, 교체 시점, 위험 신호를 미리 확인합니다.",
                        href: "/service/maintenance/health-check",
                    },
                    {
                        title: "장애대응/복구",
                        desc: "장애 접수, 초기 대응, 복구, RCA, 재발 방지 과제까지 한 흐름으로 정리합니다.",
                        href: "/service/maintenance/incident-recovery",
                    },
                ])
            ),
            section(
                "s4",
                "gallery",
                imageGallery({
                    eyebrow: "Operations Support Scenes",
                    title: "유지보수는 보고서보다 운영 현장의 반복을 줄일 수 있어야 합니다",
                    body: "관제 화면, 점검, 운영 문서 정리는 모두 장애 대응 이후를 더 안정적으로 만들기 위한 장면입니다.",
                    items: [
                        {
                            imageSrc: "/images/server-ops-photo.jpg",
                            imageAlt: "운영 화면을 모니터링하는 장면",
                            caption: "운영 지원의 가치는 빠른 인지와 우선순위 판단에서 먼저 드러납니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                        {
                            imageSrc: "/images/security-control-room.jpg",
                            imageAlt: "운영 관제와 통제 화면을 확인하는 공간",
                            caption: "지원 체계는 사람 한 명의 숙련도보다 프로세스와 기준으로 설명돼야 합니다.",
                            imageWidth: 2400,
                            imageHeight: 1600,
                        },
                        {
                            imageSrc: "/images/office-desk-operator.jpg",
                            imageAlt: "운영 자료를 책상에서 검토하는 장면",
                            caption: "보고와 권고안이 남아야 반복 장애가 단순 접수로 끝나지 않습니다.",
                            imageWidth: 1600,
                            imageHeight: 1067,
                        },
                    ],
                })
            ),
            section(
                "s5",
                "media",
                mediaFeature({
                    eyebrow: "Premium Maintenance Service",
                    title: "점검, 대응, 보고, RCA가 하나의 흐름으로 이어져야 합니다",
                    body: "운영 지원은 장애가 생겼을 때만 반응하는 구조로는 충분하지 않습니다. 정기점검과 장애대응, 보고 체계, 재발 방지 과제가 연결돼 있어야 지원 품질이 사람 의존형으로 흘러가지 않습니다.",
                    imageSrc: "/images/dark-console-operator.jpg",
                    imageAlt: "운영 화면과 로그를 점검하는 콘솔 환경",
                    layout: "imageLeft",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1066,
                    caption: "Maintenance flow / SLA, periodic checks, incident response, RCA",
                    points: [
                        "지원 범위와 SLA를 먼저 정의해 대응 우선순위를 맞춥니다.",
                        "정기점검 결과를 누적 이슈와 교체 시점 판단으로 연결합니다.",
                        "장애 복구 이후 RCA와 재발 방지 권고안까지 남겨 운영 품질을 높입니다.",
                    ],
                })
            ),
            section(
                "s6",
                "useCases",
                caseList("이런 운영 환경에서 유지보수 체계를 재정비합니다", [
                    "담당자 경험에 따라 지원 품질과 대응 속도가 달라지는 환경",
                    "정기점검은 하고 있지만 결과가 실제 개선 과제로 이어지지 않는 환경",
                    "장애 대응 기록은 남지만 RCA와 재발 방지 체계가 약한 환경",
                    "SLA, 보고 주기, 우선순위 기준을 다시 정의해야 하는 장기 운영 환경",
                ])
            ),
        ],
    }),
};

export default servicePageOverrides;
