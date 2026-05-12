"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PAIN_SOLUTION_ITEMS = [
    {
        icon: "gpp_maybe",
        label: "중단 리스크",
        issue: "노후 장비 교체 시점이 왔지만 서비스 중단이 걱정된다면",
        response: "테크아이는 교체 작업 전에 전환 순서, 검증 기준, 롤백 조건을 먼저 설계합니다. 장비 스펙보다 전환 계획이 실제 중단 위험을 줄입니다.",
        href: "/service/server",
    },
    {
        icon: "settings_backup_restore",
        label: "복구 불확실성",
        issue: "백업은 하고 있지만 실제로 복구가 될지 확신이 없다면",
        response: "저장 여부보다 복구 여부가 기준이 되어야 합니다. 백업 구성 이후 복구 시나리오와 RTO를 실제 환경에서 검증해 체계를 잡습니다.",
        href: "/service/storage-backup",
    },
    {
        icon: "troubleshoot",
        label: "장애 가시성",
        issue: "장애가 날 때마다 원인 파악부터 대응까지 늦어진다면",
        response: "테크아이는 서버, 네트워크, 스토리지, 운영 로그를 한 흐름으로 연결해 모니터링 구조를 만듭니다. 영역을 나눠 보던 방식에서 벗어나야 대응 속도가 달라집니다.",
        href: "/service/server/ops-monitoring",
    },
    {
        icon: "fact_check",
        label: "운영 표준화",
        issue: "유지보수는 받지만 현장마다 대응 기준이 제각각이라면",
        response: "인수 문서·점검 항목·대응 기준을 프로젝트 산출물로 함께 납품합니다. 사람이 아닌 기준이 환경을 잡아야 지속됩니다.",
        href: "/service/maintenance",
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

const PARTNER_LOGOS = [
    { src: "/logos/Hewlett-Packard-Enterprise-Logo-New.png", alt: "Hewlett Packard Enterprise" },
    { src: "/logos/Cisco-logo.png", alt: "Cisco" },
    { src: "/logos/NetApp-Logos.png", alt: "NetApp" },
];

const OS_LOGOS = [
    { src: "/logos/Windows_logo_-_2012_(dark_blue).svg.png", alt: "Windows Server", label: "Windows Server" },
    { src: "/logos/Rocky_Linux_logo.svg.png", alt: "Rocky Linux", label: "Rocky Linux" },
    { src: "/logos/UbuntuCoF.svg.png", alt: "Ubuntu", label: "Ubuntu" },
];

const DIFFERENTIATORS = [
    {
        icon: "rule",
        title: "구축 이후까지 운영 기준이 남는 프로젝트를 만듭니다",
        body: "설계부터 인수까지, 담당 조직이 바로 이어받을 수 있는 운영 기준·점검 항목·검증 결과를 프로젝트와 함께 정리합니다. 담당자가 바뀌어도 환경이 흔들리지 않습니다.",
    },
    {
        icon: "security",
        title: "공공과 엔터프라이즈 기준으로 수행합니다",
        body: "국가 중요 시스템과 대형 업무 환경에서 요구되는 안정성, 보안성, 연속성을 기본 전제로 봅니다.",
    },
    {
        icon: "memory",
        title: "AI도 실사용 구조를 먼저 설계합니다",
        body: "RAG 파이프라인, 벡터 DB, GPU 클러스터 — 어떤 구성이든 실제로 운영되려면 네트워크 대역폭, 스토리지 처리량, 장애 대응 체계가 먼저 갖춰져야 합니다.",
    },
];

const TRUST_POINTS = [
    { label: "업력", value: "20년" },
    { label: "공인 파트너", value: "HPE · Cisco · NetApp" },
    { label: "전담 엔지니어", value: "23명 · 2개 거점" },
    { label: "AI 인프라 수행", value: "170+ Pflops급" },
];

export default function Home() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
    const { ref: painRef, isVisible: painVisible } = useScrollReveal();
    const { ref: proofRef, isVisible: proofVisible } = useScrollReveal();
    const { ref: domainRef, isVisible: domainVisible } = useScrollReveal();
    const { ref: valueRef, isVisible: valueVisible } = useScrollReveal();
    const { ref: closingRef, isVisible: closingVisible } = useScrollReveal(0.05);
    return (
        <div className={styles.page}>
            <section className={styles.heroSection} ref={heroRef}>
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
                        <p className={`${styles.heroEyebrow} ${styles.reveal} ${heroVisible ? styles.active : ""}`}>기업 인프라 엔지니어링</p>
                        <p className={`${styles.heroBrand} ${styles.reveal} ${heroVisible ? styles.active : ""}`}>테크아이</p>
                        <h1 className={`${styles.heroTitle} ${styles.reveal} ${styles.delay1} ${heroVisible ? styles.active : ""}`}>
                            <span className={styles.titleLine}>끊임없이 흐르는 데이터를 위한</span>
                            <span className={styles.titleLine}>
                                가장 견고한 기반,{" "}
                                <span className={styles.heroTitleAccent}>테크아이</span>
                            </span>
                        </h1>
                        <p className={`${styles.heroDescription} ${styles.reveal} ${styles.delay2} ${heroVisible ? styles.active : ""}`}>
                            데이터가 멈추지 않는 환경을 위해 서버·네트워크·스토리지를 하나의 흐름으로
                            설계합니다. 구축에서 끝나지 않고 실제 현장에서 오래 버티는 인프라 구조,
                            그게 테크아이의 기준입니다.
                        </p>
                        <div className={`${styles.heroActions} ${styles.reveal} ${styles.delay2} ${heroVisible ? styles.active : ""}`}>
                            <Link href="/service" className={styles.primaryAction}>
                                서비스 보기
                            </Link>
                            <Link href="/contact" className={styles.secondaryAction}>
                                상담 문의하기
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.heroStatBar} ${styles.reveal} ${styles.delay3} ${heroVisible ? styles.active : ""}`}>
                        {TRUST_POINTS.map((item) => (
                            <div key={item.label} className={styles.heroStatItem}>
                                <p className={styles.heroStatLabel}>{item.label}</p>
                                <p className={styles.heroStatValue}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className={styles.painSection} ref={painRef}>
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
                                있습니다. 테크아이는 현장에서 반복되는 문제를 운영 관점에서 다시 정리합니다.
                            </p>
                            <div className={`${styles.painVisual} ${styles.revealScale} ${painVisible ? styles.active : ""}`}>
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
                            {PAIN_SOLUTION_ITEMS.map((item, idx) => {
                                const delayClass = idx === 0 ? styles.delay1 : idx === 1 ? styles.delay2 : idx === 2 ? styles.delay3 : styles.delay4;
                                return (
                                <article key={item.issue} className={`${styles.painRow} ${styles.reveal} ${delayClass} ${painVisible ? styles.active : ""}`}>
                                    <div className={styles.painMeta}>
                                        <div className={styles.painLabelWrap}>
                                            <span className={`material-symbols-outlined ${styles.painIcon}`} aria-hidden="true">{item.icon}</span>
                                            <span className={styles.painLabel}>{item.label}</span>
                                        </div>
                                        <h3 className={styles.painIssue}>{item.issue}</h3>
                                    </div>
                                    <div className={styles.painResponseWrap}>
                                        <p className={styles.painResponse}>{item.response}</p>
                                        <Link href={item.href} className={styles.painLink}>
                                            관련 서비스 보기
                                            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                                        </Link>
                                    </div>
                                </article>
                            );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.proofSection} ref={proofRef}>
                <div className={styles.sectionShell}>
                    <div className={`${styles.proofHead} ${styles.reveal} ${proofVisible ? styles.active : ""}`}>
                        <p className={styles.sectionEyebrow}>기술 파트너십</p>
                        <h2 className={styles.proofTitle}>검증된 파트너와 함께 안정적인 인프라를 만듭니다</h2>
                        <p className={styles.proofBody}>
                            HPE 골드 파트너 자격으로 서버·스토리지 공급과 기술 지원에 공인된 역량을 갖추고 있습니다. Cisco, NetApp과의 파트너십을 통해 네트워크부터 데이터 보호까지 단일 체계로 제안합니다.
                        </p>
                    </div>
                    <div className={`${styles.partnerRow} ${styles.reveal} ${styles.delay1} ${proofVisible ? styles.active : ""}`}>
                        {PARTNER_LOGOS.map((logo) => (
                            <div key={logo.alt} className={styles.partnerItem}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={140}
                                    height={44}
                                    className={styles.logoImg}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.osEnvWrap} ${styles.reveal} ${styles.delay2} ${proofVisible ? styles.active : ""}`}>
                        <p className={styles.osEnvLabel}>주요 운영 환경</p>
                        <div className={styles.osRow}>
                            {OS_LOGOS.map((os) => (
                                <div key={os.alt} className={styles.osItem}>
                                    <Image
                                        src={os.src}
                                        alt={os.alt}
                                        width={140}
                                        height={44}
                                        className={styles.logoImg}
                                    />
                                    <span className={styles.osName}>{os.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.domainSection} ref={domainRef}>
                <div className={styles.sectionShell}>
                    <div className={styles.domainLayout}>
                        <div className={`${styles.domainLead} ${styles.reveal} ${domainVisible ? styles.active : ""}`}>
                            <p className={styles.sectionEyebrowDark}>전문 서비스 영역</p>
                            <h2 className={styles.sectionTitleDark}>
                                <span className={styles.titleLine}>환경에 따라 다른 서비스 축을</span>
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
                                    서버 / 네트워크 / 스토리지 / 컨설팅 / 유지보수
                                </div>
                            </div>
                        </div>

                        <div className={styles.domainList}>
                            {SERVICE_DOMAINS.map((item, idx) => {
                                const delayClass = idx === 0 ? styles.delay1 : idx === 1 ? styles.delay2 : idx === 2 ? styles.delay3 : styles.delay4;
                                return (
                                <Link key={item.title} href={item.href} className={`${styles.domainItem} ${styles.revealRight} ${delayClass} ${domainVisible ? styles.active : ""}`}>
                                    <div className={styles.domainText}>
                                        <span className={styles.domainNumber}>{item.number}</span>
                                        <div>
                                            <h3 className={styles.domainTitle}>{item.title}</h3>
                                            <p className={styles.domainDesc}>{item.desc}</p>
                                        </div>
                                    </div>
                                    <span className={`material-symbols-outlined ${styles.domainArrow}`} aria-hidden="true">arrow_forward</span>
                                </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.valueSection} ref={valueRef}>
                <div className={styles.sectionShell}>
                    <div className={`${styles.valueHeader} ${styles.reveal} ${valueVisible ? styles.active : ""}`}>
                        <p className={styles.sectionEyebrow}>핵심 차별점</p>
                        <h2 className={styles.sectionTitle}>
                            비슷한 장비로 시작해도
                            <br />
                            결과는 남는 기준에서 갈립니다
                        </h2>
                        <p className={styles.sectionDescription}>
                            테크아이는 스펙보다 전환, 검증, 인수, 운영 안정화까지 이어지는 흐름을 더 중요하게
                            봅니다. 그래서 프로젝트 이후의 상태가 달라집니다.
                        </p>
                    </div>

                    <div className={styles.valueGrid}>
                        {DIFFERENTIATORS.map((item, idx) => {
                            const delayClass = idx === 0 ? styles.delay1 : idx === 1 ? styles.delay2 : styles.delay3;
                            return (
                            <article key={item.title} className={`${styles.valueItem} ${styles.reveal} ${delayClass} ${valueVisible ? styles.active : ""}`}>
                                <span className={`material-symbols-outlined ${styles.valueIcon}`} aria-hidden="true">{item.icon}</span>
                                <h3 className={styles.valueTitle}>{item.title}</h3>
                                <p className={styles.valueBody}>{item.body}</p>
                            </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.closingSection} ref={closingRef}>
                <Image
                    src="/images/server-photo-racks.jpg"
                    alt="실제 서버 운영 환경"
                    fill
                    sizes="100vw"
                    className={styles.closingBackground}
                />
                <div className={styles.closingOverlay} />

                <div className={styles.sectionShell}>
                    <div className={`${styles.closingLayout} ${styles.revealSlow} ${closingVisible ? styles.active : ""}`}>
                        <div className={styles.closingPrimary}>
                            <p className={styles.sectionEyebrow}>프로젝트 검토의 시작</p>
                            <h2 className={styles.closingTitle}>
                                <span className={styles.titleLine}>프로젝트가 커질수록 필요한 건</span>
                                <span className={styles.titleLine}>더 많은 설명이 아니라</span>
                                <span className={styles.titleLine}>더 명확한 기준입니다</span>
                            </h2>
                            <p className={styles.closingBody}>
                                신규 구축이든 기존 환경 재정비든, 현재 구조와 우선순위를 먼저 정리해야 전환
                                리스크와 운영 불확실성을 줄일 수 있습니다. 테크아이는 구축 이후까지 운영되는
                                기준을 남기는 방향으로 프로젝트를 설계합니다.
                            </p>
                            <div className={styles.closingActions}>
                                <Link href="/contact" className={styles.primaryAction}>
                                    상담 문의하기
                                </Link>
                                <Link href="/service" className={styles.secondaryAction}>
                                    서비스 전체 보기
                                </Link>
                            </div>
                        </div>

                        <div className={styles.closingSecondary}>
                            <p className={styles.closingKicker}>왜 테크아이인가</p>
                            <ul className={styles.closingList}>
                                <li>
                                    <span className={styles.closingListLabel}>경험</span>
                                    공공 · 엔터프라이즈 기준의 고안정성 인프라 수행 실적
                                </li>
                                <li>
                                    <span className={styles.closingListLabel}>공급</span>
                                    HPE · Cisco · NetApp 파트너십 기반의 안정적 장비 공급 체계
                                </li>
                                <li>
                                    <span className={styles.closingListLabel}>문서</span>
                                    전환 계획, 검증 기준, 운영 문서까지 남기는 프로젝트 방식
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
