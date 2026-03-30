"use client";

import React from "react";

interface LeafletMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProvince: string | null;
}

export function LeafletMapModal({
  isOpen,
  onClose,
  initialProvince,
}: LeafletMapModalProps) {
  if (!isOpen) return null;

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

        <div className="flex h-[420px] items-center justify-center rounded-xl border border-dashed border-[#d1d5db] bg-[#f9fafb] text-center text-[#4b5563]">
          Interactive Leaflet map is not available in this lightweight fallback.
        </div>
      </div>
    </div>
  );
}
