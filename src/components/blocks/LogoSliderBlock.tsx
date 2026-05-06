"use client";

import Image from "next/image";
import type { LogoSliderData } from "@/lib/content/types";
import styles from "./blocks.module.css";

export default function LogoSliderBlock({ data }: { data: LogoSliderData }) {
    const logos = [...data.logos, ...data.logos];

    return (
        <section className={styles.logoSlider}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>
            <div className={styles.logoTrack}>
                <div className={styles.logoSlide}>
                    {logos.map((logo, index) => {
                        const src = typeof logo === "string" ? logo : logo.src;
                        const alt = typeof logo === "string" ? "로고" : logo.alt;
                        const isLocalImage = src.startsWith("/");

                        return (
                            <div key={index} className={styles.logoItem}>
                                {typeof logo === "string" && !logo.startsWith("/") && !logo.startsWith("http") ? (
                                    <div className={styles.logoPlaceholder}>{logo}</div>
                                ) : isLocalImage ? (
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={132}
                                        height={42}
                                        className={styles.logoImage}
                                    />
                                ) : (
                                    <div className={styles.logoPlaceholder}>{alt}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
