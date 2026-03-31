"use client";

import React, { useEffect, useState } from "react";
import { GeoJSON, MapContainer, Popup, useMap } from "react-leaflet";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";

interface LeafletMapModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialProvince: string | null;
}

const DEFAULT_CENTER: LatLngExpression = [16.0471, 108.2068];
const VIETNAM_BOUNDS: LatLngBoundsExpression = [
    [8.2, 102.0],
    [23.7, 110.8],
];

type ProvinceFeature = {
    type: "Feature";
    properties: {
        TinhThanh?: string;
        SapNhap?: string;
        Loai?: string;
        SoXa?: number;
        Dtich_km2?: number;
        DanSo_ng?: number;
        [key: string]: string | number | undefined;
    };
    geometry: {
        type: string;
        coordinates: unknown;
    };
};

type ProvinceFeatureCollection = {
    type: "FeatureCollection";
    features: ProvinceFeature[];
};

const PROVINCE_COORDS: Record<string, { center: LatLngExpression; label: string }> = {
    "Hà Nội": { center: [21.0278, 105.8342], label: "Hà Nội" },
    "TP. Hồ Chí Minh": { center: [10.8231, 106.6297], label: "TP. Hồ Chí Minh" },
    "Đà Nẵng": { center: [16.0544, 108.2022], label: "Đà Nẵng" },
    "Quảng Ninh": { center: [21.0064, 107.2925], label: "Quảng Ninh" },
    "Nghệ An": { center: [18.6796, 105.6813], label: "Nghệ An" },
    "Khánh Hòa": { center: [12.2585, 109.0526], label: "Khánh Hòa" },
    "Điện Biên": { center: [21.8042, 103.1077], label: "Điện Biên" },
    "An Giang": { center: [10.5216, 105.1259], label: "An Giang" },
    "Bắc Ninh": { center: [21.1861, 106.0763], label: "Bắc Ninh" },
    "Lạng Sơn": { center: [21.8537, 106.7615], label: "Lạng Sơn" },
    "Thanh Hóa": { center: [19.8067, 105.7852], label: "Thanh Hóa" },
    "Quảng Trị": { center: [16.7403, 107.1855], label: "Quảng Trị" },
    "Thừa Thiên Huế": { center: [16.4637, 107.5909], label: "Thừa Thiên Huế" },
    "Đồng Tháp": { center: [10.4673, 105.6360], label: "Đồng Tháp" },
    "Tây Ninh": { center: [11.3352, 106.1099], label: "Tây Ninh" },
    "Đắk Lắk": { center: [12.7100, 108.2378], label: "Đắk Lắk" },
    "Vĩnh Long": { center: [10.2537, 105.9722], label: "Vĩnh Long" },
    "Cần Thơ": { center: [10.0452, 105.7469], label: "Cần Thơ" },
    "Sơn La": { center: [21.3256, 103.9188], label: "Sơn La" },
    "Lào Cai": { center: [22.4809, 103.9755], label: "Lào Cai" },
    "Ninh Bình": { center: [20.2506, 105.9745], label: "Ninh Bình" },
    "Lai Châu": { center: [22.3964, 103.4582], label: "Lai Châu" },
    "Thái Nguyên": { center: [21.5672, 105.8252], label: "Thái Nguyên" },
    "Tuyên Quang": { center: [21.7767, 105.2280], label: "Tuyên Quang" },
    "Lâm Đồng": { center: [11.5753, 108.1429], label: "Lâm Đồng" },
    "Phú Thọ": { center: [21.2684, 105.2046], label: "Phú Thọ" },
    "Hà Tĩnh": { center: [18.3554, 105.8877], label: "Hà Tĩnh" },
    "Cao Bằng": { center: [22.6666, 106.2570], label: "Cao Bằng" },
    "Hải Phòng": { center: [20.8449, 106.6881], label: "Hải Phòng" },
    "Hưng Yên": { center: [20.6464, 106.0511], label: "Hưng Yên" },
    "Đồng Nai": { center: [11.0686, 107.1676], label: "Đồng Nai" },
    "Quảng Ngãi": { center: [15.1205, 108.7923], label: "Quảng Ngãi" },
    "Gia Lai": { center: [13.8079, 108.1094], label: "Gia Lai" },
    "Cà Mau": { center: [9.1768, 105.1524], label: "Cà Mau" },
    "Huế": { center: [16.4637, 107.5909], label: "Huế" },
};

