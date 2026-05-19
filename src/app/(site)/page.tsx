"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";

const TRUST_METRICS = [
    { value: "20년", label: "수행 경력" },
    { value: "HPE · Cisco · NetApp", label: "공식 파트너십" },
    { value: "23명 / 2거점", label: "전문 엔지니어" },
    { value: "170+ PFLOPS", label: "AI 인프라 수행" },
];

const SERVICE_CARDS = [
    { n: "01", title: "서버 인프라", sub: "설계·구축·전환", accent: "#1B5BCE", href: "/service/server", img: "/images/server-photo-install.jpg", alt: "서버 인프라 구축 현장" },
    { n: "02", title: "네트워크", sub: "경계·정책 운영", accent: "#0B6E4F", href: "/service/network", img: "/images/network-fiber-photo.jpg", alt: "네트워크 광케이블 인프라" },
    { n: "03", title: "스토리지·백업", sub: "복구 흐름 설계", accent: "#1E4A8C", href: "/service/storage-backup", img: "/images/server-photo-racks.jpg", alt: "스토리지 서버 랙 환경" },
    { n: "04", title: "컨설팅", sub: "진단·로드맵", accent: "#92410E", href: "/service/consulting", img: "/images/technical-design-review.jpg", alt: "기술 설계 검토" },
    { n: "05", title: "유지보수", sub: "SLA·헬스체크", accent: "#3D5A4A", href: "/service/maintenance", img: "/images/server-ops-photo.jpg", alt: "운영 모니터링 환경" },
];

const DIFFERENTIATORS = [
    {
        title: "구축 이후까지 운영 기준이 남는 프로젝트",
        desc: "설계서 만든다고 끝이 아닙니다. 운영팀이 인수받을 수 있는 정도여야 결과입니다.",
    },
    {
        title: "공공·엔터프라이즈 기준으로 수행됩니다",
        desc: "국방·법무·교통 등 다양한 환경에서 요구되는 안정성·보안 기준을 충족합니다.",
    },
    {
        title: "AI도 실시간 구조를 먼저 설계합니다",
        desc: "RAG 파이프라인, 고밀도 GPU 인프라, 실시간 처리 — 카탈로그가 아닌 설계로 만듭니다.",
    },
];

function HorizontalServiceCards() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const onScroll = () => {
            const cardW = 360 + 20;
            const idx = Math.round(el.scrollLeft / cardW);
            setActiveIdx(Math.min(Math.max(idx, 0), SERVICE_CARDS.length - 1));
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className={styles.serviceScrollWrap} ref={wrapRef}>
                <div className={styles.serviceTrack}>
                    {SERVICE_CARDS.map((card) => (
                        <Link
                            key={card.n}
                            href={card.href}
                            className={styles.serviceCard}
                            style={{ "--card-accent": card.accent } as React.CSSProperties}
                        >
                            <div className={styles.serviceCardPhoto}>
                                <Image
                                    src={card.img}
                                    alt={card.alt}
                                    fill
                                    sizes="360px"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className={styles.serviceCardBody}>
                                <span className={styles.serviceCardNum}>{card.n}</span>
                                <h3 className={styles.serviceCardTitle}>{card.title}</h3>
                                <p className={styles.serviceCardSub}>{card.sub}</p>
                                <span className={styles.serviceCardCta}>자세히 보기 →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.serviceProgress}>
                <span className={styles.serviceProgressLabel}>좌우 스크롤 / 드래그</span>
                <div className={styles.serviceProgressBar}>
                    <div
                        className={styles.serviceProgressFill}
                        style={{ width: `${((activeIdx + 1) / SERVICE_CARDS.length) * 100}%` }}
                    />
                </div>
                <span className={styles.serviceProgressCount}>
                    {String(activeIdx + 1).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
                </span>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <div className={styles.page}>

            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroRadial} aria-hidden="true" />
                <div className={styles.heroGrid}>
                    <div className={styles.heroCopy}>
                        <p className={styles.heroEyebrow}>서버 · 네트워크 · 데이터 보호 · 운영 지원</p>
                        <h1 className={styles.heroH1}>
                            끊임없이 흐르는<br />데이터를 위한,<br />
                            <span className={styles.heroBlue}>가장 견고한 기반.</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            데이터가 멈추지 않는 운영을 위해 서버·네트워크·스토리지를 하나의 흐름으로
                            설계합니다. 구축에서 끝나지 않고 실제 현장에서 오래 버티는 인프라 구조,
                            그게 테크아이의 기준입니다.
                        </p>
                        <div className={styles.heroActions}>
                            <Link href="/service" className={styles.heroBtnPrimary}>서비스 보기</Link>
                            <Link href="/contact" className={styles.heroBtnSecondary}>상담 문의하기 →</Link>
                        </div>
                        <div className={styles.heroMetrics}>
                            {TRUST_METRICS.map(({ value, label }) => (
                                <div key={label} className={styles.heroMetricItem}>
                                    <span className={styles.heroMetricValue}>{value}</span>
                                    <span className={styles.heroMetricLabel}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.heroPhotoWrap}>
                        <Image
                            src="/images/v2/home/hero-datacenter-corridor.jpg"
                            alt="데이터센터 서버랙 전경"
                            fill
                            priority
                            sizes="(max-width: 960px) 100vw, 42vw"
                            style={{ objectFit: "cover", borderRadius: 8 }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SIGNATURE MOMENT: 가로 스크롤 서비스 카드 ── */}
            <section className={styles.serviceSection}>
                <div className={styles.serviceSectionHead}>
                    <p className={styles.eyebrow}>현장 서비스 영역</p>
                    <h2 className={styles.serviceSectionTitle}>
                        환경에 따라 다른 서비스 축을<br />정교하게 연결합니다.
                    </h2>
                </div>
                <HorizontalServiceCards />
            </section>

            {/* ── CONTEXT / 차별점 ── */}
            <section className={styles.contextSection}>
                <div className={styles.contextHead}>
                    <p className={styles.eyebrow}>핵심 차별점</p>
                    <h2 className={styles.contextTitle}>
                        비슷한 장비로 시작해도,<br />
                        결과는{" "}
                        <em className={styles.contextItalic}>&ldquo;남는 기준&rdquo;</em>에서 갈립니다.
                    </h2>
                    <p className={styles.contextDesc}>
                        테크아이는 스펙이 인접한 환경에서 어떻게 운영 가능성이 이어지는지를 더 중요하게
                        봅니다. 그래서 프로젝트 이후에 설계가 남도록 만듭니다.
                    </p>
                </div>
                <div className={styles.contextGrid}>
                    {DIFFERENTIATORS.map((it, i) => (
                        <article key={i} className={styles.contextItem}>
                            <span className={styles.contextNum}>{String(i + 1).padStart(2, "0")}</span>
                            <h3 className={styles.contextItemTitle}>{it.title}</h3>
                            <p className={styles.contextItemDesc}>{it.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

        </div>
    );
}
