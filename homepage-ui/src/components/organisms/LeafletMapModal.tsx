"use client";

import React from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

interface LeafletMapModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialProvince: string | null;
}

const DEFAULT_CENTER: LatLngExpression = [16.0471, 108.2068];

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
};

export function LeafletMapModal({ isOpen, onClose, initialProvince }: LeafletMapModalProps) {
    if (!isOpen) return null;

    const selected = initialProvince ? PROVINCE_COORDS[initialProvince] : null;
    const center = selected?.center ?? DEFAULT_CENTER;
    const zoom = selected ? 8 : 6;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
            <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-[#111827]">Map Viewer</h2>
                        <p className="text-sm text-[#6b7280]">
                            {initialProvince ? `Selected province: ${initialProvince}` : "Select a province to inspect details."}
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

                <div className="overflow-hidden rounded-xl border border-[#d1d5db]">
                    <MapContainer center={center} zoom={zoom} className="h-[420px] w-full" scrollWheelZoom>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {selected && (
                            <CircleMarker center={selected.center} radius={10} pathOptions={{ color: "#BA252E", fillColor: "#FB7104", fillOpacity: 0.8 }}>
                                <Popup>
                                    <div className="font-semibold">{selected.label}</div>
                                </Popup>
                            </CircleMarker>
                        )}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