function normalizeProvinceKey(name: string): string {
    const normalized = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    if (normalized === "thuathienhue") return "hue";
    return normalized;
}

function ViewUpdater({ center, zoom }: { center: LatLngExpression; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom, { animate: true });
    }, [center, zoom, map]);

    return null;
}

export function LeafletMapModal({ isOpen, onClose, initialProvince }: LeafletMapModalProps) {
    const [geoData, setGeoData] = useState<ProvinceFeatureCollection | null>(null);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [activeProvince, setActiveProvince] = useState<string | null>(initialProvince);

    useEffect(() => {
        setActiveProvince(initialProvince);
    }, [initialProvince]);

    useEffect(() => {
        if (!isOpen || geoData) return;

        let isCancelled = false;

        fetch("/data/vn-provinces-post-2025.geojson")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<ProvinceFeatureCollection>;
            })
            .then((data) => {
                if (!isCancelled) {
                    setGeoData(data);
                    setLoadError(null);
                }
            })
            .catch(() => {
                if (!isCancelled) {
                    setLoadError("Không thể tải dữ liệu ranh giới 34 tỉnh/thành.");
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [geoData, isOpen]);

    if (!isOpen) return null;

    const selectedKey = activeProvince ? normalizeProvinceKey(activeProvince) : null;
    const selectedFeature = geoData?.features.find((feature) => {
        const name = feature.properties?.TinhThanh;
        return name && selectedKey ? normalizeProvinceKey(name) === selectedKey : false;
    });
    const selectedName = selectedFeature?.properties?.TinhThanh ?? activeProvince;

    const selected = selectedName ? PROVINCE_COORDS[selectedName] : null;
    const center = selected?.center ?? DEFAULT_CENTER;
    const zoom = selected ? 7 : 6;

    const styleFeature = (feature: ProvinceFeature) => {
        const name = feature.properties?.TinhThanh;
        const isSelected = Boolean(name && selectedKey && normalizeProvinceKey(name) === selectedKey);

        return {
            color: isSelected ? "#BA252E" : "#9ca3af",
            weight: isSelected ? 2.2 : 1,
            fillColor: isSelected ? "#FB7104" : "#374151",
            fillOpacity: isSelected ? 0.45 : 0.2,
        };
    };

    const handleEachFeature = (feature: ProvinceFeature, layer: any) => {
        const name = feature.properties?.TinhThanh;
        if (!name) return;

        const loai = feature.properties?.Loai ?? "Đơn vị hành chính";
        const soXa = typeof feature.properties?.SoXa === "number" ? feature.properties.SoXa : null;

        layer.bindPopup(`<div style=\"font-weight:700\">${name}</div><div>${loai}${soXa ? ` • ${soXa} xã/phường` : ""}</div>`);
        layer.on({
            click: () => setActiveProvince(name),
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
            <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-[#111827]">Bản đồ 34 tỉnh / thành</h2>
                        <p className="text-sm text-[#6b7280]">
                            {selectedName
                                ? `Đang chọn: ${selectedName}`
                                : "Nguồn dữ liệu địa phương nội bộ (34 tỉnh/thành), không dùng tile bản đồ có tranh chấp."}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border border-[#d1d5db] px-3 py-1.5 text-sm font-semibold text-[#111827] hover:bg-[#f3f4f6]"
                    >
                        Close
                    </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#d1d5db] bg-[#f8fafc]">
                    <MapContainer
                        center={center}
                        zoom={6}
                        minZoom={5}
                        maxZoom={9}
                        maxBounds={VIETNAM_BOUNDS}
                        maxBoundsViscosity={1.0}
                        className="h-[420px] w-full"
                        scrollWheelZoom
                    >
                        <ViewUpdater center={center} zoom={zoom} />
                        {geoData && (
                            <GeoJSON data={geoData as any} style={styleFeature as any} onEachFeature={handleEachFeature as any} />
                        )}
                        {!geoData && !loadError && (
                            <Popup position={DEFAULT_CENTER}>
                                <span>Đang tải dữ liệu ranh giới...</span>
                            </Popup>
                        )}
                        {loadError && (
                            <Popup position={DEFAULT_CENTER}>
                                <span>{loadError}</span>
                            </Popup>
                        )}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
