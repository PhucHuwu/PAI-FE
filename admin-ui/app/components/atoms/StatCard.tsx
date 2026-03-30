import React from "react";

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  suffix?: string;
}

export function StatCard({ label, value, icon, className = "", suffix }: StatCardProps) {
  return (
    <div className={`bg-white rounded-[25px] shadow-md p-5 flex items-center gap-4 ${className}`}>
      {icon && (
        <div className="text-[#ba252e] flex-shrink-0">{icon}</div>
      )}
      <div>
        <p className="text-[14px] text-gray-700 font-medium">{label}</p>
        <p className="text-[32px] font-bold text-black leading-tight">
          {value}
          {suffix && <span className="text-[16px] font-normal text-gray-600 ml-1">{suffix}</span>}
        </p>
      </div>
    </div>
  );
}
