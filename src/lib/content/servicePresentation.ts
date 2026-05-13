import type { Page } from "@/lib/content/types";

export type PageTheme =
    | "default"
    | "service"
    | "server"
    | "network"
    | "storage"
    | "consulting"
    | "maintenance"
    | "solution"
    | "product"
    | "about";

export type PageVariant =
    | "default"
    | "service-overview"
    | "server-overview"
    | "network-overview"
    | "storage-overview"
    | "consulting-overview"
    | "maintenance-overview"
    | "solution-overview"
    | "product-overview"
    | "product-roseha"
    | "product-omniguard"
    | "about-overview"
    | "about-vision"
    | "about-history"
    | "about-partners"
    | "about-location"
    | "contact-page"
    | "server-build"
    | "server-virtualization"
    | "server-ops"
    | "generic-service";

export interface PagePresentation {
    theme: PageTheme;
    heroLabel?: string;
    proofLabel?: string;
    proofTitle?: string;
    proofBody?: string;
    trustPoints?: string[];
    deliverables?: string[];
    contactPoints?: string[];
}

type PresentationConfig = Required<Omit<PagePresentation, "theme">>;

const familyDefaults: Record<Exclude<PageTheme, "default">, PresentationConfig> = {
    service: {
        heroLabel: "서비스 수행 체계",
        proofLabel: "프로젝트 기준",
        proofTitle: "구축만 끝내는 서비스가 아니라 운영 기준까지 함께 설계합니다.",
        proofBody:
            "진단, 범위 정의, 설계, 구축, 검증, 인수까지 같은 언어로 연결해야 실제 운영 품질이 흔들리지 않습니다. 테크아이는 각 서비스 영역을 단일 과업이 아니라 운영 체계로 제안합니다.",
        trustPoints: [
            "현재 환경과 목표 범위를 먼저 구조화합니다.",
            "구축 결과보다 운영 가능한 상태를 우선 기준으로 잡습니다.",
            "검증 항목과 인수 문서를 함께 정리합니다.",
        ],
        deliverables: [
            "현황 진단과 범위 정의",
            "구축·전환 체크리스트",
            "운영 인수 문서와 후속 과제",
        ],
        contactPoints: [
            "현재 환경과 주요 과제를 먼저 정리합니다.",
            "영향 범위와 기대 운영 효과를 함께 확인합니다.",
            "진단, 구축, 운영 지원 범위를 구분해 제안합니다.",
        ],
    },
    server: {
        heroLabel: "서버 인프라 기준",
        proofLabel: "서버 프로젝트 원칙",
        proofTitle: "서버는 장비 사양이 아니라 가용성과 운영 절차로 평가받아야 합니다.",
        proofBody:
            "신규 구축, 증설, 가상화, 관제를 각각 따로 보지 않고 하나의 서버 운영 체계로 묶어야 장애 대응 속도와 인수 품질이 안정됩니다.",
        trustPoints: [
            "워크로드 기준으로 서버 역할과 자원 구조를 나눕니다.",
            "변경 이력과 장애 대응 절차까지 함께 설계합니다.",
            "증설 이후 운영 편차가 커지지 않도록 표준을 맞춥니다.",
        ],
        deliverables: [
            "서버 설계안과 자원 배치 기준",
            "구축·전환 체크리스트",
            "운영 런북과 인수 문서",
        ],
        contactPoints: [
            "현재 서버 구조와 병목 구간을 먼저 확인합니다.",
            "구축, 전환, 가상화, 운영 범위를 나눠 검토합니다.",
            "중단 허용 범위와 검증 기준을 함께 정리합니다.",
        ],
    },
    network: {
        heroLabel: "네트워크 설계 기준",
        proofLabel: "네트워크 프로젝트 원칙",
        proofTitle: "망 구성은 장비 연결이 아니라 경계와 운영 기준까지 포함해야 안정적입니다.",
        proofBody:
            "코어, 액세스, 무선, 대외 연결을 한 번에 설계하고 변경 영향 범위를 명확히 해야 장애가 특정 구간에 고립되지 않습니다.",
        trustPoints: [
            "배선과 장비보다 트래픽 흐름을 먼저 봅니다.",
            "정책과 세그먼트 구조를 문서로 남깁니다.",
            "구축 후 운영팀이 바로 사용할 기준을 포함합니다.",
        ],
        deliverables: [
            "토폴로지와 정책 설계서",
            "이행·검증 계획서",
            "운영 가이드와 변경 이력 체계",
        ],
        contactPoints: [
            "대상 구간과 장비 현황을 먼저 정리합니다.",
            "가용성과 보안 요구를 함께 검토합니다.",
            "서비스 영향 시간과 전환 일정을 확인합니다.",
        ],
    },
    storage: {
        heroLabel: "데이터 보호 기준",
        proofLabel: "스토리지·백업 원칙",
        proofTitle: "데이터 보호는 저장 용량보다 복구 가능성과 검증 이력이 먼저 보여야 합니다.",
        proofBody:
            "스토리지 구성, 백업 정책, 복구 절차, DR 전환 기준이 분리되어 있으면 실제 장애 시 복구 시간이 늘어납니다. 보호 체계를 하나의 운영 흐름으로 설계해야 합니다.",
        trustPoints: [
            "데이터 중요도와 복구 우선순위를 먼저 정합니다.",
            "백업과 복제 정책을 검증 가능한 기준으로 만듭니다.",
            "정기 복구 리허설과 기록 체계를 함께 설계합니다.",
        ],
        deliverables: [
            "보호 정책과 용량 계획",
            "백업·복구 검증 기준",
            "DR 운영 문서와 리허설 계획",
        ],
        contactPoints: [
            "데이터 종류와 복구 목표를 먼저 확인합니다.",
            "RPO/RTO와 보존 정책을 함께 정리합니다.",
            "리허설 범위와 운영 책임 구분을 검토합니다.",
        ],
    },
    consulting: {
        heroLabel: "진단·로드맵 기준",
        proofLabel: "컨설팅 수행 원칙",
        proofTitle: "현황 진단은 보고서가 아니라 실행 가능한 다음 단계로 연결되어야 합니다.",
        proofBody:
            "As-Is 분석에서 멈추지 않고 우선순위, 예산, 일정, 조직 제약을 반영한 로드맵까지 정리해야 실제 프로젝트로 이어질 수 있습니다.",
        trustPoints: [
            "현재 문제를 기술 이슈와 운영 이슈로 구분합니다.",
            "즉시 조치 과제와 중장기 과제를 나눕니다.",
            "실행 가능한 일정과 범위를 기준으로 제안합니다.",
        ],
        deliverables: [
            "현황 진단 리포트",
            "목표 구조와 단계별 로드맵",
            "운영·거버넌스 개선 과제",
        ],
        contactPoints: [
            "현재 구조와 리스크를 먼저 파악합니다.",
            "예산, 일정, 조직 제약을 함께 확인합니다.",
            "실행 우선순위와 기대 효과를 정리합니다.",
        ],
    },
    maintenance: {
        heroLabel: "운영 지원 기준",
        proofLabel: "운영 서비스 원칙",
        proofTitle: "운영 서비스는 응답 속도보다 재발을 줄이는 체계가 먼저 보여야 합니다.",
        proofBody:
            "장애 접수, 점검, 대응, RCA, 정기 보고까지 연결된 운영 기준이 있어야 지원 서비스가 사람 의존형으로 흘러가지 않습니다.",
        trustPoints: [
            "SLA와 우선순위를 먼저 명확히 합니다.",
            "정기 점검과 장애 대응을 같은 체계로 관리합니다.",
            "보고와 재발 방지 과제를 함께 남깁니다.",
        ],
        deliverables: [
            "지원 범위와 SLA 정의",
            "정기 점검 결과와 권고안",
            "장애 대응 기록과 RCA",
        ],
        contactPoints: [
            "대상 자산과 운영 시간을 먼저 확인합니다.",
            "지원 수준과 보고 체계를 함께 정의합니다.",
            "반복 이슈와 개선 과제를 분리해 검토합니다.",
        ],
    },
    solution: {
        heroLabel: "AI 도입 설계",
        proofLabel: "AI 적용 원칙",
        proofTitle: "AI는 기능 데모가 아니라 업무 흐름에 연결되는 운영 체계여야 합니다.",
        proofBody:
            "회의, 코드, 문서, 추론, 시각화 같은 과제를 개별 도구로 쪼개기보다 권한, 데이터, 운영 전환 기준이 포함된 하나의 업무 체계로 설계해야 실제 도입 효과가 납니다.",
        trustPoints: [
            "현재 업무 흐름과 데이터 위치를 먼저 확인합니다.",
            "자동화 범위와 사람이 개입할 구간을 나눕니다.",
            "권한과 로그 기준까지 포함해 설계합니다.",
        ],
        deliverables: [
            "도입 대상 업무와 적용 범위 정리",
            "연동 구조와 운영 아키텍처 제안",
            "파일럿 계획과 확산 로드맵",
        ],
        contactPoints: [
            "현재 업무 흐름과 도구 구성을 먼저 확인합니다.",
            "자동화 목표와 검토 기준을 함께 정리합니다.",
            "파일럿 범위와 운영 전환 조건을 검토합니다.",
        ],
    },
    product: {
        heroLabel: "제품 도입 기준",
        proofLabel: "제품 평가 원칙",
        proofTitle: "제품은 기능표보다 도입 후 운영 방식이 먼저 보여야 신뢰를 얻습니다.",
        proofBody:
            "가용성, 복구, 접근 제어, 감사 대응처럼 실제 현장에서 중요한 과제를 기준으로 제품 역할을 설명하고 PoC부터 운영 전환까지의 흐름을 함께 제안합니다.",
        trustPoints: [
            "도입 목적과 운영 과제를 먼저 정의합니다.",
            "검증 범위와 본 운영 범위를 분리합니다.",
            "운영팀이 사용할 정책과 문서까지 포함합니다.",
        ],
        deliverables: [
            "제품 적합성 검토와 적용 범위",
            "PoC 기준과 운영 전환 계획",
            "정책·문서·지원 범위 안내",
        ],
        contactPoints: [
            "현재 운영 이슈와 제품 도입 목적을 확인합니다.",
            "연동 대상 시스템과 검증 범위를 정리합니다.",
            "PoC와 본 운영의 범위를 구분해 제안합니다.",
        ],
    },
    about: {
        heroLabel: "회사 운영 철학",
        proofLabel: "테크아이가 일하는 방식",
        proofTitle: "기술 설명보다 수행 기준과 운영 결과로 신뢰를 보여주는 회사를 지향합니다.",
        proofBody:
            "테크아이는 구축, 보호, 운영, AI 확장을 따로 보지 않고 고객 환경의 지속성과 인수 품질을 기준으로 프로젝트를 수행합니다.",
        trustPoints: [
            "설계부터 인수 문서까지 책임 범위를 분명히 합니다.",
            "운영 조직이 바로 사용할 결과물을 남깁니다.",
            "장기 운영 관점에서 구조를 제안합니다.",
        ],
        deliverables: [
            "명확한 범위와 검증 기준",
            "운영 인수 문서와 실행 계획",
            "장기 확장까지 고려한 구조",
        ],
        contactPoints: [
            "미팅 목적과 현재 검토 중인 과제를 확인합니다.",
            "필요한 제안 범위와 준비 자료를 정리합니다.",
            "초기 미팅 전에 핵심 확인 항목을 안내합니다.",
        ],
    },
};

