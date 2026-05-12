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

const serviceDetailPageOverrides: Record<string, Page> = {
    "/service/server/build": page({
        id: "service_server_build_override",
        title: "서버 구축·증설",
        slug: "/service/server/build",
        description: "운영 기준에서 시작하는 서버 구축·증설 서비스 — 설치 이후 안정적으로 인수될 수 있도록 물리 설계부터 전환 검증까지 한 흐름으로 진행합니다.",
        sections: [
            section("s1", "header", subnavHeader("서버 구축·증설", ["서비스", "서버 인프라", "서버 구축·증설"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "서버 구축은 설치보다\n전환 이후 운영 상태가\n기준입니다",
                    "장비를 올리는 것은 구축의 시작이지 끝이 아닙니다. 테크아이는 랙 배치와 전원 계획부터 OS 구성, 전환 시나리오, 운영팀 인수까지 한 흐름으로 진행해 설치 이후에도 흔들리지 않는 서버 인프라를 만듭니다.",
                    "/images/server-photo-racks.jpg",
                    "데이터센터 서버 랙과 구축 현장을 보여주는 이미지",
                    { label: "구축 환경 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("구축 품질은 이 세 단계에서 결정됩니다", [
                    {
                        title: "물리 설계와 배치",
                        desc: "랙 위치, 전원 이중화, 케이블링, 냉각 동선을 먼저 정리해 설치 이후 발생하는 변경 비용과 장애 위험을 줄입니다.",
                    },
                    {
                        title: "전환 시나리오와 검증",
                        desc: "기존 서비스를 끊지 않고 전환하는 순서, 롤백 조건, 검증 항목을 미리 정의해 야간 작업이나 단계적 이전에서도 흔들리지 않게 합니다.",
                    },
                    {
                        title: "운영 인수와 문서화",
                        desc: "구축이 끝난 이후 운영팀이 바로 사용할 수 있도록 구성 현황, 점검 기준, 긴급 대응 절차를 인수 문서로 남깁니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "구축 엔지니어링",
                    title: "장비가 올라가기 전에\n더 많은 것을 결정합니다",
                    body: "구축 현장에서 가장 많은 시간이 낭비되는 지점은 설치 도중 발견되는 사전 미결 항목입니다. 랙 배치, 전원 용량, 네트워크 연결 방식, 전환 대상 서비스 목록이 먼저 정리되어야 현장에서의 변수가 줄어듭니다. 테크아이는 설치 전 결정 사항을 미리 구조화합니다.",
                    imageSrc: "/images/server-design-review.jpg",
                    imageAlt: "서버 구축 전 설계 문서와 다이어그램을 검토하는 엔지니어",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "서버 구축 / 랙 배치, 케이블 경로, 전환 전 체크리스트",
                    points: [
                        "랙 배치와 전원·케이블 설계를 사전에 확정해 현장 변수를 최소화합니다.",
                        "전환 전 검증 항목을 리스트화해 작업 중 누락을 방지합니다.",
                        "인수 문서를 구축 단계부터 작성해 운영팀 인계를 매끄럽게 합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("이런 프로젝트에서 가장 자주 찾습니다", [
                    "데이터센터 이전·신규 구축에서 서버 인프라를 한 번에 재정비해야 하는 경우",
                    "장비는 늘었지만 구성 기준과 인수 문서가 없어 운영팀이 파악하지 못하는 환경",
                    "노후 서버 교체 시 서비스 중단 없이 단계적으로 전환해야 하는 프로젝트",
                    "SI 업체 구축 이후 인수 기준 없이 넘겨받아 운영 기반부터 다시 잡아야 하는 경우",
                ])
            ),
        ],
    }),
    "/service/server/virtualization": page({
        id: "service_server_virtualization_override",
        title: "가상화·클러스터",
        slug: "/service/server/virtualization",
        description: "워크로드 분리, 자원 정책, HA 구조까지 운영 기준이 설계된 서버 가상화·클러스터 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("가상화·클러스터", ["서비스", "서버 인프라", "가상화·클러스터"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "가상화는 플랫폼보다\n운영 기준이\n먼저입니다",
                    "VMware, Hyper-V, KVM 중 어느 플랫폼을 쓰느냐보다 자원 풀을 어떻게 나누고, 장애 시 어느 VM이 우선 복구되며, 변경은 어떤 절차로 승인받는지가 먼저 정의되어야 합니다. 테크아이는 가상화 구조와 운영 기준을 함께 설계합니다.",
                    "/images/hero-datacenter.jpg",
                    "가상화 인프라와 서버 클러스터를 상징하는 데이터센터 이미지",
                    { label: "가상화 환경 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("가상화 환경에서 먼저 정의해야 하는 기준", [
                    {
                        title: "워크로드 분리와 자원 정책",
                        desc: "DB, 웹, 배치, 개발·운영 환경을 같은 자원 풀에 혼재시키지 않고 중요도와 특성에 따라 구분해 자원 경쟁을 줄입니다.",
                    },
                    {
                        title: "HA·장애 허용 구조",
                        desc: "노드 장애 시 어떤 VM이 어느 호스트로 이전되는지, 클러스터 쿼럼은 어떻게 유지되는지 장애 시나리오를 미리 정의합니다.",
                    },
                    {
                        title: "운영 표준과 변경 관리",
                        desc: "VM 생성, 삭제, 자원 조정, 스냅샷 정책을 표준화해 운영자 개인 방식이 아닌 일관된 절차로 관리합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "가상화 설계",
                    title: "자원 풀이 늘어날수록\n기준 없는 가상화는\n복잡해집니다",
                    body: "가상화는 초기에는 편리하지만 VM이 늘어날수록 자원 경쟁, 스냅샷 누적, 구성 드리프트가 쌓입니다. 테크아이는 도입 시점부터 자원 정책과 운영 기준을 함께 설계해 확장 이후에도 관리 가능한 구조를 만듭니다.",
                    imageSrc: "/images/server-virtualization-console.jpg",
                    imageAlt: "하이퍼바이저 콘솔 화면과 VM 목록을 확인하는 운영 환경",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "가상화 검토 / 자원 정책, 클러스터 HA, 변경 거버넌스",
                    points: [
                        "워크로드별 자원 우선순위를 분리해 성능 경쟁 지점을 없앱니다.",
                        "HA 절체 시나리오와 복구 순서를 클러스터 설계에 반영합니다.",
                        "VM 운영 표준을 만들어 스냅샷 누적과 구성 드리프트를 관리합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 환경에서 주로 검토합니다", [
                    "물리 서버에서 가상화로 전환하면서 HA와 자원 정책을 처음 설계해야 하는 경우",
                    "VM이 많아졌지만 자원 배분 기준이 없어 성능 문제와 운영 혼선이 반복되는 환경",
                    "기존 가상화 환경을 다른 플랫폼으로 전환해야 하는 프로젝트",
                    "클러스터 노드 증설 또는 교체 시 기존 운영에 영향을 최소화해야 하는 경우",
                ])
            ),
        ],
    }),
    "/service/server/ops-monitoring": page({
        id: "service_server_ops_monitoring_override",
        title: "운영·모니터링",
        slug: "/service/server/ops-monitoring",
        description: "알림 기준, 에스컬레이션 체계, 운영 런북까지 실제 대응이 가능한 서버 운영·모니터링 체계를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("운영·모니터링", ["서비스", "서버 인프라", "운영·모니터링"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "알림이 많은 관제가 아니라\n대응 기준이 보이는\n운영 체계를 만듭니다",
                    "모니터링 도구가 있어도 어떤 알림에 어떻게 대응하는지 기준이 없으면 운영자는 항상 과부하 상태입니다. 테크아이는 수집 범위, 알림 임계값, 에스컬레이션 절차, 런북을 함께 설계해 실제로 작동하는 운영 체계를 만듭니다.",
                    "/images/server-ops-noc.jpg",
                    "다중 모니터와 대시보드로 서버 운영 상태를 모니터링하는 NOC 환경",
                    { label: "운영 체계 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("운영 체계가 실제로 작동하려면", [
                    {
                        title: "수집 범위와 알림 기준",
                        desc: "CPU, 메모리, 디스크, 네트워크 지표 수집에 더해 어떤 값에서 알림을 발생시키고 어떤 것은 무시할지 기준을 명확히 합니다.",
                    },
                    {
                        title: "에스컬레이션과 런북",
                        desc: "알림이 발생했을 때 누가 먼저 확인하고, 어떤 조건에서 다음 담당자에게 넘기며, 어떤 순서로 조치하는지를 정의합니다.",
                    },
                    {
                        title: "보고와 지속 개선",
                        desc: "운영 지표와 알림 이력을 정기 보고로 연결하고, 반복 알림이 발생하는 구간을 구조 개선 과제로 전환합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "운영 & 모니터링",
                    title: "모니터링 도구가 있어도\n기준이 없으면 노이즈만\n쌓입니다",
                    body: "알림이 많을수록 운영자는 중요한 것을 놓칩니다. 어떤 지표를 보고, 어떤 알림에 즉시 대응하며, 어떤 것은 주간 리뷰로 넘기는지가 정의되어야 모니터링이 운영의 일부가 됩니다. 테크아이는 도구 설정과 함께 운영 기준을 동시에 설계합니다.",
                    imageSrc: "/images/security-noc-room.jpg",
                    imageAlt: "대형 벽면 디스플레이와 다수 운영자가 상황을 모니터링하는 관제 센터",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "운영 뷰 / 알림 조정, 에스컬레이션 경로, 런북 기반 대응",
                    points: [
                        "알림 임계값을 서비스 영향 기준으로 조정해 노이즈를 줄입니다.",
                        "에스컬레이션 경로와 런북을 운영 도구에 연결합니다.",
                        "반복 알림 구간을 분석해 구조 개선 과제로 이어갑니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 운영 환경에서 주로 찾습니다", [
                    "모니터링 도구는 있지만 알림이 너무 많아 정작 중요한 이벤트를 놓치는 환경",
                    "담당자마다 대응 방식이 달라 장애 시 혼선이 생기는 운영 조직",
                    "야간·주말 대응 기준이 없어 에스컬레이션이 지연되는 경우",
                    "운영 지표와 알림 이력을 SLA 보고에 연결해야 하는 환경",
                ])
            ),
        ],
    }),
    "/service/network/design-build": page({
        id: "service_network_design_build_override",
        title: "네트워크 구축 및 증설",
        slug: "/service/network/design-build",
        description: "배선, 장비, 정책, 이행 검증이 한 흐름으로 이어지는 현장 중심 네트워크 구축 및 증설 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("네트워크 구축 및 증설", ["서비스", "네트워크", "네트워크 구축 및 증설"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "배선과 정책이 따로 놀지 않도록\n현장 중심 네트워크를\n다시 설계합니다",
                    "신규 구축과 증설은 장비를 더 넣는 작업이 아니라, 서비스 흐름과 장애 영향 범위를 다시 정리하는 작업이어야 합니다. 테크아이는 코어, 액세스, 방화벽, 회선, 무선 구성을 한 번에 검토하고 실제 운영에 바로 이어지는 기준으로 구축합니다.",
                    "/images/hero-network.jpg",
                    "네트워크 인프라 구조를 상징하는 장비와 연결 이미지",
                    { label: "구축 환경 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("구축 품질은 장비 사양보다 이 세 가지 기준에서 갈립니다", [
                    {
                        title: "배선과 장비 배치",
                        desc: "랙 위치, 전원, 패치 패널, 회선 인입, 장비 간 연결 순서를 먼저 정리해 설치 이후의 변경 비용을 줄입니다.",
                    },
                    {
                        title: "논리 구조와 정책 정합성",
                        desc: "VLAN, 라우팅, ACL, 방화벽 정책이 물리 구성과 어긋나지 않도록 구축 전부터 논리 구조를 함께 맞춥니다.",
                    },
                    {
                        title: "이행 시나리오와 검증 계획",
                        desc: "작업 순서, 중단 시간, 롤백 조건, 확인 항목을 미리 정의해 야간 이행이나 단계별 전환에서도 흔들리지 않게 만듭니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "구축 현장",
                    title: "현장 구축은 설치보다 검증 장면이 더 중요합니다",
                    body: "케이블이 연결되고 장비가 올라가는 순간보다 더 중요한 것은 그 다음입니다. 회선 상태, 링크 업다운, 정책 반영, 서비스 경로, 이중화 절체까지 확인되어야 비로소 구축이 끝납니다. 테크아이는 설치 사진보다 검증 기준이 남는 구축을 지향합니다.",
                    imageSrc: "/images/network-fiber-photo.jpg",
                    imageAlt: "광케이블과 네트워크 연결 상태를 점검하는 현장 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "현장 검증 / 케이블 경로, 스위치 업링크, 정책 인수",
                    points: [
                        "배선 완료 후 링크 상태와 장비 간 연결 경로를 즉시 확인합니다.",
                        "정책 반영 항목을 현장 구성과 대조해 누락을 줄입니다.",
                        "이행 이후 운영팀이 바로 사용할 수 있는 인수 기준을 남깁니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("이런 프로젝트에서 주로 찾습니다", [
                    "사무실 이전, 전산실 재배치, 신규 지점 개설과 함께 네트워크를 다시 구성해야 하는 경우",
                    "기존 장비 증설은 했지만 VLAN, 정책, 회선 구성이 뒤엉켜 장애 영향 범위가 커진 경우",
                    "방화벽, 스위치, 무선, 인터넷 회선을 각기 다른 업체가 나눠 구축해 기준 문서가 분리된 경우",
                    "구축 이후 운영팀이 실제 관리할 수 있는 인수 문서와 점검 기준이 필요한 경우",
                ])
            ),
        ],
    }),
    "/service/network/security": page({
        id: "service_network_security_override",
        title: "네트워크 보안",
        slug: "/service/network/security",
        description: "망 분리, 정책 기준, 접근 통제, 감사 대응까지 운영 가능한 네트워크 보안 체계를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("네트워크 보안", ["서비스", "네트워크", "네트워크 보안"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "정책이 쌓이는 보안이 아니라\n운영 기준이 보이는 보안으로\n다시 정리합니다",
                    "네트워크 보안은 장비를 더 넣는다고 강해지지 않습니다. 망 구간, 접근 주체, 허용 정책, 예외 처리, 감사 근거가 같은 기준으로 묶여야 실제 운영이 가능합니다. 테크아이는 네트워크 구조와 정책 운영을 함께 정리합니다.",
                    "/images/hero-security.jpg",
                    "보안 인프라와 관제 이미지를 상징하는 히어로",
                    { label: "보안 환경 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("보안 운영을 안정시키는 세 가지 축", [
                    {
                        title: "구간과 역할 정의",
                        desc: "업무망, 서버망, 관리망, 외부 연계 구간을 먼저 나누고 어떤 사용자가 어떤 경로로 접근하는지 기준을 분명히 합니다.",
                    },
                    {
                        title: "정책 표준화",
                        desc: "허용·차단 정책과 예외 처리 방식을 템플릿화해 담당자나 장비가 바뀌어도 같은 원칙으로 운영되게 만듭니다.",
                    },
                    {
                        title: "감사와 증적 관리",
                        desc: "정책 이력, 변경 승인, 로그 보존, 점검 결과를 남겨 내부 감사나 규제 대응 시 설명 가능한 상태를 유지합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "보안 운영",
                    title: "보안은 통제 화면보다 운영 체계가 설득력을 만듭니다",
                    body: "정책이 많아질수록 중요한 것은 더 많은 룰이 아니라 더 명확한 기준입니다. 어떤 경로를 막고, 어떤 서비스는 예외로 허용하며, 변경 이력을 어떻게 관리할지까지 정리되어야 보안이 운영의 일부가 됩니다.",
                    imageSrc: "/images/network-policy-review.jpg",
                    imageAlt: "방화벽 정책 문서와 룰셋을 검토하는 네트워크 보안 엔지니어",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "거버넌스 뷰 / 네트워크 분리, 정책 검토, 감사 증적",
                    points: [
                        "망 구간별 접근 통제 기준을 표준안으로 정리합니다.",
                        "정책 변경과 예외 승인 절차를 운영팀 관점에서 단순화합니다.",
                        "감사 대응에 필요한 로그와 문서화 항목을 함께 설계합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 상황에서 주로 찾습니다", [
                    "망 분리와 보안 정책은 존재하지만 담당자별 운영 방식이 달라 예외가 누적된 경우",
                    "인터넷, VPN, 외부 연계, 원격 접속이 늘어나며 보안 기준을 다시 잡아야 하는 경우",
                    "공공·금융·제조 등 감사와 보안 점검을 정기적으로 준비해야 하는 환경",
                    "보안 장비는 충분하지만 정책 문서와 운영 기준이 뒤따르지 못한 경우",
                ])
            ),
        ],
    }),
    "/service/network/ha-wireless": page({
        id: "service_network_ha_wireless_override",
        title: "네트워크 이중화 및 무선",
        slug: "/service/network/ha-wireless",
        description: "네트워크 이중화와 무선 환경을 서비스 중단 없이 운영할 수 있도록 구조와 절체 기준을 함께 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("네트워크 이중화 및 무선", ["서비스", "네트워크", "네트워크 이중화 및 무선"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "무선 품질과 이중화는\n장비 수량이 아니라\n절체 기준으로 결정됩니다",
                    "이중화와 무선 인프라는 장애가 났을 때 어떻게 버티는지가 먼저 정의되어야 합니다. 테크아이는 코어 절체, 링크 이중화, 무선 커버리지, 로밍 품질, 관리 포인트를 한 번에 검토해 실제 사용자가 체감하는 안정성을 설계합니다.",
                    "/images/network-wireless-install.jpg",
                    "천장에 무선 AP를 설치하는 네트워크 구축 현장",
                    { label: "이중화·무선 환경 진단 먼저 받기", href: "/service/consulting/assessment" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("이중화·무선 설계에서 먼저 보는 항목", [
                    {
                        title: "절체 경로와 실패 지점",
                        desc: "장비 두 대를 두는 것보다 장애 시 어느 구간이 먼저 전환되고 어디에서 서비스가 끊기는지 확인하는 것이 우선입니다.",
                    },
                    {
                        title: "무선 커버리지와 사용자 밀도",
                        desc: "층별 구조, 인원 밀도, 동선, 회의실 사용 패턴을 반영해 액세스포인트와 채널 구성을 설계합니다.",
                    },
                    {
                        title: "운영 단순성과 가시성",
                        desc: "관리 포인트를 최소화하고, 절체 상태와 무선 품질을 운영자가 빠르게 파악할 수 있도록 기준을 정리합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "가용성 이중화",
                    title: "사용자는 끊기지 않아야 하고 운영자는 바로 알아야 합니다",
                    body: "네트워크 이중화와 무선 인프라는 평소보다 장애 순간에 평가받습니다. 절체가 되더라도 서비스 영향 범위가 크면 의미가 없습니다. 테크아이는 끊김 없는 접근 경험과 빠른 원인 판단을 동시에 고려해 구조를 설계합니다.",
                    imageSrc: "/images/network-fiber-photo.jpg",
                    imageAlt: "무선 및 이중화 설계를 검토하는 기술 회의 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "설계 검토 / HA 경로, 로밍 정책, 운영 가시성",
                    points: [
                        "이중화 경로와 장애 영향 범위를 시나리오 단위로 검토합니다.",
                        "무선 커버리지와 로밍 품질을 실제 사용자 동선 기준으로 조정합니다.",
                        "운영 화면에서 절체 상태와 품질 저하를 빠르게 식별할 수 있게 만듭니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 이후 달라지는 것", [
                    "장애나 회선 전환 시 서비스 중단 범위가 예측 가능해집니다.",
                    "무선 품질 이슈를 단순 민원 수준이 아니라 구조적 문제로 분류해 대응할 수 있습니다.",
                    "장애 발생 시 네트워크팀이 절체 경로와 원인 구간을 더 빠르게 파악할 수 있습니다.",
                    "무선 증설과 이중화 확장을 같은 기준 아래에서 이어갈 수 있습니다.",
                ])
            ),
        ],
    }),
    "/service/storage-backup/storage": page({
        id: "service_storage_engineering_override",
        title: "스토리지 설계",
        slug: "/service/storage-backup/storage",
        description: "성능, 용량, 보호 정책, 운영 기준을 함께 고려한 엔터프라이즈 스토리지 설계 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("스토리지 설계", ["서비스", "스토리지·백업", "스토리지 설계"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "빠른 스토리지가 아니라\n운영과 보호까지 버티는 구조로\n스토리지를 설계합니다",
                    "스토리지는 단순 용량 증설보다 데이터 특성과 서비스 특성에 맞는 계층 구조가 중요합니다. 테크아이는 성능 요구, 성장 속도, 백업 연계, 복구 기준을 함께 고려해 실제 운영이 가능한 스토리지 구조를 제안합니다.",
                    "/images/hero-datacenter.jpg",
                    "데이터센터 스토리지와 서버 랙을 보여주는 이미지",
                    { label: "백업·복구 보기", href: "/service/storage-backup/backup-restore" },
                    { label: "DR·BCP 보기", href: "/service/storage-backup/dr-bcp" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("스토리지 설계에서 먼저 검토하는 기준", [
                    {
                        title: "워크로드별 계층 분리",
                        desc: "DB, 파일, 백업, 로그, 아카이브 데이터를 같은 방식으로 다루지 않고 성격에 맞는 성능·보호 정책을 적용합니다.",
                    },
                    {
                        title: "성능과 성장성 균형",
                        desc: "현재 IOPS와 대역폭만 보지 않고 향후 증설 시점과 운영 복잡도까지 고려해 적정한 구조를 설계합니다.",
                    },
                    {
                        title: "보호 체계 연동",
                        desc: "스냅샷, 복제, 백업, 복구 절차를 스토리지 설계 초기부터 함께 엮어 데이터 보호 정책이 뒤늦게 덧붙지 않게 합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "스토리지 엔지니어링",
                    title: "스토리지는 용량표가 아니라 데이터 흐름으로 설계해야 합니다",
                    body: "실무에서는 저장 공간보다 더 중요한 것이 데이터가 어떻게 생성되고, 얼마나 자주 읽히며, 언제 복구되어야 하는지입니다. 테크아이는 현장 운영 기준을 바탕으로 성능 계층과 보호 계층이 함께 맞물리는 구조를 설계합니다.",
                    imageSrc: "/images/server-photo-racks.jpg",
                    imageAlt: "데이터센터 랙과 스토리지 인프라 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "스토리지 뷰 / 워크로드 계층화, 용량 계획, 보호 연계",
                    points: [
                        "워크로드별 성능 특성을 기준으로 계층을 나눕니다.",
                        "증설 시점과 보호 정책을 함께 설계해 재구성 비용을 줄입니다.",
                        "운영팀이 이해하기 쉬운 기준 문서와 관리 포인트를 남깁니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("설계 이후 운영에서 달라지는 것", [
                    "성능 부족과 과도한 투자 사이에서 더 현실적인 균형점을 찾을 수 있습니다.",
                    "백업과 복구 정책이 뒤늦게 덧붙지 않아 운영 기준이 단순해집니다.",
                    "증설 시점이 와도 기존 구조를 크게 흔들지 않고 확장할 수 있습니다.",
                    "데이터 중요도에 맞춘 저장 정책이 생겨 운영 우선순위가 분명해집니다.",
                ])
            ),
        ],
    }),
    "/service/storage-backup/backup-restore": page({
        id: "service_backup_restore_override",
        title: "백업 및 복구",
        slug: "/service/storage-backup/backup-restore",
        description: "백업 보유 여부가 아니라 실제 복구 가능성과 검증 이력을 중심으로 백업 및 복구 체계를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("백업 및 복구", ["서비스", "스토리지·백업", "백업 및 복구"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "백업이 있다는 말보다\n얼마나 빨리 복구되는지가\n더 중요합니다",
                    "백업 체계는 저장 주기만으로 설명되지 않습니다. 어떤 데이터를 어느 시점으로, 누가, 어떤 절차로 복구하는지가 정의되어 있어야 운영 기준이 됩니다. 테크아이는 백업과 복구를 분리하지 않고 하나의 운영 흐름으로 설계합니다.",
                    "/images/hero-cloud.jpg",
                    "데이터 보호와 복구 체계를 상징하는 클라우드 이미지",
                    { label: "스토리지 설계 보기", href: "/service/storage-backup/storage" },
                    { label: "DR·BCP 보기", href: "/service/storage-backup/dr-bcp" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("실제 복구 중심 백업 체계의 기준", [
                    {
                        title: "데이터 우선순위",
                        desc: "모든 데이터를 같은 주기로 백업하지 않고 서비스 중요도와 변경 빈도에 따라 보호 수준을 나눕니다.",
                    },
                    {
                        title: "복구 시나리오",
                        desc: "파일 단위, 서버 단위, 서비스 단위 복구를 구분하고 각각의 절차와 소요 시간을 미리 정의합니다.",
                    },
                    {
                        title: "정기 검증",
                        desc: "백업 성공 여부만 보는 것이 아니라 실제 복구 리허설을 정기적으로 수행해 복구 가능성을 검증합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "복구 준비도",
                    title: "복구는 장애 순간에 처음 해보면 늦습니다",
                    body: "백업은 쌓여 있어도 복구 절차가 없다면 운영 기준이 되지 못합니다. 테크아이는 장애 순간 필요한 담당자, 데이터 범위, 복구 순서, 검증 결과까지 한 흐름으로 정리해 실제로 복구할 수 있는 체계를 만듭니다.",
                    imageSrc: "/images/server-photo-inspection.jpg",
                    imageAlt: "엔지니어가 장비 상태와 복구 준비를 점검하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "백업 운영 / 복구 준비, 검증 이력, 복구 책임",
                    points: [
                        "데이터 중요도에 따라 복구 우선순위를 구분합니다.",
                        "복구 리허설 결과를 남겨 실제 대응 시간을 예측 가능하게 만듭니다.",
                        "운영팀과 인프라팀이 같은 기준으로 복구 절차를 공유합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 상황에서 주로 찾습니다", [
                    "백업은 수행 중이지만 복구 테스트를 정기적으로 하지 못하는 환경",
                    "랜섬웨어, 삭제 사고, 시스템 장애에 대비한 단계별 복구 절차가 필요한 환경",
                    "여러 백업 도구와 저장소를 사용하지만 운영 기준이 통합되지 않은 환경",
                    "감사나 내부 통제 차원에서 복구 이력과 검증 기록을 남겨야 하는 환경",
                ])
            ),
        ],
    }),
    "/service/storage-backup/dr-bcp": page({
        id: "service_dr_bcp_override",
        title: "DR 및 BCP",
        slug: "/service/storage-backup/dr-bcp",
        description: "재해복구와 업무연속성 기준을 운영 현실에 맞춰 수립하고 절체 및 복구 체계를 설계합니다.",
        sections: [
            section("s1", "header", subnavHeader("DR 및 BCP", ["서비스", "스토리지·백업", "DR 및 BCP"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "재해복구는 문서가 아니라\n서비스를 다시 살리는 순서로\n설계되어야 합니다",
                    "DR과 BCP는 선언적 문구보다 우선순위와 절체 기준이 더 중요합니다. 테크아이는 서비스 중요도, 복구 시점, 대체 자원, 운영 역할을 함께 정리해 실제 위기 상황에서 실행 가능한 복구 체계를 설계합니다.",
                    "/images/hero-datacenter.jpg",
                    "재해복구와 업무연속성을 상징하는 데이터센터 이미지",
                    { label: "스토리지 설계 보기", href: "/service/storage-backup/storage" },
                    { label: "백업·복구 보기", href: "/service/storage-backup/backup-restore" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("DR·BCP 수립에서 핵심이 되는 기준", [
                    {
                        title: "업무 우선순위",
                        desc: "모든 시스템을 동시에 살리는 접근 대신 어떤 서비스를 먼저 복구할지 명확히 정의합니다.",
                    },
                    {
                        title: "절체와 복귀 절차",
                        desc: "전환 자체보다 누가 어떤 조건에서 절체를 결정하고, 언제 원복하는지까지 포함해 운영 기준을 세웁니다.",
                    },
                    {
                        title: "정기 훈련과 문서화",
                        desc: "실행되지 않는 문서가 되지 않도록 점검·리허설·개정 주기까지 포함한 운영 체계를 만듭니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "연속성 계획",
                    title: "중요한 것은 살아남는 시스템보다 이어지는 업무입니다",
                    body: "재해복구 체계는 서버와 스토리지만으로 완성되지 않습니다. 연락 체계, 승인 절차, 복구 순서, 대체 업무 방식이 함께 정리되어야 실제 업무 연속성이 유지됩니다. 테크아이는 기술 구조와 운영 절차를 한 문서 체계로 연결합니다.",
                    imageSrc: "/images/solution-monitoring-room.jpg",
                    imageAlt: "운영실에서 복구와 연속성 계획을 확인하는 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 5464,
                    imageHeight: 8192,
                    caption: "연속성 뷰 / 절체 트리거, 서비스 우선순위, 복구 플레이북",
                    points: [
                        "서비스 중요도에 맞춘 복구 순서와 목표 시간을 정의합니다.",
                        "절체·원복 의사결정과 역할 분담을 문서와 훈련으로 고정합니다.",
                        "실제 위기 상황에서 바로 사용할 수 있는 플레이북을 남깁니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("정비 이후 달라지는 점", [
                    "위기 상황에서 무엇부터 복구해야 하는지 더 빠르게 결정할 수 있습니다.",
                    "절체와 원복 기준이 명확해져 운영 판단이 사람 의존적이지 않게 됩니다.",
                    "복구 문서와 훈련 기록이 남아 감사와 내부 통제 대응이 쉬워집니다.",
                    "기술 구조와 업무 절차가 하나로 묶여 실효성 있는 BCP가 됩니다.",
                ])
            ),
        ],
    }),
    "/service/consulting/assessment": page({
        id: "service_consulting_assessment_override",
        title: "인프라 진단",
        slug: "/service/consulting/assessment",
        description: "현재 인프라 구조와 운영 리스크를 진단해 실행 가능한 개선 과제로 정리하는 인프라 진단 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("인프라 진단", ["서비스", "컨설팅", "인프라 진단"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "프로젝트를 시작하기 전에\n먼저 현재 구조를\n정확히 읽어야 합니다",
                    "인프라 진단은 체크리스트 점검이 아니라, 현재 구조에서 어떤 병목과 리스크가 반복되고 있는지를 읽는 과정입니다. 테크아이는 서버, 네트워크, 데이터 보호, 운영 체계를 함께 보고 실제 개선 과제로 이어지는 진단 결과를 제공합니다.",
                    "/images/consulting-report-review.jpg",
                    "인프라 진단 보고서와 검토 자료를 확인하는 장면",
                    { label: "아키텍처 로드맵 보기", href: "/service/consulting/architecture-roadmap" },
                    { label: "보안·컴플라이언스 보기", href: "/service/consulting/security-compliance" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("진단은 이 세 가지를 분명하게 만드는 작업입니다", [
                    {
                        title: "현재 구조 파악",
                        desc: "장비 현황보다 서비스 흐름, 운영 의존성, 장애 발생 지점을 먼저 파악해 구조적 문제를 읽어냅니다.",
                    },
                    {
                        title: "리스크 우선순위화",
                        desc: "모든 이슈를 같은 무게로 다루지 않고 즉시 조치 항목과 중장기 과제를 구분해 정리합니다.",
                    },
                    {
                        title: "실행 과제 도출",
                        desc: "추상적 권고가 아니라 담당 부서와 일정에 연결할 수 있는 개선 과제로 정리해 실제 프로젝트로 이어지게 합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "진단 검토",
                    title: "좋은 진단은 더 많은 설명이 아니라 더 명확한 기준을 남깁니다",
                    body: "현황 진단의 가치는 보고서 분량에 있지 않습니다. 무엇이 실제 리스크인지, 어떤 순서로 손봐야 하는지, 지금 가능한 범위가 어디까지인지가 정리되어야 합니다. 테크아이는 운영 현실과 의사결정 관점에 맞는 진단 결과를 제공합니다.",
                    imageSrc: "/images/consulting-review-photo.jpg",
                    imageAlt: "프로젝트 자료와 아키텍처 현황을 검토하는 회의 장면",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1068,
                    caption: "진단 검토 / 현재 상태, 리스크 순위, 다음 단계 과제",
                    points: [
                        "인프라 구조를 서비스 영향 관점에서 재해석합니다.",
                        "즉시 조치 항목과 구조 개선 과제를 분리합니다.",
                        "경영진과 운영팀이 함께 이해할 수 있는 기준으로 결과를 요약합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 상황에서 가장 효과적입니다", [
                    "반복 장애와 성능 저하가 있는데 원인이 여러 영역에 걸쳐 있어 판단이 어려운 경우",
                    "시스템 증설이나 교체를 앞두고 현재 구조를 객관적으로 진단해야 하는 경우",
                    "운영팀은 불편을 느끼지만 투자 우선순위를 설명할 기준이 부족한 경우",
                    "감사, 보안 점검, 경영 보고를 앞두고 인프라 상태를 정리해야 하는 경우",
                ])
            ),
        ],
    }),
    "/service/consulting/architecture-roadmap": page({
        id: "service_consulting_roadmap_override",
        title: "아키텍처 로드맵",
        slug: "/service/consulting/architecture-roadmap",
        description: "현재 구조를 기반으로 단계별 투자와 전환 방향을 설계하는 인프라 아키텍처 로드맵 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("아키텍처 로드맵", ["서비스", "컨설팅", "아키텍처 로드맵"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "좋은 로드맵은\n큰 그림보다 먼저\n실행 순서를 분명히 합니다",
                    "아키텍처 로드맵은 기술 미래상을 그리는 문서가 아니라, 현재 환경에서 어떤 순서로 바꿔야 가장 안정적으로 전환할 수 있는지를 정리하는 계획이어야 합니다. 테크아이는 예산, 일정, 운영 인력까지 반영해 단계별 로드맵을 설계합니다.",
                    "/images/hero-cloud.jpg",
                    "인프라 로드맵과 확장 구조를 상징하는 클라우드 이미지",
                    { label: "인프라 진단 보기", href: "/service/consulting/assessment" },
                    { label: "보안·컴플라이언스 보기", href: "/service/consulting/security-compliance" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("로드맵 설계의 핵심 요소", [
                    {
                        title: "단계별 전환 범위",
                        desc: "한 번에 바꾸지 않고 서비스 영향이 적은 순서로 분할해 전환 계획을 세웁니다.",
                    },
                    {
                        title: "투자 우선순위",
                        desc: "효과가 큰 과제부터 실행할 수 있도록 비용, 리스크, 운영 편익을 함께 비교합니다.",
                    },
                    {
                        title: "운영 조직 반영",
                        desc: "기술적으로 가능한 시나리오가 아니라 실제 운영 조직이 감당 가능한 시나리오를 설계합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "로드맵 설계",
                    title: "로드맵은 발표용 그림보다 전환 이후의 안정성이 더 중요합니다",
                    body: "장기 계획이 멋져 보여도 단계별 실행 조건이 없으면 프로젝트는 중간에 흔들립니다. 테크아이는 현황 진단 결과를 바탕으로 우선순위, 투자 타이밍, 전환 시나리오, 운영 인수 시점을 한 문서에 묶어 로드맵을 설계합니다.",
                    imageSrc: "/images/about-team-strategy.jpg",
                    imageAlt: "프로젝트 방향과 로드맵을 논의하는 전략 회의 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1067,
                    caption: "로드맵 계획 / 단계 조정, 투자 타이밍, 전환 준비",
                    points: [
                        "단계별 전환 목표와 선행 조건을 명확히 잡습니다.",
                        "투자 우선순위를 경영 관점과 운영 관점 모두에서 정리합니다.",
                        "프로젝트 종료 이후 운영팀이 인수할 시점까지 계획에 포함합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("정리 이후 달라지는 것", [
                    "무엇부터 시작할지에 대한 조직 내 합의가 빨라집니다.",
                    "예산과 일정이 부족해도 단계별로 추진 가능한 기준이 생깁니다.",
                    "인프라, 보안, 운영 개선 과제를 하나의 흐름으로 관리할 수 있습니다.",
                    "단기 처방과 중장기 전환 계획을 분리해 더 현실적인 추진이 가능해집니다.",
                ])
            ),
        ],
    }),
    "/service/consulting/security-compliance": page({
        id: "service_consulting_security_compliance_override",
        title: "보안 및 컴플라이언스",
        slug: "/service/consulting/security-compliance",
        description: "보안 요구사항과 컴플라이언스 기준을 실제 운영 환경에 맞는 정책과 절차로 구체화합니다.",
        sections: [
            section("s1", "header", subnavHeader("보안 및 컴플라이언스", ["서비스", "컨설팅", "보안 및 컴플라이언스"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "보안 요구사항을\n운영 가능한 정책과 절차로\n구체화합니다",
                    "컴플라이언스는 체크리스트 통과가 아니라 실제 환경에서 계속 지켜질 수 있어야 의미가 있습니다. 테크아이는 보안 요구사항을 망 구조, 접근 통제, 로그, 점검, 증적 관리까지 이어지는 운영 기준으로 구체화합니다.",
                    "/images/hero-security.jpg",
                    "보안 거버넌스와 통제를 상징하는 이미지",
                    { label: "인프라 진단 보기", href: "/service/consulting/assessment" },
                    { label: "아키텍처 로드맵 보기", href: "/service/consulting/architecture-roadmap" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("보안·컴플라이언스 컨설팅의 핵심 범위", [
                    {
                        title: "요구사항 해석",
                        desc: "규정 문구를 그대로 나열하지 않고 현재 환경에서 어떤 통제 항목으로 구현되어야 하는지 해석합니다.",
                    },
                    {
                        title: "운영 절차 설계",
                        desc: "정책 승인, 예외 처리, 계정 관리, 로그 보관, 정기 점검 등 지속 가능한 운영 절차를 함께 설계합니다.",
                    },
                    {
                        title: "증적 체계 정리",
                        desc: "감사 시점에 급하게 모으지 않도록 어떤 로그와 문서를 어떤 주기로 보관할지 기준을 수립합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "거버넌스 & 컴플라이언스",
                    title: "보안은 요구사항이 아니라 실행 기준으로 남아야 합니다",
                    body: "규정은 조직마다 다르지만, 실제로 필요한 것은 누가 어떤 조건에서 무엇을 검토하고 기록할지에 대한 기준입니다. 테크아이는 보안과 컴플라이언스를 조직의 운영 흐름 안으로 끌어들여 실행 가능한 형태로 정리합니다.",
                    imageSrc: "/images/security-control-room.jpg",
                    imageAlt: "보안 통제와 운영을 상징하는 관제실 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 4000,
                    imageHeight: 2667,
                    caption: "거버넌스 모델 / 통제 매핑, 운영 절차, 감사 증적",
                    points: [
                        "요구사항을 실제 통제 항목과 운영 절차로 바꿉니다.",
                        "예외 관리와 점검 주기를 정책 체계 안으로 편입합니다.",
                        "감사 대응에 필요한 증적 구조를 미리 설계합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("이런 환경에서 주로 찾습니다", [
                    "공공, 제조, 유통 등 규제와 내부 통제가 중요한 인프라 환경",
                    "보안 정책은 있지만 운영 절차와 증적 체계가 뒤따르지 않는 조직",
                    "신규 시스템 도입과 함께 보안·감사 기준을 재정비해야 하는 프로젝트",
                    "외부 점검이나 인증 대응을 앞두고 운영 기준을 구체화해야 하는 경우",
                ])
            ),
        ],
    }),
    "/service/maintenance/sla-support": page({
        id: "service_maintenance_sla_support_override",
        title: "SLA 기반 지원",
        slug: "/service/maintenance/sla-support",
        description: "응답·조치·보고 기준이 명확한 SLA 기반 유지보수 지원 체계를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("SLA 기반 지원", ["서비스", "유지보수", "SLA 기반 지원"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "지원 체계는\n빠른 답변보다 먼저\n명확한 기준이 필요합니다",
                    "유지보수는 연락처만 있어서는 운영되지 않습니다. 장애 등급, 응답 시간, 조치 범위, 보고 방식, 정기 점검 항목이 명확해야 실제 운영 품질이 안정됩니다. 테크아이는 SLA를 문장으로 두지 않고 운영 체계로 연결합니다.",
                    "/images/office-desk-operator.jpg",
                    "운영 지원과 서비스 데스크를 상징하는 이미지",
                    { label: "정기 헬스체크 보기", href: "/service/maintenance/health-check" },
                    { label: "장애 대응·복구 보기", href: "/service/maintenance/incident-recovery" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("SLA 지원 체계의 기본 요소", [
                    {
                        title: "등급과 우선순위",
                        desc: "장애 심각도와 서비스 영향 범위를 기준으로 대응 우선순위를 정해 불필요한 혼선을 줄입니다.",
                    },
                    {
                        title: "응답과 조치 기준",
                        desc: "응답 시간만이 아니라 어떤 범위까지 원격·현장 지원을 수행하는지, 어떤 조건에서 에스컬레이션하는지 명확히 합니다.",
                    },
                    {
                        title: "보고와 개선 연계",
                        desc: "처리 결과가 단순 종료로 끝나지 않고 반복 이슈와 개선 권고로 이어지도록 운영 보고 체계를 설계합니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "지원 운영",
                    title: "좋은 SLA는 연락이 잘 되는 것이 아니라 대응이 예측 가능한 상태입니다",
                    body: "유지보수 품질은 담당자 개인의 숙련도보다 체계에서 갈립니다. 어떤 이슈가 어떤 경로로 접수되고, 누가 판단하며, 어떤 형식으로 보고되는지가 정의되어야 운영이 안정됩니다. 테크아이는 현장과 운영실 사이의 흐름을 표준화합니다.",
                    imageSrc: "/images/dark-console-operator.jpg",
                    imageAlt: "운영자가 콘솔을 보며 지원 상황을 확인하는 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1066,
                    caption: "지원 데스크 / 우선순위 라우팅, 대응 처리, 운영 보고",
                    points: [
                        "장애 등급과 대응 기준을 명확히 구분합니다.",
                        "원격·현장 지원 경계를 운영 현실에 맞춰 정리합니다.",
                        "월간 보고와 개선 권고까지 한 체계로 이어갑니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 이후 운영이 달라지는 부분", [
                    "장애 접수와 우선순위 분류가 더 빠르고 일관되게 진행됩니다.",
                    "담당자 변경이 있어도 서비스 품질 편차가 줄어듭니다.",
                    "반복 이슈가 누적되지 않고 보고와 개선 과제로 연결됩니다.",
                    "지원 범위와 책임 구간이 명확해 커뮤니케이션 비용이 줄어듭니다.",
                ])
            ),
        ],
    }),
    "/service/maintenance/health-check": page({
        id: "service_maintenance_health_check_override",
        title: "정기 헬스체크",
        slug: "/service/maintenance/health-check",
        description: "정기 점검과 상태 진단을 통해 잠재 리스크를 사전에 발견하고 개선 과제로 연결하는 헬스체크 서비스를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("정기 헬스체크", ["서비스", "유지보수", "정기 헬스체크"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "문제가 생긴 뒤 점검하는 것이 아니라\n문제가 커지기 전에\n징후를 읽어내야 합니다",
                    "정기 헬스체크는 단순 점검표 검토가 아닙니다. 용량 증가, 오류 로그, 성능 저하, 정책 누락, 구성 드리프트를 조기에 파악해 운영 리스크가 커지기 전에 대응하는 작업입니다. 테크아이는 정기 진단을 개선 과제로 연결합니다.",
                    "/images/server-photo-inspection.jpg",
                    "장비와 운영 상태를 점검하는 엔지니어 이미지",
                    { label: "SLA 기반 지원 보기", href: "/service/maintenance/sla-support" },
                    { label: "장애 대응·복구 보기", href: "/service/maintenance/incident-recovery" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("헬스체크에서 중점적으로 보는 항목", [
                    {
                        title: "상태 변화 추이",
                        desc: "현재 값만 보는 것이 아니라 이전 점검 결과와 비교해 어떤 지표가 악화되고 있는지 확인합니다.",
                    },
                    {
                        title: "구성 드리프트",
                        desc: "초기 설계와 달라진 정책, 예외 설정, 우회 구성을 찾아 운영 리스크로 이어질 지점을 파악합니다.",
                    },
                    {
                        title: "개선 권고 정리",
                        desc: "점검 결과를 단순 리포트로 끝내지 않고 즉시 조치 항목과 계획 과제로 구분해 남깁니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "정기 점검",
                    title: "정기 점검은 상태 보고보다 다음 조치를 분명히 해야 의미가 있습니다",
                    body: "운영팀은 대부분 이상 징후를 느끼고 있지만, 우선순위를 정리할 기준이 부족한 경우가 많습니다. 테크아이는 정기 헬스체크를 통해 현재 상태를 수치와 구성 기준으로 확인하고, 실제 개선이 필요한 지점을 빠르게 분리해 드립니다.",
                    imageSrc: "/images/maintenance-checklist.jpg",
                    imageAlt: "인프라 상태 점검 결과를 검토하는 회의 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 6000,
                    imageHeight: 4000,
                    caption: "헬스체크 / 추세 확인, 구성 드리프트, 실행 가능한 개선 과제",
                    points: [
                        "이전 점검 이력과 비교해 악화 추세를 찾습니다.",
                        "정상처럼 보이지만 위험한 구성 변화를 식별합니다.",
                        "즉시 조치와 중장기 개선 과제를 분리해 제공합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "useCases",
                caseList("주요 활용 상황", [
                    "장애는 없지만 성능 저하나 경고가 누적되어 구조 점검이 필요한 환경",
                    "담당자 변경 이후 구성 기준과 운영 상태를 다시 정리해야 하는 환경",
                    "정기 점검 결과를 경영진 보고나 투자 판단 기준으로 활용해야 하는 환경",
                    "증설·교체 전 현재 상태를 객관적으로 파악해야 하는 환경",
                ])
            ),
        ],
    }),
    "/service/maintenance/incident-recovery": page({
        id: "service_maintenance_incident_recovery_override",
        title: "장애 대응 및 복구",
        slug: "/service/maintenance/incident-recovery",
        description: "장애 접수부터 원인 분석, 복구, 재발 방지까지 이어지는 통합 장애 대응 및 복구 체계를 제공합니다.",
        sections: [
            section("s1", "header", subnavHeader("장애 대응 및 복구", ["서비스", "유지보수", "장애 대응 및 복구"])),
            section(
                "s2",
                "hero",
                heroBlock(
                    "장애 대응은\n빨리 복구하는 것만큼\n원인을 남기는 일이 중요합니다",
                    "장애 대응은 단기 복구와 재발 방지를 분리해서 보면 반복됩니다. 테크아이는 접수, 우선순위 판단, 원인 파악, 임시 복구, 영구 조치, RCA 정리까지 연결해 장애 대응 체계를 설계하고 운영합니다.",
                    "/images/solution-monitoring-room.jpg",
                    "운영실에서 장애 상황을 대응하는 장면",
                    { label: "SLA 기반 지원 보기", href: "/service/maintenance/sla-support" },
                    { label: "정기 헬스체크 보기", href: "/service/maintenance/health-check" }
                )
            ),
            section(
                "s3",
                "cards",
                featureCards("장애 대응 체계의 필수 기준", [
                    {
                        title: "초기 분류와 영향 판단",
                        desc: "서비스 영향 범위와 복구 우선순위를 빠르게 판단해 대응 흐름이 흔들리지 않게 합니다.",
                    },
                    {
                        title: "복구와 원인 분석 분리",
                        desc: "서비스 복구를 우선하되 RCA와 재발 방지 과제를 별도로 추적해 임시 대응으로 끝나지 않게 만듭니다.",
                    },
                    {
                        title: "기록과 개선 연계",
                        desc: "장애 이력을 남기고 반복 패턴을 분석해 운영 정책과 구조 개선으로 이어가야 대응 수준이 높아집니다.",
                    },
                ])
            ),
            section(
                "s4",
                "media",
                mediaFeature({
                    eyebrow: "장애 대응",
                    title: "좋은 복구는 조용히 끝나는 것이 아니라 다시 반복되지 않는 복구입니다",
                    body: "운영 현장에서는 일단 살아나는 것이 중요하지만, 원인이 정리되지 않으면 같은 유형의 장애가 계속 반복됩니다. 테크아이는 복구 과정에서 필요한 로그, 확인 포인트, 보고 체계를 함께 관리해 대응 품질을 높입니다.",
                    imageSrc: "/images/dark-console-operator.jpg",
                    imageAlt: "콘솔을 통해 장애 상황을 모니터링하는 운영자 이미지",
                    layout: "imageRight",
                    tone: "photo",
                    imageWidth: 1600,
                    imageHeight: 1066,
                    caption: "장애 흐름 / 초기 분류, 복구 조치, RCA 기록",
                    points: [
                        "초기 대응에서 서비스 영향 범위를 빠르게 분류합니다.",
                        "복구 이후 RCA와 재발 방지 과제를 분리해 관리합니다.",
                        "반복 장애 패턴을 구조 개선 과제로 전환합니다.",
                    ],
                })
            ),
            section(
                "s5",
                "benefits",
                benefits("도입 이후 달라지는 것", [
                    "장애 발생 시 누가 무엇을 먼저 해야 하는지 대응 순서가 빨라집니다.",
                    "복구 이후 보고와 RCA가 표준화되어 커뮤니케이션 비용이 줄어듭니다.",
                    "반복 장애가 개별 이슈가 아니라 구조 개선 대상으로 관리됩니다.",
                    "운영 품질이 사람 의존이 아니라 체계 의존으로 바뀝니다.",
                ])
            ),
        ],
    }),
};

export default serviceDetailPageOverrides;
