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
        const address = data.locations[active].address;
        window.kakao.maps.load(() => {
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(address, (result: any[], status: string) => {
                if (status !== window.kakao.maps.services.Status.OK || !mapRef.current) return;
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                const map = new window.kakao.maps.Map(mapRef.current, { center: coords, level: 3 });
                new window.kakao.maps.Marker({ position: coords, map });
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