const pageOverrides: Record<string, Partial<PresentationConfig>> = {
    "/service": {
        heroLabel: "통합 서비스 포트폴리오",
        proofLabel: "",
        proofTitle: "",
        proofBody: "",
        trustPoints: [],
        deliverables: [],
    },
    "/service/server": {
        heroLabel: "미션크리티컬 서버 인프라",
        proofLabel: "서버 운영 관점",
        proofTitle: "서버 프로젝트는 구축 일정보다 운영 인수 품질이 먼저 보여야 합니다.",
        proofBody:
            "신규 구축, 교체, 가상화, 모니터링을 하나의 흐름으로 정리해 장애 대응과 운영 표준까지 이어지게 설계합니다.",
        deliverables: [
            "진단 · 설계안 · 배치 계획",
            "구축 · 전환 · 검증 기록",
            "인수 · 런북 · 운영 체계",
        ],
    },
    "/service/server/build": {
        heroLabel: "구축·증설 프로젝트",
        proofLabel: "구축 거버넌스",
        proofTitle: "장비 반입보다 중요한 것은 전환 이후에도 흔들리지 않는 표준입니다.",
        proofBody:
            "사양 선정, 배치, 전환, 검증, 인수 문서까지 단계별 기준을 명확히 해야 구축 이후 운영 공백이 생기지 않습니다.",
        deliverables: [
            "구축 전 현황 분석 · 리스크 점검",
            "전환 단계별 검증 기준 · 롤백 조건",
            "운영팀 인수 가능 상태 확인",
        ],
    },
    "/service/server/virtualization": {
        heroLabel: "가상화·클러스터 설계",
        proofLabel: "플랫폼 운영 기준",
        proofTitle: "가상화는 통합 효율보다 운영 안정성과 장애 격리가 먼저 설계되어야 합니다.",
        proofBody:
            "자원 풀, HA 정책, 패치 기준, 확장 전략을 동시에 정리해 운영 규모가 커져도 편차가 커지지 않게 만듭니다.",
        deliverables: [
            "자원 풀 분리 기준 · 정책 설계",
            "HA 장애 격리 구조 검증",
            "변경 관리 · 운영 표준 수립",
        ],
    },
    "/service/server/ops-monitoring": {
        heroLabel: "운영·모니터링 체계",
        proofLabel: "대응 운영 기준",
        proofTitle: "관제는 화면보다 응답 체계와 런북이 먼저 갖춰져야 효과가 납니다.",
        proofBody:
            "임계치, 알림, 에스컬레이션, 런북, RCA를 하나의 흐름으로 묶어 MTTR을 줄이고 재발을 관리합니다.",
        trustPoints: [
            "알림 임계값과 수집 범위를 먼저 정의합니다.",
            "에스컬레이션 경로와 런북을 운영 체계에 통합합니다.",
            "반복 알림 구간을 구조 개선 과제로 전환합니다.",
        ],
        deliverables: [
            "알림 기준 · 임계값 설계서",
            "에스컬레이션 절차 · 런북",
            "정기 운영 보고 · RCA 기록",
        ],
    },
    "/service/network": {
        heroLabel: "운영 기준 중심 네트워크",
        proofLabel: "네트워크 운영 관점",
        proofTitle: "좋은 네트워크는 빠른 연결보다 장애 구간이 바로 읽히는 구조여야 합니다.",
        proofBody:
            "코어, 액세스, 무선, 방화벽, 대외 연결이 한 운영 기준 안에서 정리돼야 정책 충돌과 장애 영향 범위를 빠르게 파악할 수 있습니다.",
        trustPoints: [
            "트래픽 흐름과 책임 구간을 먼저 정리합니다.",
            "세그먼트와 정책을 문서 기준으로 남깁니다.",
            "무선과 이중화까지 한 구조 안에서 설계합니다.",
        ],
        deliverables: [
            "토폴로지와 정책 구조",
            "이행·검증 기준",
            "운영팀 인수 문서",
        ],
    },
    "/service/storage-backup": {
        heroLabel: "복구 중심 데이터 보호",
        proofLabel: "데이터 보호 관점",
        proofTitle: "백업 여부보다 실제 복구 가능 시간과 검증 이력이 먼저 보여야 합니다.",
        proofBody:
            "스토리지, 백업, 복구, DR이 서로 분리되어 있으면 실제 장애 상황에서 복구 시간이 예측보다 길어집니다. 보호 흐름을 하나의 체계로 설계해야 합니다.",
        trustPoints: [
            "데이터 중요도와 복구 목표를 먼저 구분합니다.",
            "백업 정책과 복구 시나리오를 함께 검증합니다.",
            "DR 전환과 리허설 기준까지 문서화합니다.",
        ],
        deliverables: [
            "보호 정책과 용량 계획",
            "복구 검증 기준",
            "DR 운영 문서",
        ],
    },
    "/service/consulting": {
        heroLabel: "실행 중심 컨설팅",
        proofLabel: "컨설팅 수행 관점",
        proofTitle: "현황 분석은 보고서보다 실행 우선순위와 다음 단계가 더 분명해야 합니다.",
        proofBody:
            "현재 리스크를 기술 과제와 운영 과제로 나누고, 일정·예산·조직 제약을 함께 반영해야 컨설팅이 실제 프로젝트로 이어질 수 있습니다.",
        trustPoints: [
            "현재 문제를 실행 관점으로 다시 분류합니다.",
            "즉시 조치 과제와 중장기 과제를 분리합니다.",
            "로드맵과 의사결정 기준을 함께 정리합니다.",
        ],
        deliverables: [
            "현황 진단 리포트",
            "단계별 로드맵",
            "운영·거버넌스 개선 과제",
        ],
    },
    "/service/maintenance": {
        heroLabel: "지속 운영 지원",
        proofLabel: "운영 지원 관점",
        proofTitle: "운영 지원은 응답 속도보다 재발을 줄이는 체계가 먼저 갖춰져야 합니다.",
        proofBody:
            "SLA, 정기점검, 장애 대응, RCA, 권고안이 하나의 흐름으로 연결돼야 지원 품질이 사람 의존형으로 흐르지 않고 장기적으로 안정됩니다.",
        trustPoints: [
            "지원 범위와 우선순위를 먼저 정의합니다.",
            "정기점검과 장애 대응을 같은 체계로 관리합니다.",
            "보고와 RCA를 통해 반복 이슈를 줄입니다.",
        ],
        deliverables: [
            "지원 범위와 SLA 정의",
            "점검 결과와 개선 권고",
            "장애 기록과 RCA",
        ],
    },
    "/solution": {
        heroLabel: "업무형 AI 솔루션",
        proofLabel: "AI 도입 검토 항목",
        proofTitle: "파일럿이 끝나도 실제 현업이 계속 쓸 수 있는 구조인지 먼저 검토합니다.",
        proofBody:
            "도입 범위, 권한, 데이터 출처, 모델 운영 방식, 검토 책임까지 함께 정리해야 AI가 일시적인 실험으로 끝나지 않습니다.",
    },
    "/product": {
        heroLabel: "운영 중심 제품 포트폴리오",
        proofLabel: "제품 검토 항목",
        proofTitle: "제품 기능보다 도입 후 운영 방식이 더 분명해야 신뢰할 수 있습니다.",
        proofBody:
            "RoseHA와 Omniguard는 각각의 기능 목록보다 운영 시나리오와 인수 기준을 중심으로 설명하는 편이 훨씬 명확합니다.",
    },
    "/product/roseha": {
        heroLabel: "고가용성·재해복구 플랫폼",
        proofLabel: "RoseHA 검토 항목",
        proofTitle: "다운타임과 데이터 손실을 얼마나 줄일 수 있는지가 핵심입니다.",
        proofBody:
            "실시간 복제, 자동 전환, 시점 복구, 운영 콘솔이 실제 업무 환경에서 어떻게 연결되는지 중심으로 적용 범위를 설계합니다.",
    },
    "/product/lsware": {
        heroLabel: "보안 통제 제품군",
        proofLabel: "Omniguard 검토 항목",
        proofTitle: "접근 통제와 감사 대응은 제품 기능보다 운영 절차에 녹아들어야 합니다.",
        proofBody:
            "권한, 접속, 로그, 감사 대응 항목이 운영팀의 실제 절차와 맞아떨어지도록 적용 범위를 정리합니다.",
    },
    "/about": {
        heroLabel: "테크아이 소개",
        proofLabel: "",
        proofTitle: "",
        proofBody: "",
        trustPoints: [],
        deliverables: [],
    },
    "/about/vision-mission": {
        heroLabel: "Vision & Mission",
        proofLabel: "설계 철학",
        proofTitle: "좋은 인프라는 성능보다 먼저 오래 운영될 수 있어야 합니다.",
        proofBody:
            "테크아이는 AI 인프라를 고성능 장비 구성으로만 보지 않고 보안, 복구, 운영성까지 포함한 장기 구조로 설계합니다.",
        trustPoints: [
            "AI 시대 물리 기반 설계",
            "보안·운영 기준 동시 반영",
            "AI TRiSM 관점 고려",
        ],
        deliverables: [
            "운영 지속성 중심 설계",
            "보안·거버넌스 기준 반영",
            "문서와 점검 체계 포함",
        ],
    },
    "/about/history": {
        heroLabel: "Growth Timeline",
        proofLabel: "핵심 이정표",
        proofTitle: "테크아이의 성장은 매출 확대보다 수행 범위의 확장에 더 가깝습니다.",
        proofBody:
            "초기 엔터프라이즈 인프라 구축에서 시작해, 현재는 AI 데이터센터와 고밀도 GPU 인프라까지 대응합니다.",
        trustPoints: [
            "2004년 설립",
            "공공·엔터프라이즈 확장",
            "AI 인프라 영역 진입",
        ],
        deliverables: [
            "기반 구축",
            "사업 확장",
            "AI·우주 인프라",
        ],
    },
    "/about/partners": {
        heroLabel: "Partner Ecosystem",
        proofLabel: "협업 구조",
        proofTitle: "공급 안정성과 현장 실행력이 함께 있을 때 파트너십은 신뢰가 됩니다.",
        proofBody:
            "테크아이는 핵심 벤더 파트너십과 현장 지원 조직을 결합해 운영 단계까지 이어지는 협업 구조를 갖추고 있습니다.",
        trustPoints: [
            "HPE Gold Partner",
            "Intel · IBM 연계",
            "전국 19개 센터망",
        ],
        deliverables: [
            "핵심 벤더 협업",
            "공공·엔터프라이즈 레퍼런스",
            "운영 지원 체계",
        ],
    },
    "/about/location": {
        heroLabel: "Office & Meeting",
        proofLabel: "방문 안내",
        proofTitle: "첫 미팅은 소개보다 검토 범위를 빠르게 정리하는 자리에 가깝습니다.",
        proofBody:
            "대전 본사와 서울 지사를 기반으로 프로젝트 성격에 맞는 미팅 형식과 초기 검토 범위를 안내합니다.",
        trustPoints: [
            "대전 본사",
            "서울 지사",
            "대표전화 042-471-9430",
        ],
        deliverables: [
            "미팅 형식 조율",
            "초기 검토 범위 정리",
            "사전 준비 자료 안내",
        ],
    },
    "/contact": {
        heroLabel: "상담 접수 안내",
        proofLabel: "초기 상담 기준",
        proofTitle: "문의는 단순 접수보다 초기 진단 범위를 얼마나 빨리 정리하느냐가 중요합니다.",
        proofBody:
            "현재 환경, 목표, 일정, 검토 범위를 미리 정리해 두면 첫 상담에서 바로 필요한 제안 범위를 잡을 수 있습니다.",
    },
};

