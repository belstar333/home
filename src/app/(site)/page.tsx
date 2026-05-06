import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const PAIN_SOLUTION_ITEMS = [
    {
        label: "중단 리스크",
        issue: "교체 시점은 왔지만 서비스 중단이 걱정됩니다",
        response: "장비만 바꾸는 접근이 아니라 전환 순서, 검증 포인트, 롤백 조건까지 먼저 설계해야 실제 리스크가 줄어듭니다.",
    },
    {
        label: "복구 불확실성",
        issue: "백업은 하고 있지만 실제 복구가 될지 확신이 없습니다",
        response: "백업 체계는 저장 여부보다 복구 시나리오와 복구 시간 검증이 먼저 확인되어야 합니다.",
    },
    {
        label: "장애 가시성",
        issue: "장애가 날 때마다 원인 파악과 대응이 늦어집니다",
        response: "서버, 네트워크, 스토리지, 운영 로그를 따로 보지 않고 한 흐름으로 연결해야 대응 속도가 달라집니다.",
    },
    {
        label: "운영 표준화",
        issue: "유지보수는 받고 있지만 대응 기준이 제각각입니다",
        response: "담당자 경험에 의존하는 구조보다 문서와 점검 기준이 남는 운영 체계를 먼저 만들어야 합니다.",
    },
];

const SERVICE_DOMAINS = [
    {
        number: "01",
        title: "서버 인프라",
        desc: "신규 구축, 증설, 가상화, 클러스터, 운영 기준 정리까지 실제 서비스 환경에 맞춰 설계합니다.",
        href: "/service/server",
        imageSrc: "/images/server-photo-install.jpg",
        imageAlt: "서버 장비를 설치하는 현장",
    },
    {
        number: "02",
        title: "네트워크",
        desc: "유선·무선, 회선 구조, 이중화, 정책, 성능 점검을 연결해 안정적인 통신 기반을 만듭니다.",
        href: "/service/network",
        imageSrc: "/images/network-fiber-photo.jpg",
        imageAlt: "네트워크 장비와 광케이블 인프라",
    },
    {
        number: "03",
        title: "스토리지 · 백업",
        desc: "데이터 보호, 복구, DR, 가용성 설계를 통해 장애 이후까지 고려한 저장 구조를 만듭니다.",
        href: "/service/storage-backup",
        imageSrc: "/images/server-photo-racks.jpg",
        imageAlt: "스토리지와 서버 랙 환경",
    },
    {
        number: "04",
        title: "컨설팅",
        desc: "현행 분석, 우선순위 정리, 아키텍처 로드맵, 기술 검토를 통해 다음 단계의 기준을 제시합니다.",
        href: "/service/consulting",
        imageSrc: "/images/technical-design-review.jpg",
        imageAlt: "기술 설계 자료를 검토하는 엔지니어",
    },
    {
        number: "05",
        title: "유지보수",
        desc: "정기 점검, 장애 대응, SLA, 운영 안정화 체계를 통해 도입 이후의 품질을 유지합니다.",
        href: "/service/maintenance",
        imageSrc: "/images/server-ops-photo.jpg",
        imageAlt: "운영 환경을 모니터링하는 장면",
    },
];

const DIFFERENTIATORS = [
    {
        number: "01",
        title: "설계와 운영을 분리하지 않습니다",
        body: "구축만 끝나는 구조가 아니라 실제 담당 조직이 바로 이어받을 수 있는 운영 기준까지 함께 정리합니다.",
    },
    {
        number: "02",
        title: "문서와 검증 기준이 남는 프로젝트를 지향합니다",
        body: "인수 문서, 점검 항목, 검증 결과가 남아야 담당자가 바뀌어도 환경이 흔들리지 않습니다.",
    },
    {
        number: "03",
        title: "공공과 엔터프라이즈 기준으로 수행합니다",
        body: "국가 중요 시스템과 대형 업무 환경에서 요구되는 안정성, 보안성, 연속성을 기본 전제로 봅니다.",
    },
    {
        number: "04",
        title: "AI도 실사용 구조를 먼저 설계합니다",
        body: "데모 화면보다 인프라 밀도, 운영 지속성, 데이터 흐름, 보호 체계가 실제 활용성을 좌우한다고 봅니다.",
    },
];

