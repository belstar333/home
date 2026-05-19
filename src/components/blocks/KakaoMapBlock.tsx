"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import styles from "./blocks.module.css";
import type { KakaoMapData } from "@/lib/content/types";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function KakaoMapBlock({ data }: { data: KakaoMapData }) {
    const [active, setActive] = useState(0);
    const [sdkReady, setSdkReady] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    const renderMap = useCallback(() => {
        if (!sdkReady || !mapRef.current) return;
        const loc = data.locations[active];
        window.kakao.maps.load(() => {
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(loc.address, (result: any[], status: string) => {
                if (status !== window.kakao.maps.services.Status.OK || !mapRef.current) return;
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                const map = new window.kakao.maps.Map(mapRef.current, { center: coords, level: 3 });
                const marker = new window.kakao.maps.Marker({ position: coords, map });

                const infoWindow = new window.kakao.maps.InfoWindow({
                    content: `<div style="padding:10px 14px;font-size:13px;line-height:1.6;font-family:sans-serif;min-width:160px;max-width:200px;box-sizing:border-box;">
                        <strong style="display:block;margin-bottom:4px;">${loc.label}</strong>
                        <span style="display:block;color:#555;font-size:12px;word-break:keep-all;line-height:1.5;">${loc.address}</span>
                        <a href="https://map.kakao.com/link/to/${encodeURIComponent(loc.address)},${result[0].y},${result[0].x}"
                           target="_blank" rel="noopener noreferrer"
                           style="display:inline-block;margin-top:8px;color:#1a66ff;font-weight:600;font-size:12px;text-decoration:none;">
                            길찾기 →
                        </a>
                    </div>`,
                    removable: true,
                });

                window.kakao.maps.event.addListener(marker, "click", () => {
                    infoWindow.open(map, marker);
                });
            });
        });
    }, [active, sdkReady, data.locations]);

    useEffect(() => {
        renderMap();
    }, [renderMap]);

    const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

    return (
        <div className={styles.kakaoMap}>
            <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`}
                strategy="lazyOnload"
                onLoad={() => setSdkReady(true)}
            />
            {data.locations.length > 1 && (
                <div className={styles.kakaoMapTabs}>
                    {data.locations.map((loc, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`${styles.kakaoMapTab}${active === i ? ` ${styles.kakaoMapTabActive}` : ""}`}
                            onClick={() => setActive(i)}
                        >
                            {loc.label}
                        </button>
                    ))}
                </div>
            )}
            <div ref={mapRef} className={styles.kakaoMapCanvas} />
            <p className={styles.kakaoMapAddress}>{data.locations[active].address}</p>
        </div>
    );
}