function getThemeFromSlug(slug: string): PageTheme {
    if (slug === "/contact" || slug.startsWith("/about")) return "about";
    if (slug.startsWith("/solution")) return "solution";
    if (slug.startsWith("/product")) return "product";
    if (!slug.startsWith("/service")) return "default";
    if (slug === "/service") return "service";
    if (slug.startsWith("/service/server")) return "server";
    if (slug.startsWith("/service/network")) return "network";
    if (slug.startsWith("/service/storage-backup")) return "storage";
    if (slug.startsWith("/service/consulting")) return "consulting";
    if (slug.startsWith("/service/maintenance")) return "maintenance";
    return "service";
}

export function getPageTheme(page: Page): PageTheme {
    return getThemeFromSlug(page.slug);
}

function getVariantFromSlug(slug: string): PageVariant {
    if (slug.startsWith("/solution/")) return "solution-overview";
    if (slug.startsWith("/product/roseha/")) return "product-roseha";
    if (slug.startsWith("/product/lsware/")) return "product-omniguard";
    if (slug.startsWith("/service/network/")) return "network-overview";
    if (slug.startsWith("/service/storage-backup/")) return "storage-overview";
    if (slug.startsWith("/service/consulting/")) return "consulting-overview";
    if (slug.startsWith("/service/maintenance/")) return "maintenance-overview";

    switch (slug) {
        case "/service":
            return "service-overview";
        case "/service/server":
            return "server-overview";
        case "/service/network":
            return "network-overview";
        case "/service/storage-backup":
            return "storage-overview";
        case "/service/consulting":
            return "consulting-overview";
        case "/service/maintenance":
            return "maintenance-overview";
        case "/solution":
            return "solution-overview";
        case "/product":
            return "product-overview";
        case "/product/roseha":
            return "product-roseha";
        case "/product/lsware":
            return "product-omniguard";
        case "/about":
            return "about-overview";
        case "/about/vision-mission":
            return "about-vision";
        case "/about/history":
            return "about-history";
        case "/about/partners":
            return "about-partners";
        case "/about/location":
            return "about-location";
        case "/contact":
            return "contact-page";
        case "/service/server/build":
            return "server-build";
        case "/service/server/virtualization":
            return "server-virtualization";
        case "/service/server/ops-monitoring":
            return "server-ops";
        default:
            return slug.startsWith("/service") ? "generic-service" : "default";
    }
}