const TRUST_POINTS = [
    { label: "업력", value: "20년" },
    { label: "파트너십", value: "HPE Gold Partner" },
    { label: "전문 인력", value: "23명 · 2개 지사" },
    { label: "수행 경험", value: "170+ Pflops급 AI 데이터센터" },
];

export default function Home() {
    return (
        <div className={styles.page}>
            <section className={styles.heroSection}>
                <Image
                    src="/images/hero-datacenter.jpg"
                    alt="데이터센터와 고밀도 인프라 전경"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.heroBackground}
                />
                <div className={styles.heroOverlay} />

                <div className={styles.heroShell}>
                    <div className={styles.heroCopy}>
                        <p className={styles.heroEyebrow}>기업 인프라 엔지니어링</p>
                        <p className={styles.heroBrand}>TechI</p>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.titleLine}>복잡한 IT환경을</span>
                            <span className={styles.titleLine}>실제로 운영되는 구조로</span>
                            <span className={styles.titleLine}>다시 설계합니다.</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            TechI는 서버, 네트워크, 데이터 보호, 유지보수, 업무형 AI를 따로 떼어 제안하지
                            않습니다. 현재 환경과 운영 조직을 기준으로, 구축 이후까지 버티는 인프라 구조를
                            설계합니다.
                        </p>
                        <div className={styles.heroActions}>
                            <Link href="/service" className={styles.primaryAction}>
                                서비스 보기
                            </Link>
                            <Link href="/about" className={styles.secondaryAction}>
                                회사 소개 보기
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroProof}>
                        <div className={styles.heroProofIntro}>
                            <span className={styles.heroProofLabel}>핵심 신뢰 근거</span>
                            <p className={styles.heroProofBody}>
                                보기 좋은 제안보다 오래 운영되는 구조를 더 중요하게 보는 이유는, 실제 수행
                                경험과 운영 기준이 있기 때문입니다.
                            </p>
                        </div>
                        <div className={styles.heroProofGrid}>
                            {TRUST_POINTS.map((item) => (
                                <article key={item.label} className={styles.heroProofItem}>
                                    <p className={styles.heroProofItemLabel}>{item.label}</p>
                                    <h2 className={styles.heroProofItemValue}>{item.value}</h2>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.painSection}>
                <div className={styles.sectionShell}>
                    <div className={styles.painLayout}>
                        <div className={styles.painLead}>
                            <p className={styles.sectionEyebrow}>고객 현장 과제</p>
                            <h2 className={styles.sectionTitle}>
                                운영 문제는 대부분
                                <br />
                                장애 이후가 아니라
                                <br />
                                구조 단계에서 시작됩니다
                            </h2>
                            <p className={styles.sectionDescription}>
                                같은 문제가 반복된다면 장비 성능보다 구조와 기준을 다시 봐야 할 시점일 수
                                있습니다. TechI는 현장에서 반복되는 문제를 운영 관점에서 다시 정리합니다.
                            </p>
                            <div className={styles.painVisual}>
                                <Image
                                    src="/images/technical-design-review.jpg"
                                    alt="설계 자료와 운영 기준을 함께 검토하는 장면"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 40vw"
                                    className={styles.sectionImage}
                                />
                            </div>
                        </div>

                        <div className={styles.painList}>
                            {PAIN_SOLUTION_ITEMS.map((item) => (
                                <article key={item.issue} className={styles.painRow}>
                                    <div className={styles.painMeta}>
                                        <span className={styles.painLabel}>{item.label}</span>
                                        <h3 className={styles.painIssue}>{item.issue}</h3>
                                    </div>
                                    <p className={styles.painResponse}>{item.response}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.domainSection}>
                <div className={styles.sectionShell}>
                    <div className={styles.domainLayout}>
                        <div className={styles.domainLead}>
                            <p className={styles.sectionEyebrowDark}>전문 서비스 영역</p>
                            <h2 className={styles.sectionTitleDark}>
                                <span className={styles.titleLine}>환경에 따라</span>
                                <span className={styles.titleLine}>다른 서비스 축을</span>
                                <span className={styles.titleLine}>정교하게 연결합니다</span>
                            </h2>
                            <p className={styles.sectionDescriptionDark}>
                                서버, 네트워크, 데이터 보호, 컨설팅, 유지보수는 따로 움직이지 않습니다. 각
                                영역이 운영 환경 안에서 어떻게 연결되는지를 기준으로 서비스 구조를 제안합니다.
                            </p>
                            <div className={styles.domainLeadVisual}>
                                <Image
                                    src="/images/about-team-strategy.jpg"
                                    alt="프로젝트 방향을 논의하는 팀 미팅"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 42vw"
                                    className={styles.sectionImage}
                                />
                                <div className={styles.domainLeadCaption}>
                                    서버 / 네트워크 / 보호 체계 / 운영 / AI
                                </div>
                            </div>
                        </div>

                        <div className={styles.domainList}>
                            {SERVICE_DOMAINS.map((item) => (
                                <Link key={item.title} href={item.href} className={styles.domainItem}>
                                    <div className={styles.domainText}>
                                        <span className={styles.domainNumber}>{item.number}</span>
                                        <div>
                                            <h3 className={styles.domainTitle}>{item.title}</h3>
                                            <p className={styles.domainDesc}>{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className={styles.domainVisual}>
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            fill
                                            sizes="(max-width: 900px) 100vw, 18vw"
                                            className={styles.sectionImage}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.valueSection}>
                <div className={styles.sectionShell}>
                    <div className={styles.valueHeader}>
                        <p className={styles.sectionEyebrow}>핵심 차별점</p>
                        <h2 className={styles.sectionTitle}>
                            비슷한 장비로 시작해도
                            <br />
                            결과는 남는 기준에서 갈립니다
                        </h2>
                        <p className={styles.sectionDescription}>
                            TechI는 스펙보다 전환, 검증, 인수, 운영 안정화까지 이어지는 흐름을 더 중요하게
                            봅니다. 그래서 프로젝트 이후의 상태가 달라집니다.
                        </p>
                    </div>

                    <div className={styles.valueGrid}>
                        {DIFFERENTIATORS.map((item) => (
                            <article key={item.number} className={styles.valueItem}>
                                <span className={styles.valueNumber}>{item.number}</span>
                                <h3 className={styles.valueTitle}>{item.title}</h3>
                                <p className={styles.valueBody}>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.closingSection}>
                <Image
                    src="/images/server-photo-racks.jpg"
                    alt="실제 서버 운영 환경"
                    fill
                    sizes="100vw"
                    className={styles.closingBackground}
                />
                <div className={styles.closingOverlay} />

                <div className={styles.sectionShell}>
                    <div className={styles.closingLayout}>
                        <div className={styles.closingPrimary}>
                            <p className={styles.heroEyebrow}>프로젝트 검토의 시작</p>
                            <h2 className={styles.closingTitle}>
                                <span className={styles.titleLine}>프로젝트가 커질수록 필요한 건</span>
                                <span className={styles.titleLine}>더 많은 설명이 아니라</span>
                                <span className={styles.titleLine}>더 명확한 기준입니다</span>
                            </h2>
                            <p className={styles.closingBody}>
                                신규 구축이든 기존 환경 재정비든, 현재 구조와 우선순위를 먼저 정리해야 전환
                                리스크와 운영 불확실성을 줄일 수 있습니다. TechI는 구축 이후까지 운영되는
                                기준을 남기는 방향으로 프로젝트를 설계합니다.
                            </p>
                            <div className={styles.heroActions}>
                                <Link href="/service" className={styles.primaryAction}>
                                    서비스 전체 보기
                                </Link>
                                <Link href="/about" className={styles.secondaryAction}>
                                    회사 신뢰 근거 보기
                                </Link>
                            </div>
                        </div>

                        <div className={styles.closingSecondary}>
                            <p className={styles.closingKicker}>왜 TechI인가</p>
                            <ul className={styles.closingList}>
                                <li>공공 · 엔터프라이즈 기준의 고안정성 인프라 수행 경험</li>
                                <li>장기 파트너십 기반의 공급 안정성과 엔지니어링 체계</li>
                                <li>전환 계획, 검증 기준, 운영 문서까지 남기는 프로젝트 방식</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