export function getPageVariant(page: Page): PageVariant {
    return getVariantFromSlug(page.slug);
}

function getPresentationOverride(slug: string): Partial<PresentationConfig> {
    const exact = pageOverrides[slug];
    if (exact) return exact;

    if (slug.startsWith("/service/server/")) return pageOverrides["/service/server"] ?? {};
    if (slug.startsWith("/service/network/")) return pageOverrides["/service/network"] ?? {};
    if (slug.startsWith("/service/storage-backup/")) return pageOverrides["/service/storage-backup"] ?? {};
    if (slug.startsWith("/service/consulting/")) return pageOverrides["/service/consulting"] ?? {};
    if (slug.startsWith("/service/maintenance/")) return pageOverrides["/service/maintenance"] ?? {};
    if (slug.startsWith("/solution/")) return pageOverrides["/solution"] ?? {};
    if (slug.startsWith("/product/roseha/")) return pageOverrides["/product/roseha"] ?? pageOverrides["/product"] ?? {};
    if (slug.startsWith("/product/lsware/")) return pageOverrides["/product/lsware"] ?? pageOverrides["/product"] ?? {};
    if (slug.startsWith("/product/")) return pageOverrides["/product"] ?? {};
    if (slug.startsWith("/about/")) return pageOverrides["/about"] ?? {};

    return {};
}

export function getPagePresentation(page: Page): PagePresentation | null {
    const theme = getThemeFromSlug(page.slug);
    if (theme === "default") return null;

    const base = familyDefaults[theme];
    const override = getPresentationOverride(page.slug);

    return {
        theme,
        heroLabel: override.heroLabel ?? base.heroLabel,
        proofLabel: override.proofLabel ?? base.proofLabel,
        proofTitle: override.proofTitle ?? `${page.title} 수행 기준`,
        proofBody: override.proofBody ?? base.proofBody,
        trustPoints: override.trustPoints ?? base.trustPoints,
        deliverables: override.deliverables ?? base.deliverables,
        contactPoints: override.contactPoints ?? base.contactPoints,
    };
}
